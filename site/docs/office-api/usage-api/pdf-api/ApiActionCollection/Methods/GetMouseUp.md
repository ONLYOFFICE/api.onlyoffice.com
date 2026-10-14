# GetMouseUp

Gets MouseUp action.

## Syntax

```javascript
expression.GetMouseUp();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example gets the MouseUp action from an action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse up!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseUp(jsAction);

let mouseUpAction = actions.GetMouseUp();
console.log('MouseUp action class type: ' + mouseUpAction.GetClassType());
```
