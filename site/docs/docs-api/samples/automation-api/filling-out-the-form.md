---
sidebar_position: -1
hide_table_of_contents: true
description: Fill form fields from an external UI with bidirectional sync.
tags: ["Docs", "Integration", "External access", "Automation API"]
---

import { FormExternalToolbar } from '@site/src/components/BrowserWindow';

# Filling out the form

Use the Automation API to fill form fields from an external UI — select a person from the dropdown and all fields update automatically in both the editor and the custom interface.

:::info
The document opens as a fillable PDF form. Your code calls `connector.executeMethod()` to read and write form values. Changes sync bidirectionally in real time.
:::

<FormExternalToolbar/>

## How it works

1. When the user opens a form document, the [GetAllContentControls](/docs/plugin-and-macros/interacting-with-editors/document-api/Methods/GetAllContentControls.md) method is executed to collect all the content controls from the document. After that, the [GetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) method is executed to get the content controls values and display them in the custom interface:

    ``` ts
    let contentControls = [];

    const onDocumentReady = () => {
      window.connector = docEditor.createConnector();

      connector.executeMethod("GetAllContentControls", null, (data) => {
        for (let i = 0; i < data.length; i++) {
          connector.executeMethod("GetFormValue", [data[i]["InternalId"]], (value) => {
            data[i].Value = value || "";
            if (i === data.length - 1) {
              contentControls = data;
            }
          });
        }
      });
    };
    ```

2. When the user chooses a username from the list, the [GetFormsByTag](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormsByTag.md) method is executed to collect all the forms by their tags and sets the corresponding values to them with the [SetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/SetFormValue.md) method:

    ``` ts
    document.getElementById("persons").addEventListener("change", function () {
      const person = persons.find((p) => p["PostalCode"] === this.value);
      for (const key in person) {
        const value = person[key];
        setFormValue(key, value);
      }
    });

    const setFormValue = (tag, value) => {
      connector.executeMethod("GetFormsByTag", [tag], (forms) => {
        connector.executeMethod("SetFormValue", [forms[0]["InternalId"], value], null);
      });
    };
    ```

3. When the user edits a form value, the [onChangeContentControl](/docs/plugin-and-macros/interacting-with-editors/document-api/Events/onChangeContentControl.md) event is fired and after that, the [GetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) method is executed to get an updated form value and display it in the custom interface:

    ``` ts
    const onDocumentReady = () => {
      connector.attachEvent("onChangeContentControl", (e) => {
        connector.executeMethod("GetFormValue", [e["InternalId"]], (value) => {
          const element = document.getElementById(e["InternalId"]);
          if (element.classList.contains("content-control-radio")) {
            element.checked = value;
          } else {
            element.value = value || "";
          }
        });
      });
    };
    ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::
