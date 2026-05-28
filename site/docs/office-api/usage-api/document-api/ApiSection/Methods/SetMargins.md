# SetMargins

Specifies the page margins for all the pages in this section. Alias for [ApiSection#SetPageMargins](../../ApiSection/Methods/SetPageMargins.md).

## Syntax

```javascript
expression.SetMargins(left, top, right, bottom);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| left | Required | [twips](../../Enumeration/twips.md) |  | The left margin width measured in twentieths of a point (1/1440 of an inch). |
| top | Required | [twips](../../Enumeration/twips.md) |  | The top margin height measured in twentieths of a point (1/1440 of an inch). |
| right | Required | [twips](../../Enumeration/twips.md) |  | The right margin width measured in twentieths of a point (1/1440 of an inch). |
| bottom | Required | [twips](../../Enumeration/twips.md) |  | The bottom margin height measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean
