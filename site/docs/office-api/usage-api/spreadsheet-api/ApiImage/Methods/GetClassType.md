# GetClassType

Returns a type of the ApiImage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"image"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
// How to get a class type of ApiImage.

// Get a class type of ApiImage and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let image = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000,
	0, 2 * 36000, 2, 3 * 36000
);
let classType = image.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange('A1').SetValue('Class Type = ');
worksheet.GetRange('B1').SetValue(classType);

```
