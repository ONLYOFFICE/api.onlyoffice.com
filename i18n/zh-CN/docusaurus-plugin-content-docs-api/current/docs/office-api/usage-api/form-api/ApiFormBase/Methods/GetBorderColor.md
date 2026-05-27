# GetBorderColor

返回当前表单的边框颜色。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## 示例

读取文档中表单字段的边框颜色。

```javascript editor-forms
// How do I get the border color of a form field in a document?

// Verify a custom border color by reading its RGB values back after applying it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = textForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
