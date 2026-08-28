---
sidebar_position: 3
hide_table_of_contents: true
description: Find and replace text in a PDF using the Automation API.
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { ChangeTextPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# Changing text in PDF

Use the Automation API to find and replace text in a PDF document from an external interface — enter a search term, specify replacement text, and apply changes across all pages.

:::info
The document opens as a PDF. Your code calls `connector.callCommand()` to execute Document Builder API methods that recognize page content, iterate through text objects, and replace matching text.
:::

<ChangeTextPdfExternalToolbar/>

## How it works

1. When the user enters a search term and replacement text, then clicks **Replace all**, the `connector.callCommand()` method is used to execute Document Builder API code inside the editor. The code iterates through all pages using [GetPagesCount](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md) and [GetPage](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), and calls [RecognizeContent](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/RecognizeContent.md) on each page to get all drawing objects. For each shape, it retrieves the inner content with [GetContent](/docs/office-api/usage-api/pdf-api/ApiShape/Methods/GetContent.md), iterates through paragraphs using [GetElementsCount](/docs/office-api/usage-api/pdf-api/ApiDocumentContent/Methods/GetElementsCount.md) and [GetElement](/docs/office-api/usage-api/pdf-api/ApiDocumentContent/Methods/GetElement.md), reads text with [GetText](/docs/office-api/usage-api/pdf-api/ApiParagraph/Methods/GetText.md), and replaces it with [SetText](/docs/office-api/usage-api/pdf-api/ApiParagraph/Methods/SetText.md):

    ``` ts
    Asc.scope.replaceParams = { findText, replaceWith, matchCase };

    connector.callCommand(() => {
      const params = Asc.scope.replaceParams;
      const regex = new RegExp(
        params.findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        params.matchCase ? "g" : "gi",
      );
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      const results = [];

      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const drawings = page.RecognizeContent();
        let pageReplacements = 0;

        for (let d = 0; d < drawings.length; d++) {
          const drawing = drawings[d];
          if (drawing.GetClassType() === "shape") {
            const content = drawing.GetContent();
            const elemCount = content.GetElementsCount();
            for (let e = 0; e < elemCount; e++) {
              const elem = content.GetElement(e);
              if (elem.GetClassType() === "paragraph") {
                const text = elem.GetText();
                const matches = text.match(regex);
                if (matches) {
                  elem.SetText(text.replace(regex, params.replaceWith));
                  pageReplacements += matches.length;
                }
              }
            }
          }
        }

        if (pageReplacements > 0) {
          results.push({ pageIndex: i, count: pageReplacements });
        }
      }

      return results;
    }, (results) => {
      // Display the replacement results in the external panel
    });
    ```

2. The external panel displays the number of replacements per page. Each result shows how many occurrences were replaced and on which page they were found.

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is a premium feature available at an extra cost. See [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices?from=api) for pricing details, or contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
