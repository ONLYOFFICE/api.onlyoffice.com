# GetTipText

返回当前表单的提示文本。

继承自 [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md)。

## 语法

```javascript
expression.GetTipText();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中为复合表单配置的工具提示文本。

```javascript editor-docx
// How do I retrieve the tooltip that guides users filling in a form in a document?

// Confirm the correct instructional hint is set on a form before sharing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let tipText = complexForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
