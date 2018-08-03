<template>
<Post>
<ContentBlock>
    <Title>C# Guide for JavaScript Developers</Title>
</ContentBlock>
<ContentBlock>
<FullImage src="/img/cs4j/opening.png" title="C# guide for JavaScript developers isn't a fantasy." />
<p>You're not a beginner.</p>

<p>Yes. C# is new to you. But you know the basics of programming.</p>

<p>But most C# tutorials treat you like a newbie. They kindly explain variables, functions to you. Unfortunately, you know them by heart.</p>

<p>What you need to know now is how to finish your daily tasks like declaring variables, looping arrays, handling objects with C#.</p>

<p>And this guide will help you do that.</p>

<Note>
<p>This blog is about making games with Unity3D. So, I've included this chapter. If you're not interested in making games, skip the chapter 0.</p>

</Note>
</ContentBlock>
<ContentBlock color="grey">
<ChapterTitle number="0">Unity Supports JavaScript. Why should I learn C#?</ChapterTitle>
<FullImage src="/img/cs4j/why-cs.png" title="Why should I learn C#?" />
<p>Because Unity has never supported JavaScript since its birth.</p>

<p>It sounds a bit radical. Because you can find <OutLink href="https://www.youtube.com/watch?time_continue=1&v=GPpw_ZE1LVc">the comparison between C# and JavaScript in Unity's official YouTube channel.</OutLink></p>

<p>I'll tell you the secret. It is not true JavaScript.</p>

<p>If you cannot believe me, take a look at these lines of code. It's the example code in the YouTube video above.</p>

#pragma strict
<span class="token keyword">var</span> age<span class="token punctuation">:</span> int <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<p>Have you ever seen the keywords like <Keyword>#pragma</Keyword> and <Keyword>int</Keyword> in JavaScript?</p>

<p>If you have experience with <OutLink href="https://www.typescriptlang.org/">TypeScript</OutLink>, you might have seen <Keyword>int</Keyword> after colon(:). But as you well know, they are not the keywords for current or future JavaScript.</p>

<p>If you skim <OutLink href="https://answers.unity.com/questions/12911/what-are-the-syntax-differences-in-c-and-javascrip.html">this answer in official Unity Q&amp;A site</OutLink>, you'll be surprised. Unity JavaScript has a lot of weird features you couldn't see in real JavaScript.</p>

<p>I know why you have considered this option. Because you're an awesome JavaScript developer.</p>

<p>But unfortunately, Unity JavaScript isn't a real JavaScript. So, you need to learn the differences to use it properly.</p>

<p>In short, it doesn't make any difference. You need to learn something new anyway.</p>

<p>Furthermore, <OutLink href="https://blogs.unity3d.com/kr/2017/08/11/unityscripts-long-ride-off-into-the-sunset/">Unity team decided to deprecate Unity JavaScript in 2017.</OutLink> So, don't ride on a sinking ship.</p>

<p>Frankly speaking, C# is not a piece of cake for JavaScript developers. They're really different.</p>

<p>But they share core concepts like variables, control flow statements and functions. All you need to do now is to learn how to get your jobs done in C# way.</p>

<p>And this guide helps you do that.</p>

</ContentBlock>
<ContentBlock>
<ChapterTitle number="1">Your First C# Program</ChapterTitle>
</ContentBlock>
<ContentBlock>
<p>To do front-end web programming, we basically need a text editor and a web browser.</p>

<p>So, for beginners, you don't need to install any new software. You can just use notepad.exe and Edge.</p>

<p>(Yes. It's an over-simplification. It sounds too much like 2005. In 2018 and beyond, to make a proper front-end web program, you need a bunch of tools like <OutLink href="https://www.npmjs.com/">npm</OutLink>, <OutLink href="https://babeljs.io/">babel</OutLink>, <OutLink href="https://browsersync.io/">browser-sync</OutLink>, etc.)</p>

<p>But to make a C# program, you must have a C# compiler. Without it, you cannot execute a single line of C# code.</p>

<p>Because C# compiler creates an executable C# program.</p>

<p>If you're a command line enthusiast, you can use <OutLink href="https://www.microsoft.com/net/learn/get-started/windows">.NET core</OutLink>. But almost every developer uses Visual Studio. Because it's visual (hmm...) and easier.</p>

<p>Now, let's install Visual Studio. Go to the Visual Studio website and download it.</p>

<p>Don't worry about paying tons of money to Microsoft. Visual Studio Community edition is free for personal use. You don't need to search torrent sites like a decade ago.</p>

<Goto href="https://visualstudio.microsoft.com/">Go to Visual Studio Website</Goto>
<p>Click Visual Studio Community.</p>

<p>[Image: Visual Studio site pointing community version with origami arrow]</p>

<p>Before 2017, it was really inconvenient to use C# in Mac. But things have changed. MS released Visual Studio for Mac in 2017! You don't have to overcome the painful route like in old days.</p>

<Goto href="https://www.visualstudio.com/vs/mac/">Go to Visual Studio for Mac website.</Goto>
<p>[Image: Visual Studio Mac]</p>

<p>Visual Studio is big and complicated. It takes a lot of time to install it. So, let's start it early.</p>

<p>Fortunately, the installation process is really simple.</p>

<Step href="1">First, agree on the terms. </Step>
<p>[Image for terms.]</p>

<Step href="5">Then, choose a workload. In our case, we should check .NET desktop development. And click install to proceed. </Step>
<p>[Image for Workload]</p>

<Step href="5">Wait. </Step>
<Tip title="Did you already install VS?">
<p>What if you already installed VS and you just want to add '.NET desktop development' to your workload?</p>

<Step href="1">Open VS and go to Tools > Get tools and features. </Step>
<p>[Show Menu]</p>

<Step href="2">You can see the Workload page. Check .NET Desktop Development and press install. </Step>
<p>[Image for Workload]</p>

</Tip>
</ContentBlock>
<ContentBlock color="grey">
<Subhead>It's not the Hello, World you knew</Subhead>
<p>Traditionally, we make a &quot;Hello, World&quot; program when we learn a new language. And C# version looks like below:</p>

<p>[Hello, World app]</p>

<p>I know this black and white console environment is not your goal.</p>

<p>But I've chosen it because it's simple. You don't have to learn other complicated Visual Studio features to make console applications.</p>

<p>If you want to make other applications like a web server, desktop application or games, you need to learn related libraries like ASP.NET, WPF, WinForm from other sources after finishing this article.</p>

<p>As for game development, you can use <OutLink href="https://unity3d.com">Unity</OutLink>.</p>

<p>Let's create our first project.</p>

<Step href="1">Open VS and click File > New > Project. Or just press <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>N</Key>. </Step>
<p>[Menu: gif image]</p>

<Step href="2">Choose Visual C# > Console App. And name it "First". </Step>
<p>[New Project Window. Arrows in Visual C# and &quot;First&quot;]</p>

<p>If you want to change your save location, click &quot;Browse&quot; button.</p>

<Note title="No Console App option under Visual C#?">
<p>What if there is no Console App option under my Visual C# option?</p>

<p>It's because you haven't installed .NET Desktop Development workload. Please check above to learn how to add that.</p>

</Note>
<Step href="3">First.cs is open. Let's type in <InlineCode>[Code]Console.WriteLine("Hello, World!");[/Code]</InlineCode> like below. Unlike JavaScript, semicolon(;) is required in C#. Don't forget. 
</Step>

<div class="code-snippet">
<div class="code-snippet-title-wrap">
	<div class="code-snippet-csharp">C#</div>
	<div class="code-snippet-title">Hello, World!</div>
</div>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Linq<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Text<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks<span class="token punctuation">;</span>

<span class="token keyword">namespace</span> First
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Hello, World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
</div>

<Step href="4">Click the "Build" menu on the top menu. The shortcut for this menu is <Key>F6</Key>.</Step>
<p>[Build menu]</p>

<Step href="5">Run the program by pressing <Key>Ctrl</Key> + <Key>F5</Key>. You just made your first C# program! </Step>
<p>[Hello, World program]</p>

</ContentBlock>
<ContentBlock>
<p>Why is it so complicated?</p>

<p>Do you remember the JavaScript version of &quot;Hello, World&quot;? It was really simple.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>In comparison, C# version is too complicated.</p>

<p>It's because methods and variables cannot live outside classes in C#. If we try to write the code like below, the compiler will show you an error.</p>


<pre class="language-csharp"><code class="language-csharp">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>That's why C# compiler generated a skeleton file that contains <InlineCode>First</InlineCode> namespace and <InlineCode>First</InlineCode> class.</p>

<p>Let's get back to our code. There are several keywords and methods: <Keyword>using</Keyword>, <Keyword>namespace</Keyword>, <Keyword>class</Keyword>, <InlineCode>Main</InlineCode> function and <Method>Console.WriteLine()</Method>.</p>

<p>We can guess <Method>Console.WriteLine()</Method> shows texts on the screen. But what are all those others for?</p>

<p>We'll learn <Keyword>using</Keyword>, <Keyword>namespace</Keyword>, <InlineCode>Main</InlineCode> function here. And we'll learn about <Keyword>class</Keyword> in detail in chapter 6.</p>

</ContentBlock>
<ContentBlock color="grey">
<Keyword>using</Keyword> in C# is <Keyword>require</Keyword> in JavaScript. Right?
<p>In modern JavaScript programming, NPM became essential. (Some people prefer <OutLink href="https://yarnpkg.com">yarn</OutLink>.)</p>

<p>Because there are fabulous libraries that save us tons of time. After installing them, you can import them to your project with <Keyword>require</Keyword> function like below:</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'lodash'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>If you're familiar with ES2015, the code above can be written like this:</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span></code></pre>

<p>In C#, using keyword seems to do the similar thing that <Keyword>require</Keyword>/<Keyword>import</Keyword> does. But they are really different.</p>

<p>Because the purpose of namespace is to avoid crashes in names, not to import libraries.</p>

<p>To import libraries to a project, you need to use &quot;add reference&quot; menu under the project name.</p>

<p>[Add reference menu]</p>

<p>And once the references are added, you can use the contents in those references without using <Keyword>using</Keyword> keyword.</p>

<p>For example, <InlineCode>Console</InlineCode> class is in <InlineCode>System</InlineCode> namespace.</p>

<p>Let's comment out <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">;</span></code></pre>
</InlineCode> line with <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token comment">//</span></code></pre>
</InlineCode>. Then, add System. in front of Console like below:</p>


<div class="code-snippet">
<div class="code-snippet-title-wrap">
	<div class="code-snippet-csharp">C#</div>
	<div class="code-snippet-title">Comment out using</div>
</div>
<pre class="language-csharp"><code class="language-csharp"><span class="token comment">//using System;</span>

<span class="token keyword">namespace</span> First
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Hello, World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
</div>

<p>Compile and run it. It works perfectly.</p>

<Keyword>using</Keyword> keyword isn't for importing data. It's for removing messy namespace notation in front of the classes. 
<p>Just compare the codes below:</p>


<pre class="language-csharp"><code class="language-csharp">System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"It's"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Really"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Messy!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>


<pre class="language-csharp"><code class="language-csharp">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"It"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Looks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Better!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>Which do you think is easier to read? Isn't it the second?</p>

<p>By the way, NPM for C# is <OutLink href="https://www.nuget.org/">NuGet</OutLink>.</p>

</ContentBlock>
<ContentBlock>
<Subhead>What is the Main method? Why do we need it?</Subhead>
<p>Whether you use a web browser or Node.js, they read the JavaScript code and create machine code by interpreting them.</p>

<p>This style of processing code has one advantage:</p>

<p>The starting point is clear.</p>

<p>The compiler can start from the file you used with node command or you linked to your HTML file with &lt;script&gt; tag.</p>

<p>[JavaScript execution image]</p>

<p>But in C#, there's one more step from code to execution. It's compilation. That's what you did by pressing <Key>F6</Key> key.</p>

<p>C# compiler reads your code files and creates an .exe file. And .NET framework or Mono translates the compiled code to machine code.</p>

<p>This compilation step is useful because it speeds up the translation into machine code.</p>

<p>[C# execution: compiler and .NET Framework]</p>

<p>But there is a problem: the starting point is unclear.</p>

<p>In our example project, we have only one file. So, it's simple.</p>

<p>But in real-world projects, there are at least dozens to hundreds, even thousands of files. Which file is the starting point? And which method?</p>

<p>To solve this problem, C# made one rule:</p>

<p>The starting point of C# program is the <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
</InlineCode> method.</p>

<p>That's why we need <InlineCode>Main()</InlineCode> method. You might wonder what are <Keyword>public</Keyword> and <Keyword>static</Keyword> in front of <InlineCode>Main()</InlineCode>. We'll learn about them in Chapter 6.</p>

<p>[C# execution]</p>

<Note>
<p>From now on, I won't show you using <Keyword>namespace</Keyword>s lines, <Keyword>class</Keyword> name and <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
</InlineCode> method except when there are meaningful changes in them.</p>

</Note>
</ContentBlock>
<Quiz>
<QTitle>OX Quiz. Are these statements correct?</QTitle>
<OX>
<OXQ> If you use namespaces in C#, it will load modules. </OXQ>
<OXA>X. It doesn't load module, it's for concise code by removing namespace part. </OXA>
</OX>
<OX>
<OXQ> Main method is the starting point of every C# Program. </OXQ>
<OXA>O. Without Main method, you cannot execute C# programs. </OXA>
</OX>
<p><QTitle>Make a Program. Make a program that shows this result. </QTitle></p>

<Console>
Wake up, Link! 
</Console>
<Answer>
<p>It's simple. All we need to do is replace &quot;Hello, World&quot; with &quot;Wake up, Link!&quot;.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Linq<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Text<span class="token punctuation">;</span>
<span class="token keyword">using</span> System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks<span class="token punctuation">;</span>

<span class="token keyword">namespace</span> First
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Wake up, Link!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="2">Variables: You're not my type</ChapterTitle>
<p>You just finished your first C# program. But you could see that C# and JavaScript are really different.</p>

<p>Unfortunately, it was just a beginning.</p>

<p>To declare a variable in JavaScript, all you need to do is add <Keyword>var</Keyword> keyword in front of your variable name.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Lara Croft"</span><span class="token punctuation">;</span></code></pre>

<p>After ES2015, you can use keywords like <Keyword>let</Keyword> and <Keyword>const</Keyword> instead of <Keyword>var</Keyword>. But still, there are only 3 keywords and it is not required to use <Keyword>let</Keyword> or <Keyword>const</Keyword>.</p>

<p>In addition, you can assign any type of variable to existing variables.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Lara Croft"</span><span class="token punctuation">;</span>

age <span class="token operator">=</span> <span class="token punctuation">{</span>
    mother<span class="token punctuation">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
    father<span class="token punctuation">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    friend1<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
name <span class="token operator">=</span> <span class="token number">61</span><span class="token punctuation">;</span></code></pre>

<p>We assigned an object to <InlineCode>age</InlineCode> which was a number. And a number is assigned to <InlineCode>name</InlineCode> which was a string. There's no problem.</p>

<p>However, in C#, you need to specify the type of every variable in front of it like below.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">"Lara Croft"</span><span class="token punctuation">;</span></code></pre>

<p>The type of age is <Keyword>int</Keyword>(eger). And the type of name is <Keyword>string</Keyword>.</p>

<p>After the declaration, the types of the variables are set. In other words, the types cannot be changed to other types.</p>

<p>So, when you try to assign a value with a different type, the compiler will show you an error.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">"Lara Croft"</span><span class="token punctuation">;</span>

age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span>
name <span class="token operator">=</span> <span class="token number">1234</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span></code></pre>

<p>As you can see, types are important in C#. Actually, this statement is too weak. It should be:</p>

<p><strong>C# is all about types.</strong></p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>6 Number types</Subhead>
<p>Basically, numbers in programming languages can be grouped into 2 big categories: integers and floating point numbers.</p>

<ul>
<li>Integers are numbers without fractional component like -1147, -5, 0, 2, 15.</li>
<li>Floating point number has a fractional part like -2.33, 6.72, 0.99.</li>
</ul>

<p>In C#, there are several types for each category.</p>

<ul>
<li>Integer types: <Keyword>short</Keyword>, <Keyword>int</Keyword>, <Keyword>long</Keyword></li>
<li>Real number types: <Keyword>float</Keyword>, <Keyword>double</Keyword>, <Keyword>decimal</Keyword></li>
</ul>

<p>Developers don't like to overcomplicate things. But having multiple types for the same purpose seems like exactly what they hate.</p>

<Sectionhead>Then, why do we need all of them?</Sectionhead>
<p>It's because they have different sizes. It's a trade-off between size, precision and speed.</p>

<p>For example, let's say we have to save 1 billion small integer numbers (less than 32,767). Then, we can save 2GB of storage by using 2-byte-sized <Keyword>short</Keyword> type instead of 4-byte-sized <Keyword>int</Keyword>.</p>

<p>In addition, 4-byte-sized <Keyword>float</Keyword> helps you save space and time. But you can lose some insignificant numbers. If you want more accurate result, you need to use bigger-sized floating point number types like <Keyword>double</Keyword>. But you'll need more space and time.</p>

<p>[[Small vs. Big size of boxes.]</p>

</ContentBlock>
<ContentBlock color="grey">
<Sectionhead>A hidden problem behind number types</Sectionhead>
<p>I told you that number types have different sizes. It means their sizes are not infinite.</p>

<p>So, they can only represent the finite number of numbers. In other words, there are maximum and minimum numbers for integers and real numbers. Here's the table:</p>

<p>| Type | Min | Max |<br>
| short | -32,768 | 32,767 |<br>
| int | -2,147,483,648 | 2,147,483,647 |<br>
| long | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 |</p>

<p>| Type | Smallest | Biggest |<br>
| float | ±1.5 × 10^-45 | ±3.4 × 10^38 |<br>
| double | ±5.0 × 10^−324 | ±1.7 × 10^308 |<br>
| decimal | ±1.0 x 10^-28 | ±7.9 x 10^28 |</p>

<p>Actually, JavaScript has this limitation, too. But teachers and books usually don't emphasize this point. It might be because the maximum and minimum values are reasonably big enough. They're 9,007,199,254,740,992 and -9,007,199,254,740,992. The number's a little bigger than 9 quadrillion.</p>

<p>In most cases, you don't need to handle bigger numbers than them.</p>

<p>Some of you are curious why I'm emphasizing this limitation in number types. Because when you try to use a big number that the variable type cannot handle, it'll cause overflow.</p>

<p>Let's check the example below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">2147483647</span><span class="token punctuation">;</span> <span class="token comment">// int maximum</span>
<span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2147483648</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Max + 1 is min: {0}"</span><span class="token punctuation">,</span> max <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">==</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Min - 1 is max: {0}"</span><span class="token punctuation">,</span> min <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">==</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>As you can see, when the number went over the limit, it circles back to the other side. That's why <InlineCode>max + 1 == min</InlineCode> and <InlineCode>min - 1 == max</InlineCode>.</p>

<p>But it doesn't happen in JavaScript. If the value goes under the MIN, it's MIN. If the value goes over the MAX, it's MAX.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> max <span class="token operator">=</span> <span class="token number">9007199254740992</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> min <span class="token operator">=</span> <span class="token operator">-</span>x<span class="token punctuation">;</span> 
<span class="token function">alert</span><span class="token punctuation">(</span>max <span class="token operator">==</span> max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true !</span>
<span class="token function">alert</span><span class="token punctuation">(</span>min <span class="token operator">==</span> min <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// also true !</span></code></pre>

<p>Overflow is just like a car mileage meter. When the number exceeds the limit, it goes back to the beginning, 0000.</p>

<p>[Mileage meter]</p>

<p>To avoid overflow, remember the approximate maximum of <Keyword>int</Keyword>: 2.1 billion.</p>

<p>When you need a number bigger than 2.1 billion, don't use <Keyword>int</Keyword>. Use <Keyword>long</Keyword> instead.</p>

</ContentBlock>
<ContentBlock>
<Sectionhead>Raw numbers are not the same numbers</Sectionhead>
<p>This number type size can cause problems when you're assigning number literals. (Literals are hard-coded raw numbers like 15, 3.14, 6.72).</p>

<p>Because we don't know the type of those literals.</p>

<p>Think about it.</p>

<p>You cannot assign an 8-byte <Keyword>double</Keyword> literal to a 4-byte <Keyword>float</Keyword> variable without losing data.</p>

<p>To solve this problem, we need to show the type of literals. And C# solved this by adding suffixes after literals.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">long</span> a <span class="token operator">=</span> <span class="token number">1234</span>L<span class="token punctuation">;</span>
<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">3.1415f</span><span class="token punctuation">;</span>
<span class="token keyword">decimal</span> c <span class="token operator">=</span> <span class="token number">2.71828</span>m<span class="token punctuation">;</span></code></pre>

<p>L is for <Keyword>long</Keyword>. f is for <Keyword>float</Keyword> and m is for <Keyword>decimal</Keyword>.</p>

<p>L is capital. But f and m are small. Actually, it's not a rule. You can use both F and f, M and m, L and l. But small l looks like number 1. It can be confusing. So, L is recommended.</p>

<p>Then, where are the suffixes for <Keyword>short</Keyword>, <Keyword>int</Keyword> and <Keyword>double</Keyword>?</p>

<p>As for <Keyword>int</Keyword> and <Keyword>double</Keyword>, they're default literal types for integers and real numbers. So, we don't have suffixes for them.</p>

<p>And as for <Keyword>short</Keyword>, it's a special case. <Keyword>int</Keyword> literal is automatically converted to <Keyword>short</Keyword> if it is between -32,768 and 32,767. If not, it's a compile error.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span></code></pre>

<p>If you're a novice Unity developer, you might have seen this error with float variables.</p>

<blockquote class="error-quote">
Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type
</blockquote>
<p>We now know why this happened. It's because there is no f after the literal. Add f like <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">float</span> pi <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span></code></pre>
</InlineCode></p>

</ContentBlock>
<ContentBlock color="grey">
<Sectionhead>How to convert types</Sectionhead>
<p>OK. We learned that you cannot assign bigger-sized variables into small-sized one.</p>

<p>But what should we do when we need to do that?</p>

<p>We should use casting.</p>

<p>The rule is simple. Add type name in front of the variable between parentheses.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">long</span> a <span class="token operator">=</span> <span class="token number">1234</span>L<span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span>

<span class="token keyword">double</span> c <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> d <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>c<span class="token punctuation">;</span></code></pre>

<p>Compiler wants to warn you it's unsafe. It wants to help you avoid mistakes.</p>

<p>That's why we need to tell our dear compiler with casting: &quot;Don't worry. It's safe. Everything will be all right.&quot;</p>

<p>[Compiler pointing code: assuring developer.]</p>

</ContentBlock>
<ContentBlock>
<Subhead>strings and characters. </Subhead>
<p>In JavaScript, you can use both ' and &quot; to handle a single character or a string of characters. You can choose whatever you want. It doesn't matter.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'abc'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span></code></pre>

<p>However, in C#, ' is for single characters. &quot; is for strings.</p>

<p>The type that uses ' is a <Keyword>char</Keyword> and the type that uses &quot; is a <Keyword>string</Keyword>. So, you cannot use them interchangeably as you did in JavaScript.</p>


<div class="code-snippet">
<div class="code-snippet-title-wrap">
	<div class="code-snippet-csharp">C#</div>
	<div class="code-snippet-title">char vs. string</div>
</div>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">char</span> a <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> b <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">;</span> <span class="token comment">// ERROR. "1" is a string, not a character. </span>
<span class="token keyword">string</span> d <span class="token operator">=</span> <span class="token string">'s'</span><span class="token punctuation">;</span> <span class="token comment">// ERROR. 's' is a character, not a string. </span>
<span class="token keyword">string</span> e <span class="token operator">=</span> <span class="token string">"e"</span><span class="token punctuation">;</span> <span class="token comment">// CORRECT. "e" is a string with a single character. </span>
<span class="token punctuation">[</span>code<span class="token punctuation">]</span>

Then<span class="token punctuation">,</span> what <span class="token keyword">if</span> we want to <span class="token keyword">add</span> " <span class="token keyword">in</span> <span class="token keyword">string</span><span class="token operator">?</span> <span class="token class-name">In</span> JavaScript<span class="token punctuation">,</span> there were <span class="token number">2</span> ways<span class="token punctuation">.</span> 

<span class="token operator">*</span> Use ' <span class="token keyword">string</span><span class="token punctuation">.</span> 
<span class="token operator">*</span> <span class="token class-name">Escape</span> them by <span class="token operator">&lt;</span>InlineCode<span class="token operator">></span>\"<span class="token operator">&lt;</span><span class="token operator">/</span>InlineCode<span class="token operator">></span><span class="token punctuation">.</span>

<span class="token class-name">You</span> cannot use the method <span class="token number">1</span> <span class="token keyword">in</span> C#<span class="token punctuation">.</span> So<span class="token punctuation">,</span> you need to escape it by \"<span class="token punctuation">.</span> 

<span class="token punctuation">[</span>code<span class="token punctuation">]</span>
<span class="token keyword">string</span> f <span class="token operator">=</span> <span class="token string">"I am fed up with \"Hello, World!\" examples."</span><span class="token punctuation">;</span></code></pre>
</div>

<Sectionhead>Rejoice! There are many similar operators!</Sectionhead>
<p>C# and JavaScript use the same operators for many <Keyword>string</Keyword> operations.</p>

<p>For example, to concatenate <Keyword>string</Keyword>s, use +.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">"Lara "</span> <span class="token operator">+</span> <span class="token string">"Croft"</span><span class="token punctuation">;</span></code></pre>

<p>Like JavaScript, you can use + to format a string. But you can also use the <Method>string.Format()</Method> method or $ syntax.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> a <span class="token operator">=</span> <span class="token string">""</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">" + "</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token string">" = "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> b <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"{0} + {1} = {2}"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> c <span class="token operator">=</span> $<span class="token string">"{i} + {j} = {i + j}"</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<Console>
1 + 2 = 3
1 + 2 = 3
1 + 2 = 3
</Console>
<p>The <Method>string.Format()</Method> method gets a format string as its first argument. And this string has special words like <InlineCode>{0}</InlineCode>, <InlineCode>{1}</InlineCode>, <InlineCode>{2}</InlineCode>, etc. They're filled with the values of the variables next to the format string.</p>

<p>For example, <InlineCode>{0}</InlineCode> is <InlineCode>i</InlineCode>, <InlineCode>{1}</InlineCode> is <InlineCode>j</InlineCode> and <InlineCode>{2}</InlineCode> is <InlineCode>i + j</InlineCode> in our example.</p>

<p>If you're familiar with ES2015, you noticed that the $ notation is similar to `` string. The difference is that you don't need to add $ after {.</p>

<p>The official name of this $ string is <OutLink href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated">string interpolation</OutLink>.</p>

<p>You can get the character in the string by the index with brackets([]). It's also same!</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">"Mario"</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> a <span class="token operator">=</span> name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a == 'M'</span></code></pre>

<p>C# string has utility methods like JavaScript. And names are almost identical.</p>

<p>| Split(separtor) | split(separator) |<br>
| IndexOf(str) | indexOf(str) |<br>
| Substring(start<b>[, length]</b>) | substring(start<b>[, end]</b>) |<br>
| StartsWith(str) | startsWith(str)[ES2015] |<br>
| Trim() | trim() |<br>
| Insert(position, str) | <OutLink href="https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index">check this article</OutLink> |<br>
| Replace(from, to) | replace(from, to) |</p>

<p>Note that there is a serious difference between <OutLink href="https://docs.microsoft.com/ko-kr/dotnet/api/system.string.substring?view=netframework-4.7.2">C# substring</OutLink> and <OutLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring">JavaScript substring</OutLink>.</p>

<p>In C# Substring, it gets startIndex and the length of the substring. In JavaScript substring, it gets startIndex and endIndex.</p>

<p>To get &quot;JavaScript&quot; from the string, &quot;C# and JavaScript are different&quot;, you need to use different arguments.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> s <span class="token operator">=</span> <span class="token string">"C# and JavaScript are different"</span><span class="token punctuation">;</span>
<span class="token keyword">string</span> js <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">"C# and JavaScript are different"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> js <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>Be careful!</p>

<p>You can see the examples below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">"Sonic the Hedgehog"</span><span class="token punctuation">;</span>
<span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> words <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { "Sonic", "the", "Hedgehog" }</span>
<span class="token keyword">int</span> position <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">IndexOf</span><span class="token punctuation">(</span><span class="token string">"the"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token keyword">string</span> sub <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hedgehog</span>
<span class="token keyword">bool</span> isAmy <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">"Amy"</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token keyword">string</span> trimmed <span class="token operator">=</span> <span class="token string">"      Tails      "</span><span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Tails</span>
<span class="token keyword">string</span> poke <span class="token operator">=</span> <span class="token string">"Pokemon Edition"</span><span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">"Pikachu "</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pokemon Pikachu</span>
<span class="token keyword">string</span> amy <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">"Sonic"</span><span class="token punctuation">,</span> <span class="token string">"Amy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Amy the Hedgehog</span></code></pre>

</ContentBlock>
<ContentBlock color="grey">
<Sectionhead>C# filled JavaScript string pitfall. </Sectionhead>
<p>In JavaScript, the type conversion between numbers and strings is sometimes implicit.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'5'</span> <span class="token operator">*</span> <span class="token string">'2'</span><span class="token punctuation">;</span> <span class="token comment">// a === 10</span></code></pre>

<p>The code above is completely OK in JavaScript.</p>

<p>But in C#, it's a compile error.</p>

<p>If you want to multiply a number in string format, you need to use <Method>Int32.Parse()</Method> or <Method>Convert.ToInt32()</Method> method like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> a <span class="token operator">=</span> Int32<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">"5"</span><span class="token punctuation">)</span> <span class="token operator">*</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>Both <InlineCode>Int32.Parse()</InlineCode> and <InlineCode>Convert.ToInt32()</InlineCode> do the same thing. Use whatever you want.</p>

</ContentBlock>
<ContentBlock>
<Subhead>bool: true or false</Subhead>
<p>There is one more frequently used type: <Keyword>bool</Keyword>. It can only have <Keyword>true</Keyword> or <Keyword>false</Keyword>.</p>

<p>In C#, <Keyword>true</Keyword> isn't 1 and <Keyword>false</Keyword> isn't 0. <Keyword>true</Keyword> is <Keyword>true</Keyword> and <Keyword>false</Keyword> is <Keyword>false</Keyword>. It means you cannot assign numbers to <Keyword>bool</Keyword> type variables like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">bool</span> isBig <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">bool</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// error. </span></code></pre>

<p>You should use comparison operators like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">bool</span> isBig <span class="token operator">=</span> val <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span></code></pre>

<p>It also means you cannot do things like this in C#.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// c === 1</span></code></pre>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> b <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// ERROR.</span></code></pre>

</ContentBlock>
<ContentBlock color="grey">
<p>We learned the basic types in C#. You might now feel nostalgia for the loose typing system in JavaScript.</p>

<p>Interestingly, there are similar things in C#,</p>

<Sectionhead>var is not the same var.</Sectionhead>
<p>C# also has a <Keyword>var</Keyword> keyword. But it's not the same <Keyword>var</Keyword> in JavaScript.</p>

<p>In JavaScript, <Keyword>var</Keyword> keyword means that string next to it is a name of a variable.</p>

<p>In C#, the compiler guesses the type of the variable from the initialization. And that type is hard-wired to that variable. So, you cannot change the type after initialization.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// type of a became int. </span>
a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
a <span class="token operator">=</span> <span class="token string">"Princess Peach"</span><span class="token punctuation">;</span> <span class="token comment">// Compile error</span></code></pre>

<p>The type of variable <InlineCode>a</InlineCode> is set to <Keyword>int</Keyword> at the first line.</p>

<p>So, you cannot change the type of <InlineCode>a</InlineCode> after that line. Because of this rule, you cannot declare <Keyword>var</Keyword> variable without initializing it.</p>

<p>For basic types like <Keyword>int</Keyword>, <Keyword>float</Keyword>, <Keyword>string</Keyword>, <Keyword>var</Keyword> isn't used a lot.</p>

<p>But with Generics, the type name becomes really long and ugly like <InlineCode>Dictionary&lt;int, Player&gt;</InlineCode>, <InlineCode>List&lt;Rabbit&gt;</InlineCode>. So, <Keyword>var</Keyword> is used to hide that complexity.</p>

<p>One more rule: You cannot use <Keyword>var</Keyword> in fields. It's only for local variables.</p>

</ContentBlock>
<ContentBlock>
<Sectionhead>dynamic: The most similar type for JavaScript variables. </Sectionhead>
<Keyword>dynamic</Keyword> variables are <Keyword>dynamic</Keyword>. They can keep any type of values you give to them. 
<p>They're the most similar variable type you used in JavaScript.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">dynamic</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">"Portal"</span><span class="token punctuation">;</span></code></pre>

<p>But as always, there are differences.</p>

<p>First of all, you cannot freely add members to the objects as you did in JavaScript.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bowser"</span><span class="token punctuation">;</span></code></pre>

<p>The code above is perfectly OK in JavaScript. But if you try to do that in C#, it'll throw <InlineCode>RuntimeBinderException</InlineCode>.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">dynamic</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bowser"</span><span class="token punctuation">;</span> <span class="token comment">// RuntimeBinderException!</span></code></pre>

<p>To do the same thing in C#, we need to use <InlineCode>ExpandoObject</InlineCode>.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">dynamic</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExpandoObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bowser"</span><span class="token punctuation">;</span></code></pre>

<p>If you try to compile the code above, it won't work. And you can see the red underline below <InlineCode>ExpandoObject</InlineCode>.</p>

<p>Because compiler cannot find the definition in namespaces.</p>

<p>To solve this problem, press <Key>Alt</Key> + <Key>Enter</Key> or <Key>Ctrl</Key> + <Key>.</Key>. Then, Visual Studio will show you the list of the possible locations of <InlineCode>ExpandoObject</InlineCode>. Usually, the namespace on the top of the list is the answer. Press <Key>Enter</Key> to add it.</p>

<p>[Adding System.Dynamic namespace]</p>

<p>You can find that <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">using</span> System<span class="token punctuation">.</span>Dynamic</code></pre>
</InlineCode> is added at the top.</p>

<p>Second, you cannot use <InlineCode>ExpandoObject</InlineCode> like a dictionary. In other words, you cannot call members with brackets and quotation marks like <InlineCode>
<pre class="language-csharp"><code class="language-csharp">a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span></code></pre>
</InlineCode>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK. </span></code></pre>


<pre class="language-csharp"><code class="language-csharp">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// RuntimeBinderException</span></code></pre>

<p>It's because there is a <InlineCode>Dictionary</InlineCode> class made for this purpose. We'll learn how to use it in Chapter 4.</p>

<p>Because of these restrictions, it's hard to see the real world examples of <Keyword>dynamic</Keyword> variables. It is sometimes used in ORM libraries because you cannot predict the tables users will make.</p>

<p>You might love <Keyword>dynamic</Keyword> if you're not familiar with types yet.</p>

<p>But in C# world, everyone loves strong types. dynamic is a weirdo. So, I don't recommend using them.</p>

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
<OXA>O. It's overflow. It circles back to the minimum number. </OXA>
</OX>
<OX>
<OXQ>You can use numbers bigger than 3 billion with int. </OXQ>
<OXA>X. The maximum number for int is 2.1 billion. If you need to use numbers bigger than that, it's time to use long. </OXA>
</OX>
<QTitle>Be the Compiler. What went wrong? </QTitle>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> babe <span class="token operator">=</span> <span class="token string">"Babe Ruth"</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> babeNumber <span class="token operator">=</span> <span class="token string">"3"</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Name: {0} Number: {1}"</span><span class="token punctuation">,</span> babe<span class="token punctuation">,</span> babeNumber<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<Answer>
<Keyword>int</Keyword> type variables cannot hold strings like "3". 
</Answer>
<p><QTitle>Fill the blank. We want to show only the first 30 characters of this quest message. </QTitle></p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span> questMessage <span class="token operator">=</span> 
    <span class="token string">"This letter quest has been started in England 200 years ago. "</span> <span class="token operator">+</span>
    <span class="token string">"And this letter gave happiness to its recipients. "</span> <span class="token operator">+</span>
    <span class="token string">"Unfortunately, this letter should leave your hands in 4 days. "</span> <span class="token operator">+</span>
    <span class="token string">"Otherwise, the happiness will become an unreversible misery."</span><span class="token punctuation">;</span>

<span class="token keyword">string</span> summary <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span> <span class="token punctuation">]</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>summary<span class="token punctuation">)</span><span class="token punctuation">;</span>

questMessage<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<Answer>
<p>If you use questMessage.Substring(30);, you'll get a string after the 30th character.</p>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="3">Control Flow Statements: 5 Differences </ChapterTitle>
<p>Thanks to types, C# variables are much more complicated than JavaScript.</p>

<p>But also thanks to types, control flow statements(<Keyword>if</Keyword>, <Keyword>for</Keyword>, etc.) are easier.</p>

<p>Furthermore, there are only a few differences between them.</p>

</ContentBlock><ContentBlock color="grey">
<Subhead>No ===, !== operator. </Subhead>
<p>In JavaScript, ===, !== operators checks the types and the values together. But as we learned, C# is obsessive with types. So, we don't need them.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"1"</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'"1" == 1 is true'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"1"</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'but "1" === 1 isn'</span>t <span class="token boolean">true</span>'<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"1"</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"\"1\" is false in C#."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>In C#, if the types are different, then they are different.</p>

</ContentBlock>
<ContentBlock>
<Subhead>bool-only in if!</Subhead>
<p>In JavaScript, you can assign variables in <Keyword>if</Keyword> statement.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>It's valid. But if you do something similar in C#, it's an error.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Compile Error!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>You can only put bool<Keyword>bool</Keyword> variable or <Keyword>bool</Keyword> expressions (e.g. <InlineCode>monsterHP &lt; 20</InlineCode>, <InlineCode>HP &gt;= 100</InlineCode>) in <Keyword>if</Keyword> statement in C#. If not, it's an error.</p>

<p>[bool only]</p>

<p>Because of this strict rule, there is no falsey, truthy thing in C#. If you want to add a <Keyword>null</Keyword> variable or an empty string in <Keyword>if</Keyword> statement, compare it with the value.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"String is empty"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
     Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Null Object"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Thou shalt initialize your variables. </Subhead>
<p>You can find this strictness in variable initialization, too. In JavaScript, if you're using a variable without initializing it, the value of the variable is <Keyword>undefined</Keyword>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> f<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> g <span class="token operator">=</span> f <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span></code></pre>

<p>In C#, it's a compile error when you use uninitialized variables. The code simply doesn't compile.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> f<span class="token punctuation">;</span>
<span class="token keyword">int</span> g <span class="token operator">=</span> f <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></code></pre>

<p>You'll see the error:</p>

<p>CS0165: Use of unassigned local variable 'f'.</p>

</ContentBlock>
<ContentBlock>
<Subhead>Handling exceptions</Subhead>
<p>Although it is not used a lot in JavaScript, you can handle errors with <Keyword>throw</Keyword>, <Keyword>try</Keyword>, <Keyword>catch</Keyword>, <Keyword>finally</Keyword> statements. The syntax and mechanism are identical in C#, but there is one difference:</p>

<p>You cannot throw raw values like string or numbers in C#.</p>

<p>It isn't odd because nothing can live outside classes in C#.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span><span class="token punctuation">(</span>someProblem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">"you can throw string in JS"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">if</span><span class="token punctuation">(</span>someProblem<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">"You should wrap it with Exception in C#"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span></code></pre>

<p>You can create your own <InlineCode>Exception</InlineCode> class by inheriting <InlineCode>Exception</InlineCode> class. We'll cover inheritance in Chapter 6.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>for-loop</Subhead>
<p>There's a good news. There is no difference between C# and JavaScript for <Keyword>for</Keyword> and <Keyword>while</Keyword> loop. They're just identical.</p>

<p>The only difference comes from the type system.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
     sum <span class="token operator">+</span><span class="token operator">=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>Even in C#, you can use <Keyword>var</Keyword> rather than <Keyword>int</Keyword>. But <Keyword>int</Keyword> is more preferred.</p>

</ContentBlock>
<ContentBlock>
<Subhead>special loop system for lists</Subhead>
<p>However, in C#, there is one more loop system for iterable objects like arrays, lists or dictionaries. It's <Keyword>foreach</Keyword> statement.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> enemies <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Bowser"</span><span class="token punctuation">,</span> <span class="token string">"Dr. Eggman"</span><span class="token punctuation">,</span> <span class="token string">"Ganon"</span><span class="token punctuation">,</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> enemies<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>enemies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>string[] is the type for the string arrays. And you need to be careful that initializer for arrays is braces({}) in C#, not brackets([]).</p>

<p>Like JavaScript, you can get the size of the array with <InlineCode>Length</InlineCode> property. (It's not <InlineCode>length</InlineCode>. It's <InlineCode>Length</InlineCode>. Capital L!)</p>

<p>But with <Keyword>foreach</Keyword> statement, we can remove the index from our code.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> enemies <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Bowser"</span><span class="token punctuation">,</span> <span class="token string">"Dr. Eggman"</span><span class="token punctuation">,</span> <span class="token string">"Ganon"</span><span class="token punctuation">,</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">string</span> enemy <span class="token keyword">in</span> enemies<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>The code became much simpler and clearer.</p>

<p>In ES5, there's a similar syntax. It's <InlineCode>forEach()</InlineCode> method.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> enemies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Bowser"</span><span class="token punctuation">,</span> <span class="token string">"Dr. Eggman"</span><span class="token punctuation">,</span> <span class="token string">"Ganon"</span><span class="token punctuation">,</span>  <span class="token punctuation">]</span><span class="token punctuation">;</span>

enemies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>name <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

</ContentBlock>
<Quiz>
<QTitle>OX Quiz. Is it correct?</QTitle>
<OX>
<OXQ>In C#, you cannot throw raw string or number as an exception. </OXQ>
<OXA>O. Everything in C# must be inside classes. Exceptions are not exceptions. </OXA>
</OX>
<OX>
<OXQ>In C#, if you use a variable without initializing it, it's a warning. </OXQ>
<OXA>X. It's a compile time error. </OXA>
</OX>
<OX>
<OXQ>You can use <Keyword>foreach</Keyword> loop with only iterable objects. </OXQ>
<OXA>
<p>O. You can use <Keyword>foreach</Keyword> statement with iterable objects like data structure objects like <InlineCode>List</InlineCode>, <InlineCode>Dictionary</InlineCode>, arrays, or objects that implement the <InlineCode>IEnumerable</InlineCode> interface.</p>

<p>You will learn what interfaces are in Chapter 6. OOP.</p>

</OXA>
</OX>
<p><QTitle>Be the compiler. Find what went wrong. </QTitle></p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> bombCount <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>bombCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">ThrowBomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<InlineCode>bombCount</InlineCode> => <InlineCode>bombCount > 0</InlineCode>
<p>bombCount is <Keyword>int</Keyword>, not <Keyword>bool</Keyword>. So, if you want to check whether the player has a bomb, you should check if bombCount is bigger than 0.</p>

</Answer>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Sword"</span><span class="token punctuation">,</span> <span class="token string">"Shield"</span><span class="token punctuation">,</span> <span class="token string">"Potion"</span><span class="token punctuation">,</span> <span class="token string">"Boots"</span><span class="token punctuation">,</span> <span class="token string">"Armor"</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span><span class="token punctuation">(</span>item <span class="token keyword">in</span> items<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<InlineCode><Keyword>foreach</Keyword>(item <Keyword>in</Keyword> items)</InlineCode> => <InlineCode><Keyword>foreach</Keyword>(<b><Keyword>string</Keyword></b> item <Keyword>in</Keyword> items)</InlineCode>
<p>You need to specify the type of item in lists when using <Keyword>foreach</Keyword> loop.</p>

</Answer>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token string">"24"</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"You cannot enter here."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<InlineCode><Keyword>var</Keyword> age = "12";</InlineCode> => <InlineCode><Keyword>var</Keyword> age = 12;</InlineCode>
<p>Comparing <Keyword>string</Keyword> with <Keyword>int</Keyword> is always <Keyword>false</Keyword> in C#.</p>

</Answer>
<QTitle>Make the program.</QTitle>
<Console>
Defeated enemies: Bowser, Dr. Eggman, Ganon
</Console>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> enemies <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Bowser"</span><span class="token punctuation">,</span> <span class="token string">"Dr. Eggman"</span><span class="token punctuation">,</span> <span class="token string">"Ganon"</span><span class="token punctuation">,</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">"Defeated enemies: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token class-name">Fill</span> <span class="token keyword">this</span> Blank<span class="token operator">!</span><span class="token punctuation">]</span></code></pre>

<Answer>
<p>There are several ways to solve this problem. But I solved it with <Keyword>for</Keyword> loop.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> enemies<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>enemies<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>I didn't use <Keyword>foreach</Keyword> statement because there is no index in <Keyword>foreach</Keyword> statement that I cannot print out comma after the last item in the list naturally.</p>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="4">How to work with data structures</ChapterTitle>
<p>To make programs with JavaScript, you have used the countless number of arrays and objects.</p>

<p>But in this article, I deliberately didn't cover much about native arrays in C#.</p>

<p>It's because arrays aren't used a lot in real-world C# programming.</p>

<p>It sounds really unintuitive. But it's true. Because C# arrays have a lot of restrictions.</p>

<p>For example, you cannot append new members to arrays because you cannot change the size. Yes, it's weird. But it's true.</p>

<p>C# is designed to make high-performance desktop programs in the early 2000s. To support machines which are much less powerful than the smartphones in your hand, you sometimes have to sacrifice flexibility.</p>

<p>That's why the native array in C# doesn't support resizing.</p>

<p>[More data?]</p>

<p>To make a general purpose and easy-to-use list without any limitation of the native array, Microsoft added generics and data structure classes to C#.</p>

<p>In C#, there are many data structure classes: <InlineCode>List</InlineCode>, <InlineCode>Dictionary</InlineCode>, <InlineCode>Queue</InlineCode>, <InlineCode>Stack</InlineCode>, <InlineCode>SortedList</InlineCode>, <InlineCode>HashSet</InlineCode>, etc.</p>

<p>Among them, <InlineCode>List</InlineCode> is the most frequently used and <InlineCode>Dictionary</InlineCode> is the next. Others are not used much.</p>

<p>So, we'll focus on <InlineCode>List</InlineCode> and <InlineCode>Dictionary</InlineCode>. If you want to learn more about others, <OutLink href="https://docs.microsoft.com/en-us/dotnet/standard/collections/">check the official document.</OutLink></p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Creating empty data structure.</Subhead>
<p>To create a list and a dictionary in JavaScript, what you need to do is use <InlineCode>[]</InlineCode> and <InlineCode>{}</InlineCode>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

<p>But in C#, it's a bit more complicated.</p>


<pre class="language-csharp"><code class="language-csharp">List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> points <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">List</span><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Dictionary<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> Player<span class="token operator">></span> players <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token class-name">Player</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>You need to specify the type of the items in the list between angular brackets. As for the <InlineCode>Dictionary</InlineCode> class, you need to specify the types of Key and Value.</p>

<p>And as they're not primitive types, you need to create them with the <Keyword>new</Keyword> keyword.</p>

<p>As you can see, the type name is too long and ugly. We can simplify them with the <Keyword>var</Keyword> keyword.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> points <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">List</span><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> players <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token class-name">Player</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>But don't forget. <Keyword>var</Keyword> is only for local variables. If you try to use it in fields, you'll meet the redline.</p>

</ContentBlock>
<ContentBlock>
<Subhead>What're those angular brackets? </Subhead>
<p>By now, you're well aware that C# is obsessive with types. It always tries to define types.</p>

<p>But it can cause problems when it comes to data structure classes. Because the actions for data structure classes are exactly the same regardless of types.</p>

<p>For example, steps for these actions are exactly identical in every data structure:</p>

<ul>
<li>storing new values in lists.</li>
<li>retrieving values from dictionaries by the index.</li>
<li>removing values in lists.</li>
</ul>

<p>The only difference is the type of the items in them.</p>

<p>So, Microsoft has to make a way to store &quot;any data type&quot;. That's why they made angular bracket syntax or &quot;generics&quot;.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>List Essentials. </Subhead>
<p>You learned how to initialize an empty <InlineCode>List</InlineCode>. Then, let's learn how to initialize <InlineCode>List</InlineCode> with initial items.</p>


<pre class="language-csharp"><code class="language-csharp">List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> points <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

<p>When you're initializing List with items, you can remove () in constructors.</p>

<p>To use <InlineCode>List</InlineCode> properly, you need to know how to add, find, change, remove items in it. Let's compare the names of the methods.</p>

<p>| Action | C# | JavaScript |<br>
| Append | list.Add(item) | array.push(item) |<br>
| Remove by index | list.Remove(index) | <OutLink href="https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript">check this article</OutLink> |<br>
| Retrieve | list[index] | array[index] |<br>
| Find the Index of an item | list.FindIndex(value) | array.indexOf(value) |<br>
| Size | list.Count | array.length |<br>
| Check existence | list.Contains(value) | array.indexOf(value) == -1 (before ES2016) array.includes(value) (after ES2016) |</p>

<p>And here are the examples of these functions in action:</p>


<pre class="language-csharp"><code class="language-csharp">List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">FindIndex</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { 7, 2, 3, 5, 6 } </span></code></pre>

<p>C# and JavaScript handle non-existent items differently.</p>

<p>In JavaScript, if you try to retrieve an item with non-existent index, it just returns <Keyword>undefined</Keyword> and code runs on.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> numbers<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a is undefined. </span></code></pre>

<p>But in C#, it returns <InlineCode>ArgumentOutOfRangeException</InlineCode>.</p>


<pre class="language-csharp"><code class="language-csharp">List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> numbers<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// throws ArgumentOutOfRangeException</span></code></pre>

</ContentBlock>
<ContentBlock>
<Subhead>Dictionary Essentials</Subhead>
<p>When I learned that objects can be used as dictionaries in JavaScript, I was a bit amazed.  Because I've never thought about that.</p>

<p>In JavaScript, objects and dictionaries are the same. They use the same syntax.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> player <span class="token operator">=</span> <span class="token punctuation">{</span>
    hp<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    mp<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"gun"</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token string">"sword"</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

<p>However, in C#, object is object and dictionary is Dictionary.</p>

<p>And you cannot initialize dictionary with special syntax like <InlineCode>{}</InlineCode>. You should use brackets after creating an empty dictionary.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Dictionary<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
items<span class="token punctuation">[</span><span class="token string">"gun"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
items<span class="token punctuation">[</span><span class="token string">"sword"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span></code></pre>

<p>Dictionary requires Key and Value. Thanks to them, many basic features are different from the List.</p>

<p>| Actions | C# | JavaScript |<br>
| Add | dict[key] = value | dict[key] = value |<br>
| Remove | dict.Remove(key) | delete dict[key] |<br>
| Retrive | dict[key] | dict[key] |<br>
| Size | dict.Count | Object.keys(dict).length |<br>
| Check existence of key | dict.ContainsKey(key) | Object.keys(dict).indexOf(key) == -1 |<br>
| Check existence of value | dict.ContainsValue(value) | Object.values(dict).indexOf(key) == -1 |</p>

<p>Here are the examples of the functions below.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> players <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token class-name">Player</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
players<span class="token punctuation">[</span><span class="token string">"mario"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
players<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"sonic"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
players<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span><span class="token string">"link"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
players<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token string">"mario"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>To loop through the dictionary in JavaScript, there are 2 ways:</p>


<pre class="language-javascript"><code class="language-javascript">Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token function">bar</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token function">bar</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>

<p>In C#, you can use <Keyword>foreach</Keyword> statement to loop through them.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">var</span> pair <span class="token keyword">in</span> dictionary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>pair<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span>pair<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>If you want to loop through only keys or values, use Keys, Values property.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> dictionary<span class="token punctuation">.</span>Keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token keyword">value</span> <span class="token keyword">in</span> dictionary<span class="token punctuation">.</span>Values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

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
<p>One bomb has been used.</p>

<p>Current Items:<br>
bomb: 4<br>
arrow: 10</p>

</Console>

<pre class="language-csharp"><code class="language-csharp">Dictionary<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
items<span class="token punctuation">[</span><span class="token string">"bomb"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
items<span class="token punctuation">[</span><span class="token string">"arrow"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token punctuation">]</span></code></pre>

<Answer>

<pre class="language-csharp"><code class="language-csharp">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"One bomb has been used."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
items<span class="token punctuation">[</span><span class="token string">"bomb"</span><span class="token punctuation">]</span> <span class="token operator">-</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Current Items:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">var</span> item <span class="token keyword">in</span> items<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>Key <span class="token operator">+</span> <span class="token string">": "</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
<Console>
3 5 6 1 7
</Console>

<pre class="language-csharp"><code class="language-csharp">List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token punctuation">]</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token keyword">in</span> numbers<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<p>Well, the easiest method is to assign new <InlineCode>List</InlineCode> like this:</p>


<pre class="language-csharp"><code class="language-csharp">numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

<p>But it's too easy. How about doing this by using the methods in the <InlineCode>List</InlineCode> class?</p>


<pre class="language-csharp"><code class="language-csharp">numbers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

numbers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

</Answer>
<p><QTitle>Be the transpiler. Translate JavaScript code to C# code. </QTitle></p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> gameReviewScores <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"Super Mario Odyssey"</span><span class="token punctuation">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
    <span class="token string">"Legend of Zelda: Breath of the Wild"</span><span class="token punctuation">:</span> <span class="token number">97</span><span class="token punctuation">,</span>
    <span class="token string">"Sonic Mania"</span><span class="token punctuation">:</span> <span class="token number">86</span><span class="token punctuation">,</span>
    <span class="token string">"Sonic Forces"</span><span class="token punctuation">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

gameReviewScores<span class="token punctuation">[</span><span class="token string">"Sonic Forces"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> worstGameName <span class="token operator">=</span> <span class="token string">"Super Mario Odyssey"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> worstScore <span class="token operator">=</span> gameReviewScores<span class="token punctuation">[</span>worstGameName<span class="token punctuation">]</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>gameReviewScores<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>gameReviewScores<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&lt;</span> worstScore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        worstScore <span class="token operator">=</span> gameReviewScores<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        worstGameName <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Worst game in 2017: "</span> <span class="token operator">+</span> worstGameName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<Answer>
<p>The Object.keys part and 2 variables above are about finding the minimum value in the list.</p>


<pre class="language-csharp"><code class="language-csharp">Dictionary<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> gameReviewScores <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Dictionary</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gameReviewScores<span class="token punctuation">[</span><span class="token string">"Super Mario Odyssey"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span>
gameReviewScores<span class="token punctuation">[</span><span class="token string">"Legend of Zelda: Breath of the Wild"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span>
gameReviewScores<span class="token punctuation">[</span><span class="token string">"Sonic Mania"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">86</span><span class="token punctuation">;</span>
gameReviewScores<span class="token punctuation">[</span><span class="token string">"Sonic Forces"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

gameReviewScores<span class="token punctuation">[</span><span class="token string">"Sonic Forces"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span>

<span class="token keyword">string</span> worstGameName <span class="token operator">=</span> <span class="token string">"Super Mario Odyssey"</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> worstScore <span class="token operator">=</span> gameReviewScores<span class="token punctuation">[</span>worstGameName<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">var</span> game <span class="token keyword">in</span> gameReviewScores<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>game<span class="token punctuation">.</span>Value <span class="token operator">&lt;</span> worstScore<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        worstScore <span class="token operator">=</span> game<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
        worstGameName <span class="token operator">=</span> game<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Worst game in 2017: "</span> <span class="token operator">+</span> worstGameName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="5">How functions function in C#</ChapterTitle>
<p>Functions get the values and handle them and return the value.</p>

<p>As we well know by now, C# is all about types.</p>

<p>So, we must specify the types of incoming and outgoing values in functions.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Functions and methods</Subhead>
<p>Methods are the functions in classes. In C#, no function cannot live outside classes. So, every function in C# is a method.</p>

<p>So, when talking about C# functions, many developers prefer calling them method to functions.</p>

<p>I'll follow that convention in this post.</p>

</ContentBlock>
<ContentBlock>
<Subhead>The difference in defining functions. </Subhead>
<p>When you define a function in JavaScript, all you need to do is to start your function with the <Keyword>function</Keyword> keyword.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>In C#, there is no <Keyword>function</Keyword> keyword. What you need to do is specifying the types of everything: arguments and returned value.</p>

<p>The type of returned value is called &quot;return type&quot;.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>What if there were no return value? Make return type empty?</p>

<p>No. You should specify that with the <Keyword>void</Keyword> keyword.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">void</span> <span class="token function">Attack</span><span class="token punctuation">(</span><span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Check player and attack her. </span>
<span class="token punctuation">}</span></code></pre>

<p>As always, C# compiler checks the types. In this case, it checks whether the types in the parameters and return type are correct.</p>

<p>In other words, if you don't return a value in non-<Keyword>void</Keyword> methods or vice versa, they are all errors.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// No return value. ERROR!</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span>
<span class="token punctuation">}</span></code></pre>

<p>It's completely valid to call the <InlineCode>add()</InlineCode> function above with integers, real numbers or strings in JavaScript.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// All OK. </span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token number">2.718</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>But if you try that in C#, you'll get a bunch of errors.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token keyword">add</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token number">2.718</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token keyword">add</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token keyword">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span></code></pre>

<p>What should we do to solve this problem? The answer is method overloading. We'll learn about it soon.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>You cannot define C# methods like JS functions</Subhead>
<p>In JavaScript, the preferred way of defining functions is to declare a variable and assign an anonymous function into that variable.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>But in C#, it's really painful to define a method like that. Don't try it.</p>

<p>(Many developers think it's impossible. However, with lambda method and delegate type, you can do that. I've tried it but don't cover it here because you shouldn't write code like that.)</p>

</ContentBlock>
<ContentBlock>
<Subhead>Method Overloading</Subhead>
<p>As we learned above, you cannot use <InlineCode>
<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span></code></pre>
</InlineCode> method with <Keyword>float</Keyword>, <Keyword>double</Keyword>, or <Keyword>string</Keyword> types. To do so, you have to create other methods for them.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">float</span> <span class="token function">AddFloat</span><span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">string</span> <span class="token function">AddString</span><span class="token punctuation">(</span><span class="token keyword">string</span> a<span class="token punctuation">,</span> <span class="token keyword">string</span> b<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span></code></pre>

<p>But appending type names after Add like above looks really unnatural.</p>

<p>That's why method overloading exists in C#.</p>

<p>Thanks to that, we can define multiple methods with the same name but with different types of arguments.</p>

<p>For example, we can rewrite our <InlineCode>Add()</InlineCode> methods like this:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">3.14f</span><span class="token punctuation">,</span> <span class="token number">2.718f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">float</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">string</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">string</span> a<span class="token punctuation">,</span> <span class="token keyword">string</span> b<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span></code></pre>

<p>Their names are all <InlineCode>Add</InlineCode>. But it works perfectly. C# compiler smartly finds the appropriate method and uses it.</p>

<p>[Overloading: All same names. But different.]</p>

<p>To make above code work, we need to add <Keyword>static</Keyword> in front of our methods. I'll tell you about the <Keyword>static</Keyword> in the next chapter.</p>

</ContentBlock>
<ContentBlock color="grey">
<Sectionhead>How can we find the overloaded methods? </Sectionhead>
<p>If you're not sure if there is any overloaded method, get help from Visual Studio code method tooltip.</p>

<p>It shows how many overloaded methods exist by the number on the tips.</p>

<p>[Tooltip example]</p>

<p>You can check them by pressing up or down arrow keys.</p>

</ContentBlock>
<ContentBlock>
<Sectionhead>How method overloading makes your life easier</Sectionhead>
<p>Some of you might have thought that adding additional methods for Add with the same code (<InlineCode><Keyword>return</Keyword> a + b;</InlineCode>) is overkill.</p>

<p>In this case, you're absolutely right. But in some other cases, overloading makes code much simpler and clearer.</p>

<p>We learned <InlineCode>List.FindIndex()</InlineCode> method in Chapter 4. If you check the <OutLink href="">documentation</OutLink>, there are 3 overload versions.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token function">FindIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> Predicate<span class="token operator">&lt;</span>T<span class="token operator">></span> match<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">FindIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">,</span> Predicate<span class="token operator">&lt;</span>T<span class="token operator">></span> match<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">FindIndex</span><span class="token punctuation">(</span>Predicate<span class="token operator">&lt;</span>T<span class="token operator">></span> match<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>Each method finds the index of a value in different ways. They're from:</p>

<ul>
<li>the entire List.</li>
<li>a range with a specified starting point to the last item.</li>
<li>a range with a specified starting and ending point.</li>
</ul>

<p>These methods serve different needs. We need all 3 of them.</p>

<p>Let's think about making this thing in JavaScript. You need to count the number of arguments or checking the type/<Keyword>undefined</Keyword>ness of arguments like below:</p>


<pre class="language-javascript"><code class="language-javascript">Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">FindIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> count<span class="token punctuation">,</span> match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>count <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        match <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
        startIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        match <span class="token operator">=</span> count<span class="token punctuation">;</span>
        count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// the code that find the element. </span>
<span class="token punctuation">}</span></code></pre>

<p>It makes code look dirty. But there is no other option.</p>

</ContentBlock>
<Quiz>
<QTitle>OX Quiz. Are they correct?</QTitle>
<OX>
<OXQ>You cannot define methods with the same name in C#.</OXQ>
<OXA>X. You can define them. It's called overloading.</OXA>
</OX>
<OX>
<OXQ>If you don't need to return a value, you need to set your return type as empty. </OXQ>
<OXA>X. You need to set it as <Keyword>void</Keyword>. </OXA>
</OX>
<OX>
<OXQ>You can define overloaded methods even if they have same arguments and different return types. </OXQ>
<OXA>X. If you do that, compiler cannot find the appropriate method. So, you need to set arguments differently. </OXA>
</OX>
<p><QTitle>Fill in the blanks. Fill in the blanks to get the given result. </QTitle></p>

<Console>
Hello, Mario. Nice to meet you. 
Hello, Luigi. Nice to meet you. 
</Console>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token string">"Mario"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token string">"Luigi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token punctuation">]</span></code></pre>

<Answer>
<p>What you need is a really simple method.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token keyword">string</span> name<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">". Nice to meet you."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
<QTitle>Be the transpiler. Translate JavaScript code to C# code. </QTitle>

<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        end <span class="token operator">=</span> start<span class="token punctuation">;</span>
        start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<p>In this case, you need to define 2 overloaded methods.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">int</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> end<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        s <span class="token operator">+</span><span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="6">Differences in OOP Syntax</ChapterTitle>
<p>Now, let's tackle our final boss: Object Oriented Programming (OOP).</p>

<p>JavaScript added a lot of object-oriented features to its recent versions. But, still, you can do many things without them.</p>

<p>Because JavaScript started in that way.</p>

<p>I know you're fed up with these statements. Please let me repeat them again.</p>

<ul>
<li>No variable or method cannot live outside classes.</li>
<li>C# is all about types.</li>
</ul>

<p>But I didn't tell you the true meaning of these sentences.</p>

<p>OOP is the core of the C#.</p>

<p>You can make JavaScript programs without knowing OOP. In C#, it's a nonsense. OOP isn't an option.</p>

<Note title="What should I do if I'm not familiar with OOP in JavaScript?">
<p>You can do many things without creating classes in JavaScript.</p>

<p>Because of that, some of you might be fluent with OOP. And others are not. Or you're in somewhere between.</p>

<p>This simple fact made me think hard about what content should be included in this post.</p>

<p>If I explain everything about OOP, then experts will be bored.<br>
But if I skip the explanation and focus on comparing features, novices will stop reading this part.</p>

<p>After a lot of thinking, I decided:</p>

<p>If you're not familiar with OOP in JavaScript, it's time to transfer to beginner train. I'll cover OOP in detail in my basic C# article.</p>

<p>(Did you notice the future tense?</p>

<p>It's because that train line is under construction.</p>

<p>I'll send you a notice email when construction is finished.</p>

<p>Click here to sign up my email list.)</p>

<p>You don't have to read the previous chapters in that article. I've carefully designed that article so that you don't need to do that.</p>

<p>[Transfer image]</p>

</Note>
</ContentBlock>
<ContentBlock color="grey">
<Subhead>Constructor is not "constructor"</Subhead>
<p>In traditional JavaScript, there were no constructors. All you had to do was just declare a function and create instances with <Keyword>new</Keyword>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Player</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>But after ES2015, you can define a class and its constructor with the special method: <InlineCode>constructor</InlineCode>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>In C#, the syntax is similar, but there are some differences.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">string</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">string</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FirstClass</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>Can you see the difference?</p>

<p>First of all, the name of the constructor is not <InlineCode>constructor</InlineCode>. It's the name of the class. In this case, <InlineCode>Player</InlineCode>.</p>

<p>Second, there is a type name in front of each argument. It's the same with other C# methods. Remember C# is all about types!</p>

<p>Third, as always, you need to declare variables. The variables outside methods are called fields. Unlike local variables, you don't need to declare variables in front of the methods that use them. You can declare them anywhere.</p>

<p>Finally, it's not a difference. But there is no return type. <Keyword>public</Keyword> here isn't a return type. It's an access modifier. We'll learn about access modifiers soon.</p>

<p>Bonus 1. You cannot define a class inside a class or a method. That's why our <InlineCode>Player</InlineCode> class is outside the <InlineCode>FirstClass</InlineCode> class.</p>

<p>Bonus 2. When creating <InlineCode>Player</InlineCode> object, we created <InlineCode>p</InlineCode> variable with the type, <InlineCode>Player</InlineCode>. The variables like <InlineCode>p</InlineCode> are called class reference.</p>

</ContentBlock>
<ContentBlock>
<Subhead>What happens if I don't initialize fields?</Subhead>
<p>In chapter 3, I told you that C# hates uninitialized variables. It's an error in C#.</p>

<p>As for fields(member variables), they are set to default values if you don't initialize them.</p>

<p>Here are the default values for the major types.</p>

<p>| Type | Value |<br>
| bool | false |<br>
| numbers(short, int, float, double, etc.) | 0 |<br>
| class references | null |</p>

<p>You can see <OutLink href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/default-values-table
">the entire table here.</OutLink></p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Defining methods: Multiple ways vs. Only way</Subhead>
<p>Before ES2015, you needed to use <InlineCode>prototype</InlineCode> field to define methods.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Player</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Player<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">getAttack</span><span class="token punctuation">(</span>attackPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">-=</span> attackPoint<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">getAttack</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 250</span></code></pre>

<p>After ES2015, you can define methods inside classes like below:</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">getAttack</span><span class="token punctuation">(</span>attackPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">-=</span> attackPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
player<span class="token punctuation">.</span><span class="token function">getAttack</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 250</span></code></pre>

<p>But in C#, there is only one way of defining methods. That's what you have learned in the chapter 5.</p>

</ContentBlock>
<ContentBlock>
<Subhead>Access modifiers</Subhead>
<p>[Stop! It's restricted!]</p>

<p>In JavaScript, if a member is in an object, you can access it without any restriction.</p>

<p>Some developers add methods that start with <InlineCode>_</InlineCode> like <InlineCode>_hiddenMethod()</InlineCode> to make it look too weird to use them in your codes.</p>

<p>This convention makes other developers hate using those methods in their codes. But it's not a restriction. You can use them if you really need it.</p>

<p>But in C#, you can restrict the access of members in classes systemically. Compiler will not compile the code.</p>

<p>To do so, you need to add access modifiers in front of members.</p>

<p>The <Keyword>public</Keyword> keyword we used a lot is one of the modifiers.</p>

<p>In C#, there are 6 access modifiers. But 3 of them below are used a lot:</p>

<ul>
<li><Keyword>private</Keyword>: You can access these members only inside the class where they are.</li>
<li><Keyword>public</Keyword>: There is no limitation for access.</li>
<li><Keyword>protected</Keyword>: You can access these members in the same class where they are or in the descendant classes.</li>
</ul>

<p>If you want to learn more about other 3, please check <OutLink href="">this link</OutLink>.</p>

<p>Let's see how <Keyword>private</Keyword> keyword works.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">string</span> name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ShowHiddenName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hiddenName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">string</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">string</span> hiddenName <span class="token operator">=</span> <span class="token string">"Krigaya Kazuto"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FirstClass</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>hiddenName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// COMPILE ERROR!</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">ShowHiddenName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>Compare <InlineCode>name</InlineCode> and <InlineCode>hiddenName</InlineCode>. They're both the same string variables. But <InlineCode>name</InlineCode> works while <InlineCode>hiddenName</InlineCode> doesn't.</p>

<p>To use <Keyword>private</Keyword> variables outside classes, you need to create a way to access them like making <InlineCode>ShowHiddenName()</InlineCode> method.</p>

<p>Conventionally, C# developers set fields as <Keyword>private</Keyword> and methods and properties as <Keyword>public</Keyword>.</p>

<p>To understand how <Keyword>protected</Keyword> works, I've changed the code a little bit. The colon(:) syntax is for inheritance. You'll learn more about it soon.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">PlayerBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">string</span> secretSkill <span class="token operator">=</span> <span class="token string">"Big magical hat"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token class-name">PlayerBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">string</span> name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        secretSkill <span class="token operator">=</span> <span class="token string">"Star burst stream"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ShowHiddenName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hiddenName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">string</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">string</span> hiddenName <span class="token operator">=</span> <span class="token string">"Krigaya Kazuto"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Kirito"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>secretSkill<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// COMPILE ERROR!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>The <Keyword>protected</Keyword> variable <InlineCode>secretSkill</InlineCode> can be accessed from the inside of the <InlineCode>Player</InlineCode> class. Because <InlineCode>Player</InlineCode> class inherited <InlineCode>PlayerBase</InlineCode> class.</p>

<p>But from the outside of <InlineCode>PlayerBase</InlineCode> family classes, it cannot be accessed. It's a compile error.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>this isn't required. </Subhead>
<p>In JavaScript, <Keyword>this</Keyword> is required for fields. You cannot remove it. If you do that, that variable becomes a local variable.</p>

<p>Let's revisit our Player example.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getAttack<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>attackPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hp <span class="token operator">-=</span> attackPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

<p>If you remove this from <InlineCode><Keyword>this</Keyword>.hp</InlineCode> in <InlineCode>constructor()</InlineCode> or <InlineCode>getAttack()</InlineCode> methods, <InlineCode>hp</InlineCode> becomes a local variable and it doesn't affect <InlineCode>hp</InlineCode> of the Player instance.</p>

<p>In contrast, C# doesn't require <Keyword>this</Keyword> for fields. If there is no local variable with that name, compiler will try to find if there is a field with that name.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">string</span> name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        hp <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> getAttack <span class="token punctuation">(</span>attackPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         hp <span class="token operator">-</span><span class="token operator">=</span> attackPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token keyword">public</span> <span class="token keyword">string</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> hp<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token string">"Asuna"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">getAttack</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>As you can see, <InlineCode>p.hp</InlineCode> returns 250 without any problem.</p>

<p>Take a look at <Keyword>this</Keyword> in <InlineCode><Keyword>this</Keyword>.name</InlineCode> inside the constructor.</p>

<p>You must not remove it.</p>

<p>When you do that like <InlineCode>name = name</InlineCode>, it becomes impossible for compiler to be sure whether the <InlineCode>name</InlineCode> on the left side is a field or not.</p>

<p>It interprets that it is a meaningless line that assigns its current value to the variable again.</p>

<p>That's why <Keyword>this</Keyword> is required in constructors if you want to use the same variable name in constructor argument and field name.</p>

<p>Unlike JavaScript, it is recommended to remove <Keyword>this</Keyword> as much as possible in C#.</p>

<p>So, in most cases, you can see <Keyword>this</Keyword> only in constructors. Because most developers don't make name conflict with local variables and fields in other methods. It can cause unnecessary confusion.</p>

<p>Actually, some developers even remove <Keyword>this</Keyword> in constructors by adding <InlineCode>m_</InlineCode> in front of the fields like <InlineCode>m_name</InlineCode>, <InlineCode>m_hp</InlineCode>, etc.</p>

<p>Personally, I'm against it. Because the code looks unnatural like below.</p>


<pre class="language-csharp"><code class="language-csharp">m_hp <span class="token operator">-</span><span class="token operator">=</span> attackPoint<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>m_hiddenName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>But many people love this convention. So, you need to be aware of them.</p>

</ContentBlock>
<ContentBlock>
<Subhead>We all share static</Subhead>
<p>In JavaScript classes, static variables are shared by every instance of the class.</p>

<p>And so is C#. There's no difference.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> maxAttack <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> normalAttack <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
       Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Normal Attack: "</span> <span class="token operator">+</span> normalAttack <span class="token operator">+</span> <span class="token string">" Max Attack: "</span> <span class="token operator">+</span> maxAttack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Player</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        p1<span class="token punctuation">.</span><span class="token function">Attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p1<span class="token punctuation">.</span>normalAttack <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
        Player<span class="token punctuation">.</span>maxAttack <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

        p2<span class="token punctuation">.</span><span class="token function">Attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>The result of <Method>p2.Attack()</Method> is &quot;Normal Attack: 25 Max Attack: 100&quot;. It changed even if we didn't change the value of <InlineCode>maxAttack</InlineCode> in <InlineCode>p2</InlineCode> like <InlineCode>p2.maxAttack = 100;</InlineCode>.</p>

<Sectionhead>The secret of public static Main() method. </Sectionhead>
<p>We've used countless <InlineCode><Keyword>static</Keyword> Main()</InlineCode> method to start our program. But why should it be <Keyword>static</Keyword>?</p>

<p>As you well know, you can call <Keyword>static</Keyword> fields or methods without creating any instance of that class.</p>

<p>When starting a program, there is no object yet. But we need to call our <InlineCode>Main()</InlineCode> method to start the program.</p>

<p>So, <InlineCode>Main()</InlineCode> method should be a method that can be called without creating objects.</p>

<p>That's what we can do with <Keyword>static</Keyword> methods. That's why <InlineCode>Main()</InlineCode> is <Keyword>static</Keyword>.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Inheritance Comparison</Subhead>
<p>In traditional JavaScript, there was no syntax for inheritance. <OutLink href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
">You could emulate it with call method and prototype field.</OutLink></p>

<p>However, after ES2015, things have been changed. JavaScript supports class and objects can inherit objects with the special keyword: <Keyword>extends</Keyword>.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token keyword">extends</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>

<p>But in C#, all you need is colon(:).</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token punctuation">:</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>

<Sectionhead>Multiple inheritance</Sectionhead>
<p>JavaScript doesn't support multiple inheritance.</p>

<p>It even doesn't support interface feature almost every object-oriented languages does.</p>

<p>If you really need multiple inheritance, you need to go through <OutLink href="https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance/35925061">a painful way</OutLink>.</p>

<p>In C#, you cannot inherit more than 1 class. But you can implement multiple interfaces.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ICommonBossSkills</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">BreakGround</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token punctuation">:</span> <span class="token class-name">Rabbit</span><span class="token punctuation">,</span> ICommonBossSkills 
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">BreakGround</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// Implement breaking. </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>Unlike Java, Swift, C# doesn't support default implementation. It is said that <OutLink href="https://blog.ndepend.com/c-8-0-features-glimpse-future/">it will be added at C# 8</OutLink>. But no one knows when it will be.</p>

</ContentBlock>
<ContentBlock>
<Subhead>Polymorphism</Subhead>
<p>In JavaScript, every method is basically overridable.</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token function">throwCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"throw one carrot"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token keyword">extends</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token function">throwCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"throw 3 carrots"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
rabbit<span class="token punctuation">.</span><span class="token function">throwCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw one carrot.</span>
rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossRabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rabbit<span class="token punctuation">.</span><span class="token function">throwCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw 3 carrots. </span></code></pre>

<p>But in C#, if you don't add the <Keyword>keyword</Keyword> virtual in front of the return type in the base class and <Keyword>override</Keyword> in the child class, you cannot override the methods.</p>

<p>Let's make an experiment without <Keyword>virtual</Keyword>/<Keyword>override</Keyword> keywords.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Throw one carrot."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token punctuation">:</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Throw 3 carrots."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPolymorphism</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token class-name">Rabbit</span> rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbit<span class="token punctuation">.</span><span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw one carrot. </span>
        rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossRabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbit<span class="token punctuation">.</span><span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw one carrot. </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>When you assign <InlineCode>BossRabbit</InlineCode> to <InlineCode>rabbit</InlineCode> variable again, it's actually a <InlineCode>BossRabbit</InlineCode>, but it acts like a normal <InlineCode>Rabbit</InlineCode>. It's not intended. Boss should act like a boss.</p>

<p>To solve this problem, add <Keyword>virtual</Keyword> keyword in front of <InlineCode>ThrowCarrot()</InlineCode> in <InlineCode>Rabbit</InlineCode> class. And add <Keyword>override</Keyword> keyword in front of <InlineCode>ThrowCarrot()</InlineCode> in <InlineCode>BossRabbit</InlineCode> class like below.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Throw one carrot."</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossRabbit</span> <span class="token punctuation">:</span> <span class="token class-name">Rabbit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token keyword">void</span> <span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Throw 3 carrots."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPolymorphism</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token class-name">Rabbit</span> rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbit<span class="token punctuation">.</span><span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw one carrot. </span>
        rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossRabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbit<span class="token punctuation">.</span><span class="token function">ThrowCarrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw one carrot. </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p><Sectionhead>Casting objects</Sectionhead></p>

<p>But there was something odd in our <InlineCode>Rabbit</InlineCode> and <InlineCode>BossRabbit</InlineCode> example. Did you find it?</p>

<p>Although <InlineCode>BossRabbit</InlineCode> inherits <InlineCode>Rabbit</InlineCode>, they are different classes.</p>

<p>But you could assign <InlineCode>BossRabbit</InlineCode> object to <InlineCode>Rabbit</InlineCode> variable without any casting like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token class-name">Rabbit</span> rabbit <span class="token operator">=</span> <span class="token punctuation">(</span>Rabbit<span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">BossRabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>How was this possible?</p>

<p>It's because <InlineCode>BossRabbit</InlineCode> has every feature that <InlineCode>Rabbit</InlineCode> has.</p>

<p>Why?</p>

<p>Because it inherited <InlineCode>Rabbit</InlineCode>! Thanks to inheritance, <InlineCode>BossRabbit</InlineCode> has every member that <InlineCode>Rabbit</InlineCode> has.</p>

<p>That's why <InlineCode>BossRabbit</InlineCode> can be assigned to <InlineCode>Rabbit</InlineCode> without any casting.</p>

<p>But the reverse (assigning <InlineCode>Rabbit</InlineCode> to <InlineCode>BossRabbit</InlineCode>) doesn't work, you need to clearly specify it with casting parentheses.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token class-name">Rabbit</span> rabbit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossRabbit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BossRabbit</span> bossRabbit <span class="token operator">=</span> <span class="token punctuation">(</span>BossRabbit<span class="token punctuation">)</span>rabbit<span class="token punctuation">;</span></code></pre>

<p>It's because you cannot sure your <InlineCode>Rabbit</InlineCode> reference indicates a <InlineCode>BossRabbit</InlineCode> object. So, compiler wants to be sure that it's really a <InlineCode>BossRabbit</InlineCode> object.</p>

</ContentBlock>
<ContentBlock color="grey">
<Subhead>Properties</Subhead>
<p>Do you know the <Method>Object.defineProperties()</Method> method in JavaScript? You can use it to restrict access to members in objects.</p>

<p>In other words, you can use it to create read-only members or do additional checks before assigning a new value to a member.</p>

<p>For example, if you want to make a read-only field, you can write code like this:</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> player <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token string">'attackPoint'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    writable<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

player<span class="token punctuation">.</span>attackPoint <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>attackPoint<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 60</span></code></pre>

<p>Or you can define getter like below:</p>


<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token string">'attackPoint'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">60</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

player<span class="token punctuation">.</span>attackPoint <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>attackPoint<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 60</span></code></pre>

<p>As you can see, we've assigned a new value to <InlineCode>attackPoint</InlineCode>, but it didn't change.</p>

<p>C# supports special syntax for this feature.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> AttackPoint 
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestProperty</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>AttackPoint <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token comment">// ERROR;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>AttackPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>There's no setter in our Player class above. To solve this problem, we need to create a set block.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> AttackPoint 
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">set</span> 
        <span class="token punctuation">{</span>
            attackPoint <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> attackPoint<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<Keyword>value</Keyword> keyword is used inside the set block to deliver the value on the right side. In our example, it'll be <Number>30</Number>. 
<p>But as our getter returns only <Number>60</Number>. The result won't change. It'll still be <Number>60</Number>.</p>

<Sectionhead>Why property is than getter/setter</Sectionhead>
<p>Above, I told you that fields are usually <Keyword>private</Keyword> and methods are usually <Keyword>public</Keyword>.</p>

<p>It was not the tradition of C#. It was from the tradition of OOP languages older than C# like C++ and Java.</p>

<p>But if we set fields to <Keyword>private</Keyword>, we cannot change the values of the fields outside the class.</p>

<p>That's why developers created methods called getter and setter like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">GetterAndSetter</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">GetValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>They did this because sometimes we need to define some restriction for some fields later like &quot;that field should never be above 100&quot;.</p>

<p>If that field is <Keyword>public</Keyword> and it becomes hard because we need to change everywhere that field is used outside the class.</p>

<p>If we set that field as <Keyword>public</Keyword>, we have to change the code in the class where that field is.</p>

<p>But as you can see below, this makes code look weird.</p>


<pre class="language-csharp"><code class="language-csharp">a<span class="token punctuation">.</span><span class="token function">SetValue</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">GetValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<p>Even to do a simple thing like adding value. We need to caller getter and setter. It looks much complicated than simple <InlineCode>a.value++</InlineCode>.</p>

<p>But in C#, we have property. Properties are used to restrict access.</p>

<p>It means that we need to make dumb properties like below to follow this convention.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">PropertiesAreDumb</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> DumbInteger 
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> dumbInteger<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">set</span>
        <span class="token punctuation">{</span>
            dumbInteger <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">string</span> DumbString
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> dumbString<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">set</span>
        <span class="token punctuation">{</span>
            dumbString <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> dumbInteger<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">string</span> dumbString<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>It's a really long code without any content.</p>

<p>So, C# created a way to shorten this code.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">PropertiesAreGood</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> GoodInteger <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">string</span> GoodString <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>It's really simple. Create a property and simply state <InlineCode><Keyword>get</Keyword>;</InlineCode> or <InlineCode><Keyword>set</Keyword>;</InlineCode> inside braces. You don't need to fill the contents.</p>

<p>Then, the compiler will autogenerate those dumb sections for you.</p>

<p>You don't even have to create variables.</p>

<p>When you need to make a complicated restriction for some fields, you can always create them later and fill the related properties with codes.</p>

</ContentBlock>
<Quiz>
<QTitle>OX. Are they correct? </QTitle>
<OX>
<OXQ>In C#, you cannot access fields without <Keyword>this</Keyword>.</OXQ>
<OXA>X. In C#, when there is no <Keyword>this</Keyword>, compiler automatically tries to check if there is a field with that name. </OXA>
</OX>
<OX>
<OXQ>If you use fields without initialization, they're initialized to the default values. </OXQ>
<OXA>O. bool is false. Numbers are 0. And references are null. </OXA>
</OX>
<OX>
<OXQ>You can access <Keyword>protected</Keyword> fields from child classes. </OXQ>
<OXA>O. That's the role of protected. </OXA>
</OX>
<p><QTitle>Be the Compiler. Find errors and fix them.</QTitle></p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> normalAttack<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Player<span class="token punctuation">.</span>normalAttack <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Player attack: {0}"</span><span class="token punctuation">,</span> Player<span class="token punctuation">.</span>normalAttack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<Answer>
<p>First of all, to use an object in C#, you need to create one with the <Keyword>new</Keyword> operator.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>

<InlineCode>normalAttack</InlineCode> isn't a <Keyword>static</Keyword> variable. So, the player should be changed to <InlineCode>p</InlineCode>. 
<p>Finally, <InlineCode>normalAttack</InlineCode> is <Keyword>private</Keyword>. You cannot use it outside <InlineCode>Player</InlineCode>. There are 2 ways to solve this problem.</p>

<ol>
<li>change <Keyword>private</Keyword> to <Keyword>public</Keyword>.</li>
<li>create a property.</li>
</ol>

<p>In C#, fields are usually <Keyword>private</Keyword> and we create properties to restrict access. So, we need to create one like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> NormalAttack <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>Here's the final code:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> NormalAttack <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Player</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>NormalAttack <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Player attack: {0}"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>NormalAttack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

</Answer>

<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Lion</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Jump!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossLion</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Double Jump!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestPlayer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Lion</span> bossLion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BossLion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>bossLion<span class="token punctuation">.</span><span class="token function">Jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

<p>What's the result? How should we make bossLion to act like a boss?</p>

<Answer>
<p>It's not a &quot;Double Jump!&quot;. It's a &quot;Jump!&quot;.</p>

<p>To solve this problem, we need to add <Keyword>virtual</Keyword> to <InlineCode>Lion</InlineCode> class and <Keyword>override</Keyword> to the <InlineCode>BossLion</InlineCode> class like below:</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Lion</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Jump!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BossLion</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token keyword">void</span> <span class="token function">Jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Double Jump!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
<p><QTitle>Define a class.</QTitle></p>

<p>What is your favorite game character? What characteristics do they have? In other words, what data do they need? What action do they perform?</p>

<p>And how will you express that as a class in your game?</p>

<Answer>
<p>You might love a lot of characters. But in this example, I'll use my favorite characters: Sonic.</p>

<p>There are a lot of differences between Modern Sonic and Classic Sonic. Modern Sonic can do more than Classic Sonic.</p>

<p>But in our example, I'll use Classic Sonic because it's simple.</p>

<p>Sonic runs through the stages and collect rings and jumps and hits the bad robots to break them.</p>

<p>From this, we've got data and actions.</p>

<ul>
<li>Data: the count of rings</li>
<li>Action: run, jump.</li>
</ul>

<p>Then, we need to think about the data we need to support the actions.</p>

<p>1. Run.</p>

<p>Running means that you're moving from one place to another. So, you need variables to hold Sonic's current position. Let's call them x and y.</p>

<p>He doesn't run at an even speed. It varies. So, we need speed, acceleration.</p>

<p>And he can move backward. We need direction.</p>

<p>Finally, his speed doesn't increase forever. So, we need maximum speed.</p>

<p>2. Jump</p>

<p>Normally, Classic Sonic can jump only once. So, we need a bool variable like jumped.</p>

<p>But if he has some shields, he can do some interesting actions like double jump (electric shield), moving down fast (bubble), air dash (fire).</p>

<p>So, we need an <Keyword>enum</Keyword> variable to hold these statuses.</p>

<p>Then, our Classic Sonic class would look like this.</p>


<pre class="language-csharp"><code class="language-csharp"><span class="token keyword">enum</span> Shield 
<span class="token punctuation">{</span>
    FIRE<span class="token punctuation">,</span>
    BUBBLE<span class="token punctuation">,</span>
    ELECTRIC<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ClassicSonic</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
    <span class="token keyword">int</span> speed<span class="token punctuation">;</span>
    <span class="token keyword">int</span> direction<span class="token punctuation">;</span>
    <span class="token keyword">int</span> acceleration<span class="token punctuation">;</span>
    <span class="token keyword">int</span> maxSpeed<span class="token punctuation">;</span>
    <span class="token keyword">bool</span> jumped<span class="token punctuation">;</span>
    <span class="token class-name">Shield</span> shield<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

</Answer>
</Quiz>
<ContentBlock>
<ChapterTitle number="7">Bonus. How to use the debugger. </ChapterTitle>
<p>Visual Studio debugger and Chrome debugger shares a lot of similar shortcut keys and features.</p>

<p>First of all, if you want to set a breakpoint, click the blue-gray left margin. It'll create a red circle.</p>

<p>[red circle image]</p>

<p>Then, press <Key>F5</Key> to start the debugger.</p>

<p>To check the value of a variable, there are 2 ways:</p>

<ol>
<li>Hover the mouse pointer over that variable</li>
</ol>

<ol start="2">
<li>Or check the value on the watch panel below.</li>
</ol>

<p>[watch panel image]</p>

<p>It's just like Chrome. But there is one convenient feature in VS. If you click the pin, then you can pin the variable on the screen.</p>

<p>[pin the value.]</p>

<p>Navigation features are almost identical.</p>

<ul>
<li>Go to the next line -&gt; F10.</li>
<li>Go into the method/property in that line -&gt; F11</li>
<li>Go out from the current method/property -&gt; Shift + F11</li>
<li>Go to the next breakpoint -&gt; F5</li>
<li>Stop the debugger -&gt; F6.</li>
</ul>

<p>Step over, in and out are same. But go to the next breakpoint is F5, not F8. It's because F5 is refresh in web browsers.</p>

</ContentBlock>
<ContentBlock>
<p>At the beginning of this article, I told you that C# is all about types.</p>

<p>By now, you're well aware of what this means.</p>

<ul>
<li>You must specify types when you create variables and define methods.</li>
<li>And you can create your own types by defining objects.</li>
</ul>

<p>But without this obsessiveness in types, you could feel that they're somewhat similar, too.</p>

<p>Now that you know the basics of C#, you can make programs you want. Go for it!</p>

<p>If making a game with Unity is your goal, let's have more fun together in my Unity for beginners post.</p>

<p>(Like C# for complete beginners article, it's not written yet. If you want to read this post on its release day, please sign up my email list.)</p>

</ContentBlock>
</Post>
</template>
<script>
import PostComponents from '~/components/post-components'

export default {
  components: PostComponents,
  head() {
    return {
      title: "C# for JavaScript Developers: The Side-by-side Comparison",
    }
  },
}
</script>