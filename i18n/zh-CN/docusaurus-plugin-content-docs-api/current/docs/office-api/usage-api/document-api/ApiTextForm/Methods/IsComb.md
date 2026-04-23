# IsComb

检查文本字段是否为具有相同单元格宽度的字符梳。

## 语法

```javascript
expression.IsComb();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查文本字段是否为具有相同单元格宽度的字符梳。

```javascript editor-docx
// How to know whether the first text form from this document is comb.

// Get the boolean that represents the comb property of the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
let comb = textForm.IsComb();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is comb: " + comb);
doc.Push(paragraph);
```
