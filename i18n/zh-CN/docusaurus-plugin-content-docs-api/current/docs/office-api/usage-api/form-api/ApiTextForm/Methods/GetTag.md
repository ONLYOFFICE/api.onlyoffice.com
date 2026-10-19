# GetTag

返回当前表单的标签属性。

继承自 [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md)。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中分配给文本字段的标签。

```javascript editor-forms
// How do I find out what tag is attached to a text field in a document?

// Read a label stored on a text field to identify it in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tag" : "Info", "key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
