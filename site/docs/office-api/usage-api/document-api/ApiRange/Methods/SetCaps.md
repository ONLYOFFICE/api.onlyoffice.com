# SetCaps

Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

## Syntax

```javascript
expression.SetCaps(isCaps);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean |  | Specifies if the Range contents are displayed capitalized or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Display a range of text in capital letters without changing the underlying content in a document.

```javascript editor-docx
// How do I make lowercase letters appear as capitals across a text range in a document?

// Force a section of text to render in uppercase for visual emphasis in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 17);
range.SetCaps(true);
```
