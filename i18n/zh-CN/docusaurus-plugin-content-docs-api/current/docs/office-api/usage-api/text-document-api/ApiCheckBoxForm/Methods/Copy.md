# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

此示例展示如何复制表单。

```javascript editor-docx
// How to create the same text form.

// Create two same text forms to the document separated by a line break.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let copyTextForm = textForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyTextForm);
```
