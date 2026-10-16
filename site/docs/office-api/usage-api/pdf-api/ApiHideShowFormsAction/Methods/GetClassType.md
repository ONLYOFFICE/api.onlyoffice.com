# GetClassType

Returns a type of the ApiHideShowFormsAction class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"hideShowAction"

## Example

This example creates a hide-show action and gets its class type.

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

console.log('Hide action class type: ' + hideAction.GetClassType());
```
