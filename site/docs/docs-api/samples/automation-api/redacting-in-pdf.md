---
sidebar_position: 2
hide_table_of_contents: true
description: Search and redact sensitive text in a PDF using the Automation API.
tags: ["PDF", "Integration", "External access", "Automation API"]
---

import { RedactPdfExternalToolbar } from '@site/src/components/BrowserWindow';

# Redacting in PDF

Use the Automation API to find sensitive text in a PDF document and permanently redact all matching occurrences from an external interface — enter a search term, set options, preview redaction marks, and apply them.

:::info
The document opens as a PDF. Your code calls `connector.callCommand()` to execute Document Builder API methods that search text and create redaction annotations. The redaction is applied permanently when the user confirms.
:::

<RedactPdfExternalToolbar/>

## How it works

1. When the user enters text and clicks **Find**, the `connector.callCommand()` method is used to execute Document Builder API code inside the editor. The code calls [SearchAndRedact](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/SearchAndRedact.md) on the document, which searches for all matches and creates redaction annotations for each one. The method returns an array of [ApiRedactAnnotation](/docs/office-api/usage-api/pdf-api/ApiRedactAnnotation/ApiRedactAnnotation.md) objects:

    ``` ts
    Asc.scope.redactParams = { text, matchCase, wholeWords };

    connector.callCommand(() => {
      const params = Asc.scope.redactParams;
      const doc = Api.GetDocument();
      const annots = doc.SearchAndRedact({
        text: params.text,
        matchCase: params.matchCase,
        wholeWords: params.wholeWords,
      });

      const ids = [];
      if (annots && annots.length > 0) {
        for (let i = 0; i < annots.length; i++) {
          ids.push(annots[i].GetInternalId());
        }
      }

      return { count: ids.length, ids };
    }, (result) => {
      // Display the number of redaction marks in the external panel
    });
    ```

2. The external panel shows the total number of redaction marks and their status. When the user clicks **Apply redaction**, the [ApplyRedact](/docs/office-api/usage-api/pdf-api/ApiDocument/Methods/ApplyRedact.md) method is called to permanently remove the redacted content from the PDF:

    ``` ts
    connector.callCommand(() => {
      const doc = Api.GetDocument();
      doc.ApplyRedact();
    });
    ```

3. When the user clicks **Clear marks** instead, the redaction annotations are removed without applying them. The code iterates all pages, retrieves annotations with [GetAllAnnots](/docs/office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md), and deletes the matching redaction annotations using [Delete](/docs/office-api/usage-api/pdf-api/ApiRedactAnnotation/Methods/Delete.md):

    ``` ts
    Asc.scope.annotIds = redactAnnotIds;

    connector.callCommand(() => {
      const ids = Asc.scope.annotIds;
      const doc = Api.GetDocument();
      const pageCount = doc.GetPagesCount();
      for (let i = 0; i < pageCount; i++) {
        const page = doc.GetPage(i);
        const annots = page.GetAllAnnots();
        for (let j = annots.length - 1; j >= 0; j--) {
          for (let k = 0; k < ids.length; k++) {
            if (annots[j].GetInternalId() === ids[k]) {
              annots[j].Delete();
              break;
            }
          }
        }
      }
    });
    ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is a premium feature available at an extra cost. See [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices?from=api) for pricing details, or contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
