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

识别文档中文本字段的对象类型。

```javascript editor-docx
// How do I find out what type of element a text entry area represents in a document?

// Confirm the category of a text field to distinguish it from other elements in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
