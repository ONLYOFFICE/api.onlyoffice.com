---
hide_table_of_contents: true
description: Expand acronyms to their full forms in a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Acronym full forms

Identifies all acronyms in the document and adds their full forms in comments.

```ts
(function () {
  function addAcronymComments() {
    let doc = Api.GetDocument();
    let acronymDictionary = new Map([
      ["API", "Application Programming Interface"],
      ["HTTP", "HyperText Transfer Protocol"],
      ["HTML", "HyperText Markup Language"],
      ["CSS", "Cascading Style Sheets"],
      ["JSON", "JavaScript Object Notation"],
      ["XML", "eXtensible Markup Language"],
      ["SQL", "Structured Query Language"],
      ["URL", "Uniform Resource Locator"],
      // Add more acronyms as needed
    ]);

    let totalFound = 0;

    acronymDictionary.forEach((fullForm, acronym) => {
      let searchResults = doc.Search(acronym, true);

    if (searchResults && searchResults.length) {
      totalFound += searchResults.length;
      searchResults.forEach((result) => {
        result.AddComment(fullForm);
      });
    }
    });
  }

  addAcronymComments();
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [Search](../../../office-api/usage-api/document-api/ApiDocument/Methods/Search.md), [AddComment](../../../office-api/usage-api/document-api/ApiRange/Methods/AddComment.md)

## Result

<Video src="/assets/video/macros/document-editor/acronym-full-forms" dark />
