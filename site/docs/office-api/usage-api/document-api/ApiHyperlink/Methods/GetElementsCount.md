# GetElementsCount

Returns a number of elements in the current hyperlink.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the elements contained inside a hyperlink in a document.

```javascript editor-docx
// How do I find out how many elements a hyperlink holds in a document?

// Check the total number of runs and text pieces within a hyperlink in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let elementsCount = hyperlink.GetElementsCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of elements in hyperlink: " + elementsCount);
paragraph.AddLineBreak();
paragraph.AddText("Elements: paragraph, run1, run2, hyperlink");
doc.Push(paragraph);
```
