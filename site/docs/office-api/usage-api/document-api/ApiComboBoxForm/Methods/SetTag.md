# SetTag

Sets the tag attribute to the current form.

Inherited from [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md).

## Syntax

```javascript
expression.SetTag(tag);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | Required | string |  | The tag which will be added to the current container. |

## Returns

boolean

## Example

Attach a tag to a combo box form in a document.

```javascript editor-docx
// How do I attach a tag to a combo box form in a document?

// Label a combo box with a custom identifier so it can be found and referenced later in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
comboBoxForm.SetTag("Country");
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tag = comboBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
