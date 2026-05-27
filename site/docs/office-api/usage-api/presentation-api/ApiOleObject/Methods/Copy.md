# Copy

Creates a copy of the specified OLE object.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

Duplicate an OLE object and place the copy on another slide in a presentation.

```javascript editor-pptx
// How do I make a copy of an OLE object in a presentation?

// Create an exact duplicate of an OLE object and add it to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
slide.AddObject(oleObject);

const copyOle = oleObject.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyOle);
```
