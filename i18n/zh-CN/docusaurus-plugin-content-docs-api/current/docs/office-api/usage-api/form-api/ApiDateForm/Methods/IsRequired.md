# IsRequired

检查当前表单是否为必填项。

继承自 [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md)。

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的日期表单是否被标记为必填。

```javascript editor-forms
// How do I determine if a date form must be filled out in a document?

// Confirm that a required date form reports its mandatory status correctly in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let required = dateForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
