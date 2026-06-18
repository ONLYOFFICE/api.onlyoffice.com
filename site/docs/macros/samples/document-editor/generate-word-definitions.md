---
hide_table_of_contents: true
description: Generate definitions for words in a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Generate word definitions

Generates word definitions in your document using the [Dictionary API](https://api-ninjas.com/api/dictionary) offered by [API Ninjas](https://api-ninjas.com).

:::note
To use this macro, you need to obtain your own API key from API Ninjas.
:::

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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## Result

<Video src="/assets/video/macros/document-editor/generate-word-definitions" dark />
