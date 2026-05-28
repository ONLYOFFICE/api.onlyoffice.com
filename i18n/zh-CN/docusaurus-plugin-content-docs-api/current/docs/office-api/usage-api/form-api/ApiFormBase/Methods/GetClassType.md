# GetClassType

返回 ApiFormBase 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"form"

## 示例

识别文档中表单对象的类类型。

```javascript editor-forms
// How do I get the class type of a form object in a document?

// Confirm what kind of object a form belongs to by printing its class type label.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
