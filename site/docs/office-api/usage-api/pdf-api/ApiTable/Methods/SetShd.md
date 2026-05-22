# SetShd

Specifies the shading which shall be applied to the extents of the current table.

## Syntax

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) \| [ApiFill](../../ApiFill/ApiFill.md) |  | The shading type applied to the contents of the current table. Can be ShdType or ApiFill. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Apply background color shading to a table in a PDF.

```javascript editor-pdf
// How do I add color to the background of a table in a PDF?

// Set the background fill color for your entire table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetShd("clear", 255, 111, 61);

page.AddObject(table);
```
