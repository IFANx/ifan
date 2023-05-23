

# **Java基础**

**1、面向对象编程有哪些特征？**

**面向对象的三个基本特征是：封装、继承、多态**

- 封装

  封装最好理解了。封装是面向对象的特征之一，是对象和类概念的主要特性。封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。

- 继承

  继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。

  要实现继承，可以通过“继承”（Inheritance）和“组合”（Composition）来实现。

- 多态性

  多态性（polymorphisn）是允许你将父对象设置成为和一个或更多的他的子对象相等的技术，赋值之后，父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作。简单的说，就是一句话：允许将子类类型的指针赋值给父类类型的指针。

  实现多态，有两种方式，覆盖和重载。覆盖和重载的区别在于，覆盖在运行时决定，重载是在编译时决定。并且覆盖和重载的机制不同，例如在 Java 中，重载方法的签名必须不同于原先方法的，但对于覆盖签名必须相同。

  

**2、JDK 与 JRE 的区别是什么？**

Java 中的 JDK 和 JRE的区别是：JDK是 Java 语言的软件开发工具包，主要用于移动设备、嵌入式设备上的java应用程序。JDK是整个java开发的核心，它包含了JAVA的运行环境和JAVA工具。JRE是一个软件，由太阳微系统所研发，JRE可以让计算机系统运行Java应用程序。

JDK是 Java 语言的软件开发工具包，主要用于移动设备、嵌入式设备上的java应用程序。JDK是整个java开发的核心，它包含了JAVA的运行环境（JVM+Java系统类库）和JAVA工具。JDK(Java Development Kit) 是 Java 语言的软件开发工具包(SDK)。

Java运行环境（Java Runtime Environment，简称JRE）是一个软件，由太阳微系统所研发，JRE可以让计算机系统运行Java应用程序（Java Application）。JRE的内部有一个Java虚拟机（Java Virtual Machine，JVM）以及一些标准的类别函数库（Class Library）。



**3、Java 有哪几种基本数据类型？**

Java 中的基础数据类型有8 种，分别是：**byte, boolean, short, char， int, float, long double**。



**4、== 和 equals 比较有什么区别？**

java中的==和equals()最大的区别是：**一个是运算符，一个是方法**。 ==操作符专门用来比较变量的值是否相同，引用类型对象变量其实是一个引用，它们的值是指向对象所在的内存地址。 equals方法常用来比较对象的内容是否相同，equals()方法存在于Object类中。



**5、public,private,protected,默认的区别？**

**public**：公共的，任何地方都可以访问，包括其他包中的类。

**private**：私有的，只有在当前类中才能访问，其他类无法访问。 

**protected**：受保护的，只有在当前类和其子类中才能访问，其他类无法访问。



**6、this 和 super 有什么区别？**

super 指代的是父类，是用来访问父类的;而this 指代的是当前类。



**7、short s1 = 1; s1 += 1;有错吗？**

无错



**8、short s1 = 1; s1 = s1 + 1;有错吗？**

有错，强制类型转换，short到int的类型提升



**9、float n = 1.8 有错吗？**

![image-20230522184946328](http://8.130.25.175:8080/img/image-20230522184946328.png)

**10、i++ 和 ++i 的区别？**

i++表示先引用i变量的数值然后再对i进行加1的操作，而++i是先对i变量进行加1的操作，然后再引用i变量的数值。



**11、while 和 do while 有啥区别？**

while与do while最大的区别便是**while会先判断再执行语句，而do while便是先do（执行）再判断**，也就是说do while不管条件是否成立，都会先执行一次。 而while则先判断是否成立，若不成立则退出循环，即一次也不执行。



**12、如何跳出 Java 中的循环？**

**break 用于完全结束一个循环，跳出循环体**。 不管是哪种循环，一旦在循环体中遇到break，系统将完全结束该循环，开始执行循环之后的代码。 在Java 中，break 语句有3 种作用，分别是：在switch 语句中终止一个语句序列、使用break 语句直接强行退出循环和使用break 语句实现goto 的功能。



**13、如何跳出 Java 中的多层嵌套循环？**

在java中，使用break可以跳出循环，默认情况下是跳出最里层的循环，假如我们要跳出多层循环怎么办呢，Java替我们已经做好了这一点，就是**用循环标签：即是对某个循环定义一个名字，然后在break 后面加上这个名字，当符合break 条件时，程序就会跳到规定的循环那**

```java
public static void main(String[] args){
		lableB:
		for(int i=0;i<3;i++){
			lableA:
			for(int j=0;j<3;j++){
				System.out.println(j);
				if(j==1){
					break lableB;
				}
			}
		}		
		System.out.println("over!");
	}
```



**14、& 和 && 的区别？**

位运算符和逻辑运算符的区别



**15、2 * 8 最有效率的计算方法是什么？**

左移三位（位运算）



**16、数组有没有 length 方法？String 呢？**

String有没有length(）方法？ **数组是没有length（）这个方法的**，有length这个属性，可以计算数组的长度String是有length（）这个方法的，用来计算字符串的长度。



**17、怎么理解值传递和引用传递？**

**值传递：是指在调用函数时，将实际参数复制一份传递给函数，这样在函数中修改参数时，不会影响到实际参数**。 其实，就是在说值传递时，只会改变形参，不会改变实参。 引用传递：是指在调用函数时，将实际参数的地址传递给函数，这样在函数中对参数的修改，将影响到实际参数。



**18、Java 到底是值传递还是引用传递？**

**是值传递**。 Java 编程语言只有值传递参数。 当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。 对象的内容可以在被调用的方法中改变，但对象的引用是永远不会改变的。



**19、一个 ".java" 源文件的类有什么限制？**

一个“.java”源文件里面可以包含多个类，但是**只允许有一个public类，并且类名必须和文件名一致**。 每个编译单元只能有一个public 类。 这么做的意思是，每个编译单元只能有一个公开的接口，而这个接口就由其public 类来表示。

```JAVA
public class Test {
    
}

class ee{

}
//这个是可以的
```



```java
public class Test {
    
}

class ee{ //ee有任何类权限修饰符都是错的（无论public，protected，private）

}
```

**20、Java 中的注释有哪些写法？**

**21、static 关键字有什么用？**

static表示静态，**常用来修饰成员变量、成员方法、代码块和内部类**，存放在方法区，作用在于创建独立于对象存在的域变量或方法，当类被加载时，被static修饰的变量或方法就可以通过类名进行访问，当创建多个对象时,被static修饰的变量/方法不会因此建立多个数据。



**22、static 变量和普通变量的区别？**

**静态变量属于类的变量，普通变量属于对象的变量**。 静态变量存储在方法区（JDK7以上，静态变量存储在其对应的Class对象中，Class对象和其他普通对象一样存储在堆中），普通变量存储在堆中。 静态变量随着类的加载而加载，随着类的消失而消失。



**23、static 可以修饰局部变量么？**

局部变量的作用范围为定义该局部变量的代码块或函数范围内有效，局部变量的生命周期随着函数的调用而创建，并且随着函数调用结束而销毁。static修饰的局部变量的作用域并不会改变，只是生命周期会随着整个程序运行结束而结束。

局部变量和静态局部变量的区别：使用static修饰局部变量的方法：在局部变量前面加static关键字，例如：static int a; 经过static修饰的局部变量称为静态局部变量，未经static修饰的局部变量称为动态局部变量。局部变量初始化：未经初始化的静态局部变量编译器会自动初始化为0，而未经初始化的动态局部变量编译器会自动初始化为随机值。



**24、final 关键字有哪些用法？**

 (1)修饰类：表示该类不能被继承； (2)修饰方法：表示方法不能被重写(用final修饰的父类的方法，在子类中直接找不到override)； (3)修饰变量：表示变量只能一次赋值以后值不能被修改（常量）。

![image-20230522192255180](http://8.130.25.175:8080/img/image-20230522192255180.png)

![image-20230522192543936](http://8.130.25.175:8080/img/image-20230522192543936.png)

**25、final、finally、finalize 有什么区别？**

**final**用于声明属性、方法和类，分别表示属性不可变，方法不可覆盖，类不可以继承；

 **finally**是异常处理语句结构的一部分，表示无论是否发生异常总是要执行； 

**finalize**是Object类中的一个方法，在垃圾回收器执行的时候会调用被回收对象的此方法，供垃圾收集时的其他资源回收。



**26、void 和 Void 有什么区别？**

void 关键字表示函数没有返回结果，是 java 中的一个关键字。java.lang.Void 是一种类型，例如给 Void 引用赋值 null 的代码为 `Void nil = null;`

通过 Void 类的源代码可以看到，Void 类型不可以继承与实例化。

```java
//final修饰class，class不可被继承
public final class Void {
    /**
     * The {@code Class} object representing the pseudo-type corresponding to
     * the keyword {@code void}.
     */
    @SuppressWarnings("unchecked")
    public static final Class<Void> TYPE = (Class<Void>) Class.getPrimitiveClass("void");

    /*
     * The Void class cannot be instantiated.
     */
  //Void类不可实例化
    private Void() {}
}
```



**27、为什么 byte 取值范围为 -128～127？**

byte 8个字节-128-127



**28、char 类型可以存储中文汉字吗？**

char型变量是用来存储Unicode编码的字符的，unicode编码字符集中包含了汉字，所以，**char型变量中当然可以存储汉字啦**。



**29、重载和重写有什么区别？**

(1)方法**重载**是一个类中定义了多个方法名相同,而他们的参数的数量不同或数量相同而类型和次序不同,则称为方法的**重载**(Overloading)。

 (2)方法**重写**是在子类存在方法与父类的方法的名字相同,而且参数的个数与类型一样,返回值也一样的方法,就称为**重写**(Overriding)。



**30、构造器可以被重写和重载吗？**

Constructor(构造器)不能被继承，所以**不能被override(重写)，但是可以被overloading(重载)**。

子类不能继承父类的构造方法但是可以使用super()调用父类的构造方法（构造器）



**31、main 方法可以被重写和重载吗？**

java中，main方法**可以被重载**，可以被调用，可以被继承，可以被重写。

重载：

![image-20230522195053921](http://8.130.25.175:8080/img/image-20230522195053921.png)

继承以及重写：

![image-20230522195208225](http://8.130.25.175:8080/img/image-20230522195208225.png)



**32、私有方法能被重载或者重写吗？**

**不可以**。 private方法是对象的内部方法，只能在当前类内部使用。 在Java中，private方法不能被重写，因为它不能被继承，也不能从子类访问，因此不存在重写的必要。

静态私有方法也只能在本class中使用，其他class不具有访问权限

![image-20230522195407017](http://8.130.25.175:8080/img/image-20230522195407017.png)

**33、Java 中的断言（assert）是什么？**

断言（Assertion）是**一种调试程序的方式**。 在Java中，使用 assert 关键字来实现断言。 语句 assert x >= 0; 即为断言，断言条件 x >= 0 预期为 true 。 如果计算结果为 false ，则断言失败，抛出 AssertionError 。

**34、Java 异常有哪些分类？**

- 检查性异常：最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。 ...

- 运行时异常： 运行时异常是可能被程序员避免的异常。 ...

- 错误： 错误不是异常，而是脱离程序员控制的问题。

  

**35、Error 和 Exception 有什么区别？**

**Exception** 是程序正常运行中，可以预料的意外情况，可能并且应该被捕获，进行相应处理。 **Error** 是指在正常情况下，不大可能出现的情况，绝大部分的**Error** 都会导致程序（比如JVM 自身）处于非正常的、不可恢复状态。



**36、Java 中常见的异常有哪些？**

ClassCastExceprion（类型转换异常）

ArithmeticException（算术运算异常）

IndexOutOfBoundsExcption（下标越界异常）

NullPointerException（空指针异常）

SQLException

ClassNotFoundException（类找不到异常）

IOException

EOFException、FileNotFoundException



**37、Java 中常见的运行时异常有哪些？**

ArithmeticException（算术异常）
ClassCastException （类转换异常）
IllegalArgumentException （非法参数异常）
IndexOutOfBoundsException （下标越界异常）
NullPointerException （空指针异常）
SecurityException （安全异常）

**38、运行时异常与受检查异常有什么区别？**

运行时异常与受检异常有何异同？ **异常表示程序运行过程中可能出现的非正常状态，运行时异常表示虚拟机的通常操作中可能遇到的异常**，是一种常见运行错误，只要程序设计得没有问题通常就不会发生。 受检异常跟程序运行的上下文环境有关，即使程序设计无误，仍然可能因使用的问题而引发。



**39、什么时候会发生空指针异常？**

空指针异常属于运行时的异常。 **当Java尝试去调用真实对象上的任何方法时，如果在运行时中，该对象调用的是空引用(Null Reference)，那么就会抛出异常**

![image-20230522200231616](http://8.130.25.175:8080/img/image-20230522200231616.png)

**40、你知道有哪些避免空指针的方法？**

1. 使用之前一定要初始化，或检查是否初始化；

2. 尽量**避免**在函数中返回NULL, 或给出详细的注释；

3. 外部传值，除非**有**明细的说明，否则，一定要判断是否为NULL。

   

**41、throw 和 throws 的区别？**

**throw语句用在方法体内，表示抛出异常，由方法体内的语句处理。** **throws语句用在方法声明后面，表示再抛出异常，由该方法的调用者来处理**。 throws主要是声明这个方法会抛出这种类型的异常，使它的调用者知道要捕获这个异常。 throw是具体向外抛异常的动作，所以它是抛出一个异常实例。



**42、try-catch-finally 中哪个部分可以省略？**

try-catch-finally 其中**catch 和finally 都可以被省略，但是不能同时省略**，也就是说有try 的时候，必须后面跟一个catch 或者finally。



**43、try 里面 return，finally还会执行吗？**

try{}里面有return,finally里的代码会不会执行,什么时候被执行? 给出答案:**会执行,在方法返回给调用者前执行**,因为如果存在finally代码块,try中的return语句不会立马返回给调用者,而是记录下返回值待



**44、int 和 Integer 有什么区别？**

**int 是基本数据类型，int 变量存储的是数值。** **Integer 是引用类型，实际是一个对象，Integer 存储的是引用对象的地址**。 2. 因为new 生成的是两个对象，其内存地址不同。



**45、什么是包装类型？有什么用？**

Java中的8种基本数据类型都有对应的对象类型，但是既然有了基本数据类型，包装类型有什么作用呢？它们有什么区别呢？

答案是包装类型(基本数据类型对应的类)的出现是为了方便对基本类型进行操作。包装类型可以解决一些基本类型解决不了的问题，如下：

1.集合不允许存放基本类型数据，只能存放引用类型数据，比如包装类型。以List为例,大家都知道一个动态数组的add(Object o)方法只能接受一个引用类型。

2.基本类型和包装类之间可以相互转换，又叫**自动装箱与自动拆箱**。这个特性让我们在编码的时候能够更注重于业务的开发，而不是每转换一次就需要写一堆转换代码。

3.通过包装类型可以实现8种基本数据类型+String类型 之间可以相互转换，如

```java
 int num = Integer.parseInt("1");
```

4.有时候一个函数需要传递一个Object变量 而你想传递int类型的进去显然不行，这就要用到包装类。

**46、什么是自动装厢、拆厢？**

自动装箱就是Java自动将原始类型值转换成对应的对象，比如将int的变量转换成Integer对象，这个过程叫做装箱，反之将Integer对象转换成int类型值，这个过程叫做拆箱。因为这里的装箱和拆箱是自动进行的非人为转换，所以就称作为自动装箱和拆箱。原始类型byte, short, char, int, long, float, double 和 boolean 对应的封装类为Byte, Short, Character, Integer, Long, Float, Double, Boolean。



**47、你怎么理解 Java 中的强制类型转换？**

显式转换（强制类型转换）:

尽管自动类型转换是很有帮助的，但并不能满足所有的编程需要。例如，如果你需要将 double 型的值赋给一个 int 型的变量，你将怎么办？

这种转换不会自动进行，因为 double 型的变化范围比 int 型的要小。这种转换有使成为“缩小转换”，因为你肯定要将源数据类型的值变小才能适合目标数据类型。

所以当两种数据类型不兼容，或目标类型的取值范围小于源类型时，自动转换将无法进行，这时就需要进行强制类型转换.



**48、你怎么理解 Java 中的自动类型转换？**

隐式转换（自动类型转换）:

如果以下 2 个条件都满足，那么将一种类型的数据赋给另外一种类型变量的时，将执行自动类型转换（automatic type conversion）。

- 两种数据类型彼此兼容

- 目标类型的取值范围大于源数据类型（低级类型数据转换成高级类型数据）

- 数值型数据的转换：byte→short→int→long→float→double。

- 字符型转换为整型：char→int。

  

**49、你怎么理解 Java 中的类型提升？**

所谓类型提升就是指在多种不同数据类型的表达式中，类型会自动向范围表示大的值的数据类型提升。

```java
long count = 100000000;

int price = 1999;

long totalPrice = price * count;

//price 为 int 型，count 为 long 型，运算结果为 long 型，运算结果正常，没有出现溢出的情况。
```

**50、switch 是否能用在 long 上？**

在switch（expr）中，expr只能是一个整数表达式或者是枚举常量，整数表达式可以是int基本类型也可以是Integer包装类型，由于byte，short，char都可以隐含的转为int，所以这些类型以及这些类型的包装类型都是可以的，而long，string都不符合switch的语法规则并且都不能隐含的转为int,所以是不能作用于switch语句。

![image-20230522201735248](http://8.130.25.175:8080/img/image-20230522201735248.png)

**51、switch 是否能用在 String 上？**

如上，不能



**52、switch case 支持哪几种数据类型？**

Incompatible types. Found: 'long', required: 'char, byte, short, int, Character, Byte, Short, Integer, String, or an enum'



**53、String 属于基础的数据类型吗？**

**String 不属于基础类型**，基础类型有8 种：byte、boolean、char、short、int、float、long、double，而String 属于对象。



**54、String 类的常用方法都有那些？**

- 求字符串长度 ...

- 求字符串某一位置字符 ...

- 提取子串用String类的substring方法可以提取字符串中的子串，该方法有两种常用参数: ...

- 字符串比较 ...

- 字符串连接 ...

- 字符串中单个字符查找 ...

- 字符串中字符的大小写转换 ...

- 字符串中字符的替换

  

**55、String 的底层实现是怎样的？**

String类的一个最大特性是不可修改性，而导致其不可修改的原因是在String内部定义了一个常量数组，因此每次对字符串的操作实际上都会另外分配分配一个新的常量数组空间（**这片空间位于jvm的静态方法区**）,String 对象内部有一个final类型的char数组，每次操作是对char数组做操作。



**56、String 是可变的吗？为什么？**

String不可变，String内部是final类型的Char数组，final类型的变量一旦初始化就不能再被修改。



**57、String 类可以被继承吗？**

final class，不能被继承

**不能**，因为String类是被final修饰的类型，final类是不能被继承的，String类是不可变类型(Immutable)类。

![image-20230522202912360](http://8.130.25.175:8080/img/image-20230522202912360.png)

**58、String 真的是不可变的吗？**

String 的源码里其实使用一个 char 数组来存储字符串的， String 之所以说不可变，就是因为这个char数组它是 private 类型，而且 String 没有对外暴露和提供修改这个 char 数组的方法，因此我们无法更改这个 char 数组的值，所以 **String 是不可变的**。

**59、String 字符串如何进行反转？**

String字符串没有reverse()方法，因此可以将字符串构建为StringBuilder或StringBuffer，**利用StringBuilder的reverse()方法来进行字符串的反转**。 StringBuilder的reverse()方法对中文也能够很好的进行反转。

**60、String 字符串如何实现编码转换？**

**61、String 有没有长度限制？是多少？**

**String 的长度是有限制的**。 编译期的限制：字符串的UTF8编码值的字节数不能超过65535，字符串的长度不能超过65534； 运行时限制：字符串的长度不能超过2^31-1，占用的内存数不能超过虚拟机能够提供的最大值。



**62、为什么不能用 + 拼接字符串？**

String的拼接在字节码中显示的是使用StringBuilder来进行的拼接，然后使用toString方法。



**63、StringBuffer 和 StringBuilder 的区别？**

StringBuffer和StringBuilder类的区别也是如此，他们的原理和操作基本相同，区别在于StringBufferd支持并发操作，线性安全的，适 合多线程中使用。StringBuilder不支持并发操作，线性不安全的，不适合多线程中使用。新引入的StringBuilder类不是线程安全的，但其在单线程中的性能比StringBuffer高。


**64、StringJoiner 有什么用？**

StringJoiner是java.util包中的一个类，**用于构造一个由分隔符分隔的字符序列（可选），并且可以从提供的前缀开始并以提供的后缀结尾**。 虽然这也可以在StringBuilder类的帮助下在每个字符串之后附加分隔符，但StringJoiner提供了简单的方法来实现，而无需编写大量代码。StringJoiner用例。

![image-20230522203920010](http://8.130.25.175:8080/img/image-20230522203920010.png)



**65、Java 所有类的祖先类是哪个？**

在Java 中，**Object 类**是所有类的根类，它是所有类的祖先，并且是所有类的父类



**66、Object 类有哪些常用的方法？**

**Object类有**九大**常用方法**，分别是getClass()、finalize()/垃圾回收对象时调用此方法/、toString()、equals()、hashcode()、wait(）、notify()、notifyAll()和clone()。



**67、普通类和抽象类有什么区别？**

（1）普通类可以去实例化调用；抽象类不能被实例化，因为它是存在于一种概念而不非具体。 

（2）普通类和抽象类都可以被继承，但是抽象类被继承后子类必须重写继承的方法，除非自类也是抽象类。

抽象类也可以定义静态方法和main方法。

![image-20230522204422031](http://8.130.25.175:8080/img/image-20230522204422031.png)

**68、静态内部类和普通内部类有什么区别？**

static：

在程序中任何变量或者代码都是在编译时由系统自动分配内存来存储的。 static修饰表示静态的，在类加载时JVM会把它放到方法区，被本类以及本类中所有实例所公用。在编译后所分配的内存会在一直存在，直到程序退出内存才会释放这个空间。如果一个被所有实例公用的方法被申明为static，那么就可以节省空间了，不用每个实例初始化的时候都被分配到内存。

内部类：

定义在一个类内部的类叫内部类，包含内部类的类称为外部类。内部类可以声明public、protected、private等访问限制，可以声明 为abstract的供其他内部类或外部类继承与扩展，或者声明为static、final的，也可以实现特定的接口。**外部类按常规的类访问方式使用内部类，唯一的差别是外部类可以访问内部类的所有方法与属性，包括私有方法与属性。**

![image-20230522204939229](http://8.130.25.175:8080/img/image-20230522204939229.png)

只有内部类才可生声明为static静态类（静态类（只有内部类才能被声明为静态类，即静态内部类））

![image-20230522205228555](http://8.130.25.175:8080/img/image-20230522205228555.png)

1.只能在内部类中定义静态类

- 2.静态内部类与外层类绑定，即使没有创建外层类的对象，它一样存在。
- 3.静态类的方法可以是静态的方法也可以是非静态的方法，静态的方法可以在外层通过静态类调用，而非静态的方法必须要创建类的对象之后才能调用。
- 4.只能引用外部类的static成员变量（也就是类变量）。
- 5.如果一个内部类不是被定义成静态内部类，那么在定义成员变量或者成员方法的时候，是不能够被定义成静态的。

URL https://juejin.cn/post/6844903791863529480



**69、静态方法可以直接调用非静态方法吗？**

**静态方法不能调用非静态方法**，因为调用非静态方法要实例化对象。 调用静态方法直接用"类名. 静态方法名"，而非静态方法的调用格式是"对象.方法“



**70、静态变量和实例变量有什么区别？**

(1)**实例变量**属于某个对象的属性，必须创建了**实例**对象，其中的**实例变量**才会被分配空间，才能使用这个**实例变量**。 (2)**静态变量**不属于某个**实例**对象，而是属于类，所以也称为类**变量**，只要程序加载了类的字节码，不用创建任何**实例**对象，**静态变量**就会被分配空间，**静态变量**就可以被使用了。



**71、内部类可以访问其外部类的成员吗？**

**内部类可以访问它外部类的成员**，但是内部类的成员（如成员变量或者成员方法）只有在内部类的范围之内是可知的，不能够被外部类直接引用。 如现在在外部类中定义了一个变量i，在内部类中定义了另一个变量ii.此时在成员内部类中，可以直接引用这个外部类中的变量i，也可以对其直接进行赋值，如i=5等等。

**(总结而言，内部内可以直接使用外部类的变量和方法（包括所有权限，private的也可以）)**



**72、接口和抽象类有什么区别？**

抽象类与接口的区别

- 最重要的区别是，接口的方法不可以有实现，并且是绝对的抽象方法。抽象类可以有实例方法用来实现默认行为。

- 接口中的变量申明默认是final, 而抽象类中变量申明可以是非final。

- 接口中的成员默认是public修饰，而抽象类中成员可以是private, protected等等。

- 接口通过关键字implements被其他类实现，而抽象类则是通过extends关键字被其他类扩展.

- 接口可以扩展（extends）另外一个/或多個接口，抽象类可以扩展（extends）另一个Java类并(或)实现（implements）多个Java接口.

- Java类可以实现多个接口但是只能扩展一个抽象类.

- 接口是绝对抽象而且无法实例化，抽象类也无法实例化但是如果类中有main()方法是可以被调用的。

- 与抽象类相比，接口更慢，因为它需要额外的间接寻址。

  接口中的 变量默认为final类型

![image-20230522210657140](http://8.130.25.175:8080/img/image-20230522210657140.png)

**何时用抽象类何时用接口**

接口用来定义契约行为，也可作为两个系统间的契约进行交互。而抽象类主要用来为子类定义默认行为，也就是说所有的继承子类都需要运行相同的功能。

**何时使用抽象类**

​	如果我们使用继承概念，那么抽象类是个不错的选择。因为它为派生类提供了一个通用基类实现。

- 当定义非public成员时，抽象类也是不错的选择，而接口内，所有的方法都必须是public的

- 在未来需要添加新方法时，选择抽象类更为合适。因为当我们在接口内添加新的方法时，所有实现该接口的类都需要添加新的方法

- 如果想创建多版本的组件，那么使用抽象类。抽象类提供一个简单且方便的方式来版本转换我们的组件。通过更新基类，所有继承子类都自动被更新为新的。另一方面，若使用接口则一旦创建则无法修改。如果我们需要新版本的接口只能创建一个全新的接口。

- 抽象类具有更佳的向后兼容性，我们可以添加新的行为而不影响原有代码，但是如果调用方使用的是接口，我们则无法修改它。

- 如果想为组件的所有实现中提供公共的且已实现的功能，那么使用抽象类，它允许我们部分实现类。而接口不为任何成员提供任何实现。

  

- **何时使用接口**
  如果我们实现的功能是对迥然不同的对象都很有用，那么使用接口。抽象类主要用作紧密相关的对象之间，然而在给非相关的类提供通用方法时，接口是更好的选择。
- 在我们认为API在短期内不会修改时，接口是更好的选择。

- 当我们有一些相似的多重继承时考虑使用接口，因为我们可以实现多重接口。

- 如果我们设计小巧而简单的功能时使用接口，如果我们设计庞大的功能单元，使用抽象类。
  

**73、接口是否可以继承接口？**

**接口可以继承接口**，而且支持多重继承。 抽象类可以实现(implements)接口，抽象类可继承具体类也可以继承抽象类。



**74、接口里面可以写方法实现吗？**

接口中则**不能有实现方法**。



**75、抽象类必须要有抽象方法吗？**

**抽象类不必须有抽象方法，但如果一个类包含抽象方法，则该类必须是抽象类**。 抽象类不能用final修饰，因为抽象类必须被继承，而被final修饰的类不能被继承。



**76、抽象类能使用 final 修饰吗？**

不能



**77、抽象类是否可以继承具体类？**

可以



**78、抽象类是否可以实现接口？**

可以，例子：继承接口且实现接口方法

![image-20230522211458697](http://8.130.25.175:8080/img/image-20230522211458697.png)

**79、怎么查看一个 Java 类的字节码？**

通过 javac 和 javap 查看：**先通过 javac 将 .java 文件编译成 .class 字节码文件，然后通过 javap -verbose 分析字节码**。 这样你就能看到你的字节码信息了。

通过以上步骤查看的java字节码

![image-20230522211752728](http://8.130.25.175:8080/img/image-20230522211752728.png)

**80、Java 中的 UUID 是什么?**

**81、Java 类初始化顺序是怎样的？**

- 子类的静态变量和静态初始化块的初始化是在父类的变量、初始化块和构造器初始化之前就完成了；
- 静态变量、静态初始化块顺序取决于它们在类中出现的先后顺序
- 变量、初始化块初始化顺序取决于它们在类中出现的先后顺序

**82、为什么成员变量命名不建议用 isXXX？**

**83、hashCode 有什么用？**

（1）HashCode的存在主要是用于查找的快捷性，如Hashtable，HashMap等，HashCode经常用于确定对象的存储地址；

（2）如果两个对象相同， equals方法一定返回true，并且这两个对象的HashCode一定相同；

（3）两个对象的HashCode相同，并不一定表示两个对象就相同，即equals()不一定为true，只能说明这两个对象在一个散列存储结构中。

（4）如果对象的equals方法被重写，那么对象的HashCode也尽量重写。

set,map之类的add先比较hashcode，再比较equles方法



**84、hashCode 和 identityHashCode 的区别？**

hashCode是即对象的哈希码值，代表了该对象在内存中的存储位置。 **hashCode方法可以被重写并返回重写后的值，identityHashCode会返回对象的hash值而不管对象是否重写了hashCode方法**。



**85、什么是 hash 冲突？**

Hash冲突就是，不同的数据元素关键字K，计算出的哈希值相同，此时两个或多个数据，对应同一个存储地址，即产生冲突。

开放定址法
再哈希法
链地址法
建立公共溢出区

**86、equals 和 hashCode 的区别和联系？**

equals相同hashcode一定相同，hashcode相同不一定equals

**87、两个对象 equals 相等， hashCode 也相等么？**

**88、两个对象 hashCode 相等，equals 也相等么？**

**89、为什么重写 equals 就要重写 hashCode 方法？**

```java
Student s1=new Student("小明",18);
Student s2=new Student("小明",18);
```
此时s1.equals(s2)一定返回true

假如只重写equals而不重写hashcode，那么Student类的hashcode方法就是Object默认的hashcode方法，由于默认的hashcode方法是根据对象的内存地址经哈希算法得来的，显然此时s1!=s2,故两者的hashcode不一定相等。
然而重写了equals，且s1.equals(s2)返回true，根据hashcode的规则，两个对象相等其哈希值一定相等，所以矛盾就产生了，因此重写equals一定要重写hashcode，而且从Student类重写后的hashcode方法中可以看出，重写后返回的新的哈希值与Student的两个属性有关。

类的继承自Object类的对象均可被重写。

![image-20230522213835724](http://8.130.25.175:8080/img/image-20230522213835724.png)

**90、Java 常用的元注解有哪些？**

元注解是负责对其它注解进行说明的注解，自定义注解时可以使用元注解。[Java](http://c.biancheng.net/java/) 5 定义了 4 个注解，分别是 @Documented、@Target、@Retention 和 @Inherited。Java 8 又增加了 @Repeatable 和 @Native 两个注解。这些注解都可以在 java.lang.annotation 包中找到。

**91、Java 泛型中的 T、R、K、V、E 分别指什么？**

- **？ 表示不确定的 java 类型**
- **T (type) 表示具体的一个java类型**
- **K V (key value) 分别代表java键值中的Key Value**
- **E (element) 代表Element**

**92、Java 金额计算怎么避免精通丢失？**

**93、Java 语法糖是什么意思？**

语法糖（Syntactic Sugar），也称糖衣语法，是由英国计算机学家Peter.J.Landin 发明的一个术语，**指在计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用**。 简而言之，语法糖让程序更加简洁，有更高的可读性。



**94、transient 关键字有什么用？**

transient是Java语言的关键字，**用来表示一个成员变量不是该对象序列化的一部分**。 当一个对象被序列化的时候，transient型变量的值不包括在序列化的结果中。 而非transient型的变量是被包括进去的。 注意static修饰的静态变量天然就是不可序列化的。



**95、如何实现对象克隆？**

有两种方式：
实现Cloneable接口并重写Object类中的clone()方法；

实现Serializable接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆。
注意：基于序列化和反序列化实现的克隆不仅仅是深度克隆，更重要的是通过泛型限定，可以检查出要克隆的对象是否支持序列化，这项检查是编译器完成的，不是在运行时抛出异常，这种是方案明显优于使用Object类的clone方法克隆对象。让问题在编译的时候暴露出来总是优于把问题留到运行时。

java clone()方法
Object对象有个clone()方法，clone方法返回与当前对象的一个副本对象。可以通过操作副本对象而不影响当前对象：实现了对象中各个属性的复制，但它的可见范围是protected的，所以实体类使用克隆的前提是：
① 实现Cloneable接口，这是一个标记接口，自身没有方法。 
② 覆盖clone()方法，可见性提升为public。

Java 深度克隆
利用序列化实现深度克隆
把对象写到流里的过程是序列化(Serialization)过程；而把对象从流中读出来的过程则叫反序列化(Deserialization)过程。应当指出的是，写到流里的是对象的一个拷贝，而原对象仍然存在于JVM里面。
在Java语言里深度克隆一个对象，常常可以先使对象实现Serializable接口，然后把对象（实际上只是对象的拷贝）写到一个流里（序列化），再从流里读回来（反序列化），便可以重建对象。



**96、对象克隆浅拷贝和深拷贝的区别？**

深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的。
深拷贝和浅拷贝的示意图大致如下：
![3483357010-5cb447fba09cc_fix732](http://8.130.25.175:8080/img/3483357010-5cb447fba09cc_fix732.jpeg)







浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

简而言之，**浅拷贝仅仅复制所考虑的对象，而不复制它所引用的对象深拷贝是一个整个独立的对象拷贝，深拷贝会拷贝所有的属性,并拷贝属性指向的动态分配的内存**。 当对象和它所引用的对象一起拷贝时即发生深拷贝。 深拷贝相比于浅拷贝速度较慢并且花销较大。



**97、Java 反射机制有什么用？**

Java反射机制主要提供了以下功能： **在运行时判断任意一个对象所属的类；在运行时构造任意一个类的对象；在运行时判断任意一个类所具有的成员变量和方法；在运行时调用任意一个对象的方法；生成动态代理**。



**98、Java 反射机制的优缺点？**

1.增加程序的灵活性，避免将程序写死到代码里。

2.代码简洁，提高代码的复用率，外部调用方便

```java
package cn.yonyong.reflection.testdemo;
 
interface Fruit { //水果接口
　 public void eat() ; //吃水果
}
 
class Apple implements Fruit{ //定义苹果
　　public void eat() {
　　　　System.out.println("**吃苹果。"); 
　　} 
}
 
class Orange implements Fruit{
　　public void eat() {
　　　　System.out.println("**吃橘子。"); 
　　}
}
 
class Factory{
　　public static Fruit getInstance(String className){
　　　　Fruit fruit = null ;
　　　　try{
      //反射
　　　　　　fruit = (Fruit) Class.forName(className).newInstance() ;
　　　　}catch(Exception e ){
　　　　　　e.printStackTrace() ;
　　　　}
　　　　return fruit ;
　 }
}
 
public class FactoryDemo{
　　public static void main(String args[]){
　　//通过工厂类取得接口实例，传入完整的包.类名称
　　　　Fruit f = Factory.getInstance("cn.yonyong.reflection.testdemo.Apple") ;
　　　　if(f!=null){ //判断是否取得接口实例
　　　　　　f.eat() ;
　　　　}
　 }
}
```

如果不用反射，那么我们如果再加一个西瓜类，就得在Factory里判断，每添加一个类都要修改一次Factory，但用了反射只用在调用的时候传入完整的类名就可完成。结果：用反射，修改一处代码；不用反射，修改两处代码。

3.对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法

**反射的缺点**
性能问题

1.使用反射基本上是一种解释操作，用于字段和方法接入时要远慢于直接代码。因此Java反射机制主要应用在对灵活性和扩展性要求很高的系统框架上,普通程序不建议使用。

2.反射包括了一些动态类型，所以JVM无法对这些代码进行优化。因此，反射操作的效率要比那些非反射操作低得多。我们应该避免在经常被 执行的代码或对性能要求很高的程序中使用反射。

使用反射会模糊程序内部逻辑

程序人员希望在源代码中看到程序的逻辑，反射等绕过了源代码的技术，因而会带来维护问题。反射代码比相应的直接代码更复杂。

安全限制

使用反射技术要求程序必须在一个没有安全限制的环境中运行。如果一个程序必须在有安全限制的环境中运行，如Applet，那么这就是个问题了

内部暴露

由于反射允许代码执行一些在正常情况下不被允许的操作（比如访问私有的属性和方法），所以使用反射可能会导致意料之外的副作用－－代码有功能上的错误，降低可移植性。反射代码破坏了抽象性，因此当平台发生改变的时候，代码的行为就有可能也随着变化。


**99、Java 反射机制 Class 类有哪些常用方法？**

三、常用方法： **1、获取构造方法、成员方法、成员变量(公开的public)** **2、获取构造方法、成员方法、成员变量(所有的public+private)** **3、获取名称**



**100、Java 反射可以访问私有方法吗？**

```java
public class TestReflect {//测试类
 
	public void mPublic() {//访问权限最大
		System.out.println("public run");
	}
	
	protected void mProtected() {//同包下才能访问（实验对象）
		System.out.println("protected run");
	}
	
	private void mPrivate() {//只有本类中才能访问（实验对象）
		System.out.println("private run");
	}
	
}
```

```java
	public static void main(String[] args) throws Exception {
		Class<?> class1 = null;
		// 反射获取类实例，用的最多的就是jdbc获取驱动的时候就是用Class.forName("xxx");
		// 一般采用这种形式
		class1 = Class.forName("com.xxx.TestReflect");
		// class1 = new TestReflect().getClass();
		// class1 = TestReflect.class;
		
		// 类实例化，到这里就可以访问TestReflect类的public属性的成员方法和成员变量了
		TestReflect tr = (TestReflect) class1.newInstance();
		
		// 通过java.lang.Class类得到一个Method对象
		// api中java.lang.Class.getDeclaredMethod方法介绍
		// 返回一个 Method 对象，该对象反映此 Class 对象所表示的类或接口的指定已声明方法。
	    Method method = class1.getDeclaredMethod("mPrivate");
	    Method method1 = class1.getDeclaredMethod("mProtected");
	    
	    //将此对象的 accessible 标志设置为指示的布尔值。
		//值为 true 则指示反射的对象在使用时应该取消 Java 语言访问检查。
		//值为 false 则指示反射的对象应该实施 Java 语言访问检查。
	    method.setAccessible(true); 
	    method1.setAccessible(true);
	    
	    // 调用该方法
	    method.invoke(tr);
	    method1.invoke(tr);
	}
```

![image-20230523103317991](http://8.130.25.175:8080/img/image-20230523103317991.png)

从运行结果来看，反射可以方法私有方法,但是 如果私有方法没有设置 method.setAccessible(true);，私有方法无法访问。 

**101、Java 反射可以访问私有变量吗？**

```java
import java.lang.reflect.Field;
import java.lang.reflect.Method;
 
/**
 * 用Java反射机制来调用private方法
 * @author WalkingDog
 *
 */
 
public class Reflect {
	
	public static void main(String[] args) throws Exception {
		
		//直接创建对象
		Person person = new Person();
		
		Class<?> personType = person.getClass();
		
		//访问私有方法
		//getDeclaredMethod可以获取到所有方法，而getMethod只能获取public
		Method method = personType.getDeclaredMethod("say", String.class);
		
		//压制Java对访问修饰符的检查
		method.setAccessible(true);
		
		//调用方法;person为所在对象
		method.invoke(person, "Hello World !");
		
		//访问私有属性
		Field field = personType.getDeclaredField("name");
		
		field.setAccessible(true);
		
		//为属性设置值;person为所在对象
		field.set(person, "WalkingDog");
		
		System.out.println("The Value Of The Field is : " + person.getName());
		
	}
}
 
//JavaBean
class Person{
	private String name;
	
	//每个JavaBean都应该实现无参构造方法
	public Person() {}
	
	public String getName() {
		return name;
	}
 
	private void say(String message){
		System.out.println("You want to say : " + message);
	}
}
```

设置field.setAccessible(true);和method.setAccessible(true);私有方法和私有属性均可访问。

**102、Class.forName 和 ClassLoader 的区别？**

**class**.**forname**是**Java**语言中的一个方法，可以根据类的全限定名加载类，并返回类的**Class**对象。 **ClassLoader**是**Java**. 它是用来实现**Java**的懒加载机制的，在程序运行过程中，当需要某个类时，才由**ClassLoader**将该类加载到内存中。

反射定义

在运行状态中，对任意一个类，都能知道这个类中所有的属性和方法；对于任意一个对象，都能调用它的任意一个方法和属性。

反射的使用过程中要基于Class对象，那通过Class.forName()或者[ClassLoader](https://so.csdn.net/so/search?q=ClassLoader&spm=1001.2101.3001.7020).loadClass()获取Class有什么区别呢？

Class.forName()加载的类会被初始化，类中的静态成员变量会被初始化，静态代码块会被执行
通过ClassLoader.loadClass加载的类不进行解析操作，不进行解析操作就意味着初始化也不会进行，那么其类的静态参数就不会初始化，静态代码块也不会被执行。

**103、什么是宏变量和宏替换？**

宏变量：

Java中，一个用final定义的变量，不管它是类型的变量，只要用final定义了并同时指定了初始值，并且这个初始值是在编译时就被确定下来的，那么这个final变量就是一个宏变量。编译器会把程序所有用到该变量的地方直接替换成该变量的值，也就是说编译器能对宏变量进行宏替换。

```java
final String a = "hello";
final String b = a;
final String c = getHello();
```

a在编译期间就能确定下来，而b、c不行，所以a是宏变量，b、c不是。

**104、什么是逃逸分析？**

　　在计算机语言编译器优化原理中，逃逸分析是指分析指针动态范围的方法，它同编译器优化原理的指针分析和外形分析相关联。当变量（或者对象）在方法中分配后，其指针有可能被返回或者被全局引用，这样就会被其他方法或者线程所引用，这种现象称作指针（或者引用）的逃逸(Escape)。通俗点讲，如果一个对象的指针被多个方法或者线程引用时，那么我们就称这个对象的指针（或对象）的逃逸（Escape）。

**105、什么是伪共享？有什么解决方案？**

1. 什么是伪共享

CPU 缓存系统中是以缓存行（cache line）为单位存储的。目前主流的 CPU Cache 的 Cache Line 大小都是 64 Bytes。在多线程情况下，如果需要修改“共享同一个缓存行的变量”，就会无意中影响彼此的性能，这就是伪共享（False Sharing）。

2. 缓存行

由于共享变量在 CPU 缓存中的存储是以缓存行为单位，一个缓存行可以存储多个变量（存满当前缓存行的字节数）；而CPU对缓存的修改又是以缓存行为最小单位的，那么就会出现上诉的伪共享问题。

Cache Line 可以简单的理解为 CPU Cache 中的最小缓存单位，今天的 CPU 不再是按字节访问内存，而是以 64 字节为单位的块(chunk)拿取，称为一个缓存行(cache line)。当你读一个特定的内存地址，整个缓存行将从主存换入缓存，并且访问同一个缓存行内的其它值的开销是很小的。

\5. MESI 协议

多核 CPU 都有自己的专有缓存（一般为L1，L2），以及同一个 CPU 插槽之间的核共享的缓存（一般为L3）。不同核心的CPU缓存中难免会加载同样的数据，那么如何保证数据的一致性呢，就是 MESI 协议了。



在 MESI 协议中，每个 Cache line 有4个状态，可用 2 个 bit 表示，它们分别是：

M(Modified)：这行数据有效，数据被修改了，和内存中的数据不一致，数据只存在于本 Cache 中；

E(Exclusive)：这行数据有效，数据和内存中的数据一致，数据只存在于本 Cache 中；

S(Shared)：这行数据有效，数据和内存中的数据一致，数据存在于很多 Cache 中；

I(Invalid)：这行数据无效。

那么，假设有一个变量i=3（应该是包括变量i的缓存块，块大小为缓存行大小）；已经加载到多核（a,b,c）的缓存中，此时该缓存行的状态为S；此时其中的一个核a改变了变量i的值，那么在核a中的当前缓存行的状态将变为M，b,c核中的当前缓存行状态将变为I。如下图：

![](http://8.130.25.175:8080/img/6f8d40f1af7f470589e170a5cca97f7e.png)

6. 解决原理

为了避免由于 false sharing 导致 Cache Line 从 L1,L2,L3 到主存之间重复载入，我们可以使用数据填充的方式来避免，即单个数据填充满一个CacheLine。这本质是一种空间换时间的做法。

**106、Java 有没有 goto 关键字？**

Java语言有没有goto关键字? 答：goto是java语言中的保留字，**目前还没有在java中使用**。 goto关键字是C语言中的，goto语句通常与条件语句配合使用，可用来实现条件转移， 构成循环，跳出循环体等功能。

**107、Java 中有没有指针的概念？**

**java中说“指针”，实际上就是说的引用**：有个Person类，我们来创建个对象：`Person x = new Person();`。这里就含有一个变量x，没错，这个引用型变量，实质上就是指针。

**108、Java 中的 classpath 环境变量作用？**

**109、Math.round(1.5) 等于多少？**

2 四舍五入

**110、Math.round(-1.5) 等于多少？**

-1 正负数都是+0.5然后向下取整

**111、Java 8 都新增了哪些新特性？**

**java8新特性**有：1、接口的默认方法；2、Lambda 表达式；3、函数式接口；4、方法引用和构造器引用；5、Stream API；6、Date/Time API(JSR 310)；7、Optional类；**8**、Nashorn JavaScript引擎。

**112、Java 8 中的 Lambda 表达式有啥用？**

**113、Java 8 中的 Optional 类有什么用？**

Optional类是Java8新引进的一个**主要用于解决的问题是臭名昭著的空指针异常（NullPointerException|）的一个类**。 本质上，这是一个包含有可选值的包装类，这意味着Optional 类既可以含有对象也可以为空。 Optional 是Java 实现函数式编程的强劲一步，并且帮助在范式中实现。

```java
import java.util.Optional;
 
public class Java8Tester {
   public static void main(String args[]){
   
      Java8Tester java8Tester = new Java8Tester();
      Integer value1 = null;
      Integer value2 = new Integer(10);
        
      // Optional.ofNullable - 允许传递为 null 参数
      Optional<Integer> a = Optional.ofNullable(value1);
        
      // Optional.of - 如果传递的参数是 null，抛出异常 NullPointerException
      Optional<Integer> b = Optional.of(value2);
      System.out.println(java8Tester.sum(a,b));
   }
    
   public Integer sum(Optional<Integer> a, Optional<Integer> b){
    
      // Optional.isPresent - 判断值是否存在
        
      System.out.println("第一个参数值存在: " + a.isPresent());
      System.out.println("第二个参数值存在: " + b.isPresent());
        
      // Optional.orElse - 如果值存在，返回它，否则返回默认值
      Integer value1 = a.orElse(new Integer(0));
        
      //Optional.get - 获取值，值需要存在
      Integer value2 = b.get();
      return value1 + value2;
   }
}
```

结果为：

```shell
$ javac Java8Tester.java 
$ java Java8Tester
第一个参数值存在: false
第二个参数值存在: true
10
```

**114、Java 8 中的 Stream 有啥用？**

**115、Java 8 中的@Repeatable 注解有什么用？**

**116、Java 8 中的方法引用是指什么？**

Java 8引入了方法引用（method reference）作为**一种语言特性，它可以简化代码，使得代码更加易读和易于维护**。 方法引用可以被视为Lambda表达式的简写形式，可以用来替代Lambda表达式中只调用一个已有方法的情况。 总的来说该特性使得Java代码更加简洁和灵活。

**使用场景**

Java 8中支持四种不同类型的方法引用：静态方法引用、实例方法引用、构造方法引用、数组引用

下面我们分别介绍这四种方法引用的语法和使用场景。

**1、静态方法引用**

静态方法引用是指引用一个已经存在的静态方法。它的语法为：`ClassName::staticMethodName`，其中ClassName是类名，staticMethodName是静态方法名。例如：

```java
// 定义一个函数式接口
interface Converter<F, T> {
    T convert(F from);
}

// 定义一个静态方法
class Utils {
    public static int stringToInt(String str) {
        return Integer.parseInt(str);
    }
}

// 使用静态方法引用来实现一个字符串到整数的转换器
Converter<String, Integer> converter = Utils::stringToInt;
int result = converter.convert("123");
System.out.println(result); // 输出123
```

在上述示例中，我们定义了一个静态方法`stringToInt()`，它接受一个字符串作为参数，并将其转换为整数。然后使用静态方法引用来创建一个Converter函数式接口的实例。最后使用该实例将字符串"123"转换为整数并输出结果。

**2、实例方法引用**

实例方法引用是指引用一个已经存在的实例方法。它的语法为：`object::instanceMethodName`，其中object是对象名，instanceMethodName是实例方法名。例如：

```Java
// 定义一个函数式接口
interface Converter<F, T> {
    T convert(F from);
}

// 定义一个实例方法
class Utils {
    public int stringToInt(String str) {
        return Integer.parseInt(str);
    }
}

// 使用实例方法引用来实现一个字符串到整数的转换器
Utils utils = new Utils();
Converter<String, Integer> converter = utils::stringToInt;
int result = converter.convert("123");
System.out.println(result); // 输出123
```

在上述示例中，我们定义了一个实例方法`stringToInt()`，它接受一个字符串作为参数，并将其转换为整数。然后使用实例方法引用来创建一个Converter函数式接口的实例。最后使用该实例将字符串"123"转换为整数并输出结果。

**3、构造方法引用**

构造方法引用是指引用一个已经存在的构造方法。它的语法为：`ClassName::new`，其中ClassName是类名。例如：

```java
// 定义一个函数式接口 
interface Converter<F, T> { 
    T convert(F from);
}

// 定义一个实体类 
class Person { 
    private String name; 
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
// 使用构造方法引用来创建一个Person对象的工厂 
Converter<String, Person> converter = Person::new; 
Person person = converter.convert("张三,20"); 
System.out.println("name: " + person.getName() + ", age: " + person.getAge()); // 输出name: 张三, age: 20

```

在上述示例中，我们定义了一个实体类Person，它有一个带有两个参数的构造方法。然后使用构造方法引用来创建一个Converter函数式接口的实例，该实例可以将一个字符串转换为一个Person对象。最后使用该实例将字符串"张三,20"转换为Person对象并输出结果。

**4. 数组引用**

数组引用是指引用一个已经存在的数组。它的语法为：`TypeName[]::new`，其中TypeName是数组元素类型。例如：

```java
// 定义一个函数式接口 
interface ArrayFactory<T> {    
    T[] create(int size); 
} 
// 使用数组引用来创建一个字符串数组的工厂 
ArrayFactory<String> factory = String[]::new; 
String[] array = factory.create(3); 
array[0] = "Java"; 
array[1] = "is"; 
array[2] = "awesome";
System.out.println(Arrays.toString(array)); // 输出[Java, is, awesome]

```

在上述示例中，我们定义了一个函数式接口ArrayFactory，它可以创建一个指定大小的数组。然后使用数组引用来创建一个String数组的工厂。最后使用该工厂创建一个大小为3的数组并将其输出。

### **总结**

方法引用可以用于任何函数式接口的实现，尤其是在需要多次调用同一方法时，可以大大简化代码。例如，当需要对一个集合进行排序时，可以使用方法引用来指定排序依据，从而大大简化代码。另外，当需要将一个Lambda表达式传递给一个方法作为参数时，也可以使用方法引用来替代Lambda表达式，使代码更加易读。总而言之方法引用具有如下优点：

1. 代码简洁：使用方法引用可以减少代码的数量，使得代码更加简洁和易读。尤其是对于一些常用的方法，使用方法引用可以避免重复书写代码。
2. 易于维护：方法引用使得代码更加易于维护。当需要修改一个方法时，只需要修改该方法的实现，而不需要修改所有调用该方法的Lambda表达式。
3. 提高代码可读性：方法引用提高了代码的可读性。对于只调用一个已有方法的Lambda表达式，使用方法引用可以更加清晰地表达代码的意图。
4. 可以使代码更加函数式：方法引用可以使代码更加函数式。它可以将方法调用看作是一种函数，进而提高代码的函数式编程风格。

总之，方法引用是Java 8中非常有用的语言特性，它可以帮助开发人员更加简洁地编写代码，提高代码的可读性和可维护性，同时也可以使代码更加函数式。

**117、Java 8 中的函数式编程怎么用？**

函数式编程：是一种如何搭建应用程序的方法论。（lambda表达式+Stream流的思想)

**118、怎么创建一个 Stream 流？**

**119、Oracle JDK 和 OpenJDK 有啥区别？**

Oracle JDK和OpenJDK的区别是： 1. **Oracle JDK是由Oracle Corporation维护和支持的Java开发包，而OpenJDK是一个开源项目，由不同的公司和个人共同维护和开发**。 2. Oracle. 3. Oracle JDK有商业许可证，并且需要付费使用。