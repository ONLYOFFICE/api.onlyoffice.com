# SetShd

Specifies the shading which shall be applied to the extents of the current table.

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

This method doesn't return any data.

## Example

Apply shading color to a table in a presentation.

```javascript editor-pptx
// Set the background shading for the entire table.

// Create a table, apply a shading color, and add it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
slide.RemoveAllObjects();
slide.AddObject(table);
```
