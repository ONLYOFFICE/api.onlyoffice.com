# SetMouseExit

Sets the MouseExit action.

## Syntax

```javascript
expression.SetMouseExit(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a JavaScript action to fire on MouseExit of a button widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Mouse exit!');");
let widgets = buttonField.GetAllWidgets();
let result = widgets[0].GetActions().SetMouseExit(jsAction);

console.log('MouseExit set: ' + result);
```
