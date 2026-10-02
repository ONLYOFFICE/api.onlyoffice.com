# GetBorderColor

返回当前表单的边框颜色。

继承自 [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md)。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

读取文档中复选框表单字段的边框颜色。

```javascript editor-docx
// How do I find out what color is applied to the border of a checkbox in a document?

// Inspect the border color after styling a checkbox form to confirm the value was applied correctly in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = checkBoxForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
