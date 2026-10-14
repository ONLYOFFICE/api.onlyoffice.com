# SetName

Sets a name of action.

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents an [ApiNamedAction](../ApiNamedAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | [NamedActionType](../../Enumeration/NamedActionType.md) |  | No description provided. |

## Returns

boolean

## Example

This example creates a named action and changes its name to navigate to the last page.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let namedAction = Api.CreateNamedAction("NextPage");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(namedAction);

namedAction.SetName("LastPage");
console.log('Updated action name: ' + namedAction.GetName());
```
