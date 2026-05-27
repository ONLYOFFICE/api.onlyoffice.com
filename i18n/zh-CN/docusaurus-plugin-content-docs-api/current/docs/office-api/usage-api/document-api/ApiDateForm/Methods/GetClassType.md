# GetClassType

返回 ApiDateForm 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"dateForm"

## 示例

识别文档中日期表单字段的类类型。

```javascript editor-docx
// How do I get the class type of a date form object in a document?

// Confirm the object kind before applying type-specific logic to a date form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let classType = dateForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
