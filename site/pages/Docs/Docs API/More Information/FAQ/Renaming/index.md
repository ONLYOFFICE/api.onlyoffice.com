Expand all

Collapse all

* How to rename the created document?

  Please see the [Renaming file](/editors/rename) section to find out how file renaming works in ONLYOFFICE Docs and what is needed to rename the created document.

- How to update the name of the document for all collaborative editors?

  To do that the [meta](/editors/command/meta) option is available. The request must be sent to the [document command service](/editors/command), using the *meta* value for the *c* parameter:

  ```
  {
      "c": "meta",
      "key": "Khirz6zTPdfd7",
      "meta": {
          "title": "Example Document Title.docx"
      }
  }
  ```