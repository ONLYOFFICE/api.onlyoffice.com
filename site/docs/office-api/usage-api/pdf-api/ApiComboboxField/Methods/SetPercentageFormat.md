# SetPercentageFormat

Sets percentage format for field.

## Syntax

```javascript
expression.SetPercentageFormat(decimalPlaces, separatorStyle);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| decimalPlaces | Required | number |  | The number of digits after the decimal point. |
| separatorStyle | Required | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | The number separator style. |

## Returns

boolean

## Example

Present values as percentages in a field in a PDF.

```javascript editor-pdf
// Can I show numbers as percentages in a PDF?

// Convert numerical input to percentage display in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPercentageFormat(0, "us");
comboboxField.SetValue(10);
```
