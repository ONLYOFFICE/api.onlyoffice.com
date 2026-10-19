# GetMouseEnter

Gets MouseEnter action.

## Syntax

```javascript
expression.GetMouseEnter();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example gets the MouseEnter action from an action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse enter!');");
let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetMouseEnter(jsAction);

let mouseEnterAction = actions.GetMouseEnter();
console.log('MouseEnter action class type: ' + mouseEnterAction.GetClassType());
```
