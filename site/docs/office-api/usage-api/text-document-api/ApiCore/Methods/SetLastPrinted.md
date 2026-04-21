# SetLastPrinted

Sets the date when the document was last printed.

## Syntax

```javascript
expression.SetLastPrinted(oLastPrinted);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLastPrinted | Required | Date |  | The date when the document was last printed. |

## Returns

This method doesn't return any data.

## Example

Set the date when the current document was last printed in a document.

```javascript editor-docx
// How can I set last printed using a core properties in a document?

// Set last printed for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
