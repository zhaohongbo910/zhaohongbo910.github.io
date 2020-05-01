---
title: servlet  
date: 2018-01-03
permalink: /:year/:month/:day/:slug
tags:
 - servlet 
categories: 
 - Java
publish: false
---

## servlet 服务器端程序

> tomcat  jetty resion (开源软件)

servlet 的作用

+ 1 动态网页技术
+ 2 通过servlet进行处理，从而进行

```java
public class FirstServlet implements Servlet {

    // service 方法对外提供服务
    public void service(){

    }
}
```

web.xml  配置访问路径

```xml
    <servlet>
        <servlet-name>first</servlet-name>
        <servlet-class>com.FirstServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>first</servlet-name>
        <url-pattern>/f</url-pattern>
    </servlet-mapping>
```

请求的转发 forward 和重定向 redirect
