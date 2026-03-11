---
hide_table_of_contents: true
---

# Delete annotations

Iterates through all pages in the PDF document and removes annotations which contain a specified keyword.

```ts
(function () {
  const KEYWORD = "example"; //targeted keyword
  const doc = Api.GetDocument();
  const pagesCount = doc.GetPagesCount();
  let deletedCount = 0;

  for (let i = 0; i < pagesCount; i++) {
    const page = doc.GetPage(i);
    const annots = page.GetAllAnnots();

    if (!annots || annots.length === 0) continue;

    // Iterate backwards to avoid issues when deleting items
    for (let j = annots.length - 1; j >= 0; j--) {
      const annot = annots[j];
      const contents = (annot.GetContents() || "").toLowerCase();

      if (contents.includes(KEYWORD.toLowerCase())) {
        annot.Delete(); //delete annotation
        deletedCount++;
      }
    }
  }

  console.log("Deleted annotations containing keyword:", KEYWORD);
  console.log("Total deleted:", deletedCount);
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/pdf-api/Api/Methods/GetDocument.md), [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md), [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), [GetAllAnnots](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md), [GetContents](/docs/office-api/usage-api/pdf-api/ApiBaseAnnotation/Methods/GetContents.md), [Delete](/docs/office-api/usage-api/pdf-api/ApiBaseAnnotation/Methods/Delete.md)

## Result

![Delete Annotations](/assets/images/plugins/delete-annotations.png#gh-light-mode-only)
![Delete Annotations](/assets/images/plugins/delete-annotations.dark.png#gh-dark-mode-only)
