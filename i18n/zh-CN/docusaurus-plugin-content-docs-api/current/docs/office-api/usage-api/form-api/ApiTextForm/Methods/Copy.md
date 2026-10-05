# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

继承自 [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md)。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

复制文档中的文本输入字段并放置副本。

```javascript editor-forms
// How do I create an identical second text field from an existing one in a document?

// Reproduce a text entry field so it can be reused elsewhere in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let copyTextForm = textForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyTextForm);
```
