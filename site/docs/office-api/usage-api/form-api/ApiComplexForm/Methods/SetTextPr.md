# SetTextPr

Sets the text properties to the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md).

## Syntax

```javascript
expression.SetTextPr(textPr);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current form. |

## Returns

boolean

## Example

Apply text formatting properties to a complex form in a document.

```javascript editor-forms
// How do I set the font style and size of text inside a form in a document?

// Control the visual appearance of form text by specifying bold, size, and other character styles.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
complexForm.SetTextPr(textPr);
```
