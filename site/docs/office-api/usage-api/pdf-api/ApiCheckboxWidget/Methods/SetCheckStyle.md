# SetCheckStyle

Sets widget checkbox style.

## Syntax

```javascript
expression.SetCheckStyle(sStyle);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyle | Required | [CheckStyle](../../Enumeration/CheckStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Set checkbox widget check style in a PDF document.

```javascript editor-pdf
// How can I set check style using a checkbox widget in a PDF document?

// Set check style for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');
```
