# GetNames

Gets names of fields to reset

## Syntax

```javascript
expression.GetNames();
```

`expression` - A variable that represents an [ApiResetFormsAction](../ApiResetFormsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example creates a reset forms action and gets the list of field names.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let field1 = Api.CreateTextField([10, 10, 160, 30]);
field1.SetPartialName("fieldA");
page.AddObject(field1);

let field2 = Api.CreateTextField([10, 40, 160, 60]);
field2.SetPartialName("fieldB");
page.AddObject(field2);

let buttonField = Api.CreateButtonField([10, 70, 160, 90]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["fieldA", "fieldB"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Field names: ' + resetAction.GetNames());
```
