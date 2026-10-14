# IsAllExcept

Will all fields be reset except the fields whose names are specified

## Syntax

```javascript
expression.IsAllExcept();
```

`expression` - A variable that represents an [ApiResetFormsAction](../ApiResetFormsAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example creates a reset forms action and checks whether all fields except listed will be reset.

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

// Reset all fields EXCEPT fieldB
let resetAction = Api.CreateResetFormsAction(true, ["fieldB"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

console.log('Is all except: ' + resetAction.IsAllExcept());
```
