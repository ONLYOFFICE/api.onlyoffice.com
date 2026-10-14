# GetName

Gets a name of action.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents an [ApiNamedAction](../ApiNamedAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[NamedActionType](../../Enumeration/NamedActionType.md)

## Example

This example creates a named action and gets its name.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

console.log('Named action name: ' + namedAction.GetName());
```
