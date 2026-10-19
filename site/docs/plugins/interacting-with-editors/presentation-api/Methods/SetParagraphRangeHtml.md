# SetParagraphRangeHtml

Replaces a part of the specified paragraph with the content parsed from the given HTML string. Slide number and date fields and equations of the paragraph are kept as they are.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetParagraphRangeHtml(html, paraId, from, to);
```

`expression` - A variable that represents an [Api](../presentation-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | Required | string |  | The HTML string to parse and apply. |
| paraId | Required | string |  | The paragraph ID. |
| from | Required | number |  | Start offset inside the paragraph. |
| to | Required | number |  | End offset inside the paragraph. |

## Returns

boolean
