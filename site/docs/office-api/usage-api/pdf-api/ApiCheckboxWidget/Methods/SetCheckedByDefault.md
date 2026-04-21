# SetCheckedByDefault

Sets widget checked by default.

## Syntax

```javascript
expression.SetCheckedByDefault(bChecked);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bChecked | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Set checkbox widget checked by default property in a PDF document.

```javascript editor-pdf
// How to set checked by default for a checkbox widget in a PDF document?

// Set checked by default and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckedByDefault(true);
console.log('Checked by default is: ' + widgets[0].IsCheckedByDefault());
```
