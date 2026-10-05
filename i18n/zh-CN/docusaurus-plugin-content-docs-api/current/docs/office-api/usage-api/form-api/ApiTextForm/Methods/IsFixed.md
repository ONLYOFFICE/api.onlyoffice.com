# IsFixed

检查当前表单是否为固定大小。

继承自 [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md)。

## 语法

```javascript
expression.IsFixed();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的文本字段是否具有固定大小。

```javascript editor-forms
// How do I find out if a form field is locked to a set width and height in a document?

// Determine if a text field will resize or stay at a fixed frame size in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let fixed = textForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
