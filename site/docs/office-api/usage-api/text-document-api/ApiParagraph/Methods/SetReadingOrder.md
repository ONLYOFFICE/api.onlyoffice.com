# SetReadingOrder

Specifies the reading order for the current paragraph.
Possible values are:
-**null** - use the standart direction parameter;
-**"ltr"** - left-to-right text direction;
-**"rtl"** - right-to-left text direction.

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

This example shows how to set the reading order of the text in the specified paragraph.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');

```
