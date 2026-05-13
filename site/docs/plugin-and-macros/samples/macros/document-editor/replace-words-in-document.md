---
hide_table_of_contents: true
description: Find and replace words throughout a document.
tags: ["Docs", "Macros", "Documents"]
---

# Replace words in document

Searches for a word throughout the document and replaces it with the given replacement word.

```ts
(function () {
  let doc = Api.GetDocument();
  let range = doc.GetRangeBySelect();
  let rawText = range.GetText();
  range.Delete();
  // Define the word to find and the word to replace it with
  let wordToFind = "oldWord"; // Replace "oldWord" with the word you want to find
  let replacementWord = "newWord"; // Replace "newWord" with the word you want to replace it with
  // Use regular expression to find and replace the word
  let cleanedText = rawText.replace(
    new RegExp(wordToFind, "g"),
    replacementWord
  );
  // Insert the cleanedText with the original paragraph structure
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(cleanedText);
  doc.InsertContent([paragraph]);
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](/docs/office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [Delete](/docs/office-api/usage-api/document-api/ApiRange/Methods/Delete.md), [CreateParagraph](/docs/office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](/docs/office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## Reference Microsoft VBA macro code

```vb
Sub SimpleFindReplace()
    Selection.Find.Execute FindText:="find", ReplaceWith:="replace", Replace:=wdReplaceAll
End Sub
```

## Result

![Replace Words in Document](/assets/images/plugins/replace-words-in-document.png#gh-light-mode-only)![Replace Words in Document](/assets/images/plugins/replace-words-in-document.dark.png#gh-dark-mode-only)
