# GetScript

Gets action script

## Syntax

```javascript
expression.GetScript();
```

`expression` - A variable that represents an [ApiJsAction](../ApiJsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example creates a JavaScript action and gets its script.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

console.log('JS action script: ' + jsAction.GetScript());
```
