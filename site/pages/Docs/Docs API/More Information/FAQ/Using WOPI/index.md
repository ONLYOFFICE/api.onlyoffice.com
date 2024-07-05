Expand all

Collapse all

* How to enable WOPI?

  To enable WOPI, set the [wopi.enable](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#wopi-enable) parameter in the ONLYOFFICE Docs config to **true**.

  Parameters

  | Name        | Description                                                        | Type    | Example |
  | ----------- | ------------------------------------------------------------------ | ------- | ------- |
  | wopi.enable | Defines if WOPI is enabled or not. The default value is **false**. | boolean | true    |

  Example

  ```
  {
      "wopi": {
          "enable": true
      }
  }
  ```

- How can I configure the ONLYOFFICE Docs to accept WOPI requests only from the trusted integrator?

  The IP address of such the trusted integrator must be included in the [WOPI domain allow list](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list). At the same time, access for all the other integrators must be denied.

  Follow the steps [in this section](/editors/wopi/#ip-filter) to configure the ONLYOFFICE Docs IP filter.

* Why do I need the discovery XML and how can I get it?

  [WOPI discovery](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/discovery) is a process which helps the WOPI server discover a WOPI client by requesting the discovery XML from an online office. WOPI hosts use the discovery XML to specify how to interact with the online office. The **action** element of the discovery XML represents:

  * available document operations in the online office,
  * supported file formats (extensions).

  The requests are sent to the https\://documentserver/hosting/discovery address where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

  More information about WOPI discovery can be found [here](/editors/wopi/discovery).

- How to customize the editor behavior via WOPI?

  Every WOPI discovery action has two attributes:

  Attributes

  | Name     | Description                                                                      |
  | -------- | -------------------------------------------------------------------------------- |
  | requires | The WOPI REST endpoints required to use the actions.                             |
  | urlsrc   | The URL that you navigate to in order to invoke the action on a particular file. |

  Example

  ```
  <action name="edit" ext="docx" requires="locks,update"
      urlsrc="https://word-edit.officeapps.live.com/we/wordeditorframe.aspx?
  ui=en-us&thm=1&"/>
  ```

  The editor behavior such as language, theme or chat can be customized via the **discovery query parameters** which are the parameters that can be exposed by file storage in the *urlsrc* attribute.

  All the available discovery query parameters can be found [here](/editors/wopi/discovery#wopi-standart).

* How to create an online office session within the application?

  In order to create an online office session within your application, a host must create an HTML page that will host an iframe element within it pointing to a particular [WOPI action URL](/editors/wopi/discovery#actions).

  The host page must contain the following elements:

  * A *form* element via which the host must *POST* the *access\_token* and *access\_token\_ttl* parameters to the online office iframe for security purposes.
  * JavaScript code for interacting with the online office iframe using [PostMessage](/editors/wopi/postmessage).
  * Specific CSS styles for the body element and online office to avoid visual bags. In addition, the host page should set an appropriate favicon for the page using the favicon URL provided in [WOPI discovery](/editors/wopi/discovery).
  * A *viewport* meta tag to avoid visual and functional problems in mobile browsers.

  An example of the host page code can be found [on this page](/editors/wopi/hostpage).

- How to restrict public access to the data via WOPI?

  To restrict public access to your data, a secure exchange of requests between an online office and an integrator must be configured.

  The integrator must check that the request is received from ONLYOFFICE Docs. It uses [proof keys](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/scenarios/proofkeys) for this purpose. ONLYOFFICE Docs signs the request with a private key. The corresponding public key is written in the proof-key element in the [WOPI discovery XML](/editors/wopi/discovery). The integrator checks the private key with the public key. The signature is sent with every request in the **X-WOPI-Proof** and **X-WOPI-ProofOld** HTTP headers.

  More information about proof keys can be found [on this page](/editors/wopi/proofkeys).

* Where can I find possible WOPI error codes and their descriptions?

  Possible WOPI error codes and their description you can find [on this page](/editors/wopi/restapi).

- Which WOPI REST API operations are supported by ONLYOFFICE Docs?

  ONLYOFFICE Docs uses the following WOPI operations: [CheckFileInfo](/editors/wopi/restapi/checkfileinfo), [GetFile](/editors/wopi/restapi/getfile), [Lock](/editors/wopi/restapi/lock), [RefreshLock](/editors/wopi/restapi/refreshlock), [Unlock](/editors/wopi/restapi/unlock), [PutFile](/editors/wopi/restapi/putfile), [RenameFile](/editors/wopi/restapi/renamefile). For more information about these operations, see the corresponding pages.

* How to restrict access to the use of ONLYOFFICE server via WOPI?

  You cannot restrict access to the use of ONLYOFFICE server via WOPI. Editing access cotrol is available only via ONLYOFFICE Docs API and based on JWT signature. The secret key is required to generate a [file open request](/editors/signature/browser).

  More information about signature can be found [here](/editors/signature).

- How to get information about the file properties, access rights and editor settings via WOPI?

  To get information about the file properties, access rights and editor settings, use the **CheckFileInfo** method. All the available parameters you can find [on this page](/editors/wopi/restapi/checkfileinfo).

* What actions are supported via WOPI?

  In addition to the basic actions of viewing, editing and co-editing, you can also close the editor, switch from the viewing into the editing mode, rename a file, open a dialog of sharing access settings, open the document version history, insert images from the storage.

  Find out more about additional actions through event handling [on this page](/editors/wopi/postmessage).

- Which access rights can I set to the document via WOPI?

  You can set access rights for viewing, editing, renaming, reviewing and printing.

  Find out more about access rights [on this page](/editors/wopi/postmessage).

* What are the difference between ONLYOFFICE Docs API and WOPI?

  You can integrate [ONLYOFFICE Docs](https://www.onlyoffice.com/office-suite.aspx) with any cloud service using either API or WOPI.

  The table [on this page](/editors/wopi/apivswopi) will help you find out the difference between these options.