# Spring Boot日志
Spring Boot使用Apache Commons日志记录进行所有内部日志记录。Spring Boot的默认配置支持使用Java Util Logging，Log4j2和Logback。 使用这些，可以配置控制台日志记录以及文件日志记录。
如果使用的是Spring Boot Starters，Logback将为日志记录提供良好的支持。 此外，Logback还提供对Common Logging，Util Logging，Log4J和SLF4J的良好支持。
日志格式默认的Spring Boot Log格式显示在下面给出的屏幕截图中。
它提供以下信息 -

提供日志日期和时间的日期和时间。日志级别显示有：INFO，ERROR或WARN。进程ID。---是一个分隔符。线程名称括在方括号[]中。记录器名称，显示源类名称。日志消息。
控制台日志输出默认日志消息将打印到控制台窗口。 默认情况下，INFO，ERROR和WARN日志消息将打印在日志文件中。如果必须启用调试级别日志，请使用以下命令在启动应用程序时添加调试标志
```shell
java jar demo.jar --debug
```
还可以将调试模式添加到application.properties 文件中，如下所示
```shell
debug = true
```
文件日志输出默认情况下，所有日志都将在控制台窗口中打印，而不是在文件中打印。 如果要在文件中打印日志，则需要在application.properties 文件中设置属性logging.file 或logging.path 。可以使用下面显示的属性指定日志文件路径。 请注意，日志文件名是spring.log。
```shell
logging.path = /var/tmp/
```
使用下面显示的属性指定自己的日志文件名 -
```shell
Shell
```
注意 - 文件将在达到10MB后自动旋转生成。

日志级别Spring Boot支持所有记录器级别，例如：TRACE，DEBUG，INFO，WARN，ERROR，FATAL，OFF。在application.properties 文件中定义Root logger，如下所示 -
```shell
logging.level.root = WARN
```
注 - Logback不支持“FATAL”级别日志。 它映射到“ERROR”级别日志。

配置LogbackLogback支持基于XML的配置来处理Spring Boot Log配置。日志配置详细信息在logback.xml文件中配置。logback.xml文件应放在classpath下。可以使用下面给出的代码在Logback.xml文件中配置ROOT级别日志 -
```shell
<?xml version = "1.0" encoding = "UTF-8"?>
    <configuration>
       <root level = "INFO">
       </root>
    </configuration>
</xml>
```

在下面给出的Logback.xml文件中配置控制台appender。
```shell
<?xml version = "1.0" encoding = "UTF-8"?>
    <configuration>
       <appender name = "STDOUT" class = "ch.qos.logback.core.ConsoleAppender"></appender>
       <root level = "INFO">
          <appender-ref ref = "STDOUT"/> 
       </root>
    </configuration>
</xml>
```
使用下面给出的代码在Logback.xml文件中配置文件appender。 请注意，需要在文件追加器中指定日志文件路径。
```shell
<?xml version = "1.0" encoding = "UTF-8"?>
    <configuration>
       <appender name = "FILE" class = "ch.qos.logback.core.FileAppender">
          <File>/var/tmp/mylog.log</File>
       </appender>   
       <root level = "INFO">
          <appender-ref ref = "FILE"/>
       </root>
    </configuration>
</xml>
```
使用下面给出的代码在logback.xml文件中定义日志模式。还使用下面给出的代码在控制台或文件日志附加程序中定义支持的日志模式集 -
<pattern>[%d{yyyy-MM-dd'T'HH:mm:ss.sss'Z'}] [%C] [%t] [%L] [%-5p] %m%n</pattern>
Shell
完整的logback.xml文件的代码如下所示。必须将其放在类路径中。
```xml
<configuration>
   <appender name = "STDOUT" class = "ch.qos.logback.core.ConsoleAppender">
      <encoder>
         <pattern>[%d{yyyy-MM-dd'T'HH:mm:ss.sss'Z'}] [%C] [%t] [%L] [%-5p] %m%n</pattern>
      </encoder>
   </appender>

   <appender name = "FILE" class = "ch.qos.logback.core.FileAppender">
      <File>/var/tmp/mylog.log</File>
      <encoder>
         <pattern>[%d{yyyy-MM-dd'T'HH:mm:ss.sss'Z'}] [%C] [%t] [%L] [%-5p] %m%n</pattern>
      </encoder>
   </appender>

   <root level = "INFO">
      <appender-ref ref = "FILE"/>
      <appender-ref ref = "STDOUT"/> 
   </root>
</configuration>
```
下面给出的代码显示了如何在Spring Boot主类文件中添加slf4j logger。
```java
@SpringBootApplication
public class DemoApplication {
    private static final Logger logger = LoggerFactory.getLogger(DemoApplication.class);
    
        public static void main(String[] args) {
        logger.info("this is a info message");
        logger.warn("this is a warn message");
        logger.error("this is a error message");
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

在控制台窗口中看到的输出显示在此处
在此处显示日志文件中显示的输出

