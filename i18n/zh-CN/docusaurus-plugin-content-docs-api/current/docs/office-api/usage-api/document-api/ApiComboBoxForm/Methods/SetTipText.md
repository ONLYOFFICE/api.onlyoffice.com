# SetTipText

设置当前表单的提示文本。

## 语法

```javascript
expression.SetTipText(sText);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 提示文本。 |

## 返回值

boolean

## 示例

此示例为表单设置提示文本。

```javascript editor-docx
// Add text as a tip of the form.

// Create a text form and set its tip text (text that appears on hold).

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetTipText("Enter your first name");
let tipText = textForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
