# SetFormsData

将数据设置到指定的表单。

## 语法

```javascript
expression.SetFormsData(arrData);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrData | 必需 | [FormData](../../Enumeration/FormData.md)[] |  | 要设置到指定表单的表单数据数组。 |

## 返回值

boolean

## 示例

使用键为文档中的表单字段填充数据值。

```javascript editor-docx
// How do I fill in form fields programmatically in a document?

// Pre-fill checkboxes and text fields by matching each field's key to a corresponding value.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
paragraph1.Push(textForm);

doc.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);
```
