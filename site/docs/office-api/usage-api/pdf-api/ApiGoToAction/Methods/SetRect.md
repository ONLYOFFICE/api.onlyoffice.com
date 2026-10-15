# SetRect

Sets goto destination rect

:::note
For all goto types except "fitR" used only x1, y1 coordinates.
:::

## Syntax

```javascript
expression.SetRect(rect);
```

`expression` - A variable that represents an [ApiGoToAction](../ApiGoToAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | No description provided. |

## Returns

boolean

## Example

This example creates a GoTo action and changes its destination rectangle.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitR", null, [0, 0, 200, 200]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetRect([50, 50, 250, 300]);
console.log('Rect set: ' + result);
```
