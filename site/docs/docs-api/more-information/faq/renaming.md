---
sidebar_position: -2
---

# Renaming

## How to rename the created document?

Please see the [Renaming file](../../get-started/how-it-works/renaming-files.md) section to find out how file renaming works in ONLYOFFICE Docs and what is needed to rename the created document.

## How to update the name of the document for all collaborative editors?

To do that the [meta](../../additional-api/command-service/meta.md) option is available. The request must be sent to the [document command service](../../additional-api/command-service/command-service.md), using the *meta* value for the *c* parameter:

  ``` json
  {
    "c": "meta",
    "key": "Khirz6zTPdfd7",
    "meta": {
      "title": "Example Document Title.docx"
    }
  }
  ```
