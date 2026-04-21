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

Specify that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

```javascript editor-docx
// How to make range text uppercase in a document.

// Update text letters of the range by converting them to capital letters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 17);
range.SetCaps(true);
```
