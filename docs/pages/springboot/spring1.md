# Spring Boot是什么
众所周知 Spring 应用需要进行大量的配置，各种 XML 配置和注解配置让人眼花缭乱，且极容易出错，因此 Spring 一度被称为“配置地狱”。

为了简化 Spring 应用的搭建和开发过程，Pivotal 团队在 Spring 基础上提供了一套全新的开源的框架，它就是 Spring Boot。

Spring Boot 具有 Spring 一切优秀特性，Spring 能做的事，Spring Boot 都可以做，而且使用更加简单，功能更加丰富，性能更加稳定而健壮。随着近些年来微服务技术的流行，Spring Boot 也成为了时下炙手可热的技术。

Spring Boot 提供了大量开箱即用（out-of-the-box）的依赖模块，例如 spring-boot-starter-redis、spring-boot-starter-data-mongodb 和 spring-boot-starter-data-elasticsearch 等。这些依赖模块为 Spring Boot 应用提供了大量的自动配置，使得 Spring Boot 应用只需要非常少量的配置甚至零配置，便可以运行起来，让开发人员从 Spring 的“配置地狱”中解放出来，有更多的精力专注于业务逻辑的开发。
## Spring Boot 的特点
Spring Boot 具有以下特点：

1. 独立运行的 Spring 项目
   Spring Boot 可以以 jar 包的形式独立运行，Spring Boot 项目只需通过命令“ java–jar xx.jar” 即可运行。
2. 内嵌 Servlet 容器
   Spring Boot 使用嵌入式的 Servlet 容器（例如 Tomcat、Jetty 或者 Undertow 等），应用无需打成 WAR 包 。
3. 提供 starter 简化 Maven 配置
   Spring Boot 提供了一系列的“starter”项目对象模型（POMS）来简化 Maven 配置。
4. 提供了大量的自动配置
   Spring Boot 提供了大量的默认自动配置，来简化项目的开发，开发人员也通过配置文件修改默认配置。
5. 自带应用监控
   Spring Boot 可以对正在运行的项目提供监控。
6. 无代码生成和 xml 配置
   Spring Boot 不需要任何 xml 配置即可实现 Spring 的所有配置。
