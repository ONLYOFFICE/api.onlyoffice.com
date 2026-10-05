# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。

对于内联表单将返回 null 值。

继承自 [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## 示例

在文档中访问固定大小组合框表单的容器形状以控制其位置。

```javascript editor-forms
// How do I get the shape that wraps a combo box form field in a document?

// Apply a colored outline to the frame surrounding a combo box to make it stand out in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let shape = comboBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
