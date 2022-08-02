(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{266:function(n,s,e){n.exports=e.p+"assets/img/img_5.1971686f.png"},267:function(n,s,e){n.exports=e.p+"assets/img/img_6.e176ca51.png"},291:function(n,s,e){"use strict";e.r(s);var t=e(13),i=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"linux-系统目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-系统目录结构"}},[n._v("#")]),n._v(" Linux 系统目录结构")]),n._v(" "),s("p",[n._v("登录系统后，在当前命令窗口下输入命令：")]),n._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("ls")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("你会看到如下图所示:\n"),s("img",{attrs:{src:e(266),alt:""}}),n._v("\n树状目录结构：\n"),s("img",{attrs:{src:e(267),alt:""}}),n._v("\n以下是对这些目录的解释：")]),n._v(" "),s("ul",[s("li",[n._v("/bin：\nbin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。")]),n._v(" "),s("li",[n._v("/boot：\n这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。")]),n._v(" "),s("li",[n._v("/dev ：\ndev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。")]),n._v(" "),s("li",[n._v("/etc：\netc 是 Etc、etera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。")]),n._v(" "),s("li",[n._v("/home：\n用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。")]),n._v(" "),s("li",[n._v("/lib：\nlib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。")]),n._v(" "),s("li",[n._v("/lost+found：\n这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")]),n._v(" "),s("li",[n._v("/media：\nlinux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。")]),n._v(" "),s("li",[n._v("/mnt：\n系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。")]),n._v(" "),s("li",[n._v("/opt：\nopt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")]),n._v(" "),s("li",[n._v("/proc：\nproc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。\n这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：")])]),n._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("echo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" /proc/sys/net/ipv4/icmp_echo_ignore_all\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);