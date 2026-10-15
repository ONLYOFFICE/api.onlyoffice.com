# Split

Splits current pdf file with specified pages.

## Syntax

```javascript
expression.Split(indexes);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| indexes | Optional | number[] |  | pages indexes for split (returns result for all pages if the parameter is omitted.) |

## Returns

[PdfFile](../../PdfFile/PdfFile.md)
