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

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

Set placeholder text on a date form in a document.

```javascript editor-forms
// How do I add hint text to an empty date form in a document?

// Replace the default prompt inside a date form with custom guidance text in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetPlaceholderText("Your placeholder");
```
