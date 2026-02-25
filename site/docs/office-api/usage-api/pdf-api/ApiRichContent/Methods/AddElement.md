# AddElement

Adds a rich paragraph using its position in rich content.

## Syntax

```javascript
expression.AddElement(pos, richPara);
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | The position where the rich paragraph will be added. |
| richPara | Required | [ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md) |  | The rich paragraph which will be added at the current position. |

## Returns

boolean