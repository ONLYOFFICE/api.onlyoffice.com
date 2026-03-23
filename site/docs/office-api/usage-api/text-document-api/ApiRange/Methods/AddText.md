# AddText

Adds a text to the specified position.

## Syntax

```javascript
expression.AddText(text, position);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | String |  | The text that will be added. |
| position | Optional | "after" \| "before" | "after" | The position where the text will be added ("before" or "after" the range specified). |

## Returns

boolean

## Example

This example adds a text to the specified position.

```javascript editor-docx
// How to add raw text to the range.

// Change content of the range by adding a text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
```
