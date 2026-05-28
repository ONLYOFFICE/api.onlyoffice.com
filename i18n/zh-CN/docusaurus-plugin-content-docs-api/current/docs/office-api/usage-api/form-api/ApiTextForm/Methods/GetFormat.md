# GetFormat

返回当前文本字段的格式。

## 语法

```javascript
expression.GetFormat();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TextFormFormat](../../Enumeration/TextFormFormat.md)

## 示例

读取文档中应用于文本字段的输入格式。

```javascript editor-forms
// How do I check what format rule is set on a text entry area in a document?

// Confirm the mask or pattern controlling user input in a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Code", placeholder: "Enter code" });
textForm.SetFormat({ type: "mask", value: "9-9-9" });
let format = textForm.GetFormat();
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form format type: " + format.type + ", value: " + format.value);
paragraph.Push(textForm);
```
