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
| sAppId | Required | string |  | The application ID associated with the curent OLE object. |

## Returns

boolean

## Example

Assign a new application ID to an embedded OLE object in a document.

```javascript editor-docx
// How do I change the application identifier of an OLE object in a document?

// Replace the existing application ID on an OLE object to point to a different handler in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
oleObject.SetApplicationId('asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}');
```
