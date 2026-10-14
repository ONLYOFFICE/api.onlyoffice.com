# CreateGoToAction

Creates a GoTo action.

## Syntax

```javascript
expression.CreateGoToAction(page, goToType, zoom, rect);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | Required | number |  | No description provided. |
| goToType | Required | [GoToType](../../Enumeration/GoToType.md) |  | No description provided. |
| zoom | Optional | [percentage](../../Enumeration/percentage.md) | 1 | zoom ratio, 1 is equal 100% (used only for goToType == "xyz") |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | No description provided. |

## Returns

[ApiGoToAction](../../ApiGoToAction/ApiGoToAction.md)

## Example

This example creates a GoTo action that navigates to the first page and assigns it to a button widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

console.log('GoTo action class type: ' + goToAction.GetClassType());
```
