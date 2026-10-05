# IsRequired

检查当前表单是否为必填项。

继承自 [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md)。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的文本字段是否必须在提交文档之前填写。

```javascript editor-forms
// How do I find out if a form field is marked as required in a document?

// Verify that a text field is set as mandatory for the reader to complete in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
