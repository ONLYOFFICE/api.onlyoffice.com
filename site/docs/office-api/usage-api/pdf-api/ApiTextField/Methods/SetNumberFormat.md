# SetNumberFormat

Sets number format for field.

## Syntax

```javascript
expression.SetNumberFormat(nDemical, sSepStyle, sNegStyle, sCurrency, bCurrencyPrepend);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDemical | Required | number |  | number of decimals |
| sSepStyle | Required | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | number separate style |
| sNegStyle | Required | [NumberNegStyle](../../Enumeration/NumberNegStyle.md) |  | number negative style |
| sCurrency | Required | string |  | currency sybmol |
| bCurrencyPrepend | Required | boolean |  | If true, places the currency symbol before the number (e.g., $1,234.56);  if false, places it after (e.g., 1,234.56$). |

## Returns

boolean

## Example

This example gets text field and sets number format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');

```
