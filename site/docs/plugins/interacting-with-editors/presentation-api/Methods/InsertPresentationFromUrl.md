# InsertPresentationFromUrl

Inserts slides from an external presentation referenced by URL into the current presentation.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.InsertPresentationFromUrl(url, options, token);
```

`expression` - A variable that represents a [Api](../presentation-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | Required | string |  | The URL of the source presentation (pptx). |
| options | Optional | object |  | Insertion options. |
| options.index | Optional | number |  | The 0-based position at which the new slides are inserted. Defaults to the end of the presentation. |
| options.slideStart | Optional | number | 0 | The 0-based index of the first slide to insert from the source file. |
| options.slideEnd | Optional | number | -1 | The 0-based index of the last slide to insert from the source file. -1 means the last slide. |
| options.keepSourceFormatting | Optional | boolean | false | Whether to keep the source formatting of the inserted slides. |
| token | Optional | string |  | JWT signed with the Document Server inbox secret, authorizing the URL download. Required in deployments with browser-side JWT enabled. |

## Returns

number
