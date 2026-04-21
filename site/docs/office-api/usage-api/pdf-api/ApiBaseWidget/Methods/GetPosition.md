# GetPosition

Gets widget position.

## Syntax

```javascript
expression.GetPosition();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Point](../../Enumeration/Point.md)

## Example

Create a new field and get position of its widget in a PDF document.

```javascript editor-pdf
// How can I get the position using a widget in a PDF document?

// Get the position for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let pos = widgets[0].GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
