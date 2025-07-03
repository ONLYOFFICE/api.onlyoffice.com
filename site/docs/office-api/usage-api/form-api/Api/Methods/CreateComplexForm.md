# CreateComplexForm

Creates a complex form with the specified complex form properties.

## Syntax

```javascript
expression.CreateComplexForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [FormPrBase](../../Enumeration/FormPrBase.md) |  | Complex form properties. |

## Returns

[ApiComplexForm](../../ApiComplexForm/ApiComplexForm.md)

## Example

This example creates a complex form with the common complex form properties.

```javascript editor-pdf
// How to create a complex form and add it to the paragraph.

// Add a complex form with the state options to the ApiDocument object.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
