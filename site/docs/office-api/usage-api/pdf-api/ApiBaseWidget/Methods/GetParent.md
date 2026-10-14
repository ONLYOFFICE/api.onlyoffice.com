# GetParent

Gets parent field.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiField](../../Enumeration/ApiField.md)

## Example

This example gets the parent field of a widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myField");
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let parent = widgets[0].GetParent();
console.log('Parent field name: ' + parent.GetPartialName());
```
