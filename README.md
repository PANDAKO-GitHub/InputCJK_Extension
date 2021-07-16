# InputCJK Extension
[日本語はこちら](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/README.ja.md)

This is an extension for GDevelop that allows you to input multi-byte characters (Japanese, Chinese, Korean, etc.).

Please download the latest version from [Releases](https://github.com/PANDAKO-GitHub/InputCJK_Extension/releases).

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img01.png)

[Example](https://pandako-github.github.io/InputCJK_Extension/)

MIT License

**Notes**
- Cannot be used in conjunction with text input objects.
- It can be used in mobile apps, but there is a slight problem.
- It is practical, but there is room for improvement.
- It is not a modal window. The game behind it can be manipulated.
- Do not place multiple instances with this extension in a scene.

## How to use
1. Download the extension (.json).
2. Import the extension into your game.  ![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img08.png)
4. Add InputCJK Behavior to any object.
5. Place the object in your scene.
6. Create an event using the "Conditions", "Actions", and "Expressions" added by the extension.

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img02.png)

## Reference

### Conditions

#### Is Close
Input Field is close.

#### Is Finished
Input Field has just been closed.

#### Is Open
Input Field is open.

### Actions

#### Close Input Field
Close the Input Field.

#### Open Input Field
Set a string to the input field and then open it.

#### Set String
Set a string to the Input Field.

### String Expressions

#### String
Get a string from the Input Field.

## If you need multiple input fields.
Do not place multiple instances with this extension in a scene. The "Is Finished" condition will no longer work.

Even if there are multiple objects to which this behavior is added, there will be only one Input Field generated.

This can be solved by using variables or "Linked Objects".

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img06.png)


## Design customization (advanced)
This extension is designed to work with various resolutions, but if you want to change the appearance, you need to edit the extension.

Edit the stylesheet written in onCreated of Behavior functions.

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img03.png)

### HTML
```
<div id="InputCJK_Extension_div" style="display: none;">
  <input type="text">
  <button type="button">OK</button>
</div>
```

## Known Issues
- When this extension is used in an Android app (.apk), the status bar and navigation bar will remain visible, covering part of the screen.
