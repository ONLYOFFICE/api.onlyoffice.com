# ReplaceCurrentWord

Replaces the current word or part of the current word with the specified text.

## Syntax

```javascript
expression.ReplaceCurrentWord(sReplace, sPart);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | Required | string |  | The string to replace the current word with. |
| sPart | Required | undefined \| "before" \| "after" |  | The desired part of the current word to be replaced. |

## Returns

boolean

## Example

Replace the word at the cursor position with a new word in a document.

```javascript editor-docx
// How do I overwrite a single word based on where the cursor sits in a document?

// Move the cursor into a word and swap it out without retyping surrounding text in a document.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

doc.ReplaceCurrentWord("fox");
```
