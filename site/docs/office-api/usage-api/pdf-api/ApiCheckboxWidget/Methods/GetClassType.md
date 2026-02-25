# GetClassType

Returns a type of the ApiCheckboxWidget class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"page"

## Example

This example gets checkbox widget object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
