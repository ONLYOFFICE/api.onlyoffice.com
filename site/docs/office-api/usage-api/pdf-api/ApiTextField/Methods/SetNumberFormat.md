# SetNumberFormat

Sets number format for field.

## Syntax

```javascript
expression.SetNumberFormat(decimalPlaces, separatorStyle, negativeStyle, currency, currencyPrepend);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

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

Display numbers with currency symbols and formatting in a PDF text field.

```javascript editor-pdf
// How do I show dollar amounts and decimal places correctly in a PDF?

// Configure number formatting with currency and decimal precision in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');
```
