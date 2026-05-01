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
| position | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |

## Returns

boolean

## Example

Create a new field and set new position to its widget in a PDF document.

```javascript editor-pdf
// How can I set position using a widget in a PDF document?

// Set position for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```
