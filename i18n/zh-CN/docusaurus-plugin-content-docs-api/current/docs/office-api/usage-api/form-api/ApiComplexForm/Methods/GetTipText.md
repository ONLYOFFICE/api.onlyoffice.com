# GetTipText

返回当前表单的提示文本。

Inherited from [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md).

## 示例

此示例展示如何获取表单的提示文本。

```javascript editor-forms
// Get a comboBox form tip text and show it in the document.

// Show a tip text of the form.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```

