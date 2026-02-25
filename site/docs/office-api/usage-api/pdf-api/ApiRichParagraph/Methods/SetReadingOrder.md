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

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| readingOrder | Optional | [ReadingOrder](../../Enumeration/ReadingOrder.md) |  | The reading order. |

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)