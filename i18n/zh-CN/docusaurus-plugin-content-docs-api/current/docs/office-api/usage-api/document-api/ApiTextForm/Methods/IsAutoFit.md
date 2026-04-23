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

此示例检查文本字段内容是否自动适应。

```javascript editor-docx
// How to know whether the first text form from this document is autofit.

// Get the boolean that represents the autofit property of the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
