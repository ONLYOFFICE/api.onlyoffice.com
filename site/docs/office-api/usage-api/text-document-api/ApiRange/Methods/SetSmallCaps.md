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

Specify that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

```javascript editor-docx
// How to make range text characters uncapitalized in a document.

// Get a range text, update its style by making its letters uncapitalized in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 24);
range.SetSmallCaps(true);
```
