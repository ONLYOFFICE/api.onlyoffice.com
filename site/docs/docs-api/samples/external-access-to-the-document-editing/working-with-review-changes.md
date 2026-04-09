---
sidebar_position: -2
hide_table_of_contents: true
description: Accept or reject tracked changes from an external UI via the Automation API.
tags: ["Docs", "Integration", "External access", "Automation API"]
---

import { ReviewChangesExternalToolbar } from '@site/src/components/BrowserWindow';

# Working with review changes

Use the Automation API to accept or reject tracked changes from an external UI — without the user touching the editor directly.

:::info
The document opens in **Track Changes** mode. Your code calls `connector.executeMethod()` to navigate and resolve changes. The editor updates in real time.
:::

<ReviewChangesExternalToolbar/>

## How it works

1. On document ready, the total number of review changes is retrieved using [GetReviewReport](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetReviewReport.md) via `connector.callCommand` and displayed in the counter:

   ``` ts
   connector.callCommand(() => {
     const doc = Api.GetDocument();
     const report = doc.GetReviewReport();
     let total = 0;
     for (const user in report) {
       total += report[user].length;
     }
     return total;
   }, (total) => {
     reviewCount = total;
     reviewIndex = total > 0 ? 1 : 0;
     updateCounter();
   });
   ```

2. When the user clicks the **Accept / Reject** buttons in the custom interface, the [AcceptReviewChanges](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AcceptReviewChanges.md) / [RejectReviewChanges](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/RejectReviewChanges.md) methods are executed to accept / reject the selected change in the editor:

   ``` ts
   document.getElementById("accept").addEventListener("click", () => {
     connector.executeMethod("AcceptReviewChanges");
   });
   document.getElementById("reject").addEventListener("click", () => {
     connector.executeMethod("RejectReviewChanges");
   });
   ```

3. When the user clicks the **Prev / Next** buttons in the custom interface, the [MoveToNextReviewChange](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/MoveToNextReviewChange.md) method is executed to navigate between review changes:

   ``` ts
   document.getElementById("prev").addEventListener("click", () => {
     connector.executeMethod("MoveToNextReviewChange", [false]);
   });
   document.getElementById("next").addEventListener("click", () => {
     connector.executeMethod("MoveToNextReviewChange");
   });
   ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
