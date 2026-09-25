# GetActionsJSON

Gets all field actions in json format.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetActionsJSON();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

Get field widget actions as JSON in a PDF.

```javascript editor-pdf
// Useful for inspecting actions assigned to a widget.

// Read the actions JSON object from a field widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let actionsJSON = widgets[0].GetActionsJSON();
console.log(JSON.stringify(actionsJSON));
```
