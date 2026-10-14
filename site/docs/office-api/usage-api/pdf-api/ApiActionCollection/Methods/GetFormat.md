# GetFormat

Gets Format action.

## Syntax

```javascript
expression.GetFormat();
```

`expression` - A variable that represents an [ApiActionCollection](../ApiActionCollection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiJsAction](../../ApiJsAction/ApiJsAction.md)

## Example

This example gets the Format action from a text field's action collection.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let formatAction = Api.CreateJsAction("AFNumber_Format(2, 0, 0, 0, '$', true);");
let widgets = textField.GetAllWidgets();
let actions = widgets[0].GetActions();
actions.SetFormat(formatAction);

let action = actions.GetFormat();
console.log('Format action script: ' + action.GetScript());
```
