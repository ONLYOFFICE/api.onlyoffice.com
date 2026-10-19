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

boolean

## Example

Apply background color shading to a table in a PDF.

```javascript editor-pdf
// How do I add color to the background of a table in a PDF?

// Set the background fill color for your entire table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetShd(Api.CreateShd("clear", Api.Color(255, 111, 61)));

page.AddObject(table);
```
