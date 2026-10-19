# GetPosInParent

返回当前表单在其父元素中的位置（索引）。

继承自 [ApiFormBase.GetPosInParent](../../ApiFormBase/Methods/GetPosInParent.md)。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

确定表单在其父元素中的索引。

```javascript editor-forms
// The position is the form's index within its parent paragraph.

// Read a form's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Field: ");
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let position = form.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The form is at position " + position + ".");
doc.Push(report);
```
