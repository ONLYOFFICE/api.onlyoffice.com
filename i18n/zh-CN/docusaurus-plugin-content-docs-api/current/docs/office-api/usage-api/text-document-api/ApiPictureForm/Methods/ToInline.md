# ToInline

将当前表单转换为内联表单。
*图片表单无法转换为内联表单，它始终是固定大小的对象。*

## 语法

```javascript
expression.ToInline();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将表单转换为内联表单。

```javascript editor-docx
// How to make the form inline.

// Create a text form and make its position inline.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let copyForm = textForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
doc.Push(paragraph);
copyForm.ToInline();
let fixed = textForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
