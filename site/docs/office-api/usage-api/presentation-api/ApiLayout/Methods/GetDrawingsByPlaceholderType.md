# GetDrawingsByPlaceholderType

Returns an array of drawings by the specified placeholder type.

## Syntax

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | The placeholder type. |

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

Get drawings by placeholder type from a layout and remove them.

```javascript editor-pptx
// Drawings with specific placeholder types can be filtered and deleted.

// Delete all drawings with the "ctrTitle" placeholder type from the layout.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}
```
