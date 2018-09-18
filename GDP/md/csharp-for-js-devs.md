---
title: "C# for JavaScript Developers"
description: The fastest way to learn C# for web developers is to use their JavaScript knowledge.
slug: csharp-for-js-devs
time: 2018-09-15
src: aasdf.png
---
[Title]C# Guide for JavaScript Developers: Side-by-Side Comparison of all useful features[/Title]

[ContentBlock]

![C# guide for JavaScript developers isn't a fantasy.](/img/cs4j/opening.png)

You’re not a beginner. 

Yes. C# is new to you. But you know the basics of programming. 

But most C# tutorials treat you like a newbie. They kindly explain variables, functions to you. Unfortunately, you know them by heart. 

What you need to know now is how to finish your daily tasks like declaring variables, looping arrays, handling objects with C#. 

And this guide will help you do that. 

[Note]

This blog is about making games with [Unity3D](https://unity3d.com). So, I’ve included a chapter about Unity JavaScript. If you’re not interested in making games, skip the chapter 0. 

[/Note]

[SignupBox title="Don't have time to read it now?" icon="fa-book" modalID="download-ebook"]
Don't worry. I prepared the FREE PDF version of this post. 
You can read it when it's good for you. 
[/SignupBox]

[Modal id="download-ebook" title="Get the FREE PDF version of this guide." src="" /]

[/ContentBlock]
[ContentBlock color="grey"]

[ChapterTitle number="0"]Unity Supports JavaScript. Why should I learn C#?[/ChapterTitle]

![Why should I learn C#?](/img/cs4j/why-csharp.png)

Because Unity has never supported JavaScript since its birth. 

It sounds a bit radical. [Because Unity team compared the difference between C# and Unity JavaScript in their official YouTube channel.](https://www.youtube.com/watch?time_continue=1&v=GPpw_ZE1LVc) 

I'll tell you the secret. It is not true JavaScript. 

If you cannot believe me, take a look at these lines of code. It's the example code in the YouTube video above. 

[Code lang="typescript"]
#pragma strict
var age: int = 5;
[/Code]

Have you ever seen the keywords like `#pragma` and `int` in JavaScript? 

If you have experience with [TypeScript](https://www.typescriptlang.org/), you might have seen `int` after colon(:). But as you well know, they are not the keywords for current or future JavaScript. 

If you skim [this answer in official Unity Q&A site](https://answers.unity.com/questions/12911/what-are-the-syntax-differences-in-c-and-javascrip.html), you’ll be surprised. Unity JavaScript has a lot of weird features you couldn’t see in real JavaScript. 

![There are weird features like private function, Script Directive](/img/cs4j/weird-javascript-syntax.png)

I know why you have considered this option. Because you're an awesome JavaScript developer. And you want to use that skill in Unity and save time learning C#. 

But unfortunately, **Unity JavaScript (or UnityScript) isn’t a real JavaScript**. So, you need to learn the differences to use it properly. 

In short, it doesn’t make any difference. You need to learn something new anyway. 

Furthermore, [Unity team decided to deprecate Unity JavaScript in 2017.](https://blogs.unity3d.com/kr/2017/08/11/unityscripts-long-ride-off-into-the-sunset/) So, don’t ride on a sinking ship. 

![Good bye UnityScript](/img/cs4j/good-bye-unityscript.png)

Frankly speaking, C# is not a piece of cake for JavaScript developers. You need to learn a lot of new concepts and syntaxes. 

But they share core concepts like variables, control flow statements and functions. All you need to do now is to learn how to get your jobs done in C# way. 

And this guide helps you do that. 

[/ContentBlock]
[ContentBlock]

[ChapterTitle number="1"]Your First C# Program[/ChapterTitle]

[/ContentBlock]
[ContentBlock]

To do front-end web programming, we basically need a text editor and a web browser. 

So, for beginners, you don’t need to install any new software. You can just use notepad.exe and Edge. 

(Yes. It’s an over-simplification. It sounds too much like 2005. In 2018 and beyond, to make a proper front-end web program, you need a bunch of tools like [npm](https://www.npmjs.com/), [babel](https://babeljs.io/), [browser-sync](https://browsersync.io/), etc.)

But to make a C# program, you must have a C# compiler. Without it, you cannot execute a single line of C# code. 

Because C# compiler creates an executable C# program. 

![To execute C#, we need a compiler.](/img/cs4j/csharp-compiler.png)

If you’re a command line enthusiast, you can use [.NET core](https://www.microsoft.com/net/learn/get-started/windows). But almost every developer uses Visual Studio. Because it’s visual (hmm...) and easier. 

[ContentBreak /]

Now, let’s install Visual Studio. Go to the Visual Studio website and download it. 

Don’t worry about paying tons of money to Microsoft. **Visual Studio Community edition is free for personal use.** You don’t need to search torrent sites like a decade ago. 

[Goto href="https://visualstudio.microsoft.com/"]Go to Visual Studio Website[/Goto]

Click Visual Studio Community. 

![Download Visual Studio Community](/img/cs4j/download-visual-studio-community.png)

Before 2017, it was really inconvenient to use C# in Mac. But things have changed. MS released Visual Studio for Mac in 2017! You don’t have to overcome the painful route like in old days. 

Visit Visual Studio for Mac website and download the installer. 

[Goto href="https://www.visualstudio.com/vs/mac/"]Go to Visual Studio for Mac website.[/Goto]

![Visual Studio for Mac](/img/cs4j/vs-mac.png)

Visual Studio is big and complicated. It takes a lot of time to install it. So, let’s start it early. 

Fortunately, the installation process is really simple. 

[Step number="1"]First, agree on the terms. [/Step]

![Agree Visual Studio terms](/img/cs4j/agree-the-terms.png)

[Step number="2"]Then, choose workloads. In our case, we should check .NET desktop development. And click [Button]Install[/Button] to proceed. [/Step]

![Check .NET workload](/img/cs4j/vs-install.png)

[Step number="3"]Wait. [/Step]

<div id="modify-vs">
[Tip title="Did you already install VS?"]

What if you already installed VS and you just want to add ‘.NET desktop development’ to your workload? 

[Step number="1"]Open VS and go to Tools > Get tools and features. [/Step]

![Tool and features menu](/img/cs4j/tools-and-features-menu.png)

[Step number="2"]You can see the Workload page. Check .NET Desktop Development and press [Button]Modify[/Button]. [/Step]

![Check .NET workload](/img/cs4j/check-csharp-workload.png)

[/Tip]
</div>

[/ContentBlock]
[ContentBlock color="grey"]

# It's not the Hello, World you knew

Traditionally, we make a "Hello, World" program when we learn a new programming language. C# version looks like below:

![Hello, World app](/img/cs4j/hello-world-csharp.png)

I know this black and white console environment is not your goal. 

But I’ve chosen it because it’s simple. You don’t have to learn other complicated Visual Studio features to make console applications. 

If you want to make other applications like a web server, desktop application or games, you need to learn related libraries like [ASP.NET](https://www.asp.net/), [WPF](https://docs.microsoft.com/en-us/dotnet/framework/wpf/getting-started/introduction-to-wpf-in-vs), [WinForm](https://docs.microsoft.com/en-us/dotnet/framework/winforms/) from other sources after finishing this article. 

As for game development, you can use [Unity](https://unity3d.com). 

Let’s create our first project. 

[Step number="1"]Open VS and click File > New > Project. Or just press [Key]Ctrl+Shift+N[/Key]. [/Step]

![New Project menu](/img/cs4j/new-project-menu.png)

[Step number="2"]Choose Visual C# > Console App. And name it "First". [/Step]

![Create console app project](/img/cs4j/create-console-app-project.png)

If you want to change your save location, click "Browse" button. 

[Note title="No Console App option under Visual C#?"]

What if there is no Console App option under my Visual C# option? 

It’s because you haven’t installed .NET Desktop Development workload. [Please check above to learn how to add that.](#modify-vs)

[/Note]

[Step number="3"]First.cs is open by default. Let’s type in `Console.WriteLine("Hello, World!");` like below. Unlike JavaScript, semicolon(;) is required in C#. Don’t forget. 
[/Step]

[Code title="Hello, World!"]
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
            $b Console.WriteLine("Hello, World"); $b
        }
    }
}
[/Code]

[Step number="4"]Click the "Build" menu on the top menu. The shortcut for this menu is [Key]F6[/Key].[/Step]

![Build menu](/img/cs4j/build-solution.png)

[Step number="5"]Run the program by pressing [Key]Ctrl + F5[/Key]. You just made your first C# program! [/Step]

![Hello, World](/img/cs4j/hello-world-csharp.png)

[/ContentBlock]

[SignupBox title="An execution is worth thousand words." icon="fa-file-download" modalID="download-examples"]
Download and execute the examples in this post.
And experience the differences between C# and JavaScript.
[/SignupBox]

[Modal id="download-examples" src="/img/cs4j/download-files.png" title="Get Examples in this article." /]

[ContentBlock]

# Why is it so complicated? 

Do you remember the JavaScript version of "Hello, World"? It was really simple. 

[Code lang="javascript"]
alert("Hello, World!");
[/Code]

In comparison, C# version is too complicated. 

It’s because **methods and variables cannot live outside classes** in C#. If we try to write the code like below, the compiler will show you an error. 

```
Console.WriteLine("Hello, World!");
```

That’s why C# compiler generated a skeleton file that contains `First` `namespace` and `First` `class`. 

[/ContentBlock]
[ContentBlock color="grey"]

# Understanding C# "Hello, World"

Scroll a little bit up and read the C# "Hello, World" again. You can find several keywords and methods like `using`, `namespace`, `class`, `Main()` and `Console.WriteLine()`. 

We can guess `Console.WriteLine()` shows texts on the screen. But what are all those others for? 

We’ll learn about `using`, `namespace`, `Main()` method here. And we’ll learn about `class` in detail in chapter 6. 

[/ContentBlock]
[ContentBlock]

## `using` in C# is `require` in JavaScript. Right?

In modern JavaScript programming, [NPM](https://www.npmjs.com/) became essential. (I know some of you prefer [yarn](https://yarnpkg.com).) 

Because there are fabulous libraries that save us tons of time. After installing them, you can import them to your project with `require` function like below:

[Code lang="javascript"]
var _ = require(’lodash’);
[/Code]

If you’re familiar with ES2015, the code above can be written like this: 

[Code lang="javascript"]
import _ from ‘lodash’;
[/Code]

In C#, `using` keyword seems to do the similar thing that `require`/`import` does. But they are really different. 

Because the purpose of `namespace` is to **avoid crashes in names**, not to import libraries. 

To import libraries to a project, you need to use "add reference" menu under the project name.

![Add reference menu](/img/cs4j/add-reference.png)

And once the references are added, you can use the contents in those references without using `using` keyword. 

For example, `Console` class is in `System` namespace. 

Let’s comment out `using System;` line with `//`. Then, add `System.` in front of `Console` like below: 

[Code title="Comment out using"]
//using System;

namespace First
{
    class Program
    {
        static void Main(string[] args)
        {
            $b System. $bConsole.WriteLine("Hello, World");
        }
    }
}
[/Code]

Compile and run it. It works perfectly. 

`using` keyword isn’t for importing data. It’s for removing messy namespace notation in front of the classes. 

Just compare the codes below:

```
System.Console.WriteLine("It’s");
System.Console.WriteLine("Really");
System.Console.WriteLine("Messy!");
```

```
Console.WriteLine("It");
Console.WriteLine("Looks");
Console.WriteLine("Better!");
```

Which do you think is easier to read? Isn’t it the second? 

By the way, NPM for C# is [NuGet](https://www.nuget.org/). 

[/ContentBlock]
[ContentBlock]

# What is the Main() method? Why do we need it?

Whether you use a web browser or Node.js, they read the contents of JavaScript code files and create machine code by interpreting them. 

This style of processing code has one advantage: 

**The starting point is clear.**

JavaScript compiler can start from the file you used with `node` command or you linked to your HTML file with `<script>` tag. 

![Javascript execution flow](/img/cs4j/javascript-execution-flow.png)

But in C#, there’s one more step from code to execution. It’s compilation. That’s what you did by pressing [Key]F6[/Key] key. 

C# compiler reads your code files and creates an .exe file. And .NET framework or Mono translates the compiled code to machine code. 

This compilation step is useful because it speeds up the translation into machine code. 

![C# execution: compiler and .NET Framework](/img/cs4j/csharp-execution.png)

But there is a problem for this method: 

**The starting point is unclear.**

In our example project, we have only one file. So, it’s simple. 

But in real-world projects, there are at least dozens to hundreds, even thousands of files. Then, which file is the starting point? And which method?  

To solve this problem, C# made one rule:

**The starting point of C# program is the `static void Main()` method.**

That’s why we need `Main()` method. You might wonder what are `public` and `static` in front of `Main()`, then. We’ll learn about them in Chapter 6, OOP. 

![C# execution](/img/cs4j/csharp-execution-flow.png)

[Note]

From now on, I won’t show you `using namespace` lines, `class` name and `static void Main()` method except when there are meaningful changes in them to save space. 

[/Note]

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Are these statements correct?

[OX]
Q>>  If you use namespaces in C#, it will load modules. 
A>> X. Namespaces don’t load module, we use them to avoid name crashes. If you want to remove namespace names in front of the classes, add `using` line at the top. 
[/OX]

[OX]
Q>>  `Main()` method is the starting point of every C# Program. 
A>> O. Without `Main()` method, you cannot execute C# programs. 
[/OX]

[QuizBreak /]

QTitle>> Make a Program. Make a program that shows this result. 

[Console]
Wake up, Link! 
[/Console]

[Answer]

It’s simple. All we need to do is replace "Hello, World" with "Wake up, Link!". 

```
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
            $b Console.WriteLine("Wake up, Link!"); $b
        }
    }
}
```
[/Answer]

[/Quiz]

[ContentBlock]

[ChapterTitle number="2"]Variables: You're not my type[/ChapterTitle]

You just finished your first C# program. You don't know much about C# now. But you could still feel that C# and JavaScript are really different. 

Unfortunately, it was just a beginning. 

To declare a variable in JavaScript, all you need to do is add `var` keyword in front of your variable name. 

[Code lang="javascript"]
var age = 12;
var name = "Lara Croft";
[/Code]

After ES2015, you can use keywords like `let` and `const` instead of `var`. But still, there are only 3 keywords and you can even create variables without using them if you are not using the [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

In addition, you can assign any type of value to existing variables. 

[Code lang="javascript"]
var age = 12;
var name = "Lara Croft";

age = {
    mother: 45,
    father: 48,
    friend1: 11,
};
name = 61;
[/Code]

We assigned an object to `age` which was a number. And a number is assigned to `name` which was a string. There's no problem. 

[ContentBreak /]

However, in C#, you need to specify the type of every variable in front of it like below. 

```
int age = 12;
string name = "Lara Croft";
```

The type of `age` is `int`(eger). And the type of `name` is `string`. 

After the declaration, the types of the variables are set. In other words, the types of the variables cannot be changed to other types. 

So, when you try to assign a value with a different type, the compiler will show you an error. 

```
int age = 12;
string name = "Lara Croft";

age = new object(); // ERROR!
name = 1234; // ERROR!
```

As you can see, types are important in C#. Actually, this statement is too weak. It should be:

_**C# is all about types.**_

[/ContentBlock]
[ContentBlock color="grey"]

# 6 Number types

Basically, numbers in programming languages can be grouped into 2 big categories: integers and floating point numbers. 

* Integers are numbers without fractional component like -1147, -5, 0, 2, 15.
* Floating point number has a fractional part like -2.33, 6.72, 0.99. 

In C#, there are several types for each category. 

* Integer types: `short`, `int`, `long`
* Real number types: `float`, `double`, `decimal`

Developers don’t like to overcomplicate things. But having multiple types for the same purpose seems like exactly what they hate. 

![Number types](/img/cs4j/number-types.png)

## Then, why do we need all of them?

Because they have different sizes. It’s a trade-off between size, precision and speed. 

Suppose that you need to save 1 billion small integer numbers like age. They're smaller than 32,767. Then, we can save 2GB of storage by using 2-byte-sized `short` type instead of 4-byte-sized `int`. 

This saving method can be applied to floating point number types, too. When you use 4-byte-sized `float`, you save space and time. Because it's faster than `double` or `decimal`. But you can lose some insignificant numbers. 

If you want more accurate result, you need to use bigger-sized floating point number types like them. But it'll spend more space and time. 

![Small vs. Big size of boxes.](/img/cs4j/data-sizes.png)

[/ContentBlock]
[ContentBlock color="grey"]

## A hidden problem behind number types

I told you that number types have different sizes. It means their sizes are not infinite. 

So, they can only represent the finite number of numbers. In other words, there are maximum and minimum numbers for integers and real numbers. Here’s the table:

| Type | Min | Max |
| --- | --- | --- |
| short | -32,768 | 32,767 |
| int | -2,147,483,648 | 2,147,483,647 |
| long | <span class="responsive-fontsize80">-9,223,372,036,854,775,808</span> | <span class="responsive-fontsize80">9,223,372,036,854,775,807</span> |

| Type | Smallest | Biggest | 
| --- | --- | --- |
| float | ±1.5 × 10^-45 | ±3.4 × 10^38 |
| double | ±5.0 × 10^−324 | ±1.7 × 10^308 |
| decimal | ±1.0 x 10^-28 | ±7.9 x 10^28 | 

Actually, JavaScript has this limitation, too. But teachers and books usually don’t emphasize this point. 

It might be because the maximum and minimum values are reasonably big enough. They’re 9,007,199,254,740,992 and -9,007,199,254,740,992. The number's a little bigger than 9 quadrillion. 

In most cases, you don’t need to handle bigger numbers than them. 

[ContentBreak /]

Some of you are curious why I’m emphasizing this limitation in number types. Because when you try to use a big number that the variable type cannot handle, it’ll cause **overflow**. 

Let’s check the example below: 

```
int max = 2147483647; // int maximum
int min = -2147483648;

Console.WriteLine("Max + 1 is min: {0}", max + 1 == min);
Console.WriteLine("Min - 1 is max: {0}", min - 1 == max);
```

As you can see, when the number went over the limit, it circles back to the other side. That’s why `max + 1 == min` and `min - 1 == max`. 

But it doesn’t happen in JavaScript. If the value goes under the MIN, it’s MIN. If the value goes over the MAX, it’s MAX. 

[Code lang="javascript"]
var max = 9007199254740992; 
var min = -max; 
alert(max == max + 1); // true !
alert(min == min - 1); // also true !
[/Code]

If you think overflow is werid, think about car mileage meter. When the number exceeds the limit, it goes back to the beginning, 0000.

![It's just like mileage meter](/img/cs4j/mileage-meter.png)

To avoid overflow, remember the approximate maximum of `int`: 2.1 billion. 

When you need a number bigger than 2.1 billion, don't use `int`. Use `long` instead. 

[/ContentBlock]
[ContentBlock]

## Raw numbers are not the same type

This number type size can cause problems when you’re assigning number literals. (Literals are hard-coded raw numbers like 15, 3.14, 6.72). 

Because we don’t know the type of those literals. 

Think about this: 

You cannot assign an 8-byte `double` literal to a 4-byte `float` variable without losing data. 

To solve this problem, we need to show the type of literals. And C# solved this by adding suffixes after literals. 

```
long a = 1234L;
float b = 3.1415f;
decimal c = 2.71828m;
```

`L` is for `long`. `f` is for `float` and `m` is for `decimal`. 

`L` is capital. But `f` and `m` are small. Actually, it’s not a rule. You can use both `F` and `f`, `M` and `m`, `L` and `l`. But small `l` looks like number 1. It can be confusing. So, `L` is recommended. 

Then, where are the suffixes for `short`, `int` and `double`? 

As for `int` and `double`, they’re default literal types for integers and real numbers. So, we don’t have suffixes for them. 

And as for `short`, it’s a special case. `int` literal is automatically converted to `short` if it is between -32,768 and 32,767. If not, it’s a compile error. 

```
short s = 100000; // ERROR!
```

[ContentBreak /]

If you’re a novice Unity developer, you might have seen this error with float variables.

[ErrorQuote]
Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type
[/ErrorQuote]

Now, we know why this happened. It’s because there is no `f` after the literal. Add `f` like `float pi = 3.14f;`

[/ContentBlock]
[ContentBlock color="grey"]

## How to convert types

OK. We learned that you cannot assign bigger-sized variables into small-sized one. 

But what should we do when we need to do that? 

We should use casting.

The rule is simple. Add type name in front of the variable between parentheses. 

```
long a = 1234L;
int b = (int)a;

double c = 3.14;
float d = (float)c;
```

We need casting because compiler wants to warn you because it’s unsafe. It wants to help you avoid mistakes. 

That’s why we need to tell our dear compiler with casting: "Don’t worry. It’s safe. Everything will be all right."

![Compiler pointing code: assuring developer.](/img/cs4j/compiler-asks-you-is-it-ok.png)

[/ContentBlock]
[ContentBlock]

# strings and characters. 

In JavaScript, you can use both `‘` and `"` to handle a single character or a string of characters. You can choose whatever you want. It doesn’t matter. 

[Code lang="javascript"]
var a = ‘abc’;
var b = "abc";
[/Code]

However, in C#, `'` is for single characters. `"` is for strings. 

The type that uses `'` is a `char` and the type that uses `"` is a `string`. So, you cannot use them interchangeably as you did in JavaScript. 

[Code title="char vs. string"]
char a = ‘a’;
string b = "abc";
char c = "1"; // ERROR. "1" is a string, not a character. 
string d = ‘s’; // ERROR. ‘s’ is a character, not a string. 
string e = "e"; // CORRECT. "e" is a string with a single character. 
[/Code]

Then, what if we want to add `"` in string? In JavaScript, there were 2 ways:

* Use `'` string. 
* Escape them by `\"`.

You cannot use the method 1 in C#. So, you need to escape it by `\"`. 

```
string f = "I am fed up with \"Hello, World!\" examples.";
```

![' is for char. " is for string.](/img/cs4j/quotes.png)

## There are many similar operators!

C# and JavaScript use the same operators for many `string` operations. 

For example, to concatenate `string`s, use +. 

```
string name = "Lara " + "Croft";
```

Like JavaScript, you can use + to format a string. But you can also use the `string.Format()` method or `$` syntax. 

```
int i = 1;
int j = 2;
string a = "" + i + " + " + j + " = " + (i + j);
string b = string.Format("{0} + {1} = {2}", i, j, i + j);
string c = $"{i} + {j} = {i + j}";

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);
```

[Console]
1 + 2 = 3
1 + 2 = 3
1 + 2 = 3
[/Console]

The `string.Format()` method gets a format string as its first argument that has special words like `{0}`, `{1}`, `{2}`, etc. They’re filled with the values of the variables next to the format string. 

So, in the example above, 

* `{0}` is the value of `i`, 1. 
* `{1}` is the value of `j`, 2.  
* `{2}` is the value of `i + j`, 3.

If you’re familiar with ES2015, you noticed that the $ notation is similar to ``` string. The difference is that you don’t need to add `$` after `{`. 

By the way, the official name of this $ string is [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). 

[ContentBreak /]

You can get the character in the string by the index with brackets([]). It’s also same!

```
string name = "Mario";
char a = name[0]; // a == ‘M’
```

[ContentBreak /]

C# string has utility methods like JavaScript. And names are almost identical.

| C# | JavaScript |
| --- | --- |
| Split(separtor) | split(separator) |
| IndexOf(str) | indexOf(str) |
| Substring(start<b>[, length]</b>) | substring(start<b>[, end]</b>) | 
| StartsWith(str) | startsWith(str)[ES2015] |
| Trim() | trim() |
| Insert(position, str) | [check this article](https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index) |
| Replace(from, to) | replace(from, to) |

Here are the examples of C# `string` methods: 

```
string name = "Sonic the Hedgehog";
string[] words = name.Split(' '); // { "Sonic", "the", "Hedgehog" }
int position = name.IndexOf("the"); // 6
string sub = name.Substring(10); // Hedgehog
bool isAmy = name.StartsWith("Amy"); // false
string trimmed = "      Tails      ".Trim(); // Tails
string poke = "Pokemon Edition".Insert(8, "Pikachu "); // Pokemon Pikachu Edition
string amy = name.Replace("Sonic", "Amy"); // Amy the Hedgehog
```

Note that there is a serious difference between [C# substring](https://docs.microsoft.com/ko-kr/dotnet/api/system.string.substring?view=netframework-4.7.2) and [javascript substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring). 

In C# `Substring`, it gets `startIndex` and the **`length`** of the substring. In JavaScript `substring`, it gets `startIndex` and **`endIndex`**. 

Thanks to this difference, you need to use different arguments to get "JavaScript" from the string, "C# and JavaScript are different" in the examples below: 

[Code title="C# Substring()"]
string s = "C# and JavaScript are different";
string js = s.Substring(7, $b 10 $b);

Console.WriteLine(js);
[/Code]

[Code lang="javascript" title="JavaScript substring()"]
var s = "C# and JavaScript are different";
var js = s.substring(7, $b 17 $b);

alert(js);
[/Code]

Be careful!

[/ContentBlock]
[ContentBlock color="grey"]

## C# filled JavaScript string pitfall. 

In JavaScript, the type conversion between numbers and strings is sometimes implicit. 

[Code lang="javascript"]
var a = ‘5’ * ‘2’; // a === 10
[/Code]

The code above is completely OK in JavaScript. 

But in C#, it’s a compile error. 

If you want to multiply a number in `string` format, you need to use `Int32.Parse()` or `Convert.ToInt32()` method like below: 

```
int a = Int32.Parse("5") * Convert.ToInt32("2");
```

Both `Int32.Parse()` and `Convert.ToInt32()` do the same thing. Use whatever you want.  

[/ContentBlock]
[ContentBlock]

# bool: true or false

There is one more frequently used type: `bool`. 

In C#, `bool` type can only have `true` or `false`. In other words, `true` isn’t 1 and `false` isn’t 0. `true` is `true` and `false` is `false`. You cannot assign numbers to `bool` type variables like below:

```
bool isBig = (bool)0; // error. 
```

Instead, you should use comparison operators like below:

```
bool isBig = val != 0;
```

It also means you cannot do things like this in C#. 

[Code lang="javascript" title="true can become 1 in JavaScript"]
var a = 0;
var b = true;
var c = a + b; // c === 1
[/Code]

[Code title="But it's an error in C#"]
int a = 0;
bool b = true;
int c = a + b; // ERROR.
[/Code]

![I'm bool. Not a number!](/img/cs4j/bool-not-number.png)

[/ContentBlock]
[ContentBlock color="grey"]

# Are you feeling nostalgia?

We learned the basic types in C#. You might now feel nostalgia for the loosely-typed system in JavaScript. 

Interestingly, there are similar things in C#.

## var is not the same var.

C# also has a `var` keyword. But it’s not the same `var` in JavaScript. 

In JavaScript, `var` keyword means that string next to it is the name of a variable. 

```
var num = 1234; // num is a variable.
```

In C#, compiler guesses the type of the variable from the value you used in the initialization. Because of that, that type is hard-wired to the `var`-type variable. So, you cannot change the type after initialization.

```
var a = 4; // type of a became int. 
a = 10; // OK
a = "Princess Peach"; // Compile error
```

In the example above, the type of variable `a` is set to `int` at the first line. 

So, you cannot change the type of `a` after that line. Because of this rule, you cannot declare `var` variables without initializing it. 

For basic types like `int`, `float`, `string`, `var` isn’t used a lot. 

But with generics (you'll learn about it in Chapter 4), the type name becomes really long and ugly like `Dictionary<int, Player>`, `List<Rabbit>`. So, `var` is used to hide that complexity. 

One more rule: You cannot use `var` in fields (`class` member variables). It’s only for local variables. 

![You're int!](/img/cs4j/var.png)

[/ContentBlock]
[ContentBlock]

## dynamic: The most similar type for JavaScript variables. 

`dynamic` variables are dynamic. They can hold any type of values you give to them. 

They’re the most similar variable type you used in JavaScript. 

```
dynamic a = 1;
a = "Portal";
```

But as always, there are differences. 

[ContentBreak /]

First of all, you cannot freely add members to the objects as you did in JavaScript. 

[Code lang="javascript"]
var a = {};
a.name = "Bowser";
[/Code]

The code above is perfectly OK in JavaScript. But if you try to do that in C#, it’ll throw `RuntimeBinderException`. 

To do the same thing in C#, we need to use `ExpandoObject`. 

```
dynamic a = new ExpandoObject();
a.name = "Bowser";
```

If you try to compile the code above, it won’t work. And you can see the red underline below `ExpandoObject`. 

Because compiler cannot find the definition in namespaces. 

To solve this problem, press [Key]Alt + Enter[/Key] or [Key]Ctrl + .[/Key]. Then, Visual Studio will show you the list of the possible locations of `ExpandoObject`. Usually, the namespace on the top of the list is the answer. Press [Key]Enter[/Key] to add it. 

![Adding System.Dynamic namespace](/img/cs4j/adding-namespace.png)

You can find that `using System.Dynamic` is added at the top.

[ContentBreak /]

Second, you cannot use `ExpandoObject` like a dictionary. In other words, you cannot call members with brackets and quotation marks like `a["name"]`.

[Code lang="javascript"]
alert(a["name"]); // OK. 
[/Code]

```
Console.WriteLine(a["name"]); // RuntimeBinderException
```

It’s because there is a `Dictionary` class made for this purpose. We’ll learn how to use it in Chapter 4. 

Because of these restrictions, it’s hard to see the real world examples of `dynamic` variables. It is sometimes used in ORM libraries because you cannot predict the tables users will make. 

You might love `dynamic` if you’re not familiar with types yet. 

But in C# world, everyone loves strong types. `dynamic` is a weirdo. So, I don’t recommend using them.

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Is it correct?

[OX]
Q>> We can use `var` in fields.
A>> X. `var` is only for local variables.
[/OX]

[OX]
Q>> `dynamic` is not used a lot in C#. 
A>> O. Many developers prefer types. 
[/OX]

[OX]
Q>> INT_MAX + 1 == INT_MIN
A>> O. It’s overflow. It circles back to the minimum number. 
[/OX]

[OX]
Q>> You can use numbers bigger than 3 billion with `int`. 
A>> X. The maximum number for `int` is about 2.1 billion. If you need to use numbers bigger than that, it’s time to use `long`. 
[/OX]

[QuizBreak /]

QTitle>> Be the Compiler. What went wrong? 

```
string babe = "Babe Ruth";
int babeNumber = "3";

Console.WriteLine("Name: {0} Number: {1}", babe, babeNumber);
```

[Answer]
`int` type variables cannot hold strings like "3". 
[/Answer]

[QuizBreak /]

QTitle>> Fill the blank. We want to show only the first 30 characters of this quest message. 

```
string questMessage = 
    "This letter quest has been started in England 200 years ago. " +
    "And this letter gave happiness to its recipients. " +
    "Unfortunately, this letter should leave your hands in 4 days. " +
    "Otherwise, the happiness will become an unreversible misery.";

string summary = [ ??? ]

Console.WriteLine(summary);
```

[Answer]
If you use `questMessage.Substring(30);`, you’ll get a string after the 30th character. 

So, you need to use `questMessage.Substring(0, 30);`.
[/Answer]

[/Quiz]

[SignupBox title="How about reviewing these with cheatsheet?" icon="fa-map" modalID="download-cheatsheet"]
You studied hard. 
But unfortunately, your brain will delete what you have learned. 
Restore them with this free cheatsheet.
[/SignupBox]

[Modal title="Get the cheatsheet that summarizes everything in this guide." id="download-cheatsheet" src="" /]

[ContentBlock]

[ChapterTitle number="3"]Control Flow Statements: 5 Differences [/ChapterTitle]

Thanks to types, C# variables are much more complicated than JavaScript.

But also thanks to types, control flow statements(`if`, `for`, etc.) are easier. 

Furthermore, there are only a few differences between them. 

[/ContentBlock][ContentBlock color="grey"]

# No ===, !== operator. 

In JavaScript, ===, !== operators check types and values together. But as we learned, C# is obsessive with types. So, we don’t need them. 

[Code lang="javascript"]
if ("1" == 1) {
    alert(’"1" == 1 is true’);
}

if ("1" === 1) {
    alert(`but "1" === 1 isn’t true`);
}
[/Code]

```
if ("1" == 1) 
{
    Console.WriteLine("\"1\" == 1 is false in C#.");
}
```

In C#, if types are different, then they are different. 

[/ContentBlock]
[ContentBlock]

# bool-only in if!

In JavaScript, you can assign a value to variables in `if` statements. 

[Code lang="javascript"]
var a = 1;

if(a = 2) {
    alert("");
}
[/Code]

The code above is valid in JavaScript. But if you do something similar in C#, it’s an error. 

```
int a = 1;

if(a = 2)
{
    Console.WriteLine("Compile Error!");
}
```

You can only put `bool` variables or `bool` expressions (e.g. `monsterHP < 20`, `HP >= 100`) in `if` statement in C#. If not, it’s an error. 

![bool only](/img/cs4j/bool-only.png)

Because of this strict rule, there is no [falsey, truthy](https://stackoverflow.com/questions/19839952/all-falsey-values-in-javascript) thing in C#. If you want to add a `null` variable or an empty string in `if` statement, compare it with the value. 

```
if(s == "") 
{
    Console.WriteLine("String is empty");
}

if(n == null) 
{
     Console.WriteLine("Null Object");
}
```

[/ContentBlock]
[ContentBlock color="grey"]

# Thou shalt initialize your variables. 

You can find this strictness in variable initialization, too. In JavaScript, if you’re using a variable without initializing it, the value of the variable is `undefined`. 

[Code lang="javascript"]
var f; // undefined
var g = f + 1; // undefined
[/Code]

In C#, it’s a compile error when you use uninitialized variables. The code simply doesn’t compile. 

```
int f;
int g = f + 1;
```

You’ll see the error:

[ErrorQuote]
CS0165: Use of unassigned local variable 'f'. 
[/ErrorQuote]

[/ContentBlock]
[ContentBlock]

# Handling exceptions

Although it is not used a lot in JavaScript, you can handle errors with `throw`, `try`, `catch`, `finally` statements. The syntax and mechanism are identical in C#, but there is one difference:

_You cannot throw raw values like string or numbers in C#._

It isn’t odd because nothing can live outside classes in C#. 

[Code lang="javascript"]
if(someProblem) {
    throw "you can throw string in JS";
}
[/Code]

```
if(someProblem) 
{
    throw new Exception("You should wrap it with Exception in C#"); 
}
```

You can create your own `Exception` class by inheriting `Exception` class. We’ll cover inheritance in Chapter 6. 

[/ContentBlock]
[ContentBlock color="grey"]

# for-loop

There’s a good news. There is no difference between C# and JavaScript for `for` and `while` loop. They’re just identical.

The only difference comes from the type system.

[Code lang="javascript"]
var sum = 0;

for($b var $b i = 0; i < 100; i++) {
     sum += i;
}
[/Code]

```
int sum = 0;

for($b int $b i = 0; i < 100; i++)
{
     sum += i;
}
```

Even in C#, you can use `var` rather than `int`. But `int` is preferred.

[/ContentBlock]
[ContentBlock]

# special loop system for lists

However, in C#, there is one more loop system for iterable objects like arrays, lists or dictionaries. It’s `foreach` statement. 

When we iterate a list of strings with `for` statement, it's like below: 

```
string[] enemies = { "Bowser", "Dr. Eggman", "Ganon",  };

for(int i = 0; i < enemies.Length; i++) 
{
    Console.WriteLine(enemies[i]);
}
```

Above, `string[]` is the type for the `string` arrays. And take note that initializer for arrays is braces(`{}`) in C#, not brackets(`[]`). 

Like JavaScript, you can get the size of the array with `Length` property. (It’s not `length`. It’s `Length`. Capital L!)

But with `foreach` statement, we can remove the index from our code. 

```
string[] enemies = { "Bowser", "Dr. Eggman", "Ganon",  };

foreach(string enemy in enemies) 
{
    Console.WriteLine(enemy);
}
```

The code became much simpler and clearer. 

In ES5, there’s a similar syntax. It’s `forEach()` method.

[Code lang="javascript"]
var enemies = ["Bowser", "Dr. Eggman", "Ganon",  ];

enemies.forEach(name => {
    alert(name);
});
[/Code]

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Is it correct?

[OX]
Q>> In C#, you cannot throw raw string or number as an exception. 
A>> O. Everything in C# must be inside classes. Exceptions are not exceptions. 
[/OX]

[OX]
Q>> In C#, if you use a variable without initializing it, it’s a warning. 
A>> X. It’s a compile time error. 
[/OX]

[OX]
Q>> You can use `foreach` loop with only iterable objects. 
[OXA]
O. You can use `foreach` statement with iterable objects like data structure objects like `List`, `Dictionary`, arrays, or objects that implement the `IEnumerable` `interface`.

You will learn what `interface`s are in Chapter 6. OOP.
[/OXA]
[/OX]

[QuizBreak /]

QTitle>> Be the compiler. Find what went wrong. 

```
int bombCount = 5;

if (bombCount) {
   ThrowBomb();
}
```

[Answer]

`bombCount` => `bombCount > 0`

bombCount is `int`, not `bool`. So, if you want to check whether the player has a bomb, you should check if `bombCount` is bigger than 0. 

[/Answer]

[QuizBreak /]

```
string[] items = { "Sword", "Shield", "Potion", "Boots", "Armor", };

foreach(item in items) 
{
    Console.WriteLine(item);
}
```

[Answer]

`foreach(item in items)` => `foreach(string item in items)`

You need to specify the type of item in lists when using `foreach` loop. 

[/Answer]


```
var age = "24";

if (age < 20) {
    Console.WriteLine("You cannot enter here.");
}
```

[Answer]

`var age = "12";` => `var age = 12;`

Comparing `string` with `int` is always `false` in C#. 

[/Answer]

[QuizBreak /]

QTitle>> Make the program.

[Console]
Defeated enemies: Bowser, Dr. Eggman, Ganon
[/Console]

```
string[] enemies = { "Bowser", "Dr. Eggman", "Ganon",  };

Console.Write("Defeated enemies: ");

[???]
```

[Answer]

There are several ways to solve this problem. But I solved it with `for` loop. 

```
for(int i = 0; i < enemies.Length; i++)
{
    Console.Write(enemies[i]);

    if (i < (enemies.Length - 1)) 
    {
        Console.Write(", ");
    }
}

Console.WriteLine("");
```

I didn’t use `foreach` statement because there is no index in `foreach` statement. I cannot print out comma after the last item in the list naturally. 

I added `Console.WriteLine("");` at the end of the code. It's because I don't want to show `Press any key to continue` message right after the names. 

[/Answer]

[/Quiz]

[ContentBlock]

[ChapterTitle number="4"]How to work with data structures[/ChapterTitle]

To make programs with JavaScript, you have used the countless number of arrays and objects.

But in this article, I deliberately didn’t cover much about native arrays in C#. 

It’s because arrays aren’t used a lot in real-world C# programming. 

It sounds really unintuitive. But it’s true. Because C# arrays have a lot of restrictions. 

For example, you cannot append new members to arrays because you cannot change the size. Yes, it’s weird. But it’s true. 

![Array doesn't become bigger](/img/cs4j/array-no-more-space.png)

C# is designed to make high-performance desktop programs in the early 2000s. To support machines which are much less powerful than the smartphones in your hand, you sometimes have to sacrifice flexibility. 

That’s why the native array in C# doesn't support resizing. 

[ContentBreak /]

To make a general purpose and easy-to-use list without any limitation of the native array, Microsoft added generics and data structure classes to C#. 

In C#, there are many data structure classes: `List`, `Dictionary`, `Queue`, `Stack`, `SortedList`, `HashSet`, etc. 

Among them, `List` is the most frequently used and `Dictionary` is the next. Others are not used much. 

So, we’ll focus on `List` and `Dictionary`. If you want to learn more about others, [check the official document.](https://docs.microsoft.com/en-us/dotnet/standard/collections/)

![List becomes bigger](/img/cs4j/list-get-more-boxes.png)

[/ContentBlock]
[ContentBlock color="grey"]

# Creating empty data structure.

To create a list and a dictionary in JavaScript, what you need to do is use `[]` and `{}`. 

[Code lang="javascript"]
var list = [];
var dict = {};
[/Code]

But in C#, it’s a bit more complicated. 

```
List<int> points = new List<int>();
Dictionary<string, Player> players = new Dictionary<string, Player>();
```

You need to specify the type of the items in the `List` between angular brackets. As for the `Dictionary` class, you need to specify the types of `Key` and `Value`. 

And as they’re not primitive types, you need to create them with the `new` keyword. 

As you can see, the type name is too long and ugly. We can simplify them with the `var` keyword. 

```
var points = new List<int>();
var players = new Dictionary<string, Player>();
```

But don’t forget. `var` is only for local variables. If you try to use it in fields, you’ll meet the redline. 

[/ContentBlock]
[ContentBlock]

# What’re those angular brackets? 

By now, you’re well aware that C# is obsessive with types. It always tries to define types. 

But it can cause problems when it comes to data structure classes. Because the actions for data structure classes are exactly the same regardless of types. 

For example, steps for these actions are exactly identical in every data structure:

* storing new values in lists. 
* retrieving values from dictionaries by the index. 
* removing values in lists. 

The only difference is the type of the items in them. 

So, Microsoft had to make a way to store "any data type". That’s why they made angular bracket syntax or **generics**. 

![Labeling boxes](/img/cs4j/label-int.png)

[/ContentBlock]
[ContentBlock color="grey"]

# List Essentials. 

You learned how to initialize an empty `List`. Then, let’s learn how to initialize `List` with initial items. 

```
List<int> points = new List<int> { 1, 2, 3, };
```

When you’re initializing `List` with items, you can remove `()` in constructors.

To use `List` properly, you need to know how to add, find, change, remove items in it. Let’s compare the names of the methods. 

| Action | C# | JavaScript |
| --- | --- | --- |
| Append | list.Add(item) | array.push(item) |
| Remove | list.Remove(item) | [check this article](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript) |
| Remove by index | list.RemoveAt(index) | [check this article](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript) |
| Retrieve | list[index] | array[index] |
| Find the Index of an item | list.IndexOf(value) | array.indexOf(value) |
| Size | list.Count | array.length |
| Check existence | list.Contains(value) | array.indexOf(value) == -1 (before ES2016) <br> array.includes(value) (after ES2016) | 

And here are the examples of these functions in action: 

```
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Add(6);

Console.WriteLine(numbers.Count); // 6
Console.WriteLine(numbers.IndexOf(5)); //4
Console.WriteLine(numbers.Contains(7)); // false
numbers[0] = 7;
numbers.Remove(3); // { 7, 2, 3, 5, 6 } 
```

[ContentBreak /]

C# and JavaScript handle non-existent items differently.

In JavaScript, if you try to retrieve an item with non-existent index, it just returns `undefined` and code runs on. 

[Code lang="javascript"]
var numbers = [1, 2, 3, 4, 5];
var a = numbers[6]; // a is undefined. 
[/Code]

But in C#, it returns `ArgumentOutOfRangeException`. 

```
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
int a = numbers[6]; // throws ArgumentOutOfRangeException
```

![undefined vs. Exception](/img/cs4j/outofbounds.png)

[/ContentBlock]
[ContentBlock]

# Dictionary Essentials

When I learned that objects can be used as dictionaries in JavaScript, I was a bit amazed.  Because I’ve never thought about that. 

In JavaScript, objects and dictionaries are same. They use the same syntax. 

[Code lang="javascript"]
var player = {
    hp: 200,
    mp: 300,
};

var items = {
    "gun": 200,
    "sword": 500,
};
[/Code]

However, in C#, object is `object` and dictionary is `Dictionary`. 

And you cannot initialize dictionary with special syntax like `{}`. You should use brackets after creating an empty dictionary. 

```
Dictionary<string, int> items = new Dictionary<string, int>();
items["gun"] = 200;
items["sword"] = 500;
```

Dictionary requires Key and Value. Thanks to them, many basic features are different from the List. 

| Actions | C# | JavaScript |
| --- | --- | --- |
| Add | dict[key] = value | dict[key] = value |
| Remove | dict.Remove(key) | delete dict[key] |
| Retrive | dict[key] | dict[key] |
| Size | dict.Count | Object.keys(dict).length |
| Check existence of key | dict.ContainsKey(key) | Object.keys(dict).$brindexOf(key) == -1 |
| Check existence of value | dict.ContainsValue(value) | Object.values(dict).$brindexOf(key) == -1 |

Here are the examples of the functions below. 

```
var players = new Dictionary<string, Player>();
players["mario"] = new Player();
players.Add("sonic", new Player());
players.ContainsKey("link"); // false
players.Remove("mario");
```

[ContentBreak /]

To loop through the dictionary in JavaScript, there are 2 ways:

[Code lang="javascript"]
Object.keys(obj).forEach(function (key) {
    foo(key)
    bar(obj[key])
});

for(key in obj){
    foo(key)
    bar(obj[key])
}
[/Code]

In C#, you can use `foreach` statement to loop through them. 

```
foreach(var pair in dictionary) {
    foo(pair.Key);
    bar(pair.Value);
}
```

If you want to loop through only keys or values, use `Keys`, `Values` property. 

```
foreach(var key in dictionary.Keys) {
    foo(key);
}

foreach(var val in dictionary.Values) {
    bar(val);
}
```

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Are they correct?

[OX]
Q>> You cannot resize arrays in C#. 
A>> O. If you want to resize the list, you need to use `List` class. 
[/OX]

[OX]
Q>> The official name of `<>` syntax is template. 
A>> X. The name of `<>` syntax is generics. 
[/OX]

[OX]
Q>> To get the size of `List`, you need to use `Size` property. 
A>> X. You need to use `Count` property. It's not `Length`!
[/OX]

[OX]
Q>> You can use objects as `Dictionary` in C#. 
A>> X. objects are objects and dictionaries are Dictionary in C#. 
[/OX]

[QuizBreak /]

QTitle>> Fill in the blanks. Fill in the blanks to get the given result. 

[Console]
One bomb has been used. 
Current Items: 
bomb: 4
arrow: 10
[/Console]

```
Dictionary<string, int> items = new Dictionary<string, int>();
items["bomb"] = 5; 
items["arrow"] = 10;

[???]

```

[Answer]

```
Console.WriteLine("One bomb has been used.");
items["bomb"] -= 1;

Console.WriteLine("Current Items:");
foreach(var item in items) 
{
    Console.WriteLine(item.Key + ": " + item.Value);
}
```

[/Answer]

[ContentBreak /]

[Console]
3 5 6 1 7
[/Console]

```
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

[???]

foreach (int num in numbers) 
{
    Console.Write(num + " ");
}

```

[Answer]

Well, the easiest method is to assign new `List` like this:

```
numbers = new List<int> { 3, 5, 6, 1, 7 };
```

But it’s too easy. How about doing this by using the methods in the `List` class?

```
numbers.Remove(1);
numbers.Remove(2);
numbers.Remove(4);

numbers.Add(1);
numbers.Add(7);
```

[/Answer]

[QuizBreak /]

QTitle>> Be the transpiler. Translate JavaScript code to C# code. 

[Code lang="javascript"]
var gameReviewScores = {
    "Super Mario Odyssey": 97,
    "Legend of Zelda: Breath of the Wild": 97,
    "Sonic Mania": 86,
    "Sonic Forces": 99,
};

gameReviewScores["Sonic Forces"] = 55;

var worstGameName = "Super Mario Odyssey";
var worstScore = gameReviewScores[worstGameName];

Object.keys(gameReviewScores).forEach(function (key) {
    if (gameReviewScores[key] < worstScore) {
        worstScore = gameReviewScores[key];
        worstGameName = key;
    }
});

alert("Worst game in 2017: " + worstGameName);
[/Code]

[Answer]

The `Object.keys` part and `worstGameName`, `worstScore` variables above are algorithm for finding the minimum value in the list. 

```
Dictionary<string, int> gameReviewScores = new Dictionary<string, int>();
gameReviewScores["Super Mario Odyssey"] = 97;
gameReviewScores["Legend of Zelda: Breath of the Wild"] = 97;
gameReviewScores["Sonic Mania"] = 86;
gameReviewScores["Sonic Forces"] = 99;

gameReviewScores["Sonic Forces"] = 55;

string worstGameName = "Super Mario Odyssey";
int worstScore = gameReviewScores[worstGameName];

foreach(var game in gameReviewScores) 
{
    if(game.Value < worstScore)
    {
        worstScore = game.Value;
        worstGameName = game.Key;
    }
}

Console.WriteLine("Worst game in 2017: " + worstGameName);
```

[/Answer]

[/Quiz]

[ContentBlock]

[ChapterTitle number="5"]How functions function in C#[/ChapterTitle]

Functions get the values and handle them and return the value. 

As we well know by now, C# is all about types. 

So, we must specify the types of incoming and outgoing values in functions. 

[/ContentBlock]
[ContentBlock color="grey"]

# Functions and methods

Methods are functions in classes. In C#, no function cannot live outside classes. So, **every function in C# is a method.** 

Because of that, when talking about C# functions, many developers prefer calling them methods to functions. 

I'll follow that convention in this post. 

[/ContentBlock]
[ContentBlock]

# The difference in defining functions. 

When you define a function in JavaScript, all you need to do is to start your function with the `function` keyword. 

[Code lang="javascript"]
function add(a, b) {
    return a + b;
}
[/Code]

In C#, there is no `function` keyword. Instead, you need to specify the types of everything: parameters and returned value. (As `function` is not a keyword, you can even use it as a variable name like `int function = 3;`.) 

The type of returned value is called **"return type"**. 

```
int Add(int a, int b) {
    return a + b;
}
```

What if there were no return value? Make return type empty? 

No. You should specify that with the `void` keyword. 

```
void Attack(Player player) {
    // Check player and attack her. 
}
```

![C# method vs. JS function](/img/cs4j/types-types.png)

[ContentBreak /]

As always, C# compiler checks the types. In this case, it checks whether the types in the parameters and return type are correct. 

In other words, if you don’t return a value in non-`void` methods or vice versa, they are all errors. 

```
int Add(int a, int b) 
{
    // No return value. ERROR!
}

void Attack() 
{
    return 3; // ERROR!
}
```

It’s completely valid to call the `add()` function above with integers, real numbers or strings in JavaScript. 

[Code lang="javascript"]
// All OK. 
add(1, 2);
add(3.14, 2.718);
add("hello", "world");
add(1, 3.14);
[/Code]

But if you try that in C#, you’ll get a bunch of errors. 

```
Add(1, 2); // OK
Add(3.14, 2.718); // Error
Add("hello", "world"); // Error
Add(1, 3.14); // Error
```

What should we do to solve this problem? The answer is method overloading. We’ll learn about it soon. 

[/ContentBlock]
[ContentBlock color="grey"]

# You cannot define C# methods like JS functions

In JavaScript, the preferred way of defining functions is to declare a variable and assign an anonymous function into that variable.

[Code lang="javascript"]
var add = function(a, b) {
    return a + b;
}
[/Code]

But in C#, it’s really painful to define a method like that. Don’t try it. 

(Many developers think it's impossible. However, with [lambda expression](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions) and [`delegate` type](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/using-delegates), you can do that. I've tried it but don’t cover it here because you shouldn’t write code like that.)

[/ContentBlock]
[ContentBlock]

# Method Overloading

As we learned above, you cannot use `int Add(int a, int b)` method with `float`, `double`, or `string` types. To do so, you have to create other methods for them. 

```
float AddFloat(float a, float b) {
    return a + b; 
}

string AddString(string a, string b)  {
    return a + b; 
}
```

But appending type names after Add like above looks really unnatural. 

That’s why method overloading exists in C#. 

Thanks to that, we can define multiple methods with the same name but with different types of arguments. 

For example, we can rewrite our `Add()` methods like this: 

```
static void Main(string[] args) 
{
    Console.WriteLine(Add(1, 2));
    Console.WriteLine(Add(3.14f, 2.718f);
    Console.WriteLine(Add("Hello", "World");
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
```

Their names are all `Add`. But it works perfectly. C# compiler smartly finds the appropriate method and uses it. 

![Overloading: All same names. But different.](/img/cs4j/overloading.png)

To make above code work, we need to add `static` in front of our methods. I'll tell you about the `static` in the next chapter. 

## How can we find the overloaded methods? 

If you’re not sure if there is any overloaded method, get help from Visual Studio code method tooltip. 

It shows how many overloaded methods exist by the number on the tips. 

![Tooltip example](/img/cs4j/overloading-tooltip.png)

You can check them by pressing [UpArrow /] or [DownArrow /] arrow keys. 

## How method overloading makes your life easier

Some of you might have thought that adding additional methods for `Add()` with the same code (`return a + b;`) is overkill. 

In this case, you’re absolutely right. But in some other cases, overloading makes code much simpler and clearer. 

We learned `List.IndexOf()` method in Chapter 4. But in `List`, there is another method to find the index of an item. It's `FindIndex()` method. I didn't cover it above because it uses lambda expression. 

If you check the [documentation](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.findindex?redirectedfrom=MSDN&view=netframework-4.7.2#System_Collections_Generic_List_1_FindIndex_System_Predicate__0__) of this method, there are 3 overload versions. 

```
FindIndex(int startIndex, int count, Predicate<T> match);
FindIndex(int startIndex, Predicate<T> match);
FindIndex(Predicate<T> match);
```

Each method finds the index of a value in different ways. They’re from: 

* the entire List. 
* a range with a specified starting point to the last item. 
* a range with a specified starting and ending point. 

These methods serve different needs. We need all 3 of them. 

How can we make a method like this in JavaScript? You need to count the number of arguments or check whether the arguments are `undefined` like below:

[Code lang="javascript"]
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
[/Code]

It makes code look dirty. But there is no other option. 

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Are they correct?

[OX]
Q>> You cannot define methods with the same name in C#.
A>> X. You can define them. It’s called overloading.
[/OX]

[OX]
Q>> If you don’t need to return a value, you need to set your return type as empty. 
A>> X. You need to set it as `void`. 
[/OX]

[OX]
Q>> You can define overloaded methods even if they have same arguments and different return types. 
A>> X. If you do that, compiler cannot find the appropriate method. So, you need to set arguments differently. 
[/OX]

[QuizBreak /]

QTitle>> Fill in the blanks. Fill in the blanks to get the given result. 

[Console]
Hello, Mario. Nice to meet you. 
Hello, Luigi. Nice to meet you. 
[/Console]

```
static void Main(string[] args)
{
    Greeting("Mario");
    Greeting("Luigi");
}

[???]
```

[Answer]

What you need is a really simple method. 

```
static void Greeting(string name) 
{
    Console.WriteLine("Hello, " + name + ". Nice to meet you.");
}
```

[/Answer]

[QuizBreak /]

QTitle>> Be the transpiler. Translate JavaScript code to C# code. 

[Code lang="javascript"]
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
[/Code]

[Answer]

In this case, you need to define 2 overloaded methods. 

```
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
```

[/Answer]

[/Quiz]

[ContentBlock]

[ChapterTitle number="6"]Differences in OOP Syntax[/ChapterTitle]

Now, let’s tackle our final boss: Object Oriented Programming (OOP). 

JavaScript added a lot of object-oriented features to its recent versions. But, still, you can do many things without them. 

Because that's what JavaScript was in the beginning. 

I know you’re fed up with these statements. Please let me repeat them again. 

* No variable or method cannot live outside classes. 
* C# is all about types. 

But I didn’t tell you the true meaning of these sentences. 

**OOP is the core of the C#.**

You can make JavaScript programs without knowing OOP. In C#, it’s a nonsense. OOP isn’t an option. 

[Note title="What should I do if I’m not familiar with OOP in JavaScript?"]

You can do many things without creating classes in JavaScript. 

Because of that, some of you might be fluent with OOP. And others are not. Or you're in somewhere between. 

This simple fact made me think a lot about what content should be included in this post. Because:

* If I explain everything about OOP, then experts will be bored. 
* If I skip the explanation and focus on comparing features, novices cannot understand this part. 

After a lot of thinking, I decided:

If you’re not familiar with OOP in JavaScript, it’s time to transfer to beginner train. I’ll cover OOP in detail in my basic C# article. 

(Did you notice the future tense? It’s because that train line is under construction. I’ll send you a notice email when construction is finished. 

[ModalLink modalID="get-update"]Click here[/ModalLink] to sign up my email list.)

You don’t have to read the previous chapters in that article. I’ve carefully designed that article so that you don’t need to do that.  

![New to OOP? It's time to transfer to beginner train.](/img/cs4j/oop-train.png)

[/Note]

[/ContentBlock]
[ContentBlock color="grey"]

# Constructor is not "constructor"

In traditional JavaScript, there were no constructors. All you had to do was just declare a function and create instances with `new`. 

[Code lang="javascript"]
function Player(name) {
    this.name = name;
}

var p = new Player("Kirito");

alert(p.name);
[/Code]

But after ES2015, you can define a class and its constructor with the special method: `constructor`. 

[Code lang="javascript"]
class Player {
    constructor(name) {
        this.name = name;
    }
}

var p = new Player("Kirito");

alert(p.name);
[/Code]

In C#, the syntax is similar, but there are some differences. 

```
class Player {
    public Player(string name) {
        this.name = name;
    }

    public string name;
}

class Program
{
    static void Main(string[] args)
    {
        Player p = new Player("Kirito");
        Console.WriteLine(p.name);
    }
}
```

Can you see the difference? 

First of all, the name of the constructor is not `constructor`. It’s the name of the class. In this case, `Player`. 

Second, there is a type name in front of each argument. It’s the same with other C# methods. Remember C# is all about types!

Third, as always, you need to declare variables. The variables outside methods are called fields. Unlike local variables, you don’t need to declare variables in front of the methods that use them. You can declare them anywhere. But you cannot skip this step. 

Finally, it’s not a difference between C# and JavaScript. But this fact makes constructors special. In constrcutors, there's no return type. `public` here isn’t a return type. It’s an access modifier. We’ll learn about access modifiers soon. 

[ContentBreak /]

Here are 2 more important bonuses about classes. 

Bonus 1. You cannot define a class inside a class or a method. That’s why our `Player` class is outside the `Program` class. 

Bonus 2. When creating `Player` object, we created `p` variable with the type, `Player`. The variables like `p` that hold class instances are called references. 

[/ContentBlock]
[ContentBlock]

# What happens if I don’t initialize fields?

In chapter 3, I told you that C# hates uninitialized variables. It’s an error in C#. 

As for fields, they are set to default values if you don’t initialize them. 

Here are the default values for the major types.  

| Type | Value |
| --- | --- |
| bool | false |
| numbers(short, int, float, double, etc.) | 0 |
| class references | null |

You can see [the entire table here.](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/default-values-table)

[/ContentBlock]
[ContentBlock color="grey"]

# Defining methods: Multiple ways vs. Only way

Before ES2015, you needed to use `prototype` field to define methods. 

[Code lang="javascript"]
function Player(name) {
    this.name = name;
    this.hp = 300;
}

Player.prototype.getAttack(attackPoint) {
    this.hp -= attackPoint;
}

var p = new Player("Kirito");

p.getAttack(50);
alert(player.hp); // 250
[/Code]

After ES2015, you can define methods inside classes like below: 

[Code lang="javascript"]
class Player {
    constructor(name) {
        this.name = name;
        this.hp = 300;
    }

    gotAttack(attackPoint) {
        this.hp -= attackPoint;
    }
};

var player = new Player();
player.gotAttack(50);
alert(player.hp); // 250
[/Code]

But in C#, there is only one way of defining methods. That's what you have learned in the chapter 5. 

[/ContentBlock]
[ContentBlock]

# Access modifiers

![Stop! It’s restricted!](/img/cs4j/restricted.png)

In JavaScript, if a member is in an object, you can access it without any restriction.

Some developers add methods that start with `_` like `_hiddenMethod()` to make it look too weird to use them in your codes. 

This convention makes other developers hate using those methods in their codes. But it’s not a restriction. You can use them if you really need it. 

But in C#, you can restrict the access of members in classes systemically. When you violate the rule, compiler will not compile the code.

To do so, you need to add access modifiers in front of members. 

The `public` keyword we've used a lot is one of the modifiers. 

In C#, there are 6 access modifiers. But 3 of them below are used a lot:

* `private`: You can access these members only inside the class where they are. 
* `public`: There is no limitation for access. 
* `protected`: You can access these members in the same class where they are or in the descendant classes. 

If you want to learn more about other 3, please check [this link](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers). 

[ContentBreak /]

Let’s see how `private` keyword works. 

```
class Player
{
    public Player(string name, string hiddenName) 
    {
        this.name = name;
        this.hiddenName = hiddenName;
    }

    public void ShowHiddenName() 
    {
        Console.WriteLine(this.hiddenName);
    }

    public string name;
    private string hiddenName;
}

class Program
{
    static void Main(string[] args)
    {
        Player p = new Player("Kirito", "Kirigaya Kazuto");
        Console.WriteLine(p.name);
        Console.WriteLine(p.hiddenName); // COMPILE ERROR!
        p.ShowHiddenName(); // OK.
    }
}
```

Compare `name` and `hiddenName`. They’re both `string` variables. But `p.name` is OK while `p.hiddenName` isn’t. 

To use `private` variables outside classes, you need to create a way to access/use them like making `ShowHiddenName()` method. 

Conventionally, C# developers set fields as `private` and methods and properties as `public`. 

[ContentBreak /]

To understand how `protected` works, I’ve changed the code a little bit. The colon(:) syntax next to `Player` is for inheritance. You’ll learn more about inheritance soon. 

```
class PlayerBase
{
    protected string secretSkill = "Big magical hat";
}

class Player : PlayerBase
{
    public Player(string name, string hiddenName) 
    {
        this.name = name;
        this.hiddenName = hiddenName;
        secretSkill = "Star burst stream";
    }

    public void ShowHiddenName() 
    {
        Console.WriteLine(this.hiddenName);
    }

    public string name;
    private string hiddenName;
}

class Program
{
    static void Main(string[] args)
    {
        Player p = new Player("Kirito", "Krigaya Kazuto");
        Console.WriteLine(p.name);
        Console.WriteLine(p.secretSkill); // COMPILE ERROR!
    }
}
```

The `protected` variable `secretSkill` can be accessed from the inside of the `Player` class. Because `Player` class inherited `PlayerBase` class. 

But from the outside of `PlayerBase` family classes like `Program` in our example above, it cannot be accessed. It’s a compile error. 

![private, public, protected](/img/cs4j/access-modifier.png)

[/ContentBlock]
[ContentBlock color="grey"]

# this isn’t required. 

In JavaScript, `this` is required for fields. You cannot remove it. If you do that, that variable becomes a local variable. 

Let’s revisit our Player example. 

[Code lang="javascript"]
class Player {
    constructor(name) {
        this.name = name;
        this.hp = 300;
    }

    gotAttack(attackPoint) {
        this.hp -= attackPoint;
    }
};

var p = new Player("Asuna");
p.gotAttack(50);
alert(p.hp);
[/Code]

If you remove `this.` from `this.hp` in `constructor()` or `getAttack()` methods, `hp` becomes a local variable and it doesn’t affect `hp` of the `Player` instance. 

In contrast, C# doesn’t require `this` for fields. If there is no local variable with that name, compiler will automatically try to find if there is a field with that name. 

```
class Player 
{
    public Player(string name) 
    {
        this.name = name;
        hp = 300;
    }

    public void GotAttack (int attackPoint) {
         hp -= attackPoint;
    }

    public string name;
    public int hp;
};

class Program
{
    static void Main(string[] args) 
    {
        Player p = new Player("Asuna");
        p.GotAttack(50);
        Console.WriteLine(p.hp);
    }
}
```

As you can see, `p.hp` returns 250 without any problem.

Take a look at `this` in `this.name = name` inside the constructor. 

You must not remove it. 

When you do that like `name = name`, compiler guesses that the `name` on the left side isn't the field `name`. Because it always tries to find the nearest variable with the name. 

So, it interprets that it is a meaningless line that assigns its current value to the variable again. That's why you'll see the warning like below: 

[ErrorQuote]
CS1717: Assignment made to same variable; did you mean to assign something else?
[/ErrorQuote]

That’s why `this` is required in constructors if you want to use the same variable name in constructor argument and field name. 

![this used in constructor](/img/cs4j/this-and-field.png)

[ContentBreak /]

Unlike JavaScript, it is recommended to remove `this` as much as possible in C#. 

So, in most cases, you can see `this` only in constructors. Because most developers don’t make name conflict with local variables and fields in other methods. It can cause unnecessary confusion. 

Actually, some developers even remove `this` in constructors by adding `m_` in front of the fields like `m_name`, `m_hp`, etc. 

Personally, I’m against it. Because the code looks unnatural like below. 

```
m_hp -= attackPoint;

Console.WriteLine(m_hiddenName);
```

But many people love this convention. So, you need to be aware of them. 

[/ContentBlock]
[ContentBlock]

# We all share static

In JavaScript classes, `static` variables are shared by every instance of the class.

And so is C#. There’s no difference. 

```
class Player 
{
    public static int maxAttack = 50;
    public int normalAttack = 25;
    public void Attack() 
    {
       Console.WriteLine("Normal Attack: " + normalAttack + 
           " Max Attack: " + maxAttack);
    }
}

class Program
{
    static void Main(string[] args) 
    {
        Player p1 = new Player();
        Player p2 = new Player();

        p1.Attack();
        p1.normalAttack = 50;
        Player.maxAttack = 100;

        p2.Attack();
    }
}

```

The result of `p2.Attack()` is `"Normal Attack: 25 Max Attack: 100"`. It changed even if we didn’t change the value of `maxAttack` in `p2` like `p2.maxAttack = 100;`.

## The secret of static Main() method. 

We’ve used countless `static Main()` method to start our program. But why should it be `static`? 

As you well know, you can call `static` fields or methods without creating any instance of that class. 

When starting a program, there is no object yet. But we need to call our `Main()` method to start the program. 

So, `Main()` method should be a method that can be called without creating objects. 

That's what we can do with `static` methods. That’s why `Main()` is `static`. 

[/ContentBlock]
[ContentBlock color="grey"]

# Inheritance Comparison

In traditional JavaScript, there was no syntax for inheritance. [You could emulate it with call method and prototype field.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

However, after ES2015, things have been changed. JavaScript supports classes. And objects can inherit objects with the special keyword: `extends`. 

[Code lang="javascript"]
class Rabbit { }
class BossRabbit extends Rabbit { }
[/Code]

But in C#, all you need is colon(:). 

```
class Rabbit { }
class BossRabbit : Rabbit { }
```

## Multiple inheritance

JavaScript doesn’t support multiple inheritance. Because multiple inheritance can be a pain in the neck for both language desingers and users. 

But it even doesn’t support `interface` almost every object-oriented languages does. Because of that, if you really need multiple inheritance, you need to go through [a painful way](https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance/35925061).

In C#, you cannot inherit more than 1 class. But you can implement multiple interfaces. 

```
class Rabbit {}

interface ICommonBossActions
{
    void BreakGround();
}

class BossRabbit : Rabbit, ICommonBossActions 
{
    void BreakGround() 
    {
        // Implement breaking. 
    }
}
```

Unlike Java, Swift, C# doesn’t support default implementation. It is said that [it will be added at C# 8](https://blog.ndepend.com/c-8-0-features-glimpse-future/). But no one knows when C# 8 will become reality.

[/ContentBlock]
[ContentBlock]

# Polymorphism

In JavaScript, every method is basically overridable. 

[Code lang="javascript"]
class Rabbit {
    throwCarrot() {
        alert("throw one carrot");
    }
}

class BossRabbit extends Rabbit {
    throwCarrot() {
        alert("throw 3 carrots");
    }
}

var rabbit = new Rabbit(); 
rabbit.throwCarrot(); // throw one carrot.
var bossRabbit = new BossRabbit();
bossRabbit.throwCarrot(); // throw 3 carrots. 
[/Code]

In the example above, `BossRabbit` inherited `Rabbit` and overrided the skill, `throwCarrot()`. As a result, when you instantiate `BossRabbit` and call `throwCarrot()` method, it throws 3 carrots. 

![Boss rabbit](/img/cs4j/rabbit-fighting.png)

But in C#, if you don’t add the `virtual` keyword in front of the return type in the base class and `override` in the child class, you cannot override the methods. 

Let’s make an experiment without `virtual`/`override` keywords. 

```
class Rabbit {
    public void ThrowCarrot() {
        Console.WriteLine("Throw one carrot.");
    }
}

class BossRabbit : Rabbit {
    public void ThrowCarrot() {
        Console.WriteLine("Throw 3 carrots.");
    }
}

class Program
{
    static void Main(string[] args) 
    {
        Rabbit rabbit = new Rabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
        Rabbit bossRabbit = new BossRabbit();
        bossRabbit.ThrowCarrot(); // throw one carrot. 
        // WHAT? BOSS THROWS ONLY ONE CARROT!
    }
}
```

When you assign `BossRabbit` to `bossRabbit` variable with `Rabbit` type, the type of the reference variable is `Rabbit`, but actually the object inside is a `BossRabbit`. 

Problem here is that `BossRabbit` acts like a normal `Rabbit`. It’s not intended. Boss should act like a boss. 

To solve this problem, there are 2 ways: 

[Step number="1"]Change the type of reference to `BossRabbit`:[/Step]

```
BossRabbit bossRabbit2 = new BossRabbit();
bossRabbit2.TrhowCarraot(); // throw 3 carrots. 
```

It works. But this method has a problem. You cannot loop through `Rabbit`s. 

```
List<Rabbit> rabbits = new List<Rabbit>() 
{ 
    new Rabbit(), new Rabbit(), new BossRabbit(), 
};

foreach(Rabbit rabbit in rabbits) 
{
    Console.WriteLine(rabbit.ThrowCarrot());
}
```

Without `virtual` and `override`, `BossRabbit` will only throw 1 carrot in the example above. With this solution, `BossRabbit` cannot act like a boss in loops. 

[Step number="2"]Use overriding: add `virtual` keyword in front of `ThrowCarrot()` in `Rabbit` class, and add `override` keyword in front of `ThrowCarrot()` in `BossRabbit` class like below. [/Step]

```
class Rabbit {
    public $b virtual $b void ThrowCarrot() {
        Console.WriteLine("Throw one carrot."); 
    }
}

class BossRabbit : Rabbit {
    public $b override $b void ThrowCarrot() {
        Console.WriteLine("Throw 3 carrots.");
    }
}

class Program
{
    static void Main(string[] args) 
    {
        Rabbit rabbit = new Rabbit();
        rabbit.ThrowCarrot(); // throw one carrot. 
        Rabbit bossRabbit = new BossRabbit();
        bossRabbit.ThrowCarrot(); // throw 3 carrots. 
    }
}
```

Then, `BossRabbit` will throw 3 carrots without any problem. 


## Casting objects

But there was something odd in our `Rabbit` and `BossRabbit` example. Did you find it? 

Although `BossRabbit` inherits `Rabbit`, they are different classes. 

But you could assign `BossRabbit` object to `Rabbit` variable without any casting like below: 

```
Rabbit bossRabbit = (Rabbit) new BossRabbit();
```

How was this possible? 

It’s because `BossRabbit` has every feature that `Rabbit` has. 

Why? 

Because it inherited `Rabbit`! Thanks to inheritance, `BossRabbit` has every member that `Rabbit` has. 

That’s why `BossRabbit` can be assigned to `Rabbit` without any casting. 

But the reverse (assigning `Rabbit` to `BossRabbit`) doesn’t work, you need to clearly specify it with casting parentheses. 

```
Rabbit rabbit = new BossRabbit();
BossRabbit bossRabbit = (BossRabbit)rabbit;
```

It’s because you cannot be sure your `Rabbit` reference indicates a `BossRabbit` object. So, compiler wants to be sure that it’s really a `BossRabbit` object. 

Some people call this as 'IS-A' relation. Because `BossRabbit` is a `Rabbit`. 

![I'm rabbit, too](/img/cs4j/boss-rabbit.png)

[/ContentBlock]
[ContentBlock color="grey"]

# Properties

Do you know the [`Object.defineProperties()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) in JavaScript? You can use it to restrict access to or filter values for the members in objects. 

In other words, you can use it to create read-only members or do additional checks before assigning a new value to a member. 

For example, if you want to make a read-only field, you can write code like this: 

[Code lang="javascript"]
var player = {};

Object.defineProperty(player, 'attackPoint', {
    value: 60,
    writable: false,
});

player.attackPoint = 30;
alert(player.attackPoint); // 60
[/Code]

As you can see, we’ve assigned a new value to `attackPoint`, but it didn’t change. 

With properties, you can even filter values like below: 

[Code lang="javascript"]
const player = {
    attackPoint: 60,
};

var attackPoint = 60;
Object.defineProperty(player, 'attackPoint', {
    get: function() { return attackPoint; },
    set: function(value) {
        if (value >= 100) {
            value = 100;
        }

        attackPoint = value;
    }
});

player.attackPoint = 300;
alert(player.attackPoint); // 100
[/Code]

We assigned attackPoint to 300. But the setter only allows the values less than or equal to 100. So, you'll see `100`, not `300`.

In JavaScript, we need to use a method to create properties. But in C#, we have a special syntax for this feature. 

```
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

class Program
{
    static void Main(string[] args) 
    {
        Player p = new Player();
        p.AttackPoint = 30; // ERROR;
        Console.WriteLine(p.AttackPoint); // 60
    }
}
```

`p.AttackPoint` is an error because there’s no setter for the `AttackPoint` property in `Player` class above. So, `p.AttackPoint` cannot be accessed. 

To solve this problem, we need to create a `set` block. 

```
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
```

`value` keyword is used inside the `set` block to deliver the value on the right side. In our example, it’ll be `30`. 

But as our getter returns only `60`. The result won’t change. It’ll still be `60`. 

![Role of properties](/img/cs4j/role-of-property.png)

## Why property is better than getter/setter methods.

Above, I told you that fields are usually `private` and methods are usually `public`. 

This tradition wasn't started in C#. C# adopted the tradition from other OOP languages older than C# like C++ and Java. 

They followed this rule because when fields are `public`, it becomes hard to add restrictions or filters for them. Just think about it. We need to find and change everywhere they are used outside the class. 

But there is also a problem when we set fields to `private`. We cannot change the values of fields outside the class. 

That's why developers created methods called getter and setter like below: 

```
class GetterAndSetter 
{
    public int GetValue() { return value; }
    public void SetValue(int value) { this.value = value; }
    private int value;
}
```

As they start with the words `Get` and `Set`, they got their names. 

With getters and setters, the change becomes much easier. Let's suppose we want to add a restriction like "`value` should never be above 100", all we have to do is change the content of setter is like below: 

```
class GetterAndSetter 
{
    public int GetValue() { return value; }
    public void SetValue(int value) 
    { 
        if (value >= 100) 
        {
            value = 100;
        }

        this.value = value; 
    }
    private int value;
}
```

Then, the change will be applied to everywhere. 

But getter and setter have a serious problem. They make code look weird. 

```
a.SetValue(a.GetValue() + 1);
```

Even to do a simple work like adding value, we need to call getter and setter. Compare it with simple `a.value++` like above. You'll see how getters and setters make code hard to read. 

[ContentBreak /]

But in C#, we have property. Properties can be used like variables but have the power of methods. 

Let's remake the getter and setter method example above with properties. 

```
class Prop
{
    public int Value 
    {
        get
        {
            return val;
        }
        set
        {
            if (value >= 100)
            {
                value = 100;
            }

            this.val = value;
        }
    }

    private int val;
}

class Program
{
    static void Main(string[] args)
    {
        Prop p = new Prop();
        p.Value++;
        Console.WriteLine(p.Value); // 1
        p.Value = 300;
        Console.WriteLine(p.Value); // 100
    }
}
```

As you can see, you can use `Value` like variables but you can define restrictions to use it correctly. 

## Shorter and faster way to define properties. 

Now you know why properties are great. 

But when you try to use them in real code, it's a bit cumbersome. 

Because we need to make dumb properties like below:

```
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
```

The code is long. But it doesn't have any content. We can shorten the code by removing some empty spaces like below: 

```
class PropertiesAreStillDumb
{
    public int DumbInteger 
    {
        get { return dumbInteger; }
        set { dumbInteger = value; }
    }

    public string DumbString
    {
        get { return dumbString; }
        set { dumbString = value; }
    }

    private int dumbInteger;
    private string dumbString;
}
```

Still, it looks long. 

So, C# created a way to shorten this code. 

```
class PropertiesAreGood
{
    public int GoodInteger { get; }
    public string GoodString { get; set; }
}
```

Now it's really simple. 

We can define properties by simply stating `get;` or `set;` inside braces. You don't need to fill the contents. Then, the compiler will autogenerate the contents for you. **You don’t even have to create variables.**

When you need to make a complicated restriction for some fields after using this shortcut, you can always create variables and fill the contents.

[/ContentBlock]

[Quiz]

QTitle>> OX. Are they correct? 

[OX]
Q>> In C#, you cannot access fields without `this`.
A>> X. In C#, when there is no `this`, compiler automatically tries to check if there is a field with that name. 
[/OX]

[OX]
Q>> If you declare fields without initialization, they’re initialized to the default values. 
A>> O. bool is false. Numbers are 0. And references are null. 
[/OX]

[OX]
Q>> You can access `protected` fields from child classes. 
A>> O. That’s the role of protected. 
[/OX]

[QuizBreak /]

QTitle>> Be the Compiler. Find errors and fix them.

```
class Player 
{
    private int normalAttack;
}

class Program
{
    static void Main(string[] args)
    {
        Player.normalAttack = 100;
        Console.WriteLine("Player attack: {0}", Player.normalAttack);
    }
}
```

[Answer]

First of all, to use an object in C#, you need to create one with the `new` operator. 

```
Player p = new Player();
```

`normalAttack` isn’t a `static` variable. So, the player should be changed to `p`. 

Finally, `normalAttack` is `private`. You cannot use it outside `Player`. There are 2 ways to solve this problem. 

1) change `private` to `public`. 
2) create a property. 

In C#, fields are usually `private`. So, let's create a property like below to restrict access: 

```
class Player 
{
    public int NormalAttack { get; set; }
}
```

Here’s the final code:

```
class Player 
{
    public int NormalAttack { get; }
}

class Program
{
    static void Main(string[] args)
    {
        Player p = new Player();
        p.NormalAttack = 100;
        Console.WriteLine("Player attack: {0}", p.NormalAttack);
    }
}
```

[/Answer]

[ContentBreak /]

```
class Lion 
{
    public void Jump()
    {
        Console.WriteLine("Jump!");
    }
}

class BossLion
{
    public void Jump()
    {
        Console.WriteLine("Double Jump!");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Lion bossLion = new BossLion();
        Console.WriteLine(bossLion.Jump());
    }
}
```

What’s the result? How should we make `bossLion` to act like a boss? 

[Answer]

It’s not a "Double Jump!". It’s a "Jump!".

To solve this problem, we need to add `virtual` to `Lion` class and `override` to the `BossLion` class like below:

```
class Lion 
{
    public $b virtual $b void Jump()
    {
        Console.WriteLine("Jump!");
    }
}

class BossLion
{
    public $b override $b void Jump()
    {
        Console.WriteLine("Double Jump!");
    }
}
```

[/Answer]

[QuizBreak /]

QTitle>> Define a class.

What is your favorite game character? What characteristics do they have? In other words, what data do they need? What action do they perform? 

And how will you express that as a class in your game? 

[Answer]

You might love a lot of characters. But in this example, I’ll use my favorite characters: Sonic. 

There are a lot of differences between Modern Sonic and Classic Sonic. Modern Sonic can do more than Classic Sonic. 

But in our example, I’ll use Classic Sonic because it’s simple.

Sonic runs through the stages and collect rings and jumps and hits the bad robots to break them. 

From this, we’ve got data and actions. 

* Data: the count of rings
* Action: run, jump.

Then, we need to think about the data we need to support the actions. 

[Step number="1"]Run[/Step]

Running means that you’re moving from one place to another. So, you need variables to hold Sonic’s current position. Let’s call them `x` and `y`. 

He doesn’t run at an even speed. It varies. So, we need `speed`, `acceleration`. 

And he can move backward. We need `direction`. 

Finally, his speed doesn’t increase forever. So, we need `maximum speed`. 

[Step number="2"]Jump[/Step]

Normally, Classic Sonic can jump only once. So, we need a bool variable like `jumped`. 

But if he has some shields, he can do some interesting actions like double jump (electric shield), moving down fast (bubble), air dash (fire). 

So, we need an `enum` variable to hold these statuses. 


Then, our Classic Sonic class would look like this. 

```
enum Shield 
{
    FIRE,
    BUBBLE,
    ELECTRIC,
}

class ClassicSonic
{
    private int x, y;
    private int speed;
    private int direction;
    private int acceleration;
    private int maxSpeed;
    private bool jumped;
    private Shield shield;

    public void Run() {}
    public void Jump() {}
}
```

[/Answer]

[/Quiz]

[ContentBlock]

[ChapterTitle number="7"]Bonus. How to use the debugger. [/ChapterTitle]

Visual Studio debugger and Chrome debugger share a lot of similar shortcut keys and features. 

First of all, if you want to set a breakpoint, click the blue-gray left margin. It’ll create a red circle. 

![breakpoint](/img/cs4j/debug-breakpoint.png)

Then, press [Key]F5[/Key] to start the debugger. 

[ContentBreak /]

To check the value of a variable, there are 2 ways:

1) Hover the mouse pointer over that variable. It’s just like Chrome. But there is one convenient feature in VS. If you click the pin, then you can pin the variable on the screen. 

![pin variable](/img/cs4j/debug-pin-variable.png)

2) Or check the value on the watch panel below.

![watch panel](/img/cs4j/debug-watch-panel.png)

[ContentBreak /]

Navigation features are almost identical. 

| Feature | Key |
| ---- | ---- |
| Go to the next line | [Key]F10.[/Key] |
| Go into the method/property in that line | [Key]F11[/Key] |
| Go out from the current method/property | [Key]Shift + F11[/Key] |
| Go to the next breakpoint | [Key]F5[/Key] |
| Stop the debugger | [Key]F6.[/Key] |

Step over, in and out are same. But go to the next breakpoint is [Key]F5[/Key], not [Key]F8[/Key]. It’s because [Key]F5[/Key] is refresh in web browsers. 

[/ContentBlock]
[ContentBlock color="grey"]

# Conclusion

Throughout this article, I've told you a lot that **C# is all about types**. 

And you learned that obsessiveness in types created the differences between C# and JavaScript when declaring variables, defining methods and classes. 

But without this obsessiveness in types, you could feel that they’re somewhat similar, too. 

Now that you know the basics of C#, you can learn libraries/frameworks that help you make your dream program. Go for it!

If making a game with Unity is your goal, let’s have more fun together in my Unity for beginners post. 

(Like C# for complete beginners article, it’s not written yet. If you want to read this post on its release day, please [ModalLink modalID="get-update"]sign up my email list.[/ModalLink]

[/ContentBlock]

[Modal id="get-update" title="Deliver UnityCook's new posts to your inbox!" src="" /]