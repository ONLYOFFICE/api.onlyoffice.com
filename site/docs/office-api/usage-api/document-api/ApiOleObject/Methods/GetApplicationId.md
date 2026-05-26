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

Read the application ID of an embedded OLE object in a document.

```javascript editor-docx
// How do I retrieve the application identifier from an OLE object in a document?

// Inspect which application is associated with an embedded object by displaying its ID in a document.

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
