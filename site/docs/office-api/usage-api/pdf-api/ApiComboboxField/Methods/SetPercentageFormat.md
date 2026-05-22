# SetPercentageFormat

Sets percentage format for field.

## Syntax

```javascript
expression.SetPercentageFormat(nDemical, sSepStyle);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDemical | Required | number |  | number of decimals |
| sSepStyle | Required | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | number separate style |

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
