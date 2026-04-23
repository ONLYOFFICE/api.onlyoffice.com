# GetClassType

返回 ApiTextForm 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textForm"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-docx
// How to get a class type of ApiTextForm.

// Retrieve class type of ApiTextForm object and insert it to the document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
