# SetChecked

Sets checkbox widget checked.

## Syntax

```javascript
expression.SetChecked(bChecked);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bChecked | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Set checkbox widget checked in group of checkbox widgets in a PDF document.

```javascript editor-pdf
// How can I set checked using a checkbox widget in a PDF document?

// Set checked for a checkbox widget in a PDF document.

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
