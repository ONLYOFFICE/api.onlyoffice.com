# RemoveOleObject

Removes the OLE object from the workbook by its internal ID.

## Syntax

```javascript
expression.RemoveOleObject(internalId);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | Required | string |  | The OLE object identifier which is used to work with OLE object added to the worksheet. |

## Returns

This method doesn't return any data.

## Example

```javascript
const addOleToWorksheet = function () {
	const worksheet = Api.GetActiveSheet();
	const oleObject = worksheet.AddOleObject(
		'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
		130 * 36000, 90 * 36000,
		'https://youtu.be/SKGz4pmnpgY',
		'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}',
		0, 2 * 36000, 4, 3 * 36000
	);
	return oleObject.Drawing.GetId();
};
Asc.plugin.callCommand(addOleToWorksheet, false, true, (id) => {
	console.log('We added OLE object with id: ' + id);
	Asc.plugin.executeMethod('RemoveOleObject', [id]);
	console.log('We removed OLE object with id: ' + id);
});
```
