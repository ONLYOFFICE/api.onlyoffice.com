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

This example shows how to get the application ID from the OLE object.

```javascript editor-docx playground
// How to get an application ID of the OLE object.

// Display the application ID of the OLE object.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let appId = oleObject.GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The OLE object application ID: ' + appId);
doc.Push(paragraph);

```
