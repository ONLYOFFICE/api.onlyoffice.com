# SetCheckedByDefault

Sets widget checked by default.

## Syntax

```javascript
expression.SetCheckedByDefault(checked);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checked | Required | boolean |  | Specifies whether the checkbox is checked by default. |

## Returns

boolean

## Example

Make a checkbox appear selected when the PDF form first opens in a PDF.

```javascript editor-pdf
// How do I configure a checkbox to be pre-selected by default in a PDF?

// Set the initial checked state for a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckedByDefault(true);
console.log('Checked by default is: ' + widgets[0].IsCheckedByDefault());
```
