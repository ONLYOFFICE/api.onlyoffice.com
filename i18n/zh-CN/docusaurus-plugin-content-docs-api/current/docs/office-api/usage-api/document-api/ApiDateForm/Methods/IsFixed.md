# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 语法

```javascript
expression.IsFixed();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的日期表单是否具有固定大小。

```javascript editor-docx
// How do I find out if a date form is set to a fixed size in a document?

// Confirm that locking a date form to specific dimensions marks it as fixed in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let fixed = dateForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
