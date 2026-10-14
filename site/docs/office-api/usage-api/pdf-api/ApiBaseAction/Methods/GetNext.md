# GetNext

Returns next action.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents an [ApiBaseAction](../ApiBaseAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example creates a chain of two actions and gets the next action in the chain.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let firstAction = Api.CreateJsAction("app.alert('First action');");
let secondAction = Api.CreateNamedAction("NextPage");
firstAction.SetNext(secondAction);

let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(firstAction);

let nextAction = firstAction.GetNext();
console.log('Next action class type: ' + nextAction.GetClassType());
```
