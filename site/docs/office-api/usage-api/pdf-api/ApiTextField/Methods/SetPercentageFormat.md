# SetPercentageFormat

Sets percentage format for field.

## Syntax

```javascript
expression.SetPercentageFormat(nDemical, sSepStyle);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDemical | Required | number |  | number of decimals |
| sSepStyle | Required | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | number separate style |

## Returns

boolean

## Example

Convert and display numbers as percentages in a PDF text field.

```javascript editor-pdf
// How do I show decimal values as percentages in a PDF?

// Apply percentage formatting to text input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);
```
