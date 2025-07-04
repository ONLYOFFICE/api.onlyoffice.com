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

This example specifies that all the text columns in the current section are of equal width.

```javascript editor-docx
// How to split the text into 3 equal columns.

// Get the final section and set its columns.

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
