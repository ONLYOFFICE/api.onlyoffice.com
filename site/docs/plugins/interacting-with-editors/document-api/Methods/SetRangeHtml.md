# SetRangeHtml

Replaces a part of the specified paragraph with the content parsed from the given HTML string.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetRangeHtml(html, paraId, from, to);
```

`expression` - A variable that represents a [Api](../document-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | Required | string |  | The HTML string to parse and apply. |
| paraId | Required | string |  | The paragraph ID. |
| from | Required | number |  | Start offset inside the paragraph. |
| to | Required | number |  | End offset inside the paragraph. |

## Returns

This method doesn't return any data.
