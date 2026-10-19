# CompareDocuments

Compares the current document with another document opened via builderJS.OpenTmpFile.

Tracked changes between the two documents are produced in the current document.

## Syntax

```javascript
expression.CompareDocuments(file, comparisonPr);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| file | Required | object |  | The second document, returned by builderJS.OpenTmpFile. |
| comparisonPr | Optional | [ComparisonPr](../../Enumeration/ComparisonPr.md) | \{\} | The document comparison properties. |

## Returns

This method doesn't return any data.
