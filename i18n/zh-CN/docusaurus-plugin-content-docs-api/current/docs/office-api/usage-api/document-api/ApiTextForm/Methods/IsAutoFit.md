# IsAutoFit

检查文本字段内容是否自动适应，即字体大小是否根据固定大小表单的尺寸进行调整。

## 语法

```javascript
expression.IsAutoFit();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的文本字段是否自动调整其内容大小。

```javascript editor-docx
// How do I find out if a text field is set to shrink text to fit in a document?

// Confirm the auto-fit setting on a form field before adjusting its layout in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
