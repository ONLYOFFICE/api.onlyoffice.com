# SetUri

Sets uri to action

## Syntax

```javascript
expression.SetUri(uri);
```

`expression` - A variable that represents an [ApiUriAction](../ApiUriAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uri | Required | string |  | No description provided. |

## Returns

boolean

## Example

This example creates a URI action and changes its URI string.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

uriAction.SetUri("https://api.onlyoffice.com");
console.log('Updated URI: ' + uriAction.GetUri());
```
