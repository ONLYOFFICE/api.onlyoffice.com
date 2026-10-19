# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的文本字段是否包含任何输入的文本。

```javascript editor-docx
// How do I tell if a form field has been filled in by the user in a document?

// Confirm which text fields have content and which are still empty in a document.

let doc = Api.GetDocument();
let textForm1 = Api.CreateTextForm({"key": "First name", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm1);
paragraph.AddLineBreak();
let textForm2 = Api.CreateTextForm({"key": "Last name", "tip": "Enter your last name", "required": true, "placeholder": "Last name", "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm2);
textForm2.SetText("Smith");
let filled1 = textForm1.IsFilled();
let filled2 = textForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first name is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The last name is filled: " + filled2);
doc.Push(paragraph);
```
