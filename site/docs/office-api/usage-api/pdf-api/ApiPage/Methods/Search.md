# Search

Search words and returns their quads.

## Syntax

```javascript
expression.Search(props);
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| props | Required | [SearchProps](../../Enumeration/SearchProps.md) |  | The search options. |

## Returns

Quads[]

## Example

Find and locate all instances of a word on a page in a PDF.

```javascript editor-pdf
// How do I search for text on a page in a PDF?

// Look up a specific word and identify all matching locations in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We added a highlight annotations searched word');
```
