# SetValidate

Sets the Validate action.

## Syntax

```javascript
expression.SetValidate(action);
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiJsAction](../../ApiJsAction/ApiJsAction.md) \| null \| undefined |  | The action to set, or `null` to remove it. |

## Returns

boolean

## Example

This example sets a Validate action on a text field to ensure its value is positive.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let validateAction = Api.CreateJsAction("if (event.value < 0) { app.alert('Value must be positive'); event.rc = false; }");
let widgets = textField.GetAllWidgets();
let result = widgets[0].GetActions().SetValidate(validateAction);

console.log('Validate action set: ' + result);
```
