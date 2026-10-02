# GetTag

返回当前表单的标签属性。

继承自 [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md)。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中附加到日期表单的标签。

```javascript editor-forms
// How do I retrieve the tag associated with a date form in a document?

// Use the tag value to identify or group related forms by a custom label.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"tag" : "Hello", "key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let tag = dateForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
