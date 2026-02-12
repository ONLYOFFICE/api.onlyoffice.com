---
hide_table_of_contents: true
---

# Generate word definitions

Generates word definitions in your document using the [Dictionary API](https://api-ninjas.com/api/dictionary) offered by [API Ninjas](https://api-ninjas.com).

> To use this macro, you need to obtain your own API key from API Ninjas.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let doc = Api.GetDocument();
  let range = doc.GetRangeBySelect();
  let word = range.GetText();
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dictionary?word=" + word,
    headers: { "X-Api-Key": "your-api-key" },
    contentType: "application/json",
    success: function (result) {
      let text = result.definition;
      let paragraph = Api.CreateParagraph();
      paragraph.AddText(text);
      doc.InsertContent([paragraph], { KeepTextOnly: true });
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), GetRangeBySelect, GetText, [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

<!-- imgpath -->

![Generate word definitons](/assets/images/plugins/generate-word-definitions.png#gh-light-mode-only)![Generate word definitons](/assets/images/plugins/generate-word-definitions.dark.png#gh-dark-mode-only)
