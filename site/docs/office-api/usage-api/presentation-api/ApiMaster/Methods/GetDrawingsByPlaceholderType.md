# GetDrawingsByPlaceholderType

Returns an array of drawings by the specified placeholder type.

## Syntax

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | The placeholder type. |

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

This example gets drawings by placeholder type and removes it from slide master.

```javascript editor-pptx
// How to get all drawings as an array by indicating placeholder type from a master.

// Get drawings by their placeholder type knowing a slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const aDrawingsWithPh = master.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
	aDrawingsWithPh[i].Delete();
}

```
