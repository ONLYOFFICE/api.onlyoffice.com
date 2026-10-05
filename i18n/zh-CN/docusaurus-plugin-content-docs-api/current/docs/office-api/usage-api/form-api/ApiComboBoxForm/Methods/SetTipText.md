# SetTipText

设置当前表单的提示文本。

继承自 [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md)。

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

在文档中为组合框表单设置工具提示文本。

```javascript editor-forms
// How do I set tooltip text on a combo box form in a document?

// Provide users with extra guidance by showing a hint when they hover over a combo box in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetTipText("Choose your country");
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
