# SetNumberFormat

Sets number format for field.

## Syntax

```javascript
expression.SetNumberFormat(decimalPlaces, separatorStyle, negativeStyle, currency, currencyPrepend);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| decimalPlaces | Required | number |  | The number of digits after the decimal point. |
| separatorStyle | Required | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | The number separator style. |
| negativeStyle | Required | [NumberNegStyle](../../Enumeration/NumberNegStyle.md) |  | The negative number display style. |
| currency | Required | string |  | The currency symbol. |
| currencyPrepend | Required | boolean |  | If true, places the currency symbol before the number (e.g., $1,234.56); if false, places it after (e.g., 1,234.56$). |

## Returns

boolean

## Example

Display numbers with currency and formatting in a PDF.

```javascript editor-pdf
// Can I show dollar signs and commas with numbers in a PDF?

// Control the appearance of numerical values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000.50');
```
