# CreateUriAction

Creates an URI action.

## Syntax

```javascript
expression.CreateUriAction(uri);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uri | Required | string |  | No description provided. |

## Returns

[ApiUriAction](../../ApiUriAction/ApiUriAction.md)

## Example

This example creates a URI action that opens a web page and assigns it to a button widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let uriAction = Api.CreateUriAction("https://www.onlyoffice.com");
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(uriAction);

console.log('URI action class type: ' + uriAction.GetClassType());
```
