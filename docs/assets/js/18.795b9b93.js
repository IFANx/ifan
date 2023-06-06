(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(r,e,t){"use strict";t.r(e);var v=t(14),a=Object(v.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"springmvc基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springmvc基础"}},[r._v("#")]),r._v(" SpringMVC基础")]),r._v(" "),e("h2",{attrs:{id:"什么是mvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是mvc"}},[r._v("#")]),r._v(" 什么是MVC")]),r._v(" "),e("blockquote",[e("p",[r._v("MVC英文是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计规范。本质上也是一种解耦。")])]),r._v(" "),e("p",[r._v("用一种业务逻辑、数据、界面显示分离的方法，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。MVC被独特的发展起来用于映射传统的输入、处理和输出功能在一个逻辑的图形化用户界面的结构中。")]),r._v(" "),e("p",[e("img",{attrs:{src:"http://8.130.25.175:8080/img/spring-springframework-mvc-4.png",alt:"spring-springframework-mvc-4"}})]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("Model")]),r._v("（模型）是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据。")]),r._v(" "),e("li",[e("strong",[r._v("View")]),r._v("（视图）是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的。")]),r._v(" "),e("li",[e("strong",[r._v("Controller")]),r._v("（控制器）是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。")])]),r._v(" "),e("h2",{attrs:{id:"什么是spring-mvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是spring-mvc"}},[r._v("#")]),r._v(" 什么是Spring MVC")]),r._v(" "),e("blockquote",[e("p",[r._v("简单而言，Spring MVC是Spring在Spring Container Core和AOP等技术基础上，遵循上述Web MVC的规范推出的web开发框架，目的是为了简化Java栈的web开发。@pdai")])]),r._v(" "),e("hr"),r._v(" "),e("h2",{attrs:{id:"spring-mvc的请求流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc的请求流程"}},[r._v("#")]),r._v(" Spring MVC的请求流程")]),r._v(" "),e("blockquote",[e("p",[r._v("Spring Web MVC 框架也是一个基于请求驱动的Web 框架，并且也使用了前端控制器模式来进行设计，再根据请求映射 规则分发给相应的页面控制器（动作/处理器）进行处理。")])]),r._v(" "),e("h3",{attrs:{id:"核心架构的具体流程步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心架构的具体流程步骤"}},[r._v("#")]),r._v(" "),e("a",{attrs:{href:"#%E6%A0%B8%E5%BF%83%E6%9E%B6%E6%9E%84%E7%9A%84%E5%85%B7%E4%BD%93%E6%B5%81%E7%A8%8B%E6%AD%A5%E9%AA%A4"}},[r._v("#")]),r._v(" 核心架构的具体流程步骤")]),r._v(" "),e("blockquote",[e("p",[r._v("首先让我们整体看一下Spring Web MVC 处理请求的流程：")])]),r._v(" "),e("p",[e("img",{attrs:{src:"http://8.130.25.175:8080/img/spring-springframework-mvc-5.png",alt:"spring-springframework-mvc-4"}})]),r._v(" "),e("p",[e("strong",[r._v("核心架构的具体流程步骤")]),r._v("如下：")]),r._v(" "),e("ol",[e("li",[e("strong",[r._v("首先用户发送请求——>DispatcherServlet")]),r._v("，前端控制器收到请求后自己不进行处理，而是委托给其他的解析器进行 处理，作为统一访问点，进行全局的流程控制；")]),r._v(" "),e("li",[e("strong",[r._v("DispatcherServlet——>HandlerMapping")]),r._v("， HandlerMapping 将会把请求映射为 HandlerExecutionChain 对象（包含一 个Handler 处理器（页面控制器）对象、多个HandlerInterceptor 拦截器）对象，通过这种策略模式，很容易添加新 的映射策略；")]),r._v(" "),e("li",[e("strong",[r._v("DispatcherServlet——>HandlerAdapter")]),r._v("，HandlerAdapter 将会把处理器包装为适配器，从而支持多种类型的处理器， 即适配器设计模式的应用，从而很容易支持很多类型的处理器；")]),r._v(" "),e("li",[e("strong",[r._v("HandlerAdapter——>处理器功能处理方法的调用")]),r._v("，HandlerAdapter 将会根据适配的结果调用真正的处理器的功能处 理方法，完成功能处理；并返回一个ModelAndView 对象（包含模型数据、逻辑视图名）；")]),r._v(" "),e("li",[e("strong",[r._v("ModelAndView 的逻辑视图名——> ViewResolver")]),r._v("，ViewResolver 将把逻辑视图名解析为具体的View，通过这种策 略模式，很容易更换其他视图技术；")]),r._v(" "),e("li",[e("strong",[r._v("View——>渲染")]),r._v("，View 会根据传进来的Model 模型数据进行渲染，此处的Model 实际是一个Map 数据结构，因此 很容易支持其他视图技术；")]),r._v(" "),e("li",[e("strong",[r._v("返回控制权给DispatcherServlet")]),r._v("，由DispatcherServlet 返回响应给用户，到此一个流程结束。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);