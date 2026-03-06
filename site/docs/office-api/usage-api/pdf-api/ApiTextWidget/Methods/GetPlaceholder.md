# GetPlaceholder

Gets text field placeholder.

## Syntax

```javascript
expression.GetPlaceholder();
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets placeholder from text widget and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
console.log('Text widget placeholder is: "' + widgets[0].GetPlaceholder() + '"');
```
