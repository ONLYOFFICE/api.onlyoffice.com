# SetParagraphHtml

Replaces all content of the specified paragraph with the content parsed from the given HTML string. Slide number and date fields and equations of the paragraph are kept as they are.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetParagraphHtml(html, paraId);
```

`expression` - A variable that represents an [Api](../presentation-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | Required | string |  | The HTML string to parse and apply. |
| paraId | Optional | string |  | The paragraph ID. If not specified, the current paragraph is used. |

## Returns

boolean
