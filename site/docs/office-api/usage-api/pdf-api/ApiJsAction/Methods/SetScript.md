# SetScript

Sets action script.

## Syntax

```javascript
expression.SetScript(script);
```

`expression` - A variable that represents an [ApiJsAction](../ApiJsAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| script | Required | string |  | No description provided. |

## Returns

boolean

## Example

This example creates a JavaScript action and changes its script.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let jsAction = Api.CreateJsAction("app.alert('Hello World!');");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(jsAction);

jsAction.SetScript("app.alert('Script updated!');");
console.log('Updated script: ' + jsAction.GetScript());
```
