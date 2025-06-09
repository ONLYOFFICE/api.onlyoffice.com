---
sidebar_position: -3
hide_table_of_contents: true
---

import { ReviewChangesExternalToolbar } from '@site/src/components/BrowserWindow';

# Working with review changes

Manages review process from an external source.

<ReviewChangesExternalToolbar/>

## How it works

1. When the user clicks the **Accept / Reject** buttons in the custom interface, the AcceptReviewChanges / RejectReviewChanges methods are executed to accept / reject the selected change in the editor:

   ``` ts
   $("#accept").on("click", () => {
     connector.executeMethod("AcceptReviewChanges")
   })
   $("#reject").on("click", () => {
     connector.executeMethod("RejectReviewChanges")
   })
   ```

2. When the user clicks the arrow buttons in the custom interface, the MoveToNextReviewChange method is executed to move between the next and previous review changes:

   ``` ts
   $("#prev").on("click", () => {
     connector.executeMethod("MoveToNextReviewChange", [false])
   })
   $("#next").on("click", () => {
     connector.executeMethod("MoveToNextReviewChange")
   })
   ```

> Please note that the connector is available only for **ONLYOFFICE Docs Developer**.
>
> The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
