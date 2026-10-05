# GetTipText

返回当前表单的提示文本。

继承自 [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md)。

## 语法

```javascript
expression.GetTipText();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中日期表单的工具提示文本。

```javascript editor-forms
// How do I get the tooltip message shown for a date form in a document?

// Output the tip text to verify what guidance is displayed when a user hovers over the form.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let tipText = dateForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
