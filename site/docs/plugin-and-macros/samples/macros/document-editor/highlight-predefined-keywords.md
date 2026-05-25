---
hide_table_of_contents: true
description: Highlight predefined keywords in a document.
tags: ["Docs", "Macros", "Documents"]
---

# Highlight predefined keywords

Highlights predefined keywords in a document.

```ts
(function () {
    let keywords = ["lorem", "ipsum", "dummy", "many"];
    let doc = Api.GetDocument();

    for (let i = 0; i < keywords.length; i++) {
        let searchResults = doc.Search(keywords[i], false);
        for (let j = searchResults.length - 1; j >= 0; j--) {
            searchResults[j].SetHighlight("lightGray");
        }
    }

    console.log("success");
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [Search](/docs/office-api/usage-api/document-api/ApiDocument/Methods/Search.md), [SetHighlight](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/highlight-predefined-keywords.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/highlight-predefined-keywords.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
