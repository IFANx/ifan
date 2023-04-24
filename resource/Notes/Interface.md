# Java的反射机制

反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。

本篇将从以下几个方面讲述反射的知识：

* calss的使用
* 方法的反射
* 构造函数的反射
* 成员变量的反射


## 一、什么是class类

在面向对象的世界里，万物皆对象。类是对象，类是java.lang.Class类的实例对象。另外class类只有java虚拟机才能new出来。任何一个类都是Class 类的实例对象。这实例对象有三种表达方式：

```java
public class User{
}

public class ClassTest{
User u=new User();
 //方式1:
 Class c1=User.class;
//方式2:
Class c2=u.getClass();
//方式3:
Class c3=Class.forName("com.forezp.User");

//可以通过类的类型创建该类的实例对象
User user=(User)c1.newInstance();
}

```


## 二、class类的动态加载

Class.forName(类的全称);该方法不仅表示了类的类型，还代表了动态加载类。编译时刻加载类是静态加载、运行时刻加载类是动态加载类。


## 三、获取方法信息

基本的数据类型，void关键字都Class 类的实例;可以通过get ame();getSimpleName()获取类的名称。

```java
Class c1=String.class;
Class c2=int.class;
Class c3=void.class;
System.out.println(c1.getName());
System.out.println(c2.getSimpleName());
```

获取类的所有方法，并打印出来：

```java
public static void printClassInfo(Object object){
        Class c=object.getClass();
        System.out.println("类的名称："+c.getName());

        /**
         * 一个成员方法就是一个method对象
         * getMethod()所有的 public方法，包括父类继承的 public
         * getDeclaredMethods()获取该类所有的方法，包括private ,但不包括继承的方法。
         */
        Method[] methods=c.getMethods();//获取方法
        //获取所以的方法，包括private ,c.getDeclaredMethods();

        for(int i=0;i<methods.length;i++){
            //得到方法的返回类型
            Class returnType=methods[i].getReturnType();
            System.out.print(returnType.getName());
            //得到方法名：
            System.out.print(methods[i].getName()+"(");

            Class[] parameterTypes=methods[i].getParameterTypes();
            for(Class class1:parameterTypes){
                System.out.print(class1.getName()+",");
            }
            System.out.println(")");
        }
    }
```

## 四、获取成员变量的信息

也可以获取类的成员变量信息

```java
public static void printFiledInfo(Object o){

        Class c=o.getClass();
        /**
         * getFileds()获取public
         * getDeclaredFields()获取所有
         */
        Field[] fileds=c.getDeclaredFields();

        for(Field f:fileds){
            //获取成员变量的类型
            Class filedType=f.getType();
            System.out.println(filedType.getName()+" "+f.getName());
        }

    }
```

## 五、获取构造函数的信息

```java
public static void printConstructInfo(Object o){
        Class c=o.getClass();

        Constructor[] constructors=c.getDeclaredConstructors();
        for (Constructor con:constructors){
            System.out.print(con.getName()+"(");

            Class[] typeParas=con.getParameterTypes();
            for (Class class1:typeParas){
                System.out.print(class1.getName()+" ,");
            }
            System.out.println(")");
        }
    }
```


## 六、方法反射的操作


获取一个方法：需要获取方法的名称和方法的参数才能决定一个方法。

方法的反射操作：method.invoke(对象，参数列表);

例子：

```java
class A{

    public void add(int a,int b){
        System.out.print(a+b);
    }

    public void toUpper(String a){
        System.out.print(a.toUpperCase());
    }
}
```

```java
public static void main(String[] args) {
        A a=new A();
        Class c=a.getClass();
        try {
            Method method=c.getMethod("add",new Class[]{int.class,int.class});
            //也可以 Method method=c.getMethod("add",int.class,int.class);
            //方法的反射操作
            method.invoke(a,10,10);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
```

运行：

> 20



## 七、Invoke方法

我们经常new 对象出来，但是new的前提是你知道你到底需要什么对象，你才能new，然而不管是代码还是现实生活都有未知性，也就是直到程序运行时受条件限制才知道什么类，什么方法。

反射解决的这个问题，运行时获取对象结构，调用方法。Method这个类就是关于反射调用方法的


大概意思就是说提供类或者接口的方法信息，就可以访问调用对应的方法。

invoke的意思上就有调用的意思，也就是说我们可以通过反射包下的Method类调用invoke方法，调用我们所提供的方法以及调用方法的参数来完成动态调用。

也就是根据你给的对象/实例，方法名，以及参数来调用。找了个“替身”来帮你调用方法。



2 invoke方法的使用
实际上invoke方法的使用，和我们常见的有所区别。

我们经常创建一个对象A，A对象里面的方法getA()方法，然后A.getA()

我们采用新的方式调用
（1）弄一个方法的“替身”（其实就是构建一个Method对象，让这个Method对象来代替你现在要用的方法）
（2）然后给替身需要的对象和参数，让替身去替你调用（像JOJO的替身替你去战斗）上面例子就是这样的意思



使用invoke方法要比别的方法多做一步，就是构建一个Method对象，这个对象替代的是现在程序要调用方法的替代品。

而且除了参数以外，invoke还会多要一个对象，因为方法调用需要对象，所以invoke要想调用的目标方法，就需要目标方法的需要的对象。

在框架中经常会会用到method.invoke()方法，用来执行某个的对象的目标方法。以前写代码用到反射时，总是获取先获取Method，然后传入对应的Class实例对象执行方法。
