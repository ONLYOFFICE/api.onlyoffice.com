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

此示例展示如何向表单设置数据。

```javascript editor-forms
// How to set forms data in the document.

// Set forms answers using their keys.

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
