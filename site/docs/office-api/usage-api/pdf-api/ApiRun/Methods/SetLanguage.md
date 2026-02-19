# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing\
the contents of this text run.

## Syntax

```javascript
expression.SetLanguage(sLangId);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)