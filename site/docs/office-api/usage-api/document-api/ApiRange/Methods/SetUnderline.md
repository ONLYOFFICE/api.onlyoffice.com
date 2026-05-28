# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies if the contents of the current Range are displayed underlined or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Add an underline beneath a selected portion of text in a document.

```javascript editor-docx
// How do I draw a line under specific words to emphasize them in a document?

// Highlight key phrases by placing a continuous underline below the chosen text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);
```
