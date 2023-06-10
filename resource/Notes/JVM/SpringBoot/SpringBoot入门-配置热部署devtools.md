# SpringBoot入门 - 配置热部署devtools工具

https://pdai.tech/md/spring/springboot/springboot-x-hello-devtool.html

在SpringBoot开发调试中，如果我每行代码的修改都需要重启启动再调试，可能比较费时间；SpringBoot团队针对此问题提供了spring-boot-devtools（简称devtools）插件，它试图提升开发调试的效率。

------

### 什么是热部署和热加载？

> 热部署和热加载是在应用正在运行的时候，自动更新（重新加载或者替换class等）应用的一种能力。（PS：spring-boot-devtools提供的方案也是要重启的，只是无需手动重启能实现自动加载而已。）

严格意义上，我们需要区分下热部署和热加载, 对于Java项目而言：

- **热部署**
  - 在服务器运行时重新部署项目
  - 它是直接重新加载整个应用，这种方式会释放内存，比热加载更加干净彻底，但同时也更费时间。
- **热加载**
  - 在在运行时重新加载class，从而升级应用。
  - 热加载的实现原理主要依赖[java的类加载机制]()，在实现方式可以概括为在容器启动的时候起一条后台线程，定时的检测类文件的时间戳变化，如果类的时间戳变掉了，则将类重新载入。
  - 对比反射机制，反射是在运行时获取类信息，通过动态的调用来改变程序行为； 热加载则是在运行时通过重新加载改变类信息，直接改变程序行为。

### devtool的原理？为何会自动重启？

> 为什么同样是重启应用，为什么不手动重启，而是建议使用spring-boot-devtools进行热部署重启？

spring-boot-devtools使用了两个类加载器ClassLoader，一个ClassLoader加载不会发生更改的类（第三方jar包），另一个ClassLoader（restart ClassLoader）加载会更改的类（自定义的类）。

后台启动一个**文件监听线程（File Watcher）**，**监测的目录中的文件发生变动时， 原来的restart ClassLoader被丢弃，将会重新加载新的restart ClassLoader**。

**因为文件变动后，第三方jar包不再重新加载，只加载自定义的类，加载的类比较少，所以重启比较快。**

**这也是为什么，同样是重启应用，为什么不手动重启，建议使用spring-boot-devtools进行热部署重启。**

在自动重启中有几点需要注意:

- **自动重启会记录日志的**

（记录在什么情况下重启的日志）

可以通过如下关闭

```yaml
spring:
  devtools:
    restart:
      log-condition-evaluation-delta: false
```

- **排除一些不需要自动重启的资源**

某些资源在更改时不一定需要触发重新启动。默认情况下，改变资源/META-INF/maven，/META-INF/resources，/resources，/static，/public，或/templates不触发重新启动，但确会触发现场重装。如果要自定义这些排除项，可以使用该spring.devtools.restart.exclude属性。例如，要仅排除/static，/public你将设置以下属性：

```yaml
spring:
  devtools:
    restart:
      exclude: "static/**,public/**"
```

如果要保留这些默认值并添加其他排除项，请改用该spring.devtools.restart.additional-exclude属性。

- **自定义重启类加载器**

重启功能是通过使用两个类加载器来实现的。对于大多数应用程序，这种方法效果很好。但是，它有时会导致类加载问题。

默认情况下，IDE 中的任何打开项目都使用“重启”类加载器加载，任何常规.jar文件都使用“基本”类加载器加载。如果你处理一个多模块项目，并且不是每个模块都导入到你的 IDE 中，你可能需要自定义一些东西。为此，你可以创建一个META-INF/spring-devtools.properties文件。

该spring-devtools.properties文件可以包含以restart.exclude和为前缀的属性restart.include。该include元素是应该被拉高到“重启”的类加载器的项目，以及exclude要素是应该向下推入“Base”类加载器的项目。该属性的值是应用于类路径的正则表达式模式，如以下示例所示：

```yaml
restart:
  exclude:
    companycommonlibs: "/mycorp-common-[\\w\\d-\\.]+\\.jar"
  include:
    projectcommon: "/mycorp-myproj-[\\w\\d-\\.]+\\.jar"
```

### devtool是否会被打包进Jar？

> devtool原则上来说应该是只在开发调试的时候使用，而在生产环境运行jar包时是不需要的，所以Spring打包会不会把它打进JAR吗？

- **默认情况下，不会被打包进JAR**

运行打包的应用程序时，开发人员工具**会自动禁用**。如果你通过 java -jar或者其他特殊的类加载器进行启动时，都会被认为是“生产环境的应用”。

### devtool为何会默认禁用缓存选项？

> Spring Boot 支持的一些库**使用缓存来提高性能**。例如，模板引擎缓存已编译的模板以避免重复解析模板文件。此外，Spring MVC 可以在提供静态资源时向响应添加 HTTP 缓存标头。

虽然缓存**在生产中非常有益，但在开发过程中可能会适得其反**，使你无法看到刚刚在应用程序中所做的更改。出于这个原因， spring-boot-devtools 默认禁用缓存选项。

比如Thymeleaf 提供了spring.thymeleaf.cache来设置模板引擎的缓存，使用spring-boot-devtools模块时是不需要手动设置这些属性的，因为spring-boot-devtools会自动进行设置。

那么会自动设置哪些配置呢？你可以在DevToolsPropertyDefaultsPostProcessor类找到对应的默认配置。

------

