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

此示例展示如何获取添加到文档的所有表单的数据。

```javascript editor-docx
// How to get form information as a string.

// Display the form data in the document.

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
