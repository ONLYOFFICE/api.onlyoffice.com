---
hide_table_of_contents: true
---

# Highlight predefined keywords

Highlights predefined keywords in text document.

```ts
(function () {
    let keywords = ["justo", "test", "lacus", "et"];

    let doc = Api.GetDocument();

    for (let i = 0; i < keywords.length; i++) {
        let searchResults = doc.Search(keywords[i], 0);
        for (let j = 0; j < searchResults.length; j++) {
            searchResults[j].SetHighlight("lightGray");
        }
    }

    console.log("success");
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [Search](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Search.md), [SetHighlight](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md)

## Result

<!-- imgpath -->

![Highlight predifined keywords](/assets/images/plugins/highlight-predefined-keywords.png#gh-light-mode-only)![Highlight predifined keywords](/assets/images/plugins/highlight-predefined-keywords.dark.png#gh-dark-mode-only)