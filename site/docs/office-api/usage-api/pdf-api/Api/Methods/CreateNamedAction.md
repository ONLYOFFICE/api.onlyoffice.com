# CreateNamedAction

Creates a named action.

## Syntax

```javascript
expression.CreateNamedAction(name);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | [NamedActionType](../../Enumeration/NamedActionType.md) |  | No description provided. |

## Returns

[ApiNamedAction](../../ApiNamedAction/ApiNamedAction.md)

## Example

This example creates a named action that navigates to the next page and assigns it to a button widget.

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
