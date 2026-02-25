# SetRegularExp

Sets text widget regular validate expression.

## Syntax

```javascript
expression.SetRegularExp(sReg);
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReg | Required | string |  | field regular exp |

## Returns

boolean

## Example

This example sets regular expression for text widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
```
