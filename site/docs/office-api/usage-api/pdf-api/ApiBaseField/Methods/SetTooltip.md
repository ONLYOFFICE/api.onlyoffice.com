# SetTooltip

Sets field tooltip

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetTooltip(tooltip);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tooltip | Required | string |  | The tooltip text for the field. |

## Returns

boolean

## Example

Set a tooltip for a form field in a PDF.

```javascript editor-pdf
// Useful for adding helper text to a field.

// Assign a tooltip to a text field.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
```
