---
title: "Your First Program in C#: Hello World and More"
description: "Let's get our hands dirty by making programs in C#."
slug: first-program-in-csharp
time: 2018-11-17
src: /img/cs4b/1-prog/thumbnail.png
---
[ContentBlock]

[Title]Your First Program in C#: Hello World and More[/Title]

![Making hands dirty with programming](/img/cs4b/2-first/make-hands-dirty.png)

In the previous chapter, we learned what programming is in text. 

Like many things in the world, you cannot really learn until you make your hands dirty. 

Let's feel programming by making 2 basic programs. 

Note. If you don't have Visual Studio, check here and install it. 

[SectionTitle number="1"]Hello, World[/SectionTitle]

Here’s the screenshot of our first program:

![Hello, World](/img/cs4b/2-first/hello-world.png)

Hmm… 

People in 70s or 80s even wouldn’t say that it’s cool. It’s really disappointing. We all know that it’s not something you want to make. 

You must have thought of making an interesting program with pretty images and icons. 

[/ContentBlock]
[ContentBlock color="grey"]

# Can't we start with something more beautiful?

You want to ask me why we are making this extremely simple, good-for-nothing and old-fashioned program.

Because if you try to learn too many things at once, you'll be overwhelmed soon and give up. 

![Don't try learn many things at once. You'll be overwhelmed.](/img/cs4b/2-first/overwhelming.png)

As you can see, this environment is simple and looks 70s-ish. 

But it also means that you can master the basics of this environment super fast. 

Because all you need to know is how to show text messages on the screen and get input from the users. (You'll learn them in this post.)

After that, we can focus on how to use C# like an expert. 

![Let's focus on C# first](/img/cs4b/2-first/focus.png)

In contrast, when we try to make beautiful things at first, we need to learn C# and how to use tools to add beautiful things in right place. 

As you're not fluent in C#, when something weird happens, you cannot solve that by yourself. 

And as those environments are more complicated, it is more likely to meet unexpected errors. 

![Errors](/img/cs4b/2-first/unexpected-errors.png)

That's why we're starting with this text environment. 

After mastering C#, you can expand to other more interesting and better-looking environments like web servers, desktop applications or games. 

OK. Let’s go make our first program. 

[/ContentBlock]
[ContentBlock]

# 5 Steps to Make Your First Program

[Step number="1"]Let’s create a project. Open Visual Studio and click File > New > Project.  Or just press [Key]Ctrl + Shift + N[/Key]. [/Step]

![Create Project menu](/img/cs4b/2-first/new-project-menu.png)

[Step number="2"]Choose Visual C# > Console App. And name it “First”. Then, click [Button]OK[/Button] [/Step]

![Create Project Popup](/img/cs4b/2-first/create-console-project.png)

If you want to save your project in other location, change it by clicking [Button]Browser[/Button] button. 

[Note title="What if there is no Console App option under the Visual C#?"]

If you didn’t install Visual Studio from scratch and are using one that your parents, brothers, sisters or friends installed for you, it is possible that there is no Console App option even after clicking Visual C# on the left. 

It’s because .NET Desktop Development workload isn’t installed. Do these to solve that problem:

[Step number="1"]Click Tools > Get tools and features. You need an Internet connection. [/Step]

![Get tools and features menu.](/img/cs4b/2-first/tools-and-features-menu.png)

[Step number="2"]You can see the Workload page. Check .NET Desktop Development and press [Button]Install[/Button]. [/Step]

![Image for Workload](/img/cs4b/1-prog/check-csharp-workload.png)

[/Note]


[Step number="3"]At the center of the screen, you can see that Program.cs is open.[/Step]

![Visual Studio Image](/img/cs4b/2-first/visual-studio-start.png)

Type in `Console.WriteLine(”Hello, World”);` like below. 

[Code line="1"]
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
$a            Console.WriteLine("Hello, World!");
        }
    }
}
[/Code]

Don’t forget to add a semicolon(;) at the end of the sentence. If not, you’ll see an error like below: 

[ErrorQuote]
CS1002: ; expected
[/ErrorQuote]

It’s because semicolon means the end of the sentence in C#. It does the work of period(.) in English. 

[Step number="4"]Click the “Build” menu on the top menu. The shortcut for this menu is different from setting to setting. But it is usually [Key]F6[/Key] or [Key]F7[/Key]. [/Step]

![Build Menu](/img/cs4b/2-first/build-solution.png)

[Step number="5"]Run the program by pressing [Key]Ctrl + F5[/Key]. You can see the black and white text program on your screen.[/Step]

![Hello, World Program](/img/cs4b/2-first/hello-world.png)

You just finished creating your first C# program. 

[Note]
In the later examples, I'll remove lines like `using`, `namespace` and `class Program` and only show you `static void Main(string[] args)` and other related methods and variables. 

It's because they usually don't change much. I want you to focus on the contents of the `Main()` method. 

It doesn't mean you can remove them all. It's quite the opposite. 

You MUST NOT delete them. They're NECESSARY.

They're removed because they take space for nothing and distract you. 
[/Note]

[/ContentBlock]
[ContentBlock color="grey"]

# How Hello World Works. 

We made our computer show us a message.

But you don’t know why and how you’ve got this power. 

It’s because you wrote the right instruction with the right method. The `Console.WriteLine()` method helps you show any message on that black screen. 

If you want to show your name on the screen, let’s change `“Hello, World”` with your name like below: 

```
static void Main(string[] args)
{
    // Change K. Heo to your name.
    Console.WriteLine("K. Heo");
}
```

Or use whatever text you want to show. 

If you want to write multiple lines of code, you can use `Console.WriteLine()` multiple times like this: 

```
static void Main(string[] args)
{
    Console.WriteLine(”Hello, World”);
    Console.WriteLine(”I’m Professor Oak.”);
    Console.WriteLine(”What is your name?”);
}
```

We mimicked the first scene of the old Pokemon games:

![Professor Oak](/img/cs4b/2-first/professor-oak.png)

Now, you mastered how to show a message on the console window. 

But that doesn’t mean you know everything about the code in First.cs file. There are still weird things like:

* `using` phrases like `using System;`, `using System.Collections.Generic;`
* `namespace First`
* `class Program`
* `static void Main(string[] args)`

Unfortunately, I cannot tell you what they are right now. 

It’s not because I don’t know them or you’re not smart enough. 

It’s because it takes a lot of time to explain all of them. For example, we need a few thousands of words to learn what `class` is. 

But you don’t need to know them now to learn more about programming. So, we can ignore them for now. 

You’ll learn more about them sooner or later.  

[/ContentBlock]
[ContentBlock]

[SectionTitle number="2"]Professor Oak Program[/SectionTitle]

We learned how to show the text message we want. 

But it doesn’t make us feel that we’re really controlling our computer. 

Actually, we can do the same thing with Notepad:

![Hello, World in Notepad](/img/cs4b/2-first/hello-world-notepad.png)

So, let’s expand our Professor Oak example a little bit. 

In this new program, you will answer your name to Professor Oak. 

If your name is "Ash", the professor will give you a Pikachu. If not, he’ll give you a Charmander. 

![Professor Oak gives you a Pokemon](/img/cs4b/2-first/giving-pokemon.png)

[Step number="1"]Let’s start with typing in your player name and showing it on the window.[/Step]

To get the user input for the name, we need another method. It’s `Console.ReadLine()`.

And we need to use this name multiple times: to show it on the screen and to check if it is "Ash". 

So, we need to save the name in a box because we need to use it later. We programmers call those boxes as variables. 

The code will be like below: 

[Code line="7"]
static void Main(string[] args)
{
    Console.WriteLine(”Hello, World”);
    Console.WriteLine(”I’m Professor Oak.”);
    Console.WriteLine(”What is your name?”);

$a    var yourName = Console.ReadLine();
$a    Console.WriteLine(”Oh, your name is “ + yourName);
}
[/Code]

Let’s compile with [Key]F6[/Key] and run it with [Key]Ctrl + F5[/Key]. You can see your name on the screen. 

![I typed in Serena](/img/cs4b/2-first/serena.png)
![!!Hmm.... Professor, how about giving Fennekin to Serena?](/img/cs4b/2-first/fennekin.png)

We added 2 lines of code to type in our name and show us the message that the professor understood it. 

Let’s take a look at them carefully. 

[ContentBreak /]

```
var yourName = Console.ReadLine();
```

As I said earlier, `Console.ReadLine()` gets input from the user. Because of that, the caret is blinking on the screen for your input. 

![Blinking caret](/img/cs4b/2-first/blinking-caret.gif)

Then, we put your input into the box with the equal(=) sign. And we decided that the name of the box should be yourName. 

In short, `var yourName = Console.ReadLine();` means to create a box with the name, yourName, and fill it with the name you can get from the user. 

![Putting data into the box. Monitor on the side.](/img/cs4b/2-first/variable-box.png)

[ContentBreak /]

```
Console.WriteLine(”Oh, your name is “ + yourName);
```

You know what `Console.WriteLine()` is. But there is something interesting right next to the text. 

We're trying to connect 2 texts with a plus(+) sign. 

In math, it won't be possible. But in C#, it's OK. 

That's why we could see the message: 

[Console]
Oh, your name is Serena
[/console]

![Connecting texts with plus sign](/img/cs4b/2-first/connect-texts.png)

[Tip title="Watch out for cases."]
C# variables are case sensitive. 

In other words, yourname, yourName, YOURNAME, yOuRnAmE are all different variables. 

So, if you write code like `Console.WriteLine("Oh, your name is " + yourname);`, you'll meet an error message like below: 

[ErrorQuote]
CS0103	The name 'Amy' does not exist in the current context
[/ErrorQuote]

[/Tip]


[Step number="2"]Then, let’s give Pokemon to you according to your name. [/Step]

When we were planning this program, we decided to give Pikachu to you if your name is “Ash”. 

Can you see that we used the word “if” for the condition? 

You can also use `if` for conditions in C# like below:

[Code line="11"]
static void Main(string[] args)
{
    Console.WriteLine(”Hello, World”);
    Console.WriteLine(”I’m Professor Oak.”);
    Console.WriteLine(”What is your name?”);

    var yourName = Console.ReadLine();

    Console.WriteLine(”Oh, your name is “ + yourName);

    if (yourName == “Ash”)
    {
        Console.WriteLine(”Here is your Pikachu.”);
    }
    else
    {
        Console.WriteLine(”Here is your Charmander”);
    }
}
[/Code]

You didn't learn how to use `if` statement. But you can feel how it works because it sounds like a broken English:

If yourName is(==) “Ash”, show(Console.WriteLine) “Here is your Pikachu.” message. 
If not (else), show(Console.WriteLine) “Here is your Charmander.” message. 

In English, we don’t cover the condition with parentheses. But we should do that in C#. 

Be careful not to use = to compare the value of variables in C#. Equal operator in C# is ==, not =. You MUST DOUBLE equals sign(=). 

If you use =, you'll meet an error message like below: 

[ErrorQuote]
CS0029	Cannot implicitly convert type 'string' to 'bool'
[/ErrorQuote]

Now, let’s compile it with [Key]F6[/Key] and run it with [Key]Ctrl + F5[/Key].

And type in various names like `Dawn`, `Lara Croft`, `Mario`, `Iris`, `Ash`, etc.

You can see that the professor gives you a Pikachu only when you type in Ash. It’s something you cannot do with other programs like Notepad or Word. 

[Tip title="ash isn't Ash"]
In C#, comparison is also case-senstive like variable names. 

So, if you type in "ash", you cannot get Pikachu!
[/Tip]

[SectionTitle number="3"]Frequently Asked Questions[/SectionTitle]

# Why are we learning C#? Not C++, Python or JavaScript?

According to the list of [Programming Languages in Wikipedia](https://en.wikipedia.org/wiki/List_of_programming_languages), there are hundreds of “notable programming languages”. 

Among them, this blog chose C#. It’s not because of the ranking. (Yes. C# is in rank #4-#6 in [most statistics of 2018](http://statisticstimes.com/tech/top-computer-languages.php).)

It’s because the focus of this blog is making games with Unity Engine. And Unity only supports C#. 

(They once supported other languages. But they threw them away.)

So, to make a game with Unity, you need to learn C#. Without it, you cannot use it. 

![!!C# is the basement for Unity](/img/cs4b/2-first/unity-base.png)

# Is C# an easy language for beginners? 

Whatever your first programming language is, it is much harder than your second, third languages. 

Because you need to learn everything from scratch about computers, variables, logic, functions, coding habits, object-oriented programming, etc. 

All of these topics are new to you. And it takes many hours to master them. 

![!!A lot of steps are in front of you!](/img/cs4b/2-first/many-steps.png)

But I think it doesn't answer your question because I guess the question you really wanted to ask me is this: 

“Am I smart enough to learn how to make programs in C#? I don’t want to give it up in the middle.”

Many people don’t ask questions in that way because it sounds silly.

But I think it’s a very good question. Because your time is precious and you’re using it for something you can use for other (better) purposes. 

Everyone is different. So, I cannot say that my answer is absolutely true. But I want to tell you this. 

If you can understand the English in this article and love computers and want to make something with them, you can learn programming. 

Therefore, let’s walk together to our goal: Becoming a good programmer. 

![Goal for the good programmer](/img/cs4b/2-first/together-to-the-goal.png)

# Why is the message for the first program "Hello, World!"?

It's a tradition from 1970s. 

The creator of C language, Dennis Ritchie, wrote the book, The C Programming Language, with Brian Kernighan. 

In this book, they made their first example with the text: Hello, World. 

From that, the programming language book writers followed that tradition. And I did that, too. 

[/ContentBlock]

[Quiz]

QTitle>> OX. Are they correct?

[OX]
Q>> To show message on screen, we need to use `Console.ReadLine()`.
A>> X. We need to use `Console.WriteLine()`.
[/OX]

[OX]
Q>> We cannot remove lines like `class Program`, `static void Main(string[] args)`.
A>> O. 
[/OX]

QTitle>> Let's make a program! 

We want to make a program that shows a message like below: 

[Console]
Wake up, Link!
[/Console]

How should we write code? 

[Answer]

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
            Console.WriteLine("Wake up, Link!");
        }
    }
}
```

All we need to do is change “Hello, World” to “Wake up, Link!”. 

[/Answer]

QTitle>> Code Magnet. Fill the blansk in the code. 

[FillBlanks]
Let’s make a program that returns “Great” if the user types in 7 and “Not bad” for others. 

Fill in the blank with the code magnets:

```
static void Main(string[] args)
{
    Console.WriteLine(”What is your favorite number?”);

    var yourNumber = ____2;

    if (____7)
    {
        Console.WriteLine(”Great”);
    }
    else
    {
        Console.WriteLine(”Not bad”);
    }
}
```
====
* Console.WriteLine()
>> We want a number from the user. We don’t want to show anything yet. 
>> We want condition!
! Console.ReadLine()
>> Correct. To get input from users, we need Console.ReadLine() method. 
>> We want condition!
* Random.Next()
>> We don’t want random numbers in this code. You’ll learn how to use this method in Chapter 3. 
>> We want condition!
* new FileStream()
>> We don’t want to create/open a file. 
>> We want condition!
* yourName == “7”
>> We want a number. Not a result of the comparison. 
>> The variable name isn’t yourName. It’s yourNumber.
* yourName == 7
>> We want a number. Not a result of the comparison. 
>> The variable name isn’t yourName. It’s yourNumber.
! yourNumber == “7”
>> We want a number. Not a result of the comparison. 
>> Correct. As Console.ReadLine() returns a string, we need to cover 7 with quotation marks(”). You’ll learn what “returns a string” in Chapter 2 and Chapter 5. 
* yourNumber == 7
>> We want a number. Not a result of the comparison. 
>> As Console.ReadLine() returns a string, we need to cover 7 with quotation marks. If not, the result of the condition is false even if you type in “7”. You’ll learn why this happened in Chapter 2. 
* “yourNumber == 7”
>> We want a number. Not a result of a comparison. 
>> If you cover entire condition with quotation marks, it becomes a simple text, not a condition. So, we cannot use it. 
[/FillBlanks]

[/Quiz]

[ContentBlock]

# What do you want to do? 

We learned what programming is in the previous chapter. 
And we experienced what programming is by making programs. 

Now that you know what programming is, there are 2 choices for you. 

1. Leave. It’s time to kick out the fat Visual Studio from your hard drive and spend time for something better. 
2. Go on to the next adventure. It was just the beginning. More interesting things are waiting for you. 

If you decided to go on, I want to ask you this question before you start reading the next chapter. 

**If you can make any program you want, what do you want to make? Can you write them in detail in the comment section?**

You’ll meet many obstacles as you learn programming. Whenever you’re tired and want to quit, think about that goal. 

Then, it’ll give you new energy to move on. 

Let’s move on to the next chapter: Variables. 

[/ContentBlock]