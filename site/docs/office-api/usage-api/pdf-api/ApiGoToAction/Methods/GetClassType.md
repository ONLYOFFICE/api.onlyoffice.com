# GetClassType

Returns a type of the ApiGoToAction class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiGoToAction](../ApiGoToAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"goToAction"

## Example

This example creates a GoTo action and gets its class type.

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
