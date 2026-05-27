# GetFormValueByKey

返回指定键的表单值。对于一组单选按钮，返回 Choice，即所选项目的名称。

## 语法

```javascript
expression.GetFormValueByKey(key);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| key | 必需 | string |  | 表单键。 |

## 返回值

null \| boolean \| string

## 示例

通过键读取表单字段的当前值并在文档中打印。

```javascript editor-forms
// How do I retrieve what a user entered in a named form field in a document?

// Verify filled-in form data by looking up field values by key in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let formValue = doc.GetFormValueByKey("CompanyName");
paragraph.AddText("CompanyName: " + formValue);
paragraph.AddLineBreak();
formValue = doc.GetFormValueByKey("BestCompany");
paragraph.AddText("BestCompany: " + formValue);
```
