# GetClassType

Returns a type of the ApiNamedAction class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiNamedAction](../ApiNamedAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"namedAction"

## Example

This example creates a named action and gets its class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

console.log('Named action class type: ' + namedAction.GetClassType());
```
