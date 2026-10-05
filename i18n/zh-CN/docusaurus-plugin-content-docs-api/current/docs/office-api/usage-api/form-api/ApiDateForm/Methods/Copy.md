# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

继承自 [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md)。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

复制现有的日期表单并将副本插入到文档中。

```javascript editor-forms
// How do I create an identical copy of a date form in a document?

// Reuse the same date field settings without reconfiguring them by copying the form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let copyDateForm = dateForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyDateForm);
```
