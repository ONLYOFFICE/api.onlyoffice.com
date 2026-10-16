# GetMouseExit

Gets MouseExit action.

## Syntax

```javascript
expression.GetMouseExit();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example gets the MouseExit action from an action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse exit!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseExit(jsAction);

let mouseExitAction = actions.GetMouseExit();
console.log('MouseExit action class type: ' + mouseExitAction.GetClassType());
```
