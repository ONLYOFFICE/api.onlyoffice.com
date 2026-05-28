# SetChecked

Sets checkbox widget checked.

## Syntax

```javascript
expression.SetChecked(checked);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checked | Required | boolean |  | Specifies whether the checkbox is checked. |

## Returns

boolean

## Example

Mark a checkbox as selected or deselected in a PDF.

```javascript editor-pdf
// How do I toggle a checkbox widget between checked and unchecked in a PDF?

// Set the checked state of a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetChecked(true);
```
