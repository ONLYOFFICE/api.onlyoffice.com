# ToInline

将当前表单转换为内联表单。

:::note
图片表单无法转换为内联表单，因为它始终是固定大小的对象。
:::

继承自 [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md)。

## 语法

```javascript
expression.ToInline();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中将固定大小的复选框表单转换回内联表单。

```javascript editor-forms
// How do I remove fixed dimensions from a form field so it flows with the text in a document?

// Restore natural text flow by switching a checkbox form from fixed to inline mode in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let copyForm = checkBoxForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
paragraph.AddText(" Single");
doc.Push(paragraph);
copyForm.ToInline();
let isFixed = checkBoxForm.IsFixed();
let isFixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + isFixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + isFixedCopy);
doc.Push(paragraph);
```
