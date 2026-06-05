# SetParagraphHtml

Replaces all content of the specified paragraph with the content parsed from the given HTML string.
If the HTML contains multiple block-level elements, their inline content is merged into the target paragraph.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetParagraphHtml(html, paraId);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | Required | string |  | The HTML string to parse and apply. |
| paraId | Optional | number |  | The paragraph ID. If not specified, the current paragraph is used. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("SetParagraphHtml", ["<p>Hello <b>World</b></p>"]);
```
