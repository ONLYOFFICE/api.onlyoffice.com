# CreateTextForm

Creates a text field with the specified text field properties.

## Syntax

```javascript
expression.CreateTextForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [TextFormPr](../../Enumeration/TextFormPr.md) |  | Text field properties. |

## Returns

[ApiTextForm](../../ApiTextForm/ApiTextForm.md)

## Example

Add a text input field for users to enter information in a document.

```javascript editor-forms
// How do I create a text box field in a document?

// Insert a fillable text area where users can type their responses in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
```
