# InputCJK_Extension
日本語は下の方を見てね。

This is an extension for GDevelop that allows you to input multi-byte characters (Japanese, Chinese, Korean, etc.).

Please download the latest version from [Releases](https://github.com/PANDAKO-GitHub/InputCJK_Extension/releases).

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img01.png)

[Example]()

MIT License

**Notes**
- Cannot be used in conjunction with text input objects.
- It can be used in mobile apps, but there is a slight problem.
- It is practical, but there is room for improvement.
- It is not a modal window. The game behind it can be manipulated.
- Even if there are multiple objects to which this behavior is added, there will be only one Input Field generated.

## How to use
1. Download the extension (.json).
2. Import the extension into your game.
3. Add InputCJK Behavior to any object.
4. Place the object in your scene.
5. Create an event using the "Conditions", "Actions", and "Expressions" added by the extension.

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img02.png)

## Reference

### Conditions

#### Is Close
Input Field is close.

#### Is Finished
Input Field has just been closed.

#### Is Open
Set a string to the input field and then open it.

### Actions

#### Close Input Field  
Close the Input Field.

#### Open Input Field  
Open the Input Field.

#### Set String  
Set a string to the Input Field.

### String Expressions

#### String
Get a string from the Input Field.

## Design customization
