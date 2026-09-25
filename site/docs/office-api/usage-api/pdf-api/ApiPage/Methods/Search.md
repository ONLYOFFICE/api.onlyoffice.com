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
// Useful for searching for text on a page in a PDF.

// Look up a specific word and identify all matching locations in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let results = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
results.forEach((quads) => {
	let annot = Api.CreateHighlightAnnot(quads);
	page.AddObject(annot);
});
console.log('We added a highlight annotations searched word');
```
