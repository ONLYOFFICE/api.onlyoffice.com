# GetClassType

Returns a type of the ApiButtonWidget class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"page"

## Example

This example gets button widget object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
