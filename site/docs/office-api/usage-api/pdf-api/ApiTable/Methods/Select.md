# Select

Selects the current graphic object.

Inherited from [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md).

## Syntax

```javascript
expression.Select(isReplace);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | Optional | boolean | false | Specifies whether the selection should replace the current selection (true) or be added to it (false). |

## Returns

boolean

## Example

Select a table in a PDF to make it the current selection.

```javascript editor-pdf
// Programmatically select a table in a PDF.

// Add a table to the page, select it, then change its background color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
page.AddObject(table);
table.Select();
table.SetBackgroundColor(Api.RGB(0, 122, 204));
```
