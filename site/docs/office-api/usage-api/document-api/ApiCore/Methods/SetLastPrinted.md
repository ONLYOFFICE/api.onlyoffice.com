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

Store the date when a document was last printed in a document.

```javascript editor-docx
// How do I record the last print date for a document?

// Keep an audit trail of printing activity by saving the most recent print timestamp in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
