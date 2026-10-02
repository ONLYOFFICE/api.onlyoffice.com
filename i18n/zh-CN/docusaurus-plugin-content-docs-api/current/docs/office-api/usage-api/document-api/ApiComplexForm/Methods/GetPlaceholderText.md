# GetPlaceholderText

返回当前表单的占位符文本。

继承自 [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md)。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中复合表单上设置的占位符文本。

```javascript editor-docx
// How do I get the placeholder text displayed inside a form in a document?

// Verify that the correct hint text appears in a form before distributing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");
let placeholderText = complexForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
