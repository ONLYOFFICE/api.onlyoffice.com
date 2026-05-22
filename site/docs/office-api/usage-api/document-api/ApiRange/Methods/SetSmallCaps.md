# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Display lowercase letters as small capital letters within a selected text range in a document.

```javascript editor-docx
// How do I make text appear in small capitals without retyping it in a document?

// Format a portion of text so that lowercase characters render as reduced-size capitals in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 24);
range.SetSmallCaps(true);
```
