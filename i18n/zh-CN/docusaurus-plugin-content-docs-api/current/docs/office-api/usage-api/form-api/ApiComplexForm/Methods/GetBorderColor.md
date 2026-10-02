# GetBorderColor

返回当前表单的边框颜色。

继承自 [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md)。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## 示例

读取文档中复合表单的边框颜色。

```javascript editor-forms
// How do I retrieve the border color of a complex form in a document?

// Inspect the RGB values of a form's border to verify or display its current styling.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = complexForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
