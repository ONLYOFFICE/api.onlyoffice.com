# GetClassType

Returns a type of the ApiResetFormsAction class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiResetFormsAction](../ApiResetFormsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"resetFormsAction"

## Example

This example creates a reset forms action and gets its class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Reset action class type: ' + resetAction.GetClassType());
```
