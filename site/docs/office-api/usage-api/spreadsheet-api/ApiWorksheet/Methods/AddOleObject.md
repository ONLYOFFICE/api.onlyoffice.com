# AddOleObject

Adds an OLE object to the current sheet with the parameters specified.

## Syntax

```javascript
expression.AddOleObject(sImageSrc, nWidth, nHeight, sData, sAppId, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object height in English measure units. |
| sData | Required | string |  | The OLE object string data. |
| sAppId | Required | string |  | The application ID associated with the current OLE object. |
| nFromCol | Required | number |  | The number of the column where the beginning of the OLE object will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the OLE object measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the OLE object will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the OLE object measured in English measure units. |

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

Embed a linked object from an external source into a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I insert an embedded object with a preview image and a link in a spreadsheet?

// Attach an interactive linked object to a worksheet at a given position and size.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
	0, 2 * 36000, 4, 3 * 36000
);
```
