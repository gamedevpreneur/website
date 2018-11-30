---
title: "What is Programming? What do Programmers Do?"
description: "We cannot live without computer programs. Then, who made all of them? How?"
slug: programming
time: 2018-11-17
src: /img/cs4b/1-prog/thumbnail.png
---
[Title]What is Programming Exactly? What do Programmers Do?[/Title]

[ContentBlock]

![Does every developer love night and coffee?](/img/cs4b/1-prog/dev-loves-coffee.png)

In a dark room with little light, a man is typing keyboard like mad. 

On the black screen, the green characters on the black background scroll up fiercely. 

Next to the monitor, there are a few empty cups. There are dark brown coffee stains around them.

Only speedy and small tick, tick sounds are coming from the keyboard. 

[/ContentBlock]
[ContentBlock color="grey"]

# A Common Myth About Programmers

I don’t know why. But when a lot of people hear the word, programmer or software developer, they imagine the guy above. 

They guess developers should type some weird things on the screen fast to make programs. 

Actually, it’s a common myth.

No one can understand the text that scrolls up fast like that! 

![No developer can read the text that scrolls up fast like this!](/img/cs4b/1-prog/cannot-read.gif)

Actually, typing code is only one of the many things that they do. It’s just an unrealistic stereotype. 

Yes. Some developers love coffee. Some developers are night owls. Most developers type faster than average people. 

But that’s not programming. 

![Writing something on black screen in the night isn't programming!](/img/cs4b/1-prog/its-not-programming.png)

Then, what is programming? 

This article and [next](/first-program-in-csharp) will answer that question. 

[/ContentBlock]

[SeriesTOC name="cs4b" id="chap1" /]

[ContentBlock]

[SectionTitle number="0"]One Thing You Need to Do First[/SectionTitle]

That thing is:

Install [Visual Studio](https://visualstudio.microsoft.com).

You might now be wondering now why I'm telling you to install a program. Some of you might even worry if I'm trying to sell you an expensive program or to exploit you with some bad programs. 

![Are you a fraud?](/img/cs4b/1-prog/are-you-fraud.png)

Don't worry. I'm not a fraud. 

Visual Studio is a program made by Microsoft. You can create almost any program under the sun with it. 

Your computer doesn't have software development tools by default. So, without installing programs, you cannot make your own programs. 

[ContentBreak /]

Then, you might want to ask me why we need to install this program to learn what programming is. 

Because I want you to **feel what programming is like**. And I believe it's the best way to learn anything. 

![!!The best way to understand is to get your hands dirty by doing that thing!](/img/cs4b/1-prog/hands-dirty.png)

Then, why am I telling you to install that now? We can do that later. 

It’s because it’s really big. It takes a few gigabytes of your hard drive. In other words, it can take from at least 15 minutes to even an hour or more to download and fully install it. 

And we all well know that it’s really boring to wait for the progress bar to get to the end. 

So, let’s start the installation process. And learn about programming in the meantime. 

![Making computer install Visual Studio](/img/cs4b/1-prog/let-computer-install.png)

[Note]
We're installing Visual Studio because this blog covers how to make games with [Unity3D engine](https://unity3d.com/) and C#. If you're interested in other languages, you don't have to install Visual Studio.
[/Note]

# How to Install Visual Studio

[Step number="1"]Visit the [Visual Studio website](https://visualstudio.microsoft.com) and download it. If you’re a Mac user, [click here](https://visualstudio.microsoft.com/vs/mac/). [/Step]

If you’re worried about money, don’t worry. Microsoft made Community edition of Visual Studio free. You can use it for your personal projects. 

Unlike many wannabe developers in 2008, you don’t have to get some help from dark-and-shady websites to get the latest Visual Studio!

Click the Download button.
 
![!!Download Windows Version](/img/cs4b/1-prog/download-visual-studio-community.png)
![!!Download Mac Version](/img/cs4b/1-prog/vs-mac.png)

Then, you can see that a small installer has been downloaded. 

![We finished downloading the Installer.](/img/cs4b/1-prog/downloaded-vs-installer.png)

[NextStep /]

[Step number="2"]Now, let’s install Visual Studio. Double click to fire up the installer. And agree to the terms. [/Step]

![Agree to terms](/img/cs4b/1-prog/agree-to-terms.png)

**If you're a Mac user, it is better idea to follow the instruction in [this article](https://docs.microsoft.com/en-us/visualstudio/mac/installation).** Windows and messages are a lot different. 

[NextStep /]

[Step number="3"]Choose a workload. As you can see, you can develop programs for various purposes. [/Step]

To learn all of that, it’ll take at least a decade. (And as you well know, you don’t have to.)

We'll use C#. So, check .NET desktop development. And click install to proceed. 

![Workload page](/img/cs4b/1-prog/check-csharp-workload.png)

If you're a Mac user, you don't have to install Android or iOS. All we need is .NET Core. 

![Mac Workload](/img/cs4b/1-prog/mac-workload.png)

[NextStep /]

[Step number="4"]Let's wait. [/Step]

![Progress](/img/cs4b/1-prog/vs-progress.png)

It takes a long time because the installer has to download a lot of files and install them.

[/ContentBlock]
[ContentBlock color="grey"]

[SectionTitle number="1"]What is a computer?[/SectionTitle]

Teachers teach. Writers write. Then, what do programmers do? 

They program. Or they make programs. 

Then, what are programs? 

They’re electronic tools that we can use in computers. 

![Programs are tools](/img/cs4b/1-prog/programs-tools.png)

Without computers, we cannot use the programs that programmers made. 

So, to understand what programming is, we need to understand first what computer is. 

[/ContentBlock]
[ContentBlock]

# A lost meaning of the word, computer.

About 70-80 years ago, computer wasn’t a machine. [It meant people](https://en.wikipedia.org/wiki/Human_computer). 

Their job was computing or calculating.

In other words, they used specially pen and paper to add, subtract, multiply and divide numbers in a small room with full of other computers like below: 

![Image of human computers](https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Human_computers_-_Dryden.jpg/1024px-Human_computers_-_Dryden.jpg)

As you can see in the picture above, it was a common war-time job for women. They were underpaid but had to work for long hours.

After war ended, the machine computers improved dramatically. So, we don’t need human computers anymore. 

That’s why most of us don’t even know there was an occupation like that. 

[ContentBreak /]

Let's compare the differences between human computers and machine computers. 

There are a lot of differences. 

For example, you cannot watch movies, surf the web, play games, write a report for your school or work, read books, buy things with human computers. 

In contrast, human computers just calculated numbers.

![Human computer vs. Machine computer](/img/cs4b/1-prog/machine-vs-human.png)

(Yes, you can make them act like actresses, ask questions, play games with you, write report for you, read books aloud or buy things on the way back home. But these are not their job as a computer. They can do these because they're _human_.)

So, you might think that machine computers can do many other things that human computers can’t do. 

Well, actually.... They’re almost the same in 2018. It did't change much. 

![!!When you compare the jobs of human computers and machine computers, you might think I'm kidding. Please read on.](/img/cs4b/1-prog/computer-equals-human.png)

[/ContentBlock]
[ContentBlock color="grey"]

# Computers are NOT geniuses. 

In some movies, amazingly smart computers dominated the world and we humans are slaving under them. 

And our main character is leading a rebellion against them for human rights and welfare. They break down the monstrous computers that want to kill them. 

![!A rebellion is marching to the monstrous computer](/img/cs4b/1-prog/computer-vs-rebellion.png)

Movies like them make us think computers are geniuses that can do anything. 

Actually, they’re not. 

**All they know is on and off of the electric signals.** They are often written in binary numbers, 0 and 1, for convenience. 

![Number 2, what is that?](/img/cs4b/1-prog/i-dont-know-2.png)

**And all they can do is adding those binary numbers** one by one according to the instructions given by programmers. 

(They even handle subtraction, multiplication, division with the addition under the hood.)

That’s what computers do. It’s just like their name. 

Their job is computing (calculating). It's just what human computers did. 

![Adding numbers is the job of computers](/img/cs4b/1-prog/thats-my-job.png)

But machine computers have one advantage: blazingly-fast calculation. 

In modern computers, they can perform more than millions of additions in a second. 

No human can do that. 

![Computer is fast.](/img/cs4b/1-prog/computer-is-fast.png)

[/ContentBlock]
[ContentBlock]

# Then, how can we do all of that?

You cannot still believe me computers are that simple. Because you can imagine the relationship between the simple lists of 0s and 1s and various things you can do with computers. 

It became possible because **programmers gave meaning to the binary numbers.** 

Let’s think about this example. 

A graduate student is writing a thesis that lists the similarities and differences between Korean and Japanese languages in English. 

Then, we need the characters of 3 languages: English, Korean and Japanese. But computers can only handle 0s and 1s. 

![Computers don’t know them. They only know 0 and 1.](/img/cs4b/1-prog/cjk.png)

So, programmers assigned numbers to each character. 

For example:

* capital A is _65_ (01000001). 
* Small b is _98_ (01100010). 
* 가 (the first Korean character in the dictionary) is _44032_ (10101100 00000000). 
* 福 (luck in Chinese character that Chinese, Japanese and Koreans use) is _31119_ (01111001 10001111). 

So, when computers meet 65, they show A on the screen. When 44032, they do 가. 

[ContentBreak /]

Then, how many 0s and 1s do we need to handle every character in the world?

With 1 digit of binary number, we can assign 2 characters: 0 and 1. 
With 2 digits, 4 characters: 00, 01, 10, 11.
With 3 digits, 8 characters: 000, 001, 010, 011, 100, 101, 110, 111. 

If you're good at math, they follow the 2<sup>n</sup> rule. 

To assign a number to every character in the world, we only need 16 digits of 0 and 1. Because we can code 65536(2<sup>16</sup>) characters with them.

![We can cover all characters in the world with only 2 bytes](/img/cs4b/1-prog/2-bytes-all-languages.png)

Let's write this character-digit-thing in professional terms. 

In computer jargons, 1 digit of 0 and 1 are 1 bit. 8 bits are 1 byte. 

![bit and byte](/img/cs4b/1-prog/bit-byte.png)

So, we can rewrite it like below: 

We can code every character in the world with 2 bytes or 16 bits. 

[/ContentBlock]
[ContentBlock color="grey"]

## Showing Beauty in Binary Numbers

Actually, this isn’t the end of the story. Programmers gave numbers meaning for many other purposes. 

For example, you’re now reading this article with a monitor or a smartphone. 

And those screens have millions of pixels on them. And each pixel is a set of small numbers. 

Usually, they’re 3 one-byte numbers for the strength of 3 basic colors of the light: Red, Green and Blue. 

![Pretty screen is also a bunch of numbers.](/img/cs4b/1-prog/screen-and-numbers.png)

For example, the green pixels on the picture above have the strength of light in Red 0, Green 147, Blue 4. 

In short, computers calculate the values for each pixel to show pretty images, interesting videos or funny texts on screen in each milliseconds.

**Images and videos are all numbers.**

[ContentBreak /]

We learned how programmers created something meaningful with 0s and 1s. 

Then, do programmers do things like them these days? 

No. 

Almost every important/useful data has been defined since the birth of the computer. And they became crucial blocks for developers. 

So, most of them create something useful with those blocks. 

[RememberThis title="What is a computer?"]
Basically, it’s an extremely fast calculator. But programmers gave meaning to each numbers and wrote instructions so that we can do almost everything under the sun with it. 
[/RememberThis]

[/ContentBlock]
[ContentBlock]

[SectionTitle number="2"]What is programming?[/SectionTitle]

Steve Jobs once said, “Computer is a bicycle for the mind.” 

In his autobiography, he tells us why:

> "The ability of humans to create a bicycle allowed them to move more efficiently than even a condor. And likewise, the ability to make computers would multiply the efficiency of their minds."

And it also says, he once tried to name Macintosh as bicycle. (I personally believe Mac is a much cooler name.)

Like Jobs said, computers help us think faster and more accurately. 

But only when we give them the correct instructions. 

[/ContentBlock]
[ContentBlock color="grey"]

# How Computers Make Decisions

Computers only know 0 and 1. And programmers gave meaning to the lists of 0s and 1s. 

Then, how dumb computers can make complex decisions? 

Because we can even name the instructions with numbers. 

To understand how it works, let’s say you’re buying a paperback version of this tutorial from Amazon. 

(It's not published yet. I'm writing other chapters.)

![Paperback version](/img/cs4b/1-prog/cs-101-ad.png)

Then, you might work in the order below: 

1. Type in C# 101 in the search bar and press enter. 
2. Click the name of the book.
3. If you don’t need something else, go to step 5. 
4. Search and buy other things. 
5. Click cart icon. 
6. Pay them. 
7. Wait for them to arrive. 

According to Step 3, you can skip Step 4 if you want to buy only C# 101. 

It was possible because we named all instructions with numbers. 

That's how computers control the flow of instructions. 

Like we did with Amazon-purchase instructions above, computers execute instructions one by one. 

And at some points, they check the condition and jump to the other position of the instruction list according to the result. 

![!!A computer can skip some instructions and it can even go back to previous ones.](/img/cs4b/1-prog/change-flow.png)

# Writing Instructions Means....

We learned how computers execute instructions. Then, who wrote these instructions? 

The answer is **programmers**.

And the one-word for "writing instructions for computers" is *programming*. 

In other words, programming is the act of writing appropriate instructions that computers should execute. 

Many people calls these instructions as code. 

And programmers try their best to write code that makes computers do the right things in the right order. 

Because failure creates bugs. 

![!!Failure to write correct code generates bugs.](/img/cs4b/1-prog/why-bugs.png)

[RememberThis title="What is programming?"]
Programming is the act of writing appropriate instructions that computers should execute to get the result we want. 
[/RememberThis]

[/ContentBlock]
[ContentBlock]

[SectionTitle number="3"]What is a Programming Language?[/SectionTitle]

Once upon a time, when computers were so big and expensive that only a rich country like the US can even have one machine in their entire nation, programmers really created instructions with 0s and 1s. 

Because computers are extremely expensive and people are really cheap compared to them. People had to serve the computer. 

![People had to serve the computer.](/img/cs4b/1-prog/people-serving-computers.png)

But things have been changed since then. Computers became *extremely cheaper*. 

Nowadays, most of us have at least one computer. (The smartphone in your pocket is a small computer. And they’re much better than most desktops and even some servers in 10 years ago.)

So, it became really inefficient to write codes with 0s and 1s.

[ContentBreak /]

If you want to experience how hard it was to find a problem in the list of 0s and 1s, compare the numbers below and find a difference between them. 

> 010001011110101101
> 010001011010101101

Did you find it? I’ve highlighted the difference with red.

> 010001011[Red]1[/Red]10101101
> 010001011[Red]0[/Red]10101101

And this single 0 and 1 difference could create a bug in programs in those days. 

As you can see, it's hard. If checking the list of 0s and 1s is what we need to become a programmer, no one would do that!

![No one would check 0s and 1s!](/img/cs4b/1-prog/no-one-does-that.png)

That’s why programmers tried to find an easier and faster way to get the programming done. 

So, they created programming languages. 

[ContentBreak /]

Programming languages are human-readable languages to write instructions for computers more conveniently. 

With them, we can tell what we want to computers in more English-like way.

![What do you want to tell your computer to do?](/img/cs4b/1-prog/i-dont-speak-english.png)

But to use programming languages, there is a problem:

*Computers can’t understand them because they only know 0s and 1s.*

A human-readable programming language is too difficult and foreign to computers. They love an endless list of binary digits. 

![Programming languages are hard to computers](/img/cs4b/1-prog/programming-language-is-hard.png)

The endless list of binary digits is too difficult and foreign to us. We can never understand them. 

![Endless 0s and 1s are too hard for us.](/img/cs4b/1-prog/stop-the-endless-0-and-1.png)

So, we need a translator. A good translator who can translate our language into machine language (0s and 1s that computers love). 

**These translators are called compilers in the computer world.**

That’s why we’re installing Visual Studio. Because it has various compilers and tools so that we can write codes in programming languages to make programs. 

![Visual Studio translating languages](/img/cs4b/1-prog/visual-studio-translates.png)

[RememberThis title="What is a programming language?"]
Programming language is the human-readable, artificial languages that programmers use to write instructions for computers.
[/RememberThis]

[RememberThis title="What is compiler?"]
Compiler is a program that makes programs. It usually translates a programming language to a machine code. 
[/RememberThis]

[/ContentBlock]
[ContentBlock color="grey"]

# Conclusion

Let’s check the progress bar. By now, the installation might have been finished. 

If not, take some rest. Reading a long article like this isn't an easy task. 

*Good job!*

We learned about computer, programming and programming language. 

Now, it's time to experience how it feels like to make programs by making one yourself. 

That's the topic of our [next chapter](/first-program-in-csharp). 

(Well.... I recommend to review what we learned with the quiz below.)

[/ContentBlock]

[Quiz]

QTitle>> OX Quiz. Are they correct?

[OX]
Q>> A long time ago, a computer wasn’t a machine. It was an animal. 
A>> X. It was a job. 
[/OX]

[OX]
Q>> Computers can handle a lot of things because programmers gave meaning to numbers and taught them how to do them. 
A>> O. Without programmers, computers are little better than stones in the streets. 
[/OX]

[OX]
Q>> Programming language is a list of 0s and 1s. 
A>> X. Programming language is a human-readable, artificial language that can be used to write instructions for computers. 
[/OX]

[QuizBreak /]

QTitle>> Fill in the Blanks. 

Drag and drop the right answer. 

[FillBlanks]
Computer is not a ____1. They know ____5.
====
! genius
>> Sometimes, we feel that computers are geniuses. But they became geniuses because good developers made them act like one. 
>> They sometimes detect geniuses because programmers and teachers created an appropriate test for them. 
* fool
>> Computer knows only 2 things and can manipulate them fast. Except those, they know nothing. How do you call that? 
>> Is there a test that can detect a fool? 
* code
>> We need this to control computers. But a computer isn’t a code. 
>> They understand our code written in programming languages. Because programmers made them do so. 
* teacher
>> Computers are not teachers. Good teachers use computers wisely. 
>> To make computers detect teachers in a room, you need to study hard about computer vision. 
! only 0 and 1
>> Computers have more parts than abstract 0 and 1. 
>> Although computers have many parts, they exist to calculate 0s and 1s faster and more efficiently. 
* everything
>> Is computer everything in your life?
>> Google seems to know everything. It’s because Google programmers gathered them from all over the world and stored and organized them in their servers. 
* your private life
>> Well… We have fun with computers. But it’s not an answer. 
>> Computer isn’t a god!
* nothing
>> You can feel that the sentence is weird. Right? 
>> If computers can do nothing, we wouldn’t use that. We use computers they know 2 things and manipulate them fast. 
[/FillBlanks]

[FillBlanks]
____6 is the act of writing instructions for computers to do right things in the right order. If programmers wrote wrong instructions, they become ____2.
====
* compiler
>> Compiler cannot write instructions. They translate instructions in one language into other. 
>> When you write wrong instructions, compilers translate them in that way. So, you’ll get the wrong result. 
! bug
>> Bugs cannot write instructions. 
>> Developers use the term bug when they meet unexpected or wrong result. 
* explanation
>> It is great to write the code that explains itself. But it doesn't mean to write instructions for computers. 
>> When you meet a bug, try to explain why that happened. It’s really useful. 
* cat
>> Some cats love to see things in the monitor. But it’s sad that no cat wants to learn how to control computers. 
>> Wrong instructions aren’t that cute.
* translation
>> It’s the job of compilers. 
>> Wrong instructions in programming language create wrong machine code. Wrong result. 
! programming
>> Programming is the writing instructions for computers. 
>> Wrong instructions cannot write right instructions. 
[/FillBlanks]

[/Quiz]

[Guide name="cs4b" next="chap2" /]

[Overachiever]

# What is this section? 

You might have heard of the 80:20 rule or [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle). It’s a rule that can explain a lot of things happening in the world. 

For example, 20% of people have 80% of the money. 20% of customers generate 80% of revenue. And so on. 

It’s also true in the programming world. 

20% of the code is run 80% of the time. 
20% of the code can cause 80% of bugs. 

And for beginners like you, this is critical: 

**20% of grammar is used 80% of the time.**

To be a good developer, you must get used to this 20% of grammar. 

But sometimes, you cannot understand code or communicate with your teammates because you don’t understand other 80%. 

This section covers the less-frequently-used but sometimes important features or facts. 

When you're first reading this article, skip this section and go on to the next. In many times, this section contains the contents you cannot understand without learning the future contents in the series. 

# The Lie about C# compiler. 

When I was explaining about compilers, I told you that compiler translates the programming language to machine language. 

If it were C or C++, it’s correct. But as for C#, it’s a lie. 

Because C# compiler translates your C# code into Intermediate Language(IL), not machine code. And IL is translated into machine code by .NET or Mono. 

![Translation Process](/img/cs4b/1-prog/actual-translation.png)

Then, you might be wondering why we’re doing the similar job twice. 

It’s because **we can run the same program on different platforms without compiling the programs.** 

We learned that computers only know 0s and 1s. But it doesn't mean every computer interprets 0s and 1s in the same way. 

Unfortunately, different brands of CPUs *interpret them differently*.

That’s why there are a lot of different machine codes. Because of that, you cannot run your smartphone apps in your computer without the help of the emulators like [BlueStack](https://www.bluestacks.com/). 

By compiling codes to IL, we can run the same code on those platforms when they have an appropriate IL translator.

![Different platforms](/img/cs4b/1-prog/different-platforms.png)

It can save time because **we don't have to write the same code multiple times.**


[/Overachiever]
[Guide name="cs4b" next="chap2" /]