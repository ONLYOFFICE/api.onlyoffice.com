# Replace words in document

Searches for a word throughout the document and replaces it with the given replacement word.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  const oDocument = Api.GetDocument();
  const oRange = oDocument.GetRangeBySelect();
  const rawText = oRange.GetText();
  oRange.Delete();
  // Define the word to find and the word to replace it with
  const wordToFind = "oldWord"; // Replace "oldWord" with the word you want to find
  const replacementWord = "newWord"; // Replace "newWord" with the word you want to replace it with
  // Use regular expression to find and replace the word
  const cleanedText = rawText.replace(
    new RegExp(wordToFind, "g"),
    replacementWord
  );
  // Insert the cleanedText with the original paragraph structure
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText(cleanedText);
  oDocument.InsertContent([oParagraph]);
})();
```

Methods used: [GetDocument](../../../docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [Delete](../../../docs/office-api/usage-api/text-document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub SimpleFindReplace()
    Selection.Find.Execute FindText:="find", ReplaceWith:="replace", Replace:=wdReplaceAll
End Sub
```

## Result

<!-- imgpath -->

![Replace Words in Document](/assets/images/plugins/replace-words-in-document.png#gh-light-mode-only)![Replace Words in Document](/assets/images/plugins/replace-words-in-document.dark.png#gh-dark-mode-only)
