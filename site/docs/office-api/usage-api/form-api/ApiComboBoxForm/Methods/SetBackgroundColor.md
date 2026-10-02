# SetBackgroundColor

Sets the background color to the current form.

Inherited from [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md).

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | The background color. |

## Returns

boolean

## Example

Apply a background color to a combo box form field in a document.

```javascript editor-forms
// How do I change the fill color of a combo box form in a document?

// Highlight a combo box by giving it a distinct background tint to draw attention in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
