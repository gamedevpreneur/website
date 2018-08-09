<ContentBlock>

<FullImage src="/img/cs4j/opening.png" title="C# guide for JavaScript developers isn't a fantasy." />

You’re not a beginner. 

Yes. C# is new to you. But you know the basics of programming. 

But most C# tutorials treat you like a newbie. They kindly explain variables, functions to you. Unfortunately, you know them by heart. 

What you need to know now is how to finish your daily tasks like declaring variables, looping arrays, handling objects with C#. 

And this guide will help you do that. 

<Note>

This blog is about making games with Unity3D. So, I’ve included this chapter. If you’re not interested in making games, skip the chapter 0. 

</Note>

</ContentBlock>
<ContentBlock color="grey">

<ChapterTitle number="0">Unity Supports JavaScript. Why should I learn C#?</ChapterTitle>

<FullImage src="/img/cs4j/why-cs.png" title="Why should I learn C#?" />

Because Unity has never supported JavaScript since its birth. 

It sounds a bit radical. Because you can find <Outlink href=”https://www.youtube.com/watch?time_continue=1&v=GPpw_ZE1LVc”>the comparison between C# and JavaScript in Unity’s official YouTube channel.</Outlink> 

I'll tell you the secret. It is not true JavaScript. 

If you cannot believe me, take a look at these lines of code. It's the example code in the YouTube video above. 

[typescript]
#pragma strict
var age: int = 5;
[/typescript]

Have you ever seen the keywords like <Keyword>#pragma</Keyword> and <Keyword>int</Keyword> in JavaScript? 

If you have experience with <Outlink href="https://www.typescriptlang.org/">TypeScript</Outlink>, you might have seen <Keyword>int</Keyword> after colon(:). But as you well know, they are not the keywords for current or future JavaScript. 

If you skim <Outlink href="https://answers.unity.com/questions/12911/what-are-the-syntax-differences-in-c-and-javascrip.html">this answer in official Unity Q&A site</Outlink>, you’ll be surprised. Unity JavaScript has a lot of weird features you couldn’t see in real JavaScript. 

I know why you have considered this option. Because you're an awesome JavaScript developer. 

But unfortunately, Unity JavaScript isn’t a real JavaScript. So, you need to learn the differences to use it properly. 

In short, it doesn’t make any difference. You need to learn something new anyway. 

Furthermore, <Outlink href="https://blogs.unity3d.com/kr/2017/08/11/unityscripts-long-ride-off-into-the-sunset/">Unity team decided to deprecate Unity JavaScript in 2017.</Outlink> So, don’t ride on a sinking ship. 

Frankly speaking, C# is not a piece of cake for JavaScript developers. They’re really different. 

But they share core concepts like variables, control flow statements and functions. All you need to do now is to learn how to get your jobs done in C# way. 

And this guide helps you do that. 

</ContentBlock>
<ContentBlock>

<ChapterTitle number="1">Your First C# Program</ChapterTitle>

</ContentBlock>
<ContentBlock>

To do front-end web programming, we basically need a text editor and a web browser. 

So, for beginners, you don’t need to install any new software. You can just use notepad.exe and Edge. 

(Yes. It’s an over-simplification. It sounds too much like 2005. In 2018 and beyond, to make a proper front-end web program, you need a bunch of tools like <Outlink href="https://www.npmjs.com/">npm</Outlink>, <Outlink href="https://babeljs.io/">babel</Outlink>, <Outlink href="https://browsersync.io/">browser-sync</Outlink>, etc.)

But to make a C# program, you must have a C# compiler. Without it, you cannot execute a single line of C# code. 

Because C# compiler creates an executable C# program. 

If you’re a command line enthusiast, you can use <Outlink href=”https://www.microsoft.com/net/learn/get-started/windows”>.NET core</Outlink>. But almost every developer uses Visual Studio. Because it’s visual (hmm...) and easier. 

Now, let’s install Visual Studio. Go to the Visual Studio website and download it. 

Don’t worry about paying tons of money to Microsoft. Visual Studio Community edition is free for personal use. You don’t need to search torrent sites like a decade ago. 

<Goto href=”https://visualstudio.microsoft.com/”>Go to Visual Studio Website</Goto>

Click Visual Studio Community. 

[Image: Visual Studio site pointing community version with origami arrow]

Before 2017, it was really inconvenient to use C# in Mac. But things have changed. MS released Visual Studio for Mac in 2017! You don’t have to overcome the painful route like in old days. 

<Goto href=”https://www.visualstudio.com/vs/mac/”>Go to Visual Studio for Mac website.</Goto>

[Image: Visual Studio Mac]

Visual Studio is big and complicated. It takes a lot of time to install it. So, let’s start it early. 

Fortunately, the installation process is really simple. 

<Step number="1">First, agree on the terms. </Step>

[Image for terms.]

<Step number="2">Then, choose a workload. In our case, we should check .NET desktop development. And click install to proceed. </Step>

[Image for Workload]

<Step number="3">Wait. </Step>

<Tip title="Did you already install VS?">

What if you already installed VS and you just want to add ‘.NET desktop development’ to your workload? 

<Step number="1">Open VS and go to Tools > Get tools and features. </Step>

[Show Menu]

<Step number="2">You can see the Workload page. Check .NET Desktop Development and press install. </Step>

[Image for Workload]

</Tip>

</ContentBlock>
<ContentBlock color="grey">

<Subhead>It's not the Hello, World you knew</Subhead>

Traditionally, we make a “Hello, World” program when we learn a new language. And C# version looks like below:

[Hello, World app]

I know this black and white console environment is not your goal. 

But I’ve chosen it because it’s simple. You don’t have to learn other complicated Visual Studio features to make console applications. 

If you want to make other applications like a web server, desktop application or games, you need to learn related libraries like ASP.NET, WPF, WinForm from other sources after finishing this article. 

As for game development, you can use <Outlink href="https://unity3d.com">Unity</Outlink>. 

Let’s create our first project. 

<Step number="1">Open VS and click File > New > Project. Or just press <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>N</Key>. </Step>

[Menu: gif image]

<Step number="2">Choose Visual C# > Console App. And name it “First”. </Step>

[New Project Window. Arrows in Visual C# and “First”]

If you want to change your save location, click “Browse” button. 

<Note title="No Console App option under Visual C#?">

What if there is no Console App option under my Visual C# option? 

It’s because you haven’t installed .NET Desktop Development workload. Please check above to learn how to add that. 

</Note>

<Step number="3">First.cs is open. Let’s type in [icode]Console.WriteLine(”Hello, World!”);[/icode] like below. Unlike JavaScript, semicolon(;) is required in C#. Don’t forget. 
</Step>

[code title="Hello, World!"]
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World");
        }
    }
}
[/code]

<Step number="4">Click the “Build” menu on the top menu. The shortcut for this menu is <Key>F6</Key>.</Step>

[Build menu]

<Step number="5">Run the program by pressing <Key>Ctrl</Key> + <Key>F5</Key>. You just made your first C# program! </Step>

[Hello, World program]

</ContentBlock>
<ContentBlock>

<Subhead>Why is it so complicated? </Subhead>

Do you remember the JavaScript version of “Hello, World”? It was really simple. 

[javascript]
alert(”Hello, World!”);
[/javascript]

In comparison, C# version is too complicated. 

It’s because methods and variables cannot live outside classes in C#. If we try to write the code like below, the compiler will show you an error. 

[code]
Console.WriteLine(”Hello, World!”);
[/code]

That’s why C# compiler generated a skeleton file that contains <InlineCode>First</InlineCode> namespace and <InlineCode>First</InlineCode> class. 

Let’s get back to our code. There are several keywords and methods: <Keyword>using</Keyword>, <Keyword>namespace</Keyword>, <Keyword>class</Keyword>, <InlineCode>Main</InlineCode> function and <Method>Console.WriteLine()</Method>. 

We can guess <Method>Console.WriteLine()</Method> shows texts on the screen. But what are all those others for? 

We’ll learn <Keyword>using</Keyword>, <Keyword>namespace</Keyword>, <InlineCode>Main</InlineCode> function here. And we’ll learn about <Keyword>class</Keyword> in detail in chapter 6. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead><Keyword>using</Keyword> in C# is <Keyword>require</Keyword> in JavaScript. Right?</Subhead>

In modern JavaScript programming, NPM became essential. (Some people prefer <Outlink href="https://yarnpkg.com">yarn</Outlink>.) 

Because there are fabulous libraries that save us tons of time. After installing them, you can import them to your project with <Keyword>require</Keyword> function like below:

[javascript]
var _ = require(’lodash’);
[/javascript]

If you’re familiar with ES2015, the code above can be written like this: 

[javascript]
import _ from ‘lodash’;
[/javascript]

In C#, using keyword seems to do the similar thing that <Keyword>require</Keyword>/<Keyword>import</Keyword> does. But they are really different. 

Because the purpose of namespace is to avoid crashes in names, not to import libraries. 

To import libraries to a project, you need to use “add reference” menu under the project name.

[Add reference menu]

And once the references are added, you can use the contents in those references without using <Keyword>using</Keyword> keyword. 

For example, <InlineCode>Console</InlineCode> class is in <InlineCode>System</InlineCode> namespace. 

Let’s comment out [icode]using System;[/icode] line with [icode]//[/icode]. Then, add System. in front of Console like below: 

[code title="Comment out using"]
//using System;

namespace First
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello, World");
        }
    }
}
[/code]

Compile and run it. It works perfectly. 

<Keyword>using</Keyword> keyword isn’t for importing data. It’s for removing messy namespace notation in front of the classes. 

Just compare the codes below:

[code]
System.Console.WriteLine(”It’s”);
System.Console.WriteLine(”Really”);
System.Console.WriteLine(”Messy!”);
[/code]

[code]
Console.WriteLine(”It”);
Console.WriteLine(”Looks”);
Console.WriteLine(”Better!”);
[/code]

Which do you think is easier to read? Isn’t it the second? 

By the way, NPM for C# is <Outlink href="https://www.nuget.org/">NuGet</Outlink>. 

</ContentBlock>
<ContentBlock>

<Subhead>What is the Main method? Why do we need it?</Subhead>

Whether you use a web browser or Node.js, they read the JavaScript code and create machine code by interpreting them. 

This style of processing code has one advantage: 

The starting point is clear. 

The compiler can start from the file you used with node command or you linked to your HTML file with &lt;script&gt; tag. 

[JavaScript execution image]

But in C#, there’s one more step from code to execution. It’s compilation. That’s what you did by pressing <Key>F6</Key> key. 

C# compiler reads your code files and creates an .exe file. And .NET framework or Mono translates the compiled code to machine code. 

This compilation step is useful because it speeds up the translation into machine code. 

[C# execution: compiler and .NET Framework]

But there is a problem: the starting point is unclear. 

In our example project, we have only one file. So, it’s simple. 

But in real-world projects, there are at least dozens to hundreds, even thousands of files. Which file is the starting point? And which method?  

To solve this problem, C# made one rule:

The starting point of C# program is the [icode]public static void Main()[/icode] method. 

That’s why we need <InlineCode>Main()</InlineCode> method. You might wonder what are <Keyword>public</Keyword> and <Keyword>static</Keyword> in front of <InlineCode>Main()</InlineCode>. We’ll learn about them in Chapter 6. 

[C# execution] 

<Note>

From now on, I won’t show you using <Keyword>namespace</Keyword>s lines, <Keyword>class</Keyword> name and [icode]public static void Main()[/icode] method except when there are meaningful changes in them. 

</Note>

</ContentBlock>

<Quiz>

<QTitle>OX Quiz. Are these statements correct?</QTitle>

<OX>
<OXQ> If you use namespaces in C#, it will load modules. </OXQ>
<OXA>X. Namespaces don’t load module, they remove namespace part in front of the names to make code concise. </OXA>
</OX>

<OX>
<OXQ> Main method is the starting point of every C# Program. </OXQ>
<OXA>O. Without Main method, you cannot execute C# programs. </OXA>
</OX>

<QuizSectionBreak />

<QTitle>Make a Program. Make a program that shows this result. </QTitle>

<Console>
Wake up, Link! 
</Console>

<Answer>

It’s simple. All we need to do is replace “Hello, World” with “Wake up, Link!”. 

[code]
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(”Wake up, Link!");
        }
    }
}
[/code]
</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="2">Variables: You're not my type</ChapterTitle>

You just finished your first C# program. But you could see that C# and JavaScript are really different. 

Unfortunately, it was just a beginning. 

To declare a variable in JavaScript, all you need to do is add <Keyword>var</Keyword> keyword in front of your variable name. 

[javascript]
var age = 12;
var name = “Lara Croft”;
[/javascript]

After ES2015, you can use keywords like <Keyword>let</Keyword> and <Keyword>const</Keyword> instead of <Keyword>var</Keyword>. But still, there are only 3 keywords and it is not required to use <Keyword>let</Keyword> or <Keyword>const</Keyword>.

In addition, you can assign any type of variable to existing variables. 

[javascript]
var age = 12;
var name = “Lara Croft”;

age = {
    mother: 45,
    father: 48,
    friend1: 11,
};
name = 61;
[/javascript]

We assigned an object to <InlineCode>age</InlineCode> which was a number. And a number is assigned to <InlineCode>name</InlineCode> which was a string. There's no problem. 

However, in C#, you need to specify the type of every variable in front of it like below. 

[code]
int age = 12;
string name = “Lara Croft”;
[/code]

The type of age is <Keyword>int</Keyword>(eger). And the type of name is <Keyword>string</Keyword>. 

After the declaration, the types of the variables are set. In other words, the types cannot be changed to other types. 

So, when you try to assign a value with a different type, the compiler will show you an error. 

[code]
int age = 12;
string name = “Lara Croft”;

age = new object(); // ERROR!
name = 1234; // ERROR!
[/code]

As you can see, types are important in C#. Actually, this statement is too weak. It should be:

**C# is all about types.**

</ContentBlock>
<ContentBlock color="grey">

<Subhead>6 Number types</Subhead>

Basically, numbers in programming languages can be grouped into 2 big categories: integers and floating point numbers. 

* Integers are numbers without fractional component like -1147, -5, 0, 2, 15.
* Floating point number has a fractional part like -2.33, 6.72, 0.99. 

In C#, there are several types for each category. 

* Integer types: <Keyword>short</Keyword>, <Keyword>int</Keyword>, <Keyword>long</Keyword>
* Real number types: <Keyword>float</Keyword>, <Keyword>double</Keyword>, <Keyword>decimal</Keyword>

Developers don’t like to overcomplicate things. But having multiple types for the same purpose seems like exactly what they hate. 

<Sectionhead>Then, why do we need all of them?</Sectionhead>

It’s because they have different sizes. It’s a trade-off between size, precision and speed. 

For example, let’s say we have to save 1 billion small integer numbers (less than 32,767). Then, we can save 2GB of storage by using 2-byte-sized <Keyword>short</Keyword> type instead of 4-byte-sized <Keyword>int</Keyword>. 

In addition, 4-byte-sized <Keyword>float</Keyword> helps you save space and time. But you can lose some insignificant numbers. If you want more accurate result, you need to use bigger-sized floating point number types like <Keyword>double</Keyword>. But you'll need more space and time. 

[[Small vs. Big size of boxes.]

</ContentBlock>
<ContentBlock color="grey">

<Sectionhead>A hidden problem behind number types</Sectionhead>

I told you that number types have different sizes. It means their sizes are not infinite. 

So, they can only represent the finite number of numbers. In other words, there are maximum and minimum numbers for integers and real numbers. Here’s the table:

[rtable name="int-min-max"]
| Type | Min | Max |
| --- | --- | --- |
| short | -32,768 | 32,767 |
| int | -2,147,483,648 | 2,147,483,647 |
| long | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 |
[/rtable]

[rtable name="real-min-max"]
| Type | Smallest | Biggest | 
| --- | --- | --- |
| float | ±1.5 × 10^-45 | ±3.4 × 10^38 |
| double | ±5.0 × 10^−324 | ±1.7 × 10^308 |
| decimal | ±1.0 x 10^-28 | ±7.9 x 10^28 | 
[/rtable]

Actually, JavaScript has this limitation, too. But teachers and books usually don’t emphasize this point. It might be because the maximum and minimum values are reasonably big enough. They’re 9,007,199,254,740,992 and -9,007,199,254,740,992. The number's a little bigger than 9 quadrillion. 

In most cases, you don’t need to handle bigger numbers than them. 

Some of you are curious why I’m emphasizing this limitation in number types. Because when you try to use a big number that the variable type cannot handle, it’ll cause overflow. 

Let’s check the example below: 

[code]
int max = 2147483647; // int maximum
int min = -2147483648;

Console.WriteLine("Max + 1 is min: {0}", max + 1 == min);
Console.WriteLine("Min - 1 is max: {0}", min - 1 == max);
[/code]

As you can see, when the number went over the limit, it circles back to the other side. That’s why <InlineCode>max + 1 == min</InlineCode> and <InlineCode>min - 1 == max</InlineCode>. 

But it doesn’t happen in JavaScript. If the value goes under the MIN, it’s MIN. If the value goes over the MAX, it’s MAX. 

[javascript]
var max = 9007199254740992; 
var min = -x; 
alert(max == max + 1); // true !
alert(min == min - 1); // also true !
[/javascript]

Overflow is just like a car mileage meter. When the number exceeds the limit, it goes back to the beginning, 0000.

[Mileage meter]

To avoid overflow, remember the approximate maximum of <Keyword>int</Keyword>: 2.1 billion. 

When you need a number bigger than 2.1 billion, don't use <Keyword>int</Keyword>. Use <Keyword>long</Keyword> instead. 

</ContentBlock>
<ContentBlock>

<Sectionhead>Raw numbers are not the same numbers</Sectionhead>

This number type size can cause problems when you’re assigning number literals. (Literals are hard-coded raw numbers like 15, 3.14, 6.72). 

Because we don’t know the type of those literals. 

Think about it. 

You cannot assign an 8-byte <Keyword>double</Keyword> literal to a 4-byte <Keyword>float</Keyword> variable without losing data. 

To solve this problem, we need to show the type of literals. And C# solved this by adding suffixes after literals. 

[code]
long a = 1234L;
float b = 3.1415f;
decimal c = 2.71828m;
[/code]

L is for <Keyword>long</Keyword>. f is for <Keyword>float</Keyword> and m is for <Keyword>decimal</Keyword>. 

L is capital. But f and m are small. Actually, it’s not a rule. You can use both F and f, M and m, L and l. But small l looks like number 1. It can be confusing. So, L is recommended. 

Then, where are the suffixes for <Keyword>short</Keyword>, <Keyword>int</Keyword> and <Keyword>double</Keyword>? 

As for <Keyword>int</Keyword> and <Keyword>double</Keyword>, they’re default literal types for integers and real numbers. So, we don’t have suffixes for them. 

And as for <Keyword>short</Keyword>, it’s a special case. <Keyword>int</Keyword> literal is automatically converted to <Keyword>short</Keyword> if it is between -32,768 and 32,767. If not, it’s a compile error. 

[code]
short s = 100000; // ERROR!
[/code]

If you’re a novice Unity developer, you might have seen this error with float variables.

<blockquote class="error-quote">
Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type
</blockquote>

We now know why this happened. It’s because there is no f after the literal. Add f like [icode]float pi = 3.14f;[/icode]

</ContentBlock>
<ContentBlock color="grey">

<Sectionhead>How to convert types</Sectionhead>

OK. We learned that you cannot assign bigger-sized variables into small-sized one. 

But what should we do when we need to do that? 

We should use casting.

The rule is simple. Add type name in front of the variable between parentheses. 

[code]
long a = 1234L;
int b = (int)a;

double c = 3.14;
float d = (float)c;
[/code]

Compiler wants to warn you it’s unsafe. It wants to help you avoid mistakes. 

That’s why we need to tell our dear compiler with casting: “Don’t worry. It’s safe. Everything will be all right.”

[Compiler pointing code: assuring developer.]

</ContentBlock>
<ContentBlock>

<Subhead>strings and characters. </Subhead>

In JavaScript, you can use both ‘ and “ to handle a single character or a string of characters. You can choose whatever you want. It doesn’t matter. 

[javascript]
var a = ‘abc’;
var b = “abc”;
[/javascript]

However, in C#, <ICode>‘</ICode> is for single characters. <ICode>“</ICode> is for strings. 

The type that uses <ICode>‘</ICode> is a <Keyword>char</Keyword> and the type that uses <ICode>“</ICode> is a <Keyword>string</Keyword>. So, you cannot use them interchangeably as you did in JavaScript. 

[code title="char vs. string"]
char a = ‘a’;
string b = “abc”;
char c = “1”; // ERROR. “1” is a string, not a character. 
string d = ‘s’; // ERROR. ‘s’ is a character, not a string. 
string e = “e”; // CORRECT. “e” is a string with a single character. 
[/code]

Then, what if we want to add <ICode>“</ICode> in string? In JavaScript, there were 2 ways. 

* Use <ICode>'</ICode> string. 
* Escape them by <InlineCode>\\"</InlineCode>.

You cannot use the method 1 in C#. So, you need to escape it by \”. 

[code]
string f = “I am fed up with \”Hello, World!\” examples.”;
[/code]

<Sectionhead>Rejoice! There are many similar operators!</Sectionhead>

C# and JavaScript use the same operators for many <Keyword>string</Keyword> operations. 

For example, to concatenate <Keyword>string</Keyword>s, use +. 

[code]
string name = “Lara “ + “Croft”;
[/code]

Like JavaScript, you can use + to format a string. But you can also use the <Method>string.Format()</Method> method or $ syntax. 

[code]
int i = 1;
int j = 2;
string a = “” + i + “ + “ + j + “ = “ + (i + j);
string b = string.Format(”{0} + {1} = {2}”, i, j, i + j);
string c = $“{i} + {j} = {i + j}”;

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);
[/code]

<Console>
1 + 2 = 3
1 + 2 = 3
1 + 2 = 3
</Console>

The <Method>string.Format()</Method> method gets a format string as its first argument. And this string has special words like <InlineCode>{0}</InlineCode>, <InlineCode>{1}</InlineCode>, <InlineCode>{2}</InlineCode>, etc. They’re filled with the values of the variables next to the format string. 

For example, <InlineCode>{0}</InlineCode> is <InlineCode>i</InlineCode>, <InlineCode>{1}</InlineCode> is <InlineCode>j</InlineCode> and <InlineCode>{2}</InlineCode> is <InlineCode>i + j</InlineCode> in our example. 

If you’re familiar with ES2015, you noticed that the $ notation is similar to `` string. The difference is that you don’t need to add $ after {. 

The official name of this $ string is <Outlink href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated">string interpolation</Outlink>. 

You can get the character in the string by the index with brackets([]). It’s also same!

[code]
string name = “Mario”;
char a = name[0]; // a == ‘M’
[/code]

C# string has utility methods like JavaScript. And names are almost identical.

[rtable name="cs-js-string"]
| C# | JavaScript |
| --- | --- |
| Split(separtor) | split(separator) |
| IndexOf(str) | indexOf(str) |
| Substring(start<b>[, length]</b>) | substring(start<b>[, end]</b>) | 
| StartsWith(str) | startsWith(str)[ES2015] |
| Trim() | trim() |
| Insert(position, str) | <Outlink href=”https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index”>check this article</Outlink> |
| Replace(from, to) | replace(from, to) |
[/rtable]

Note that there is a serious difference between <Outlink href=”https://docs.microsoft.com/ko-kr/dotnet/api/system.string.substring?view=netframework-4.7.2”>C# substring</Outlink> and <Outlink href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring”>JavaScript substring</Outlink>. 

In C# Substring, it gets startIndex and the length of the substring. In JavaScript substring, it gets startIndex and endIndex. 

To get “JavaScript” from the string, “C# and JavaScript are different”, you need to use different arguments. 

[code]
string s = “C# and JavaScript are different”;
string js = s.Substring(7, 10);

Console.WriteLine(js);
[/code]

[javascript]
var s = “C# and JavaScript are different”;
var js = s.substring(7, 17);

Console.WriteLine(js);
[/javascript]

Be careful!

You can see the examples below: 

[code]
string name = "Sonic the Hedgehog";
string[] words = name.Split(' '); // { “Sonic”, “the”, “Hedgehog” }
int position = name.IndexOf(”the”); // 6
string sub = name.Substring(10); // Hedgehog
bool isAmy = name.StartsWith(”Amy”) // false
string trimmed = “      Tails      “.Trim(); // Tails
string poke = “Pokemon Edition”.Insert(8, “Pikachu ”); // Pokemon Pikachu
string amy = name.Replace(”Sonic”, “Amy”); // Amy the Hedgehog
[/code]

</ContentBlock>
<ContentBlock color="grey">

<Sectionhead>C# filled JavaScript string pitfall. </Sectionhead>

In JavaScript, the type conversion between numbers and strings is sometimes implicit. 

[javascript]
var a = ‘5’ * ‘2’; // a === 10
[/javascript]

The code above is completely OK in JavaScript. 

But in C#, it’s a compile error. 

If you want to multiply a number in string format, you need to use <Method>Int32.Parse()</Method> or <Method>Convert.ToInt32()</Method> method like below: 

[code]
int a = Int32.Parse(”5”) * Convert.ToInt32(”2”);
[/code]

Both <InlineCode>Int32.Parse()</InlineCode> and <InlineCode>Convert.ToInt32()</InlineCode> do the same thing. Use whatever you want.  

</ContentBlock>
<ContentBlock>

<Subhead>bool: true or false</Subhead>

There is one more frequently used type: <Keyword>bool</Keyword>. It can only have <Keyword>true</Keyword> or <Keyword>false</Keyword>. 

In C#, <Keyword>true</Keyword> isn’t 1 and <Keyword>false</Keyword> isn’t 0. <Keyword>true</Keyword> is <Keyword>true</Keyword> and <Keyword>false</Keyword> is <Keyword>false</Keyword>. It means you cannot assign numbers to <Keyword>bool</Keyword> type variables like below:

[code]
bool isBig = (bool)0; // error. 
[/code]

You should use comparison operators like below:

[code]
bool isBig = val != 0;
[/code]

It also means you cannot do things like this in C#. 

[javascript]
var a = 0;
var b = true;
var c = a + b; // c === 1
[/javascript]

[code]
int a = 0;
bool b = true;
int c = a + b; // ERROR.
[/code]

</ContentBlock>
<ContentBlock color="grey">

We learned the basic types in C#. You might now feel nostalgia for the loose typing system in JavaScript. 

Interestingly, there are similar things in C#,

<Sectionhead>var is not the same var.</Sectionhead>

C# also has a <Keyword>var</Keyword> keyword. But it’s not the same <Keyword>var</Keyword> in JavaScript. 

In JavaScript, <Keyword>var</Keyword> keyword means that string next to it is a name of a variable. 

In C#, the compiler guesses the type of the variable from the initialization. And that type is hard-wired to that variable. So, you cannot change the type after initialization.

[code]
var a = 4; // type of a became int. 
a = 10; // OK
a = “Princess Peach”; // Compile error
[/code]

The type of variable <InlineCode>a</InlineCode> is set to <Keyword>int</Keyword> at the first line. 

So, you cannot change the type of <InlineCode>a</InlineCode> after that line. Because of this rule, you cannot declare <Keyword>var</Keyword> variable without initializing it. 

For basic types like <Keyword>int</Keyword>, <Keyword>float</Keyword>, <Keyword>string</Keyword>, <Keyword>var</Keyword> isn’t used a lot. 

But with Generics, the type name becomes really long and ugly like <InlineCode>Dictionary<int, Player></InlineCode>, <InlineCode>List&lt;Rabbit&gt;</InlineCode>. So, <Keyword>var</Keyword> is used to hide that complexity. 

One more rule: You cannot use <Keyword>var</Keyword> in fields. It’s only for local variables. 

</ContentBlock>
<ContentBlock>

<Sectionhead>dynamic: The most similar type for JavaScript variables. </Sectionhead>

<Keyword>dynamic</Keyword> variables are <Keyword>dynamic</Keyword>. They can keep any type of values you give to them. 

They’re the most similar variable type you used in JavaScript. 

[code]
dynamic a = 1;
a = “Portal”;
[/code]

But as always, there are differences. 

First of all, you cannot freely add members to the objects as you did in JavaScript. 

[javascript]
var a = {};
a.name = “Bowser”;
[/javascript]

The code above is perfectly OK in JavaScript. But if you try to do that in C#, it’ll throw <InlineCode>RuntimeBinderException</InlineCode>. 

[code]
dynamic a = new object();
a.name = “Bowser”; // RuntimeBinderException!
[/code]

To do the same thing in C#, we need to use <InlineCode>ExpandoObject</InlineCode>. 

[code]
dynamic a = new ExpandoObject();
a.name = “Bowser”;
[/code]

If you try to compile the code above, it won’t work. And you can see the red underline below <InlineCode>ExpandoObject</InlineCode>. 

Because compiler cannot find the definition in namespaces. 

To solve this problem, press <Key>Alt</Key> + <Key>Enter</Key> or <Key>Ctrl</Key> + <Key>.</Key>. Then, Visual Studio will show you the list of the possible locations of <InlineCode>ExpandoObject</InlineCode>. Usually, the namespace on the top of the list is the answer. Press <Key>Enter</Key> to add it. 

[Adding System.Dynamic namespace] 

You can find that [icode]using System.Dynamic[/icode] is added at the top. 

Second, you cannot use <InlineCode>ExpandoObject</InlineCode> like a dictionary. In other words, you cannot call members with brackets and quotation marks like [icode]a[”name”][/icode].

[javascript]
alert(a[”name”]); // OK. 
[/javascript]

[code]
Console.WriteLine(a[”name”]); // RuntimeBinderException
[/code]

It’s because there is a <InlineCode>Dictionary</InlineCode> class made for this purpose. We’ll learn how to use it in Chapter 4. 

Because of these restrictions, it’s hard to see the real world examples of <Keyword>dynamic</Keyword> variables. It is sometimes used in ORM libraries because you cannot predict the tables users will make. 

You might love <Keyword>dynamic</Keyword> if you’re not familiar with types yet. 

But in C# world, everyone loves strong types. dynamic is a weirdo. So, I don’t recommend using them.

</ContentBlock>

<Quiz>

<QTitle>OX Quiz. Is it correct?</QTitle>

<OX>
<OXQ>We can use var in fields.</OXQ>
<OXA>X. var is only for local variables.</OXA>
</OX>

<OX>
<OXQ>dynamic is not used a lot in C#. </OXQ>
<OXA>O. Many developers prefer types. </OXA>
</OX>

<OX>
<OXQ>INT_MAX + 1 == INT_MIN</OXQ>
<OXA>O. It’s overflow. It circles back to the minimum number. </OXA>
</OX>

<OX>
<OXQ>You can use numbers bigger than 3 billion with int. </OXQ>
<OXA>X. The maximum number for int is 2.1 billion. If you need to use numbers bigger than that, it’s time to use long. </OXA>
</OX>

<QTitle>Be the Compiler. What went wrong? </QTitle>

[code]
string babe = “Babe Ruth”;
int babeNumber = “3”;

Console.WriteLine(”Name: {0} Number: {1}”, babe, babeNumber);
[/code]

<Answer>

<Keyword>int</Keyword> type variables cannot hold strings like “3”. 

</Answer>


<QTitle>Fill the blank. We want to show only the first 30 characters of this quest message. </QTitle>

[code]
string questMessage = 
    “This letter quest has been started in England 200 years ago. ” +
    “And this letter gave happiness to its recipients. ” +
    “Unfortunately, this letter should leave your hands in 4 days. “ +
    “Otherwise, the happiness will become an unreversible misery.“;

string summary = [ ??? ]

Console.WriteLine(summary);

questMessage.Substring(0, 30);
[/code]

<Answer>

If you use questMessage.Substring(30);, you’ll get a string after the 30th character. 

</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="3">Control Flow Statements: 5 Differences </ChapterTitle>

Thanks to types, C# variables are much more complicated than JavaScript.

But also thanks to types, control flow statements(<Keyword>if</Keyword>, <Keyword>for</Keyword>, etc.) are easier. 

Furthermore, there are only a few differences between them. 

</ContentBlock><ContentBlock color="grey">

<Subhead>No ===, !== operator. </Subhead>

In JavaScript, ===, !== operators checks the types and the values together. But as we learned, C# is obsessive with types. So, we don’t need them. 

[javascript]
if (”1” == 1) {
    alert(’”1” == 1 is true’);
}

if (”1” === 1) {
    alert(’but “1” === 1 isn’t true’);
}
[/javascript]

[code]
if (”1” == 1) 
{
    Console.WriteLine(”\”1\” is false in C#.”);
}
[/code]

In C#, if the types are different, then they are different. 

</ContentBlock>
<ContentBlock>

<Subhead>bool-only in if!</Subhead>

In JavaScript, you can assign variables in <Keyword>if</Keyword> statement. 

[javascript]
var a = 1;

if(a = 2) {
    alert("");
}
[/javascript]

It’s valid. But if you do something similar in C#, it’s an error. 

[code]
int a = 1;

if(a = 2)
{
    Console.WriteLine("Compile Error!");
}
[/code]

You can only put bool<Keyword>bool</Keyword> variable or <Keyword>bool</Keyword> expressions (e.g. <InlineCode>monsterHP < 20</InlineCode>, <InlineCode>HP >= 100</InlineCode>) in <Keyword>if</Keyword> statement in C#. If not, it’s an error. 

[bool only]

Because of this strict rule, there is no falsey, truthy thing in C#. If you want to add a <Keyword>null</Keyword> variable or an empty string in <Keyword>if</Keyword> statement, compare it with the value. 

[code]
if(s == “”) 
{
    Console.WriteLine(”String is empty”);
}

if(n == null) 
{
     Console.WriteLine(”Null Object”);
}
[/code]

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Thou shalt initialize your variables. </Subhead>

You can find this strictness in variable initialization, too. In JavaScript, if you’re using a variable without initializing it, the value of the variable is <Keyword>undefined</Keyword>. 

[javascript]
var f; // undefined
var g = f + 1; // undefined
[/javascript]

In C#, it’s a compile error when you use uninitialized variables. The code simply doesn’t compile. 

[code]
int f;
int g = f + 1;
[/code]

You’ll see the error:

CS0165: Use of unassigned local variable 'f'. 

</ContentBlock>
<ContentBlock>

<Subhead>Handling exceptions</Subhead>

Although it is not used a lot in JavaScript, you can handle errors with <Keyword>throw</Keyword>, <Keyword>try</Keyword>, <Keyword>catch</Keyword>, <Keyword>finally</Keyword> statements. The syntax and mechanism are identical in C#, but there is one difference:

You cannot throw raw values like string or numbers in C#. 

It isn’t odd because nothing can live outside classes in C#. 

[javascript]
if(someProblem) {
    throw “you can throw string in JS”;
}
[/javascript]

[code]
if(someProblem) 
{
    throw new Exception(”You should wrap it with Exception in C#”); 
}
[/code]

You can create your own <InlineCode>Exception</InlineCode> class by inheriting <InlineCode>Exception</InlineCode> class. We’ll cover inheritance in Chapter 6. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>for-loop</Subhead>

There’s a good news. There is no difference between C# and JavaScript for <Keyword>for</Keyword> and <Keyword>while</Keyword> loop. They’re just identical.

The only difference comes from the type system.

[javascript]
var sum = 0;

for(var i = 0; i < 100; i++) {
     sum += i;
}
[/javascript]

[code]
int sum = 0;

for(int i = 0; i < 100; i++)
{
     sum += i;
}
[/code]

Even in C#, you can use <Keyword>var</Keyword> rather than <Keyword>int</Keyword>. But <Keyword>int</Keyword> is more preferred.

</ContentBlock>
<ContentBlock>

<Subhead>special loop system for lists</Subhead>

However, in C#, there is one more loop system for iterable objects like arrays, lists or dictionaries. It’s <Keyword>foreach</Keyword> statement. 

[code]
string[] enemies = { “Bowser”, “Dr. Eggman”, “Ganon”,  };

for(int i = 0; i < enemies.Length; i++) 
{
    Console.WriteLine(enemies[i]);
}
[/code]

string[] is the type for the string arrays. And you need to be careful that initializer for arrays is braces({}) in C#, not brackets([]). 

Like JavaScript, you can get the size of the array with <InlineCode>Length</InlineCode> property. (It’s not <InlineCode>length</InlineCode>. It’s <InlineCode>Length</InlineCode>. Capital L!)

But with <Keyword>foreach</Keyword> statement, we can remove the index from our code. 

[code]
string[] enemies = { “Bowser”, “Dr. Eggman”, “Ganon”,  };

foreach(string enemy in enemies) 
{
    Console.WriteLine(enemy);
}
[/code]

The code became much simpler and clearer. 

In ES5, there’s a similar syntax. It’s <InlineCode>forEach()</InlineCode> method.

[javascript]
var enemies = [“Bowser”, “Dr. Eggman”, “Ganon”,  ];

enemies.forEach(name => {
    alert(name);
});
[/javascript]

</ContentBlock>

<Quiz>

<QTitle>OX Quiz. Is it correct?</QTitle>

<OX>
<OXQ>In C#, you cannot throw raw string or number as an exception. </OXQ>
<OXA>O. Everything in C# must be inside classes. Exceptions are not exceptions. </OXA>
</OX>

<OX>
<OXQ>In C#, if you use a variable without initializing it, it’s a warning. </OXQ>
<OXA>X. It’s a compile time error. </OXA>
</OX>

<OX>
<OXQ>You can use <Keyword>foreach</Keyword> loop with only iterable objects. </OXQ>
<OXA>

O. You can use <Keyword>foreach</Keyword> statement with iterable objects like data structure objects like <InlineCode>List</InlineCode>, <InlineCode>Dictionary</InlineCode>, arrays, or objects that implement the <InlineCode>IEnumerable</InlineCode> interface.

You will learn what interfaces are in Chapter 6. OOP.

</OXA>
</OX>


<QTitle>Be the compiler. Find what went wrong. </QTitle>

[code]
int bombCount = 5;

if (bombCount) {
   ThrowBomb();
}
[/code]

<Answer>

<InlineCode>bombCount</InlineCode> => <InlineCode>bombCount > 0</InlineCode>

bombCount is <Keyword>int</Keyword>, not <Keyword>bool</Keyword>. So, if you want to check whether the player has a bomb, you should check if bombCount is bigger than 0. 

</Answer>


[code]
string[] items = { “Sword”, “Shield”, “Potion”, “Boots”, “Armor”, };

foreach(item in items) 
{
    Console.WriteLine(item);
}
[/code]

<Answer>

<InlineCode><Keyword>foreach</Keyword>(item <Keyword>in</Keyword> items)</InlineCode> => <InlineCode><Keyword>foreach</Keyword>(<b><Keyword>string</Keyword></b> item <Keyword>in</Keyword> items)</InlineCode>

You need to specify the type of item in lists when using <Keyword>foreach</Keyword> loop. 

</Answer>


[code]
var age = “24”;

if (age < 20) {
    Console.WriteLine(”You cannot enter here.”);
}
[/code]

<Answer>

<InlineCode><Keyword>var</Keyword> age = “12”;</InlineCode> => <InlineCode><Keyword>var</Keyword> age = 12;</InlineCode>

Comparing <Keyword>string</Keyword> with <Keyword>int</Keyword> is always <Keyword>false</Keyword> in C#. 

</Answer>

<QTitle>Make the program.</QTitle>

<Console>
Defeated enemies: Bowser, Dr. Eggman, Ganon
</Console>

[code]
string[] enemies = { “Bowser”, “Dr. Eggman”, “Ganon”,  };

Console.Write(”Defeated enemies: “);

[Fill this Blank!]
[/code]

<Answer>

There are several ways to solve this problem. But I solved it with <Keyword>for</Keyword> loop. 

[code]
for(int i = 0; i < enemies.Length; i++)
{
    Console.Write(enemy);

    if (i < (enemies.Length - 1)) 
    {
        Console.Write(”, “);
    }
}
[/code]

I didn’t use <Keyword>foreach</Keyword> statement because there is no index in <Keyword>foreach</Keyword> statement that I cannot print out comma after the last item in the list naturally. 

</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="4">How to work with data structures</ChapterTitle>

To make programs with JavaScript, you have used the countless number of arrays and objects.

But in this article, I deliberately didn’t cover much about native arrays in C#. 

It’s because arrays aren’t used a lot in real-world C# programming. 

It sounds really unintuitive. But it’s true. Because C# arrays have a lot of restrictions. 

For example, you cannot append new members to arrays because you cannot change the size. Yes, it’s weird. But it’s true. 

C# is designed to make high-performance desktop programs in the early 2000s. To support machines which are much less powerful than the smartphones in your hand, you sometimes have to sacrifice flexibility. 

That’s why the native array in C# doesn't support resizing. 

[More data?]

To make a general purpose and easy-to-use list without any limitation of the native array, Microsoft added generics and data structure classes to C#. 

In C#, there are many data structure classes: <InlineCode>List</InlineCode>, <InlineCode>Dictionary</InlineCode>, <InlineCode>Queue</InlineCode>, <InlineCode>Stack</InlineCode>, <InlineCode>SortedList</InlineCode>, <InlineCode>HashSet</InlineCode>, etc. 

Among them, <InlineCode>List</InlineCode> is the most frequently used and <InlineCode>Dictionary</InlineCode> is the next. Others are not used much. 

So, we’ll focus on <InlineCode>List</InlineCode> and <InlineCode>Dictionary</InlineCode>. If you want to learn more about others, <Outlink href=”https://docs.microsoft.com/en-us/dotnet/standard/collections/”>check the official document.</Outlink>

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Creating empty data structure.</Subhead>

To create a list and a dictionary in JavaScript, what you need to do is use <InlineCode>[]</InlineCode> and <InlineCode>{}</InlineCode>. 

[javascript]
var list = [];
var dict = {};
[/javascript]

But in C#, it’s a bit more complicated. 

[code]
List<int> points = new List<int>();
Dictionary<string, Player> players = new Dictionary<string, Player>();
[/code]

You need to specify the type of the items in the list between angular brackets. As for the <InlineCode>Dictionary</InlineCode> class, you need to specify the types of Key and Value. 

And as they’re not primitive types, you need to create them with the <Keyword>new</Keyword> keyword. 

As you can see, the type name is too long and ugly. We can simplify them with the <Keyword>var</Keyword> keyword. 

[code]
var points = new List<int>();
var players = new Dictionary<string, Player>();
[/code]

But don’t forget. <Keyword>var</Keyword> is only for local variables. If you try to use it in fields, you’ll meet the redline. 

</ContentBlock>
<ContentBlock>

<Subhead>What’re those angular brackets? </Subhead>

By now, you’re well aware that C# is obsessive with types. It always tries to define types. 

But it can cause problems when it comes to data structure classes. Because the actions for data structure classes are exactly the same regardless of types. 

For example, steps for these actions are exactly identical in every data structure:

* storing new values in lists. 
* retrieving values from dictionaries by the index. 
* removing values in lists. 

The only difference is the type of the items in them. 

So, Microsoft has to make a way to store “any data type”. That’s why they made angular bracket syntax or “generics“. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>List Essentials. </Subhead>

You learned how to initialize an empty <InlineCode>List</InlineCode>. Then, let’s learn how to initialize <InlineCode>List</InlineCode> with initial items. 

[code]
List<int> points = new List<int> { 1, 2, 3, };
[/code]

When you’re initializing List with items, you can remove () in constructors.

To use <InlineCode>List</InlineCode> properly, you need to know how to add, find, change, remove items in it. Let’s compare the names of the methods. 

[rtable name="cs-js-list"]
| Action | C# | JavaScript |
| --- | --- | --- |
| Append | list.Add(item) | array.push(item) |
| Remove by index | list.Remove(index) | <Outlink href=”https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript”>check this article</Outlink> |
| Retrieve | list[index] | array[index] |
| Find the Index of an item | list.FindIndex(value) | array.indexOf(value) |
| Size | list.Count | array.length |
| Check existence | list.Contains(value) | array.indexOf(value) == -1 (before ES2016) array.includes(value) (after ES2016) | 
[rtable name="cs-js-list"]

And here are the examples of these functions in action: 

[code]
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Add(6);

Console.WriteLine(numbers.Count); // 6
Console.WriteLine(numbers.Find(5)); // 5
Console.WriteLine(numbers.FindIndex(5)); //4
Console.WriteLine(numbers.Contains(7)); // false
numbers[0] = 7;
numbers.Remove(3); // { 7, 2, 3, 5, 6 } 
[/code]

C# and JavaScript handle non-existent items differently.

In JavaScript, if you try to retrieve an item with non-existent index, it just returns <Keyword>undefined</Keyword> and code runs on. 

[javascript]
var numbers = [1, 2, 3, 4, 5];
var a = numbers[6]; // a is undefined. 
[/javascript]

But in C#, it returns <InlineCode>ArgumentOutOfRangeException</InlineCode>. 

[code]
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
int a = numbers[6]; // throws ArgumentOutOfRangeException
[/code]

</ContentBlock>
<ContentBlock>

<Subhead>Dictionary Essentials</Subhead>

When I learned that objects can be used as dictionaries in JavaScript, I was a bit amazed.  Because I’ve never thought about that. 

In JavaScript, objects and dictionaries are the same. They use the same syntax. 

[javascript]
var player = {
    hp: 200,
    mp: 300,
};

var items = {
    “gun”: 200,
    “sword”: 500,
};
[/javascript]

However, in C#, object is object and dictionary is Dictionary. 

And you cannot initialize dictionary with special syntax like <InlineCode>{}</InlineCode>. You should use brackets after creating an empty dictionary. 

[code]
Player player = new Player(200, 300);
Dictionary<string, int> items = new Dictionary<string, int>();
items[”gun”] = 200;
items[”sword”] = 500;
[/code]

Dictionary requires Key and Value. Thanks to them, many basic features are different from the List. 

[rtable name="cs-js-dict"]
| Actions | C# | JavaScript |
| --- | --- | --- |
| Add | dict[key] = value | dict[key] = value |
| Remove | dict.Remove(key) | delete dict[key] |
| Retrive | dict[key] | dict[key] |
| Size | dict.Count | Object.keys(dict).length |
| Check existence of key | dict.ContainsKey(key) | Object.keys(dict).indexOf(key) == -1 |
| Check existence of value | dict.ContainsValue(value) | Object.values(dict).indexOf(key) == -1 |
[/rtable]

Here are the examples of the functions below. 

[code]
var players = new Dictionary<string, Player>();
players[”mario”] = new Player();
players.Add(”sonic”, new Player());
players.ContainsKey(”link”); // false
players.Remove(”mario”);
[/code]

To loop through the dictionary in JavaScript, there are 2 ways:

[javascript]
Object.keys(obj).forEach(function (key) {
    foo(key)
    bar(obj[key])
});

for(key in obj){
    foo(key)
    bar(obj[key])
}
[/javascript]

In C#, you can use <Keyword>foreach</Keyword> statement to loop through them. 

[code]
foreach(var pair in dictionary) {
    foo(pair.Key);
    bar(pair.Value);
}
[/code]

If you want to loop through only keys or values, use Keys, Values property. 

[code]
foreach(var key in dictionary.Keys) {
    foo(key);
}

foreach(var value in dictionary.Values) {
    bar(value);
}
[/code]

</ContentBlock>

<Quiz>

<QTitle>OX Quiz. Are they correct?</QTitle>

<OX>
<OXQ>You cannot resize arrays in C#. </OXQ>
<OXA>O. If you want to resize the list, you need to use <InlineCode>List</InlineCode> class. </OXA>
</OX>

<OX>
<OXQ>The official name of <InlineCode>&lt;&gt;</InlineCode> syntax is template. </OXQ>
<OXA>X. The name of <InlineCode>&lt;&gt;</InlineCode> syntax is generics. </OXA>
</OX>

<OX>
<OXQ>To get the size of <InlineCode>List</InlineCode>, you need to use <InlineCode>Size</InlineCode> property. </OXQ>
<OXA>X. You need to use <InlineCode>Count</InlineCode> property. </OXA>
</OX>

<OX>
<OXQ>You can use objects as <InlineCode>Dictionary</InlineCode> in C#. </OXQ>
<OXA>X. objects are objects and dictionaries are Dictionary in C#. </OXA>
</OX>

<QTitle>Fill in the blanks. Fill in the blanks to get the given result. </QTitle>

<Console>
One bomb has been used. 
Current Items: 
bomb: 4
arrow: 10
</Console>

[code]
Dictionary<string, int> items = new Dictionary<string, int>();
items[”bomb”] = 5; 
items[”arrow”] = 10;

[???]

[/code]

<Answer>

[code]
Console.WriteLine(”One bomb has been used.”);
items[”bomb”] -= 1;

Console.WriteLine(”Current Items:”);
foreach(var item in items) 
{
    Console.WriteLine(item.Key + “: “ + item.Value);
}
[/code]

</Answer>

<Console>
3 5 6 1 7
</Console>

[code]
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

[???]

foreach (int num in numbers) 
{
    Console.Write(num + “ “);
}

[/code]

<Answer>

Well, the easiest method is to assign new <InlineCode>List</InlineCode> like this:

[code]
numbers = new List<int> { 3, 5, 6, 1, 7 };
[/code]

But it’s too easy. How about doing this by using the methods in the <InlineCode>List</InlineCode> class? 

[code]
numbers.Remove(0);
numbers.Remove(1);
numbers.Remove(3);

numbers.Add(1);
numbers.Add(7);
[/code]

</Answer>


<QTitle>Be the transpiler. Translate JavaScript code to C# code. </QTitle>

[javascript]
var gameReviewScores = {
    “Super Mario Odyssey”: 97,
    “Legend of Zelda: Breath of the Wild”: 97,
    “Sonic Mania”: 86,
    “Sonic Forces”: 99,
};

gameReviewScores[”Sonic Forces”] = 55;

var worstGameName = “Super Mario Odyssey”;
var worstScore = gameReviewScores[worstGameName];

Object.keys(gameReviewScores).forEach(function (key) {
    if (gameReviewScores[key] < worstScore) {
        worstScore = gameReviewScores[key];
        worstGameName = key;
    }
});

alert(”Worst game in 2017: “ + worstGameName);
[/javascript]

<Answer>

The Object.keys part and 2 variables above are about finding the minimum value in the list. 

[code]
Dictionary<string, int> gameReviewScores = new Dictionary<string, int>();
gameReviewScores[”Super Mario Odyssey”] = 97;
gameReviewScores[”Legend of Zelda: Breath of the Wild”] = 97;
gameReviewScores[”Sonic Mania”] = 86;
gameReviewScores[”Sonic Forces”] = 99;

gameReviewScores[”Sonic Forces”] = 55;

string worstGameName = “Super Mario Odyssey”;
int worstScore = gameReviewScores[worstGameName];

foreach(var game in gameReviewScores) 
{
    if(game.Value < worstScore)
    {
        worstScore = game.Value;
        worstGameName = game.Key;
    }
}

Console.WriteLine(”Worst game in 2017: “ + worstGameName);
[/code]

</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="5">How functions function in C#</ChapterTitle>

Functions get the values and handle them and return the value. 

As we well know by now, C# is all about types. 

So, we must specify the types of incoming and outgoing values in functions. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Functions and methods</Subhead>

Methods are the functions in classes. In C#, no function cannot live outside classes. So, every function in C# is a method. 

So, when talking about C# functions, many developers prefer calling them method to functions. 

I'll follow that convention in this post. 

</ContentBlock>
<ContentBlock>

<Subhead>The difference in defining functions. </Subhead>

When you define a function in JavaScript, all you need to do is to start your function with the <Keyword>function</Keyword> keyword. 

[javascript]
function add(a, b) {
    return a + b;
}
[/javascript]

In C#, there is no <Keyword>function</Keyword> keyword. What you need to do is specifying the types of everything: arguments and returned value. 

The type of returned value is called “return type”. 

[code]
int Add(int a, int b) {
    return a + b;
}
[/code]

What if there were no return value? Make return type empty? 

No. You should specify that with the <Keyword>void</Keyword> keyword. 

[code]
void Attack(Player player) {
    // Check player and attack her. 
}
[/code]

As always, C# compiler checks the types. In this case, it checks whether the types in the parameters and return type are correct. 

In other words, if you don’t return a value in non-<Keyword>void</Keyword> methods or vice versa, they are all errors. 

[code]
int Add(int a, int b) 
{
    // No return value. ERROR!
}

void Attack() 
{
    return 3; // ERROR!
}
[/code]

It’s completely valid to call the <InlineCode>add()</InlineCode> function above with integers, real numbers or strings in JavaScript. 

[javascript]
// All OK. 
add(1, 2);
add(3.14, 2.718);
add(”hello”, “world”);
add(1, 3.14);
[/javascript]

But if you try that in C#, you’ll get a bunch of errors. 

[code]
add(1, 2); // OK
add(3.14, 2.718); // Error
add(”hello”, “world”); // Error
add(1, 3.14); // Error
[/code]

What should we do to solve this problem? The answer is method overloading. We’ll learn about it soon. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>You cannot define C# methods like JS functions</Subhead>

In JavaScript, the preferred way of defining functions is to declare a variable and assign an anonymous function into that variable.

[javascript]
var add = function(a, b) {
    return a + b;
}
[/javascript]

But in C#, it’s really painful to define a method like that. Don’t try it. 

(Many developers think it's impossible. However, with lambda method and delegate type, you can do that. I've tried it but don’t cover it here because you shouldn’t write code like that.)

</ContentBlock>
<ContentBlock>

<Subhead>Method Overloading</Subhead>

As we learned above, you cannot use [icode]int Add(int a, int b)[/icode] method with <Keyword>float</Keyword>, <Keyword>double</Keyword>, or <Keyword>string</Keyword> types. To do so, you have to create other methods for them. 

[code]
float AddFloat(float a, float b) {
    return a + b; 
}

string AddString(string a, string b)  {
    return a + b; 
}
[/code]

But appending type names after Add like above looks really unnatural. 

That’s why method overloading exists in C#. 

Thanks to that, we can define multiple methods with the same name but with different types of arguments. 

For example, we can rewrite our <InlineCode>Add()</InlineCode> methods like this: 

[code]
public static Main(string[] args) 
{
    Console.WriteLine(Add(1, 2));
    Console.WriteLine(Add(3.14f, 2.718f);
    Console.WriteLine(Add(”Hello”, “World”);
}

static int Add(int a, int b) {
    return a + b;
}

static float Add(float a, float b) {
    return a + b; 
}

static string Add(string a, string b)  {
    return a + b; 
}
[/code]

Their names are all <InlineCode>Add</InlineCode>. But it works perfectly. C# compiler smartly finds the appropriate method and uses it. 

[Overloading: All same names. But different.]

To make above code work, we need to add <Keyword>static</Keyword> in front of our methods. I'll tell you about the <Keyword>static</Keyword> in the next chapter. 

</ContentBlock>
<ContentBlock color="grey">

<Sectionhead>How can we find the overloaded methods? </Sectionhead>

If you’re not sure if there is any overloaded method, get help from Visual Studio code method tooltip. 

It shows how many overloaded methods exist by the number on the tips. 

[Tooltip example]

You can check them by pressing up or down arrow keys. 

</ContentBlock>
<ContentBlock>

<Sectionhead>How method overloading makes your life easier</Sectionhead>

Some of you might have thought that adding additional methods for Add with the same code (<InlineCode><Keyword>return</Keyword> a + b;</InlineCode>) is overkill. 

In this case, you’re absolutely right. But in some other cases, overloading makes code much simpler and clearer. 

We learned <InlineCode>List.FindIndex()</InlineCode> method in Chapter 4. If you check the <Outlink href="">documentation</Outlink>, there are 3 overload versions. 

[code]
FindIndex(int startIndex, int count, Predicate<T> match);
FindIndex(int startIndex, Predicate<T> match);
FindIndex(Predicate<T> match);
[/code]

Each method finds the index of a value in different ways. They’re from: 

* the entire List. 
* a range with a specified starting point to the last item. 
* a range with a specified starting and ending point. 

These methods serve different needs. We need all 3 of them. 

Let's think about making this thing in JavaScript. You need to count the number of arguments or checking the type/<Keyword>undefined</Keyword>ness of arguments like below:

[javascript]
Array.prototype.FindIndex = function(startIndex, count, match) {
    if (!count && !match) {
        match = startIndex;
        startIndex = 0;
        count = this.length;
    }

    if (!match) {
        match = count;
        count = this.length;
    }

    // the code that find the element. 
}
[/javascript]

It makes code look dirty. But there is no other option. 

</ContentBlock>

<Quiz>

<QTitle>OX Quiz. Are they correct?</QTitle>

<OX>
<OXQ>You cannot define methods with the same name in C#.</OXQ>
<OXA>X. You can define them. It’s called overloading.</OXA>
</OX>

<OX>
<OXQ>If you don’t need to return a value, you need to set your return type as empty. </OXQ>
<OXA>X. You need to set it as <Keyword>void</Keyword>. </OXA>
</OX>

<OX>
<OXQ>You can define overloaded methods even if they have same arguments and different return types. </OXQ>
<OXA>X. If you do that, compiler cannot find the appropriate method. So, you need to set arguments differently. </OXA>
</OX>


<QTitle>Fill in the blanks. Fill in the blanks to get the given result. </QTitle>

<Console>
Hello, Mario. Nice to meet you. 
Hello, Luigi. Nice to meet you. 
</Console>

[code]
public static void Main(string[] args)
{
    Greeting(”Mario”);
    Greeting(”Luigi”);
}

[???]
[/code]

<Answer>

What you need is a really simple method. 

[code]
static void Greeting(string name) 
{
    Console.WriteLine(”Hello, “ + name + “. Nice to meet you.”);
}
[/code]

</Answer>

<QTitle>Be the transpiler. Translate JavaScript code to C# code. </QTitle>

[javascript]
function sum(start, end) {
    if (!end) {
        end = start;
        start = 0;
    }

    var s = 0;
    for(var i = start; i <= end; i++) {
        s += i;
    }

    return s;
}
[/javascript]

<Answer>

In this case, you need to define 2 overloaded methods. 

[code]
int Sum(int end) 
{
    return Sum(0, end);
}

int Sum(int start, int end) 
{
    int s = 0;

    for (int i = start; i <= end; i++)
    {
        s += i;
    }

    return s;
}
[/code]

</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="6">Differences in OOP Syntax</ChapterTitle>

Now, let’s tackle our final boss: Object Oriented Programming (OOP). 

JavaScript added a lot of object-oriented features to its recent versions. But, still, you can do many things without them. 

Because JavaScript started in that way. 

I know you’re fed up with these statements. Please let me repeat them again. 

* No variable or method cannot live outside classes. 
* C# is all about types. 

But I didn’t tell you the true meaning of these sentences. 

OOP is the core of the C#. 

You can make JavaScript programs without knowing OOP. In C#, it’s a nonsense. OOP isn’t an option. 

<Note title="What should I do if I’m not familiar with OOP in JavaScript?">

You can do many things without creating classes in JavaScript. 

Because of that, some of you might be fluent with OOP. And others are not. Or you're in somewhere between. 

This simple fact made me think hard about what content should be included in this post. 

If I explain everything about OOP, then experts will be bored. 
But if I skip the explanation and focus on comparing features, novices will stop reading this part. 

After a lot of thinking, I decided:

If you’re not familiar with OOP in JavaScript, it’s time to transfer to beginner train. I’ll cover OOP in detail in my basic C# article. 

(Did you notice the future tense? 

It’s because that train line is under construction. 

I’ll send you a notice email when construction is finished. 

Click here to sign up my email list.)

You don’t have to read the previous chapters in that article. I’ve carefully designed that article so that you don’t need to do that.  

[Transfer image]

</Note>

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Constructor is not "constructor"</Subhead>

In traditional JavaScript, there were no constructors. All you had to do was just declare a function and create instances with <Keyword>new</Keyword>. 

[javascript]
function Player(name) {
    this.name = name;
}

var p = new Player(”Kirito”);

alert(p.name);
[/javascript]

But after ES2015, you can define a class and its constructor with the special method: <InlineCode>constructor</InlineCode>. 

[javascript]
class Player {
    constructor(name) {
        this.name = name;
    }
}

var p = new Player(”Kirito”);

alert(p.name);
[/javascript]

In C#, the syntax is similar, but there are some differences. 

[code]
class Player {
    public Player(string name) {
        this.name = name;
    }

    public string name;
}

class FirstClass
{
    public static void Main(string[] args)
    {
        Player p = new Player(”Kirito”);
        Console.WriteLine(p.name);
    }
}
[/code]

Can you see the difference? 

First of all, the name of the constructor is not <InlineCode>constructor</InlineCode>. It’s the name of the class. In this case, <InlineCode>Player</InlineCode>. 

Second, there is a type name in front of each argument. It’s the same with other C# methods. Remember C# is all about types!

Third, as always, you need to declare variables. The variables outside methods are called fields. Unlike local variables, you don’t need to declare variables in front of the methods that use them. You can declare them anywhere. 

Finally, it’s not a difference. But there is no return type. <Keyword>public</Keyword> here isn’t a return type. It’s an access modifier. We’ll learn about access modifiers soon. 

Bonus 1. You cannot define a class inside a class or a method. That’s why our <InlineCode>Player</InlineCode> class is outside the <InlineCode>FirstClass</InlineCode> class. 

Bonus 2. When creating <InlineCode>Player</InlineCode> object, we created <InlineCode>p</InlineCode> variable with the type, <InlineCode>Player</InlineCode>. The variables like <InlineCode>p</InlineCode> are called class reference. 

</ContentBlock>
<ContentBlock>

<Subhead>What happens if I don’t initialize fields?</Subhead>

In chapter 3, I told you that C# hates uninitialized variables. It’s an error in C#. 

As for fields(member variables), they are set to default values if you don’t initialize them. 

Here are the default values for the major types.  

[rtable name="field-init-val"]
| Type | Value |
| --- | --- |
| bool | false |
| numbers(short, int, float, double, etc.) | 0 |
| class references | null |
[/rtable]

You can see <Outlink href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/default-values-table
">the entire table here.</Outlink> 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Defining methods: Multiple ways vs. Only way</Subhead>

Before ES2015, you needed to use <InlineCode>prototype</InlineCode> field to define methods. 

[javascript]
function Player(name) {
    this.name = name;
    this.hp = 300;
}

Player.prototype.getAttack(attackPoint) {
    this.hp -= attackPoint;
}

var p = new Player(”Kirito”);

p.getAttack(50);
alert(player.hp); // 250
[/javascript]

After ES2015, you can define methods inside classes like below: 

[javascript]
class Player {
    constructor(name) {
        this.name = name;
        this.hp = 300;
    },

    getAttack(attackPoint) {
        this.hp -= attackPoint;
    },
};

var player = new Player();
player.getAttack(50);
alert(player.hp); // 250
[/javascript]

But in C#, there is only one way of defining methods. That's what you have learned in the chapter 5. 

</ContentBlock>
<ContentBlock>

<Subhead>Access modifiers</Subhead>

[Stop! It’s restricted!]

In JavaScript, if a member is in an object, you can access it without any restriction.

Some developers add methods that start with <InlineCode>_</InlineCode> like <InlineCode>_hiddenMethod()</InlineCode> to make it look too weird to use them in your codes. 

This convention makes other developers hate using those methods in their codes. But it’s not a restriction. You can use them if you really need it. 

But in C#, you can restrict the access of members in classes systemically. Compiler will not compile the code.

To do so, you need to add access modifiers in front of members. 

The <Keyword>public</Keyword> keyword we used a lot is one of the modifiers. 

In C#, there are 6 access modifiers. But 3 of them below are used a lot:

* <Keyword>private</Keyword>: You can access these members only inside the class where they are. 
* <Keyword>public</Keyword>: There is no limitation for access. 
* <Keyword>protected</Keyword>: You can access these members in the same class where they are or in the descendant classes. 

If you want to learn more about other 3, please check <Outlink href="">this link</Outlink>. 

Let’s see how <Keyword>private</Keyword> keyword works. 

[code]
class Player
{
    public Player(string name) 
    {
        this.name = name;
    }

    public void ShowHiddenName() 
    {
        Console.WriteLine(this.hiddenName);
    }

    public string name;
    private string hiddenName = “Krigaya Kazuto”;
}

class FirstClass
{
    public static void Main(string[] args)
    {
        Player p = new Player(”Kirito”);
        Console.WriteLine(p.name);
        Console.WriteLine(p.hiddenName); // COMPILE ERROR!
        Console.WriteLine(p.ShowHiddenName()); // OK.
    }
}
[/code]

Compare <InlineCode>name</InlineCode> and <InlineCode>hiddenName</InlineCode>. They’re both the same string variables. But <InlineCode>name</InlineCode> works while <InlineCode>hiddenName</InlineCode> doesn’t. 

To use <Keyword>private</Keyword> variables outside classes, you need to create a way to access them like making <InlineCode>ShowHiddenName()</InlineCode> method. 

Conventionally, C# developers set fields as <Keyword>private</Keyword> and methods and properties as <Keyword>public</Keyword>. 

To understand how <Keyword>protected</Keyword> works, I’ve changed the code a little bit. The colon(:) syntax is for inheritance. You’ll learn more about it soon. 

[code]
class PlayerBase
{
    protected string secretSkill = “Big magical hat”;
}

class Player : PlayerBase
{
    public Player(string name) 
    {
        this.name = name;
        secretSkill = “Star burst stream”;
    }

    public void ShowHiddenName() 
    {
        Console.WriteLine(this.hiddenName);
    }

    public string name;
    private string hiddenName = “Krigaya Kazuto”;
}

class TestPlayer
{
    public static void Main(string[] args)
    {
        Player p = new Player(”Kirito”);
        Console.WriteLine(p.name);
        Console.WriteLine(p.secretSkill); // COMPILE ERROR!
    }
}
[/code]

The <Keyword>protected</Keyword> variable <InlineCode>secretSkill</InlineCode> can be accessed from the inside of the <InlineCode>Player</InlineCode> class. Because <InlineCode>Player</InlineCode> class inherited <InlineCode>PlayerBase</InlineCode> class. 

But from the outside of <InlineCode>PlayerBase</InlineCode> family classes, it cannot be accessed. It’s a compile error. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>this isn’t required. </Subhead>

In JavaScript, <Keyword>this</Keyword> is required for fields. You cannot remove it. If you do that, that variable becomes a local variable. 

Let’s revisit our Player example. 

[javascript]
class Player {
    constructor(name) {
        this.name = name;
        this.hp = 300;
    },
    getAttack: function(attackPoint) {
        this.hp -= attackPoint;
    },
};
[/javascript]

If you remove this from <InlineCode><Keyword>this</Keyword>.hp</InlineCode> in <InlineCode>constructor()</InlineCode> or <InlineCode>getAttack()</InlineCode> methods, <InlineCode>hp</InlineCode> becomes a local variable and it doesn’t affect <InlineCode>hp</InlineCode> of the Player instance. 

In contrast, C# doesn’t require <Keyword>this</Keyword> for fields. If there is no local variable with that name, compiler will try to find if there is a field with that name. 

[code]
class Player 
{
    public Player(string name) 
    {
        this.name = name;
        hp = 300;
    }
    public void getAttack (attackPoint) {
         hp -= attackPoint;
    },

    public string name;
    public int hp;
};

class TestPlayer
{
    public static void Main(string[] args) 
    {
        Player p = new Player(”Asuna”);
        p.getAttack(50);
        Console.WriteLine(p.hp);
    }
}
[/code]

As you can see, <InlineCode>p.hp</InlineCode> returns 250 without any problem.

Take a look at <Keyword>this</Keyword> in <InlineCode><Keyword>this</Keyword>.name</InlineCode> inside the constructor. 

You must not remove it. 

When you do that like <InlineCode>name = name</InlineCode>, it becomes impossible for compiler to be sure whether the <InlineCode>name</InlineCode> on the left side is a field or not. 

It interprets that it is a meaningless line that assigns its current value to the variable again. 

That’s why <Keyword>this</Keyword> is required in constructors if you want to use the same variable name in constructor argument and field name. 

Unlike JavaScript, it is recommended to remove <Keyword>this</Keyword> as much as possible in C#. 

So, in most cases, you can see <Keyword>this</Keyword> only in constructors. Because most developers don’t make name conflict with local variables and fields in other methods. It can cause unnecessary confusion. 

Actually, some developers even remove <Keyword>this</Keyword> in constructors by adding <InlineCode>m_</InlineCode> in front of the fields like <InlineCode>m_name</InlineCode>, <InlineCode>m_hp</InlineCode>, etc. 

Personally, I’m against it. Because the code looks unnatural like below. 

[code]
m_hp -= attackPoint;

Console.WriteLine(m_hiddenName);
[/code]

But many people love this convention. So, you need to be aware of them. 

</ContentBlock>
<ContentBlock>

<Subhead>We all share static</Subhead>

In JavaScript classes, static variables are shared by every instance of the class.

And so is C#. There’s no difference. 

[code]
class Player 
{
    public static int maxAttack = 50;
    public int normalAttack = 25;
    public void Attack() 
    {
       Console.WriteLine(”Normal Attack: “ + normalAttack + “ Max Attack: “ + maxAttack);
    }
}

class TestPlayer2
{
    public static void Main(string[] args) 
    {
        Player p1 = new Player();
        Player p2 = new Player();

        p1.Attack();
        p1.normalAttack = 50;
        Player.maxAttack = 100;

        p2.Attack();
    }
}

[/code]

The result of <Method>p2.Attack()</Method> is “Normal Attack: 25 Max Attack: 100”. It changed even if we didn’t change the value of <InlineCode>maxAttack</InlineCode> in <InlineCode>p2</InlineCode> like <InlineCode>p2.maxAttack = 100;</InlineCode>.

<Sectionhead>The secret of public static Main() method. </Sectionhead>

We’ve used countless <InlineCode><Keyword>static</Keyword> Main()</InlineCode> method to start our program. But why should it be <Keyword>static</Keyword>? 

As you well know, you can call <Keyword>static</Keyword> fields or methods without creating any instance of that class. 

When starting a program, there is no object yet. But we need to call our <InlineCode>Main()</InlineCode> method to start the program. 

So, <InlineCode>Main()</InlineCode> method should be a method that can be called without creating objects. 

That's what we can do with <Keyword>static</Keyword> methods. That’s why <InlineCode>Main()</InlineCode> is <Keyword>static</Keyword>. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Inheritance Comparison</Subhead>

In traditional JavaScript, there was no syntax for inheritance. <Outlink href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
">You could emulate it with call method and prototype field.</Outlink>

However, after ES2015, things have been changed. JavaScript supports class and objects can inherit objects with the special keyword: <Keyword>extends</Keyword>. 

[javascript]
class Rabbit { }
class BossRabbit extends Rabbit { }
[/javascript]

But in C#, all you need is colon(:). 

[code]
class Rabbit { }
class BossRabbit : Rabbit { }
[/code]

<Sectionhead>Multiple inheritance</Sectionhead>

JavaScript doesn’t support multiple inheritance. 

It even doesn’t support interface feature almost every object-oriented languages does. 

If you really need multiple inheritance, you need to go through <Outlink href=”https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance/35925061”>a painful way</Outlink>.

In C#, you cannot inherit more than 1 class. But you can implement multiple interfaces. 

[code]
class Rabbit {}

interface ICommonBossSkills 
{
    void BreakGround();
}

class BossRabbit : Rabbit, ICommonBossSkills 
{
    void BreakGround() 
    {
        // Implement breaking. 
    }
}
[/code]

Unlike Java, Swift, C# doesn’t support default implementation. It is said that <Outlink href="https://blog.ndepend.com/c-8-0-features-glimpse-future/">it will be added at C# 8</Outlink>. But no one knows when it will be.

</ContentBlock>
<ContentBlock>

<Subhead>Polymorphism</Subhead>

In JavaScript, every method is basically overridable. 

[javascript]
class Rabbit {
    throwCarrot() {
        alert(”throw one carrot”);
    }
}

class BossRabbit extends Rabbit {
    throwCarrot() {
        alert(”throw 3 carrots”);
    }
}

var rabbit = new Rabbit(); 
rabbit.throwCarrot(); // throw one carrot.
rabbit = new BossRabbit();
rabbit.throwCarrot(); // throw 3 carrots. 
[/javascript]

But in C#, if you don’t add the <Keyword>keyword</Keyword> virtual in front of the return type in the base class and <Keyword>override</Keyword> in the child class, you cannot override the methods. 

Let’s make an experiment without <Keyword>virtual</Keyword>/<Keyword>override</Keyword> keywords. 

[code]
class Rabbit {
    public void ThrowCarrot() {
        Console.WriteLine(”Throw one carrot.”);
    }
}

class BossRabbit : Rabbit {
    public void ThrowCarrot() {
        Console.WriteLine(”Throw 3 carrots.”);
    }
}

class TestPolymorphism
{
    public static void Main(string[] args) 
    {
        Rabbit rabbit = new Rabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
        rabbit = new BossRabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
    }
}
[/code]

When you assign <InlineCode>BossRabbit</InlineCode> to <InlineCode>rabbit</InlineCode> variable again, it’s actually a <InlineCode>BossRabbit</InlineCode>, but it acts like a normal <InlineCode>Rabbit</InlineCode>. It’s not intended. Boss should act like a boss. 

To solve this problem, add <Keyword>virtual</Keyword> keyword in front of <InlineCode>ThrowCarrot()</InlineCode> in <InlineCode>Rabbit</InlineCode> class. And add <Keyword>override</Keyword> keyword in front of <InlineCode>ThrowCarrot()</InlineCode> in <InlineCode>BossRabbit</InlineCode> class like below. 

[code]
class Rabbit {
    public virtual void ThrowCarrot() {
        Console.WriteLine(”Throw one carrot.”); 
    }
}

class BossRabbit : Rabbit {
    public override void ThrowCarrot() {
        Console.WriteLine(”Throw 3 carrots.”);
    }
}

class TestPolymorphism
{
    public static void Main(string[] args) 
    {
        Rabbit rabbit = new Rabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
        rabbit = new BossRabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
    }
}
[/code]


<Sectionhead>Casting objects</Sectionhead>

But there was something odd in our <InlineCode>Rabbit</InlineCode> and <InlineCode>BossRabbit</InlineCode> example. Did you find it? 

Although <InlineCode>BossRabbit</InlineCode> inherits <InlineCode>Rabbit</InlineCode>, they are different classes. 

But you could assign <InlineCode>BossRabbit</InlineCode> object to <InlineCode>Rabbit</InlineCode> variable without any casting like below: 

[code]
Rabbit rabbit = (Rabbit) new BossRabbit();
[/code]

How was this possible? 

It’s because <InlineCode>BossRabbit</InlineCode> has every feature that <InlineCode>Rabbit</InlineCode> has. 

Why? 

Because it inherited <InlineCode>Rabbit</InlineCode>! Thanks to inheritance, <InlineCode>BossRabbit</InlineCode> has every member that <InlineCode>Rabbit</InlineCode> has. 

That’s why <InlineCode>BossRabbit</InlineCode> can be assigned to <InlineCode>Rabbit</InlineCode> without any casting. 

But the reverse (assigning <InlineCode>Rabbit</InlineCode> to <InlineCode>BossRabbit</InlineCode>) doesn’t work, you need to clearly specify it with casting parentheses. 

[code]
Rabbit rabbit = new BossRabbit();
BossRabbit bossRabbit = (BossRabbit)rabbit;
[/code]

It’s because you cannot sure your <InlineCode>Rabbit</InlineCode> reference indicates a <InlineCode>BossRabbit</InlineCode> object. So, compiler wants to be sure that it’s really a <InlineCode>BossRabbit</InlineCode> object. 

</ContentBlock>
<ContentBlock color="grey">

<Subhead>Properties</Subhead>

Do you know the <Method>Object.defineProperties()</Method> method in JavaScript? You can use it to restrict access to members in objects. 

In other words, you can use it to create read-only members or do additional checks before assigning a new value to a member. 

For example, if you want to make a read-only field, you can write code like this: 

[javascript]
var player = {};

Object.defineProperty(player, 'attackPoint', {
    value: 60,
    writable: false,
});

player.attackPoint = 30;
alert(player.attackPoint); // 60
[/javascript]

Or you can define getter like below: 

[javascript]
const player = {};

Object.defineProperty(player, 'attackPoint', {
    get: function() { return 60; },
});

player.attackPoint = 30;
alert(player.attackPoint); // 60
[/javascript]

As you can see, we’ve assigned a new value to <InlineCode>attackPoint</InlineCode>, but it didn’t change. 

C# supports special syntax for this feature. 

[code]
class Player 
{
    public int AttackPoint 
    {
        get 
        {
            return 60;
        }
    }
}

class TestProperty
{
    public static void Main(string[] args) 
    {
        Player p = new Player();
        p.AttackPoint = 30; // ERROR;
        Console.WriteLine(p.AttackPoint);
    }
}
[/code]

There’s no setter in our Player class above. To solve this problem, we need to create a set block. 

[code]
class Player {
    public int AttackPoint 
    {
        get 
        {
            return 60;
        }
        set 
        {
            attackPoint = value;
        }
    }

    private int attackPoint;
}
[/code]

<Keyword>value</Keyword> keyword is used inside the set block to deliver the value on the right side. In our example, it’ll be <Number>30</Number>. 

But as our getter returns only <Number>60</Number>. The result won’t change. It’ll still be <Number>60</Number>. 

<Sectionhead>Why property is than getter/setter</Sectionhead>

Above, I told you that fields are usually <Keyword>private</Keyword> and methods are usually <Keyword>public</Keyword>. 

It was not the tradition of C#. It was from the tradition of OOP languages older than C# like C++ and Java. 

But if we set fields to <Keyword>private</Keyword>, we cannot change the values of the fields outside the class. 

That's why developers created methods called getter and setter like below: 

[code]
class GetterAndSetter 
{
    public int GetValue() { return value; }
    public void SetValue(int value) { this.value = value; }
    private int value;
}
[/code]

They did this because sometimes we need to define some restriction for some fields later like "that field should never be above 100". 

If that field is <Keyword>public</Keyword> and it becomes hard because we need to change everywhere that field is used outside the class. 

If we set that field as <Keyword>public</Keyword>, we have to change the code in the class where that field is. 

But as you can see below, this makes code look weird. 

[code]
a.SetValue(a.GetValue() + 1);
[/code]

Even to do a simple thing like adding value. We need to caller getter and setter. It looks much complicated than simple <InlineCode>a.value++</InlineCode>.

But in C#, we have property. Properties are used to restrict access. 

It means that we need to make dumb properties like below to follow this convention. 

[code]
class PropertiesAreDumb
{
    public int DumbInteger 
    {
        get
        {
            return dumbInteger;
        }
        set
        {
            dumbInteger = value;
        }
    }

    public string DumbString
    {
        get
        {
            return dumbString;
        }
        set
        {
            dumbString = value;
        }
    }

    private int dumbInteger;
    private string dumbString;
}
[/code]

It’s a really long code without any content.

So, C# created a way to shorten this code. 

[code]
class PropertiesAreGood
{
    public int GoodInteger { get; }
    public string GoodString { get; set; }
}
[/code]

It's really simple. Create a property and simply state <InlineCode><Keyword>get</Keyword>;</InlineCode> or <InlineCode><Keyword>set</Keyword>;</InlineCode> inside braces. You don't need to fill the contents. 

Then, the compiler will autogenerate those dumb sections for you. 

You don’t even have to create variables. 

When you need to make a complicated restriction for some fields, you can always create them later and fill the related properties with codes.

</ContentBlock>

<Quiz>

<QTitle>OX. Are they correct? </QTitle>

<OX>
<OXQ>In C#, you cannot access fields without <Keyword>this</Keyword>.</OXQ>
<OXA>X. In C#, when there is no <Keyword>this</Keyword>, compiler automatically tries to check if there is a field with that name. </OXA>
</OX>

<OX>
<OXQ>If you use fields without initialization, they’re initialized to the default values. </OXQ>
<OXA>O. bool is false. Numbers are 0. And references are null. </OXA>
</OX>

<OX>
<OXQ>You can access <Keyword>protected</Keyword> fields from child classes. </OXQ>
<OXA>O. That’s the role of protected. </OXA>
</OX>


<QTitle>Be the Compiler. Find errors and fix them.</QTitle>

[code]
class Player 
{
    private int normalAttack;
}

class TestPlayer
{
    public static void Main(string[] args)
    {
        Player.normalAttack = 100;
        Console.WriteLine(”Player attack: {0}”, Player.normalAttack);
    }
}
[/code]

<Answer>

First of all, to use an object in C#, you need to create one with the <Keyword>new</Keyword> operator. 

[code]
Player p = new Player();
[/code]

<InlineCode>normalAttack</InlineCode> isn’t a <Keyword>static</Keyword> variable. So, the player should be changed to <InlineCode>p</InlineCode>. 

Finally, <InlineCode>normalAttack</InlineCode> is <Keyword>private</Keyword>. You cannot use it outside <InlineCode>Player</InlineCode>. There are 2 ways to solve this problem. 

1) change <Keyword>private</Keyword> to <Keyword>public</Keyword>. 
2) create a property. 

In C#, fields are usually <Keyword>private</Keyword> and we create properties to restrict access. So, we need to create one like below: 

[code]
class Player 
{
    public int NormalAttack { get; set; }
}
[/code]

Here’s the final code:

[code]
class Player 
{
    public int NormalAttack { get; }
}

class TestPlayer
{
    public static void Main(string[] args)
    {
        Player p = new Player();
        p.NormalAttack = 100;
        Console.WriteLine(”Player attack: {0}”, p.NormalAttack);
    }
}
[/code]

</Answer>

[code]
class Lion 
{
    public void Jump()
    {
        Console.WriteLine(”Jump!”);
    }
}

class BossLion
{
    public void Jump()
    {
        Console.WriteLine(”Double Jump!”);
    }
}

class TestPlayer
{
    public static void Main(string[] args)
    {
        Lion bossLion = new BossLion();
        Console.WriteLine(bossLion.Jump());
    }
}
[/code]

What’s the result? How should we make bossLion to act like a boss? 

<Answer>

It’s not a “Double Jump!”. It’s a “Jump!”.

To solve this problem, we need to add <Keyword>virtual</Keyword> to <InlineCode>Lion</InlineCode> class and <Keyword>override</Keyword> to the <InlineCode>BossLion</InlineCode> class like below:

[code]
class Lion 
{
    public virtual void Jump()
    {
        Console.WriteLine(”Jump!”);
    }
}

class BossLion
{
    public override void Jump()
    {
        Console.WriteLine(”Double Jump!”);
    }
}
[/code]

</Answer>


<QTitle>Define a class.</QTitle>

What is your favorite game character? What characteristics do they have? In other words, what data do they need? What action do they perform? 

And how will you express that as a class in your game? 

<Answer>

You might love a lot of characters. But in this example, I’ll use my favorite characters: Sonic. 

There are a lot of differences between Modern Sonic and Classic Sonic. Modern Sonic can do more than Classic Sonic. 

But in our example, I’ll use Classic Sonic because it’s simple.

Sonic runs through the stages and collect rings and jumps and hits the bad robots to break them. 

From this, we’ve got data and actions. 

* Data: the count of rings
* Action: run, jump.

Then, we need to think about the data we need to support the actions. 

1\. Run. 

Running means that you’re moving from one place to another. So, you need variables to hold Sonic’s current position. Let’s call them x and y. 

He doesn’t run at an even speed. It varies. So, we need speed, acceleration. 

And he can move backward. We need direction. 

Finally, his speed doesn’t increase forever. So, we need maximum speed. 

2\. Jump

Normally, Classic Sonic can jump only once. So, we need a bool variable like jumped. 

But if he has some shields, he can do some interesting actions like double jump (electric shield), moving down fast (bubble), air dash (fire). 

So, we need an <Keyword>enum</Keyword> variable to hold these statuses. 


Then, our Classic Sonic class would look like this. 

[code]
enum Shield 
{
    FIRE,
    BUBBLE,
    ELECTRIC,
}

class ClassicSonic
{
    int x, y;
    int speed;
    int direction;
    int acceleration;
    int maxSpeed;
    bool jumped;
    Shield shield;
}
[/code]

</Answer>

</Quiz>

<ContentBlock>

<ChapterTitle number="7">Bonus. How to use the debugger. </ChapterTitle>

Visual Studio debugger and Chrome debugger shares a lot of similar shortcut keys and features. 

First of all, if you want to set a breakpoint, click the blue-gray left margin. It’ll create a red circle. 

[red circle image]

Then, press <Key>F5</Key> to start the debugger. 

To check the value of a variable, there are 2 ways:

1) Hover the mouse pointer over that variable

2) Or check the value on the watch panel below.

[watch panel image]

It’s just like Chrome. But there is one convenient feature in VS. If you click the pin, then you can pin the variable on the screen. 

[pin the value.]

Navigation features are almost identical. 

* Go to the next line -> F10. 
* Go into the method/property in that line -> F11
* Go out from the current method/property -> Shift + F11
* Go to the next breakpoint -> F5
* Stop the debugger -> F6.

Step over, in and out are same. But go to the next breakpoint is F5, not F8. It’s because F5 is refresh in web browsers. 

</ContentBlock>
<ContentBlock>

At the beginning of this article, I told you that C# is all about types. 

By now, you're well aware of what this means. 

* You must specify types when you create variables and define methods. 
* And you can create your own types by defining objects. 

But without this obsessiveness in types, you could feel that they’re somewhat similar, too. 

Now that you know the basics of C#, you can make programs you want. Go for it!

If making a game with Unity is your goal, let’s have more fun together in my Unity for beginners post. 

(Like C# for complete beginners article, it’s not written yet. If you want to read this post on its release day, please sign up my email list.)

</ContentBlock>