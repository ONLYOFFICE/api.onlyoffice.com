---
hide_table_of_contents: true
description: Find and replace words throughout a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [Delete](../../../office-api/usage-api/document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## Reference Microsoft VBA macro code

```vb
Sub SimpleFindReplace()
    Selection.Find.Execute FindText:="find", ReplaceWith:="replace", Replace:=wdReplaceAll
End Sub
```

## Result

<Video src="/assets/video/macros/document-editor/replace-words-in-document" dark />
