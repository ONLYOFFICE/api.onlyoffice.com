# GetActions

Gets actions collection.

Inherited from [ApiBaseWidget.GetActions](../../ApiBaseWidget/Methods/GetActions.md).

## Syntax

```javascript
expression.GetActions();
```

`expression` - A variable that represents an [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiActionCollection](../../ApiActionCollection/ApiActionCollection.md)

## Example

This example gets the actions collection of a widget and assigns a JavaScript action to MouseUp.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();

let jsAction = Api.CreateJsAction("app.alert('Clicked!');");
actions.SetMouseUp(jsAction);

console.log('Actions class type: ' + actions.GetClassType());
```
