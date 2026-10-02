# GetFormKey

返回当前表单的键。

继承自 [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)。

## 语法

```javascript
expression.GetFormKey();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中分配给日期表单字段的键。

```javascript editor-forms
// How do I get the key of a date form in a document?

// Look up a form by its identifier by reading the key from a date form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let key = dateForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
