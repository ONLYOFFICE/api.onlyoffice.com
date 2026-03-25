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

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-docx
// How to get a class type of ApiDateForm.

// Retrieve class type of ApiDateForm object and insert it to the slide.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let classType = dateForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
