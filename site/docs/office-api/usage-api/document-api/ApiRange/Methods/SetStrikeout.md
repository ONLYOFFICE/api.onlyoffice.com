# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed struck through or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Specify that the contents of the current Range are displayed with a single horizontal line through the range center in a document.

```javascript editor-docx
// How to cross the range with one line in a document.

// Strike out the range content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetStrikeout(true);
```
