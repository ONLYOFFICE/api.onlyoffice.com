# GetFormKey

返回当前表单的键。

继承自 [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)。

## 语法

```javascript
expression.GetFormKey();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给文本字段的唯一键。

```javascript editor-forms
// How do I look up the identifier key of a text entry area in a document?

// Verify the label used to reference a text field by name in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
