# GetRegularExp

Gets text widget regular validate expression.

## Syntax

```javascript
expression.GetRegularExp();
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example gets regular expression from text widget and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
console.log('Text widget reg exp is: "' + widgets[0].GetRegularExp() + '"');
```
