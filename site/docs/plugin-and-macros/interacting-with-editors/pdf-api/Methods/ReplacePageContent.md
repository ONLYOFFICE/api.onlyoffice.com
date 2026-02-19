# ReplacePageContent

Replaces the page content with the specified parameters.

## Syntax

```javascript
expression.ReplacePageContent(nPage, oParams);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | The page index. |
| oParams | Required | object |  | The replacement parameters. |
| oParams.type | Required | "xml" \| "html" |  | The type of content to be replaced (XML / HTML). |
| oParams.options | Required | [ReplaceXmlOptions](../Enumeration/ReplaceXmlOptions.md) \| [ReplaceHtmlOptions](../Enumeration/ReplaceHtmlOptions.md) |  | The content replacement options. |

## Returns

boolean