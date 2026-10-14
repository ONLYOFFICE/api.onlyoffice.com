# SetType

Sets goto type

## Syntax

```javascript
expression.SetType(type);
```

`expression` - A variable that represents an [ApiGoToAction](../ApiGoToAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [GoToType](../../Enumeration/GoToType.md) |  | No description provided. |

## Returns

boolean

## Example

This example creates a GoTo action and changes its destination type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

let result = goToAction.SetType("fitH");
console.log('Type set: ' + result);
console.log('Current type: ' + goToAction.GetType());
```
