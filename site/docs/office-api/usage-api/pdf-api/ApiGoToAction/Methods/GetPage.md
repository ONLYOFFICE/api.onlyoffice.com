# GetPage

Gets desctination page index

## Syntax

```javascript
expression.GetPage();
```

`expression` - A variable that represents an [ApiGoToAction](../ApiGoToAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example creates a GoTo action and gets its destination page index.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(goToAction);

console.log('GoTo page index: ' + goToAction.GetPage());
```
