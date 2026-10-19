# GetTextPr

返回当前表单的文本属性。

:::note
仅在此类型表单支持时使用。
:::

继承自 [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## 示例

在文档中访问复合表单的文本格式属性。

```javascript editor-forms
// How do I get the text properties of a form so I can change its style in a document?

// Apply bold or resize text by first obtaining the form's text properties object in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = complexForm.GetTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
```
