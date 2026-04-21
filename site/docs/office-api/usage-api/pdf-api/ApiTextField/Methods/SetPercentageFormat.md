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

Get text field and set percentage format for it.

```javascript editor-pdf
// How to set percentage format for a text field?

// Set percentage format and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);
```
