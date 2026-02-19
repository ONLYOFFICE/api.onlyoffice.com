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

This example gets text field and sets percentage format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPercentageFormat(0, "us");
comboboxField.SetValue(10);

```
