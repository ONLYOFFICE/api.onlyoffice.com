# GetName

Returns a type of the ApiName class.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the label assigned to a named range in a spreadsheet.

```javascript editor-xlsx
// How do I find out what a named range is called in a spreadsheet?

// Retrieve the text name of a range to display or compare it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("Name: " + defName.GetName());
```
