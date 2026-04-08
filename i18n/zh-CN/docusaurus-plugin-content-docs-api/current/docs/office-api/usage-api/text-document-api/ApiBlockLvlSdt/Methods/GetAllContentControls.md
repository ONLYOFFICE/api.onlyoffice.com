# GetAllContentControls

返回当前内容控件中的内容控件对象集合。

## 语法

```javascript
expression.GetAllContentControls();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[]

## 示例

此示例演示如何获取当前内容控件中的内容控件对象集合。

```javascript editor-docx
// Creates three block content controls, nests two of them inside one, and returns all the inner containers in an array.

// How to return an array of the ApiBlockLvlSdt objects from the specified block content control.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let innerSdt1 = Api.CreateBlockLvlSdt();
innerSdt1.GetContent().GetElement(0).AddText("This is the first block text content control.");
let innerSdt2 = Api.CreateBlockLvlSdt();
innerSdt2.GetContent().GetElement(0).AddText("This is the second block text content control.");
blockLvlSdt.AddElement(innerSdt1, 0);
blockLvlSdt.AddElement(innerSdt2, 1);
doc.AddElement(0, blockLvlSdt);
let contentControls = blockLvlSdt.GetAllContentControls();
contentControls[0].GetContent().GetElement(0).SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + contentControls[0].GetClassType());
doc.Push(paragraph);
```
