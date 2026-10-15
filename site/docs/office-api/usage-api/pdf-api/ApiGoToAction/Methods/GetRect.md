# GetRect

Gets goto destination rect

:::note
For all goto types except "fitR" used only x1, y1 coordinates.
:::

## Syntax

```javascript
expression.GetRect();
```

`expression` - A variable that represents an [ApiGoToAction](../ApiGoToAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md) \| null \| undefined

## Example

This example creates a GoTo action and gets its destination rectangle.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fitR", null, [20, 20, 200, 200]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let rect = goToAction.GetRect();
console.log('GoTo rect: ' + rect);
```
