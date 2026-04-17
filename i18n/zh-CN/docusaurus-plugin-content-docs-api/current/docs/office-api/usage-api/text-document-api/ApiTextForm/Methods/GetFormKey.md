# GetFormKey

返回当前表单的键。

Inherited from [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md).

## 示例

此示例展示如何获取表单键。

```javascript editor-docx
// How get a key of a comboBox form.

// Retrieve key of a created comboBox form object and display it.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```

