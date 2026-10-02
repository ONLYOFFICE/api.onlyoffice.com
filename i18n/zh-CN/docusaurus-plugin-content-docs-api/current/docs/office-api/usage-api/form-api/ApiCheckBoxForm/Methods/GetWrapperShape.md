# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。

对于内联表单将返回 null 值。

继承自 [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## 示例

在文档中获取包裹固定大小复选框表单的形状，以控制其位置和大小。

```javascript editor-forms
// How do I access the container shape of a fixed-size form in a document?

// Apply a custom outline to the shape frame surrounding each checkbox form in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
let shape = checkBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
shape = checkBoxForm.GetWrapperShape();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
