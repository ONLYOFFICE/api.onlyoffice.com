# SetApplicationId

Sets the application ID to the current OLE object.

## Syntax

```javascript
expression.SetApplicationId(sAppId);
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAppId | Required | string |  | The application ID associated with the current OLE object. |

## Returns

boolean

## Example

Assign an application identifier to an embedded object in a spreadsheet.

```javascript editor-xlsx
// How do I set which application an embedded object is linked to in a spreadsheet?

// Update the application identifier on an embedded object to associate it with a different app in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
oleObject.SetApplicationId('asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}');
```
