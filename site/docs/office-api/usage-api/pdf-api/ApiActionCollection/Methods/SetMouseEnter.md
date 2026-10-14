# SetMouseEnter

Sets the MouseEnter action.

## Syntax

```javascript
expression.SetMouseEnter(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a JavaScript action to fire on MouseEnter of a button widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse enter!');");
let widgets = buttonField.GetAllWidgets();
let result = widgets[0].GetActions().SetMouseEnter(jsAction);

console.log('MouseEnter set: ' + result);
```
