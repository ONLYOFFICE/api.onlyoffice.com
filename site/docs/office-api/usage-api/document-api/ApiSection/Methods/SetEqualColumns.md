# SetEqualColumns

Specifies that all the text columns in the current section are of equal width.

## Syntax

```javascript
expression.SetEqualColumns(nCount, nSpace);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | Number of columns. |
| nSpace | Required | [twips](../../Enumeration/twips.md) |  | Distance between columns measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Divide a section into multiple columns of the same width in a document.

```javascript editor-docx
// How do I arrange text into evenly sized side-by-side columns in a document?

// Lay out a section so all columns share an equal width throughout a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(3, 720);
paragraph.AddText("This is a text split into 3 equal columns. ");
paragraph.AddText("The columns are separated by the distance of half an inch.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
```
