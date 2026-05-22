# GetControlsHighlight

返回当前文档中内容控件的高亮颜色。

## 语法

```javascript
expression.GetControlsHighlight();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取应用于文档中所有内容控件的高亮颜色。

```javascript editor-docx
// How do I get the current highlight color set on content controls in a document?

// Verify that a highlight was applied correctly by reading it back after setting it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(255, 239, 191);
let highlight = doc.GetControlsHighlight();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The controls highlight color is: " + highlight.GetHex());
doc.Push(paragraph);
```
