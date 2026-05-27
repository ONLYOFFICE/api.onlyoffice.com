# GetClassType

Returns a type of the ApiOleObject class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"oleObject"

## Example

Read the class type of an embedded object in a spreadsheet.

```javascript editor-xlsx
// How do I find out what class type an embedded object has in a spreadsheet?

// Inspect the type label of an embedded object to identify its category in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let type = oleObject.GetClassType();
worksheet.GetRange('A1').SetValue('Class type: ' + type);
```
