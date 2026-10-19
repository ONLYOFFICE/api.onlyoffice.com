# Merge

Merges pdf files to current document in specified position.

## Syntax

```javascript
expression.Merge(position, deleteCount, files);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Optional | number |  | page index to merge pdf files (paste to end if omitted) |
| deleteCount | Optional | number | 0 | number of existing pages to replace starting at position, limited to the remaining pages |
| files | Optional | [PdfFile](../../PdfFile/PdfFile.md)[] \| Base64[] |  | pdf files |

## Returns

boolean
