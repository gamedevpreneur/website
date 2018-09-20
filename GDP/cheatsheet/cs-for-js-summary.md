[Title]C# vs. JavaScript[/Title]

<div class="cheatsheet-wrap">
    <div class="cheatsheet-column">

# Declare variables. 

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
var age = 12;
var name = "Sonic";
var pi = 3.14;
var c = 'a';
var isUnderage = true;
[/Code]

</div>
<div class="code-comparison-column">

```
int age = 12;
string name = "Sonic";
float pi = 3.14f;
char c = 'c';
bool isUnderage = true;
```

</div>
</div>

* Watch out for overflows!
* Semicolon is required in C#.
* ' is char " is string.
* Suffix: float(f), long(L), decimal(m)


# Control flow.

* if and for statements are identical. 
* No !== and ===
* bool only in if statement
* foreach comparison

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
var nums = [1, 2, 3];

nums.forEach(num => {
    alert(num)
})
[/Code]

</div>
<div class="code-comparison-column">

```
int[] nums = {1, 2, 3};

foreach(int num in nums) {
    Console.WriteLine(num);
}
```

</div>
</div>

# Data Structure

```
List<int> nums = new List<int> { 1, 2, 3};
```

| Action | C# | JavaScript |
| --- | --- | --- |
| Append | list.Add(item) | array.push(item) |
| Remove | list.Remove(item) | [check this article](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript) |
| Remove by index | list.RemoveAt(index) | [check this article](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript) |
| Retrieve | list[index] | array[index] |
| Find the Index of an item | list.IndexOf(value) | array.indexOf(value) |
| Size | list.Count | array.length |
| Check existence | list.Contains(value) | array.indexOf(value) == -1 (before ES2016) <br> array.includes(value) (after ES2016) | 

```
Dictionary<string, int> items = new Dictionary<string, int>();
items["gun"] = 200;
items["sword"] = 500;
```

| Actions | C# | JavaScript |
| --- | --- | --- |
| Add | dict[key] = value | dict[key] = value |
| Remove | dict.Remove(key) | delete dict[key] |
| Retrive | dict[key] | dict[key] |
| Size | dict.Count | Object.keys(dict).length |
| Check existence of key | dict.ContainsKey(key) | Object.keys(dict).$brindexOf(key) == -1 |
| Check existence of value | dict.ContainsValue(value) | Object.values(dict).$brindexOf(key) == -1 |

</div>
<div class="cheatsheet-column">

# Method

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
var add = function(a, b) {
    return a + b;
}
[/Code]

</div>
<div class="code-comparison-column">

```
int Add(int a, int b) {
    return a + b;
}
```

</div>
</div>

* Specify return type and parameter types. 
* If you don't return anything, then return type is `void`. 

* Overloading: You can make methods with the same name if you give them different parameters. 

```
int Add(int a, int b) { return a + b; }
string Add(string a, string b) { return a + b; }
```

# OOP

## constructor

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
class Player {
    constructor(name) {}
}
[/Code]

</div>
<div class="code-comparison-column">

```
class Player {
    public Player(string name) {}
}
```

</div>
</div>

Use class name for contstructors. 

## Access modifiers

* `public`: everyone can access. 
* `private`: everyone inside the same class can access. 
* `protected`: everyone inside the same class and children classes can access.

JavaScript methods are all public. 

## You don't need to use `this` every time in C#. 

## Inheritance

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
class Player extends PlayerBase { }
[/Code]

</div>
<div class="code-comparison-column">

```
class Player : PlayerBase, IGunner { }
```

</div>
</div>

C# class can inherit one class and implement multiple interfaces.

## Polymorphism

<div class="code-comparison">
<div class="code-comparison-column">

[Code lang="javascript"]
class P {
    f() { alert("p") }
}

class C extends P {
    f() { alert("c") }
}
[/Code]

</div>
<div class="code-comparison-column">

```
class P {
    public virtual void f() { Console.WriteLine("P"); } 
}

class C {
    public override void f() { Console.WriteLine("C"); }
}
```

</div>
</div>

Without `virtual`/`override`, you cannot override methods. 

## Properties

```
class Player {
    public int Attack { get; set; }
}
```

When you want to add restrictions, you can use fill them like below: 

```
public int Attack {
    get { return attack; }
    set { attack = value; }
}
private attack = 30;
```
</div>
</div>



