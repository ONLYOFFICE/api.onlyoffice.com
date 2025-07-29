---
sidebar_position: -1
hide_table_of_contents: true
---

import { FormExternalToolbar } from '@site/src/components/BrowserWindow';

# Filling out the form

Fills in the empty cells in the form.

The user can choose a username from the list and all the fields in the form editor will be filled with the user contact information. At the same time, this data is displayed in the inputs of the custom interface.

When the user edits the input data in the custom interface, it is automatically updated in the form editor as well.

When the document is ready, the form data can be submitted by clicking the **Complete & Submit** button.

<FormExternalToolbar/>

## How it works

1. When the user opens a form document, the [GetAllContentControls](/site/docs/office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/GetAllContentControls.md) method is executed to collect all the content controls from the document. After that, the [GetFormValue](/site/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) method is executed to get the content controls values and display them in the custom interface:

  ``` ts
  let contentControls = []

  function onDocumentReady() {
    window.connector = docEditor.createConnector()
    function handleGetAllContentControls(data) {
      setTimeout(function processContentControls(index) {
        if (index >= data.length) {
          contentControls = data
          return
        }
        handleGetFormValue(data, index, (value) => {
          if (data[index].Value === value) {
            data[index].Value = value
          } else {
            data[index].Value = ""
          }
          if (index === data.length - 1) {
            contentControls = data
          } else {
            processContentControls(index + 1)
          }
        })
      }, 0)
    }
    function handleGetFormValue(data, index, callback) {
      connector.executeMethod("GetFormValue", [data[index]["InternalId"]], callback)
    }
    connector.executeMethod("GetAllContentControls", null, handleGetAllContentControls)
  }
  ```

1. When the user chooses a username from the list, the [GetFormsByTag](/site/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByTag.md) method is executed to collect all the forms by their tags and sets the corresponding values to them with the [SetFormValue](/site/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/SetFormValue.md) method:

``` ts
$("#persons").change(function personChange(e) {
  const postalCode = $(this).val()
  const persons = [
    {
      Title: "Miss",
      Name: "Isabella",
      Phone: "(972)234-8261",
      Email: "Isabella.Robinson@email.com",
      PostalCode: "75061",
    },
    {
      Title: "Mr",
      Name: "Emma",
      Phone: "(972)321-8512",
      Email: "Emma.Smith@email.com",
      PostalCode: "11225",
    },
  ]

  for (const person of persons) {
    if (person["PostalCode"] === postalCode) {
      for (key in person) {
        const value = person[key]
        setFormValue(key, value)
      }
    }
  }

  function setFormValue(tag, value) {
    connector.executeMethod(
      "GetFormsByTag",
      [tag],
      (forms) => {
        connector.executeMethod(
          "SetFormValue",
          [forms[0]["InternalId"], value],
          null,
        )
      },
    )
  }
})
```

1. When the user edits a form value, the [onChangeContentControl](/site/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onChangeContentControl.md) event is fired and after that, the [GetFormValue](/site/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) method is executed to get an updated form value and display it in the custom interface:

``` ts
function onDocumentReady() {
  connector.attachEvent("onChangeContentControl", onChangeContentControl)
}
function onChangeContentControl(e) {
  connector.executeMethod("GetFormValue", [e["InternalId"]], (value) => {
    $(`#${e["InternalId"]}`).val(value || "")
  })
}
```

> Please note that the connector is available only for **ONLYOFFICE Docs Developer**.
>
> The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
