# IsHide

Checks if action hide fields

## Syntax

```javascript
expression.IsHide();
```

`expression` - A variable that represents an [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example creates a hide-show action and checks if it hides the fields.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let hideAction = Api.CreateHideShowFormsAction(true, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(hideAction);

console.log('Is hide: ' + hideAction.IsHide());
```
