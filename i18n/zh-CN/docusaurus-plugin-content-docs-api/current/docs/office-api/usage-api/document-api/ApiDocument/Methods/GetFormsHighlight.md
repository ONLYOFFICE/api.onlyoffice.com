# GetFormsHighlight

返回文档中表单的高亮颜色。

## 语法

```javascript
expression.GetFormsHighlight();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

回读应用于文档中所有表单字段的高亮颜色。

```javascript editor-docx
// How do I retrieve the current form highlight color in a document?

// Confirm a highlight was applied correctly by displaying its hex value in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(191, 219, 254);
let highlight = doc.GetFormsHighlight();
paragraph = Api.CreateParagraph();
paragraph.AddText("The forms highlight color is: " + highlight.GetHex());
doc.Push(paragraph);
```
