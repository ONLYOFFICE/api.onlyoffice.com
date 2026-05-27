# SetCheckStyle

Sets widget checkbox style.

## Syntax

```javascript
expression.SetCheckStyle(style);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [CheckStyle](../../Enumeration/CheckStyle.md) |  | The checkbox style. |

## Returns

boolean

## Example

Change the check symbol appearance of a checkbox widget in a PDF.

```javascript editor-pdf
// How do I customize what symbol appears inside a checked checkbox in a PDF?

// Apply a visual style to a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');
```
