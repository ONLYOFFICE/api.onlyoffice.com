# SetOnFocus

Sets the OnFocus action.

## Syntax

```javascript
expression.SetOnFocus(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a JavaScript action to fire when a text field receives focus.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field focused!');");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetOnFocus(jsAction);

console.log('OnFocus set: ' + result);
```
