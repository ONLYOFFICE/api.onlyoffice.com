# Copy

创建块级内容控件的副本。忽略批注、脚注引用和复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

此示例创建块级内容控件的副本。

```javascript editor-docx
// Creates a block content control in the current document, copies it, and adds a copy to the same document.

// How to create a copy of the ApiBlockLvlSdt object.

// Creates a block level container in the ApiDocument class, adds a text to it, and copies it into the same document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());
```
