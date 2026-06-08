# GetParent

Returns the parent SortFields collection.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiSortField](../ApiSortField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSortFields](../../ApiSortFields/ApiSortFields.md)

## Example

Access the full list of sort criteria that a single sort field belongs to in a spreadsheet.

```javascript editor-xlsx
// How do I step back from one sort field to inspect the whole set of sorting rules in a spreadsheet?

// Count or review all active sort fields by retrieving the owning collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let field = sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let parent = field.GetParent();

worksheet.GetRange("C1").SetValue("Parent fields count:");
worksheet.GetRange("D1").SetValue(parent.GetCount());
```
