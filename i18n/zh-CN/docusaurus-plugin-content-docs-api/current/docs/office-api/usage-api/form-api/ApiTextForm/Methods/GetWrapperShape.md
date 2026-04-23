# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。
对于内联表单将返回 null 值。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../../text-document-api/ApiShape/ApiShape.md)

## 示例

此示例展示如何获取放置表单的形状，用于控制固定大小表单框架的位置和大小。

```javascript editor-forms
// Get wrapper shape of the text form.

// Set outline to the shape which contains the current form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let shape = textForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
