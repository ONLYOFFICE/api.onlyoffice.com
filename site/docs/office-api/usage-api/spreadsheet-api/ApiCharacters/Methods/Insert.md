# Insert

Inserts a string replacing the specified characters.

## Syntax

```javascript
expression.Insert(String);
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| String | Required | string |  | The string to insert. |

## Returns

This method doesn't return any data.

## Example

Replace a selected portion of cell text with a new string in a spreadsheet.

```javascript editor-xlsx
// How do I substitute part of a cell's text with different content in a spreadsheet?

// Overwrite a specific slice of characters to correct or update cell content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");
```
