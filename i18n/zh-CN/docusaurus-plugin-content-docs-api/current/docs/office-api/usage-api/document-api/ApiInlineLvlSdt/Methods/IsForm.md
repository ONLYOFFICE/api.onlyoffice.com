# IsForm

检查内容控件是否为表单。

## 语法

```javascript
expression.IsForm();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的内联内容控件是否属于表单。

```javascript editor-docx
// How do I find out whether an inline content control is part of a form in a document?

// Separate form-bound controls from standalone controls to apply different processing rules in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let isForm = inlineLvlSdt.IsForm();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first content control from this document is a form: " + isForm);
doc.Push(paragraph);
```
