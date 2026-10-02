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

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中将日期表单转换为内联表单。

```javascript editor-forms
// How do I change a fixed-size date form back to inline in a document?

// Switch a date form from fixed dimensions to flow naturally with surrounding text in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let copyForm = dateForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
doc.Push(paragraph);
copyForm.ToInline();
let fixed = dateForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
