# Clear

清除当前表单。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中文本表单字段的输入值。

```javascript editor-docx
// How do I clear the content of a form in a document?

// Reset a filled-in form field to blank so it is ready for new input in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("John Smith");
textForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
doc.Push(paragraph);
```
