# GetAllBookmarksNames

Returns an array with names of all bookmarks in the current document.

## Syntax

```javascript
expression.GetAllBookmarksNames();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

Retrieve the names of every bookmark present in a document.

```javascript editor-docx
// How do I get a list of all bookmark names to display or process them in a document?

// Collect bookmark names programmatically so they can be shown inline as reference labels in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range1 = doc.GetRange(0, 9); 
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(11, 18); 
range2.AddBookmark("Bookmark 2");
let bookmarks = doc.GetAllBookmarksNames();
paragraph.AddLineBreak();
paragraph.AddText("Bookmark names: ");
for (let i = 0; i < 2; i++ ){
	paragraph.AddText(bookmarks[i] + "," + " ");
}
```
