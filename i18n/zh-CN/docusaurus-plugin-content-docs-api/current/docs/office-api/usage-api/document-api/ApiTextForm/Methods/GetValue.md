# GetValue

返回文本表单的当前文本值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-docx
// The GetValue method of ApiTextForm returns the current text content of the field.

// Set a value to the text form and then read it back to display in the document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("John Smith");
let value = textForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Text form value: " + value);
doc.Push(paragraph);
```
