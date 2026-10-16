# SetMouseUp

Sets the MouseUp action.

## Syntax

```javascript
expression.SetMouseUp(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a JavaScript action to fire on MouseUp of a button widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse up!');");
let widgets = buttonField.GetAllWidgets();
let result = widgets[0].GetActions().SetMouseUp(jsAction);

console.log('MouseUp set: ' + result);
```
