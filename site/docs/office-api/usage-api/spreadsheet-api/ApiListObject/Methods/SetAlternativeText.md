# SetAlternativeText

Sets the alternative text for the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetAlternativeText(sAltText);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAltText | Required | string |  | The alternative text string. |

## Returns

This method doesn't return any data.

## Example

Attach an accessibility description to a table in a spreadsheet.

```javascript editor-xlsx
// How do I add alternative text to a table in a spreadsheet?

// Make a table readable by screen readers by giving it a plain-language label in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");
table.SetAlternativeText("List of products");

worksheet.GetRange("C1").SetValue("Alternative text:");
worksheet.GetRange("D1").SetValue(table.GetAlternativeText());
```
