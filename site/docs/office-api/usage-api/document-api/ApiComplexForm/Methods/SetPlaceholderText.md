# SetPlaceholderText

Sets the placeholder text to the current form.

:::note
The placeholder text can't be set for checkbox or radio button forms.
:::

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

Set placeholder text on a complex form in a document.

```javascript editor-docx
// How do I add instructional placeholder text to a form in a document?

// Guide users by displaying a hint inside an empty form before they begin filling it in.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");
```
