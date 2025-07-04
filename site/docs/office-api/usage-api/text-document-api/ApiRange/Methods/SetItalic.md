# SetItalic

Sets the italic property to the text character.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies if the contents of the current Range are displayed italicized or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example sets the italic property to the text character.

```javascript editor-docx
// How to make a range text italic.

// Create a range, change its properties by making it italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetItalic(true);
```
