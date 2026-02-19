# SetPlaceholder

Sets text field placeholder.

## Syntax

```javascript
expression.SetPlaceholder(sPlaceholder);
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPlaceholder | Required | string |  | field placeholder |

## Returns

boolean

## Example

This example sets placeholder for text widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
```
