# SetDoubleStrikeout

Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

## Syntax

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed double struck through or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Specify that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line in a document.

```javascript editor-docx
// How to strikethrough a text with two lines in a document.

// Create a text run object, double cross out it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);
```
