Expand all

Collapse all

* How to forcefully save the document to my storage when editing it?

  Normally the final document version is compiled once all the users editing it close the document and the delay time (about 10 seconds) passes. But this behavior can be overriden. To do that the **forcesave** option is available.

  There are several ways to initiate forced saving:

  * Sending the request to the [document command service](/editors/command), using the [forcesave](/editors/command/forcesave) value for the *c* parameter:
    ```
    {
        "c": "forcesave",
        "key": "Khirz6zTPdfd7",
        "userdata": "sample userdata"
    }
    ```
  * Enabling the [editorConfig.customization.forcesave](/editors/config/editor/customization#forcesave) setting to **true** in the editor initialization configuration:
    ```
    var docEditor = new DocsAPI.DocEditor("placeholder", {
        "editorConfig": {
            "customization": {
                "forcesave": false,
                ...
            },
            ...
        },
        ...
    });
    ```
  * Enabling the repeating forcesave start in the **default.json** ONLYOFFICE Docs configuration file:
    ```
    {
        "services": {
            "CoAuthoring": {
                "autoAssembly": {
                    "enable": true,
                    "interval": "5m"
                }
            }
        }
    }
    ```

  Depending on which type of forced saving you need, you can select the correct implementation. More information about this can be found at [this page](/editors/save#forcesave).

- How to save the created document?

  Please see the [Saving file](/editors/save) section to find out how file saving works in ONLYOFFICE Docs and what is needed to save the created document.

* How to save the opened document to another document file type?

  If the document of a format different from the OOXML (.txt or .ods) is opened, the OOXML format will be saved by default.

  To save the opened document to a format different from the default Office Open XML one, the POST request must be sent to the **document conversion service**.

  The details of how the conversion works and why it is needed can be found in [this section](/editors/conversion). The POST request parameters and available responses to it can be found [here](/editors/conversionapi).

- How to enable or disable the 'Autosave' option?

  The **Autosave** option is enabled by default. To disable it, you need to set the [editorConfig.customization.autosave](/editors/config/editor/customization#autosave) parameter in the document configuration to **false**:

  ```
  var docEditor = new DocsAPI.DocEditor("placeholder", {
      "editorConfig": {
          "customization": {
              "autosave": false,
              ...
          },
          ...
      },
      ...
  });
  ```

  Please note, that disabling the **Autosave** will also disable the **Fast** co-editing mode which only works with the automatic document saving enabled.

  Further information about the autosaving can be found [at this page](/editors/config/editor/customization#autosave).

* What is the conversion start delay time and how can it be changed?

  Normally the document is not physically saved to the computer hard disk drive in the compiled form when it is being edited. Once the editing is done and all the users who work on the document close it, the file is converted to the Office Open XML format and saved to disk.

  After that the **document editing service** informs the **document storage service** that the file is ready and can be downloaded.

  The time between the end of the editing and the conversion start is set in the **default.json** configuration file with the [services.CoAuthoring.server.savetimeoutdelay](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-savetimeoutdelay) parameter (5000 milliseconds or 5 seconds by default) and can be changed:

  ```
  {
      "services": {
          "CoAuthoring": {
              "server": {
                  "savetimeoutdelay": 5000
              }
          }
      }
  }
  ```

  Further information about the conversion start delay can be found [at this page](/editors/save).

- How to specify the encoding type when converting from the csv or txt formats?

  To preserve the readability of a **txt** or **csv** file, you might need to set the encoding it was initially saved with. This might be useful in case the characters different from the base latin letters (umlauted letters like ä, ö, ü, letters with accents, cyrillic letters and so on) are used in the file.

  For this purpose the POST request with the parameters set in the request body is sent to the **document conversion service**:

  ```
  {
      "codePage": 65001,
      "filetype": "txt",
      "key": "Khirz6zTPdfd7",
      "outputtype": "docx",
      "title": "Example Document Title.docx",
      "url": "https://example.com/url-to-example-document.txt"
  }
  ```

  Further information about using the codepage during conversion can be found [at this page](/editors/conversionapi#codePage).