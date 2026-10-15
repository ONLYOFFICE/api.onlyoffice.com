# SetNext

Sets next action.

## Syntax

```javascript
expression.SetNext(action);
```

`expression` - A variable that represents an [ApiBaseAction](../ApiBaseAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) |  | No description provided. |

## Returns

[ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md)

## Example

This example creates a chain of two actions: a JS alert followed by navigation to the next page.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let firstAction = Api.CreateJsAction("app.alert('Going to next page...');");
let secondAction = Api.CreateNamedAction("NextPage");
let result = firstAction.SetNext(secondAction);

let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(firstAction);

console.log('Next action set, class type: ' + result.GetClassType());
```
