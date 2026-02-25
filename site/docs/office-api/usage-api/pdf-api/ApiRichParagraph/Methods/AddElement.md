# AddElement

Adds an element to the current paragraph.

## Syntax

```javascript
expression.AddElement(richRun, pos);
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richRun | Required | [ApiRichRun](../../ApiRichRun/ApiRichRun.md) |  | The element which will be added at the current position. |
| pos | Optional | number |  | The position where the current element will be added. If this value is not specified, then the element will be added at the end of the current paragraph. |

## Returns

boolean