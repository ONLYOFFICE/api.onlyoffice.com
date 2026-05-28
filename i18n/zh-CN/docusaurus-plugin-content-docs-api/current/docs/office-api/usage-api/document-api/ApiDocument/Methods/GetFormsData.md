# GetFormsData

返回当前文档中所有表单的数据。
如果表单已创建但未分配到文档的任何部分，则不会出现在此列表中。

## 语法

```javascript
expression.GetFormsData();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormData](../../Enumeration/FormData.md)[]

## 示例

收集文档中所有表单的当前值。

```javascript editor-docx
// How do I export form field data as a JSON string in a document?

// Verify filled-in form values by printing them as text at the end of a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let text = JSON.stringify(doc.GetFormsData());
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(text);
doc.Push(paragraph2);
```
