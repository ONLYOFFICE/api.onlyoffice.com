# GetClassType

Returns a type of the ApiUriAction class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiUriAction](../ApiUriAction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"uriAction"

## Example

This example creates a URI action and gets its class type.

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
