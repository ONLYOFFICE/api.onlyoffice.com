---
hide_table_of_contents: true
---

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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [Search](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Search.md), [AddComment](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/AddComment.md)

## Result

![AcronymFullForms](/assets/images/plugins/acronym-full-forms.png#gh-light-mode-only)
![AcronymFullForms](/assets/images/plugins/acronym-full-forms.dark.png#gh-dark-mode-only)
