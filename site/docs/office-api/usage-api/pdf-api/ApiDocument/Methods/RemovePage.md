# RemovePage

Removes a page from the document by its index.

:::note
If the document has only one page, it cannot be removed, and the method returns **false**.
:::

## Syntax

```javascript
expression.RemovePage(index);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | The index of the page to remove. |

## Returns

boolean

## Example

Delete a page from a PDF.

```javascript editor-pdf
// How do I remove an unwanted page from a PDF?

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
