# SetBold

Sets the bold property to the text character.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies if the Range contents are displayed bold or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Apply bold formatting to a range of text in a document.

```javascript editor-docx
// How do I make a portion of text appear bold in a document?

// Strengthen the visual weight of selected words by turning them bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetBold(true);
```
