# SetTextPr

设置当前表单的文本属性。
*如果该表单类型支持则使用*

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../../text-document-api/ApiTextPr/ApiTextPr.md) |  | 将设置到当前表单的文本属性。 |

## 返回值

boolean

## 示例

此示例为表单设置文本属性。

```javascript editor-forms
// Add text properties to the text form.

// How to create a text form and make its text bold and bigger.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
```
