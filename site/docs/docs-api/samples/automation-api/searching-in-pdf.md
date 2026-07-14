---
sidebar_position: 1
hide_table_of_contents: true
description: Search and highlight text in a PDF using the Automation API.
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { SearchPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# Searching in PDF

Use the Automation API to search for text in a PDF document and highlight all matching occurrences from an external interface — enter a search term, set options, and see results highlighted in real time.

:::info
The document opens as a PDF. Your code calls `connector.callCommand()` to execute Document Builder API methods that search text on each page and create highlight annotations. The results are displayed in the external panel.
:::

<SearchPdfExternalToolbar/>

## How it works

1. When the user enters a search term and clicks **Search**, the `connector.callCommand()` method is used to execute Document Builder API code inside the editor. The code iterates through all pages using [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md) and [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), and calls the [Search](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/Search.md) method on each page. Each individual match is highlighted with [CreateHighlightAnnot](/docs/office-api/usage-api/pdf-api/Api/Methods/CreateHighlightAnnot.md) and returned as a separate result:

    ``` ts
    Asc.scope.searchParams = { text, matchCase, wholeWords };

    connector.callCommand(() => {
      const params = Asc.scope.searchParams;
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      const results = [];

      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const quads = page.Search({
          text: params.text,
          matchCase: params.matchCase,
          wholeWords: params.wholeWords,
        });

        if (quads && quads.length > 0) {
          for (let q = 0; q < quads.length; q++) {
            const annot = Api.CreateHighlightAnnot([quads[q]]);
            annot.SetAuthorName("__search_demo__");
            annot.SetFillColor(Api.RGB(255, 234, 0));
            page.AddObject(annot);
            results.push({ pageIndex: i, quad: quads[q] });
          }
        }
      }

      return results;
    }, (results) => {
      // Display individual results in the external panel
    });
    ```

2. Each result is displayed as a clickable item in the external panel. When the user clicks a result or uses the **Prev / Next** buttons, the [SetSelection](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/SetSelection.md) method is called to navigate to the match location in the PDF:

    ``` ts
    Asc.scope.navTarget = { pageIndex: result.pageIndex, quad: result.quad };

    connector.callCommand(() => {
      const target = Asc.scope.navTarget;
      const doc = Api.GetDocument();
      const page = doc.GetPage(target.pageIndex);
      const q = target.quad;
      page.SetSelection({ x: q[0], y: q[1] }, { x: q[2], y: q[3] });
    });
    ```

3. When the user clicks **Clear highlights**, a second `connector.callCommand()` iterates all pages, retrieves annotations with [GetAllAnnots](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md), and removes the search highlights using the [Delete](/docs/office-api/usage-api/pdf-api/ApiHighlightAnnotation/Methods/Delete.md) method:

    ``` ts
    connector.callCommand(() => {
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const annots = page.GetAllAnnots();
        for (let j = annots.length - 1; j >= 0; j--) {
          if (annots[j].GetAuthorName() === "__search_demo__") {
            annots[j].Delete();
          }
        }
      }
    });
    ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is a premium feature available at an extra cost. See [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices?from=api) for pricing details, or contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
