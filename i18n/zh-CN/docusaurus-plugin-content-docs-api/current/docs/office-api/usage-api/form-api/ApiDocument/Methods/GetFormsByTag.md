# GetFormsByTag

返回文档中具有指定标签名称的所有表单的列表。

## 语法

```javascript
expression.GetFormsByTag(sTag);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | 必需 | string |  | 表单标签。 |

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)[]

## 示例

检索文档中共享给定标签名称的所有表单。

```javascript editor-forms
// How do I look up forms by their tag in a document?

// Populate related form fields at once by targeting them through a shared tag in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = doc.GetFormsByTag("form_1");
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");
```
