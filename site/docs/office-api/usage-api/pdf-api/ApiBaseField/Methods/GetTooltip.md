# GetTooltip

Gets field tooltip

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetTooltip();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Read a form field tooltip in a PDF.

```javascript editor-pdf
// Useful for getting the helper text assigned to a field.

// Set a field tooltip and read it back.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
textField.SetValue(textField.GetTooltip());
```
