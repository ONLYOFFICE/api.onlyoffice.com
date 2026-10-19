# GetOnBlur

Gets OnBlur action.

## Syntax

```javascript
expression.GetOnBlur();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example gets the OnBlur action from an action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let jsAction = Api.CreateJsAction("app.alert('Field blurred!');");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetOnBlur(jsAction);

let onBlurAction = actions.GetOnBlur();
console.log('OnBlur action class type: ' + onBlurAction.GetClassType());
```
