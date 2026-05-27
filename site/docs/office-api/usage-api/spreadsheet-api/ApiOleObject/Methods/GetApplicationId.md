# GetApplicationId

Returns the application ID from the current OLE object.

## Syntax

```javascript
expression.GetApplicationId();
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the application identifier of an embedded object in a spreadsheet.

```javascript editor-xlsx
// How do I find out which application an embedded object belongs to in a spreadsheet?

// Check the identifier stored on an embedded object to confirm its source application in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
let appId = oleObject.GetApplicationId();
worksheet.GetRange('A1').SetValue('The OLE object application ID: ' + appId);
```
