# SetPosition

Sets widget position.

## Syntax

```javascript
expression.SetPosition(position);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | [Point](../../Enumeration/Point.md) |  | The new position of the widget. |

## Returns

boolean

## Example

Move a widget to a new position in a PDF.

```javascript editor-pdf
// How do I change the position of a widget in a PDF?

// Reposition a field widget using coordinate values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```
