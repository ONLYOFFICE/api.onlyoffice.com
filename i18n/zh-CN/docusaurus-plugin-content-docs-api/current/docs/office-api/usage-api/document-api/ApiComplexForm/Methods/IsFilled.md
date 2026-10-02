# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中复合表单内的所有子表单是否均已填写。

```javascript editor-docx
// How do I check if a complex form has been completely filled out in a document?

// Validate that a user has entered data in every required part of a form before submitting the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Enter your email", "placeholder": "Email"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textForm = Api.CreateTextForm({"placeholder" : "name"});
complexForm.Add(textForm);
complexForm.Add("@mail");
let filledBefore = complexForm.IsFilled();
textForm.SetText("john.smith");
let filledAfter = complexForm.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The complex form is filled before entering text: " + filledBefore);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The complex form is filled after entering text: " + filledAfter);
doc.Push(paragraph);
```
