# SetReadingOrder

Specifies the reading order for the current paragraph.
Possible values are:
- **null** - use the standart direction parameter;
- **"ltr"** - left-to-right text direction;
- **"rtl"** - right-to-left text direction.

## Syntax

```javascript
expression.SetReadingOrder(readingOrder);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| readingOrder | Optional | [ReadingOrder](../../Enumeration/ReadingOrder.md) |  | The reading order. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Set the reading direction of a paragraph to left-to-right or right-to-left in a document.

```javascript editor-docx
// How do I make a paragraph display text in a right-to-left reading order in a document?

// Switch a paragraph's text flow to match a language that reads from right to left in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');
```
