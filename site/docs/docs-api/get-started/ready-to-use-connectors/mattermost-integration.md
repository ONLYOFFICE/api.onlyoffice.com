---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/mattermost.svg
---

# Mattermost integration

This [plugin](https://github.com/ONLYOFFICE/onlyoffice-mattermost) enables users to edit office documents from [Mattermost](https://mattermost.com/) using ONLYOFFICE Docs.

## Features

- Currently, the following document formats can be edited: DOCM, DOCX, DOTM, DOTX, XLSB, XLSM, XLSX, XLTM, XLTX, POTM, POTX, PPSM, PPSX, PPTM, PPTX, PDF.
- The following formats are available for viewing only: DOC, DOT, EPUB, FB2, FODT, HTM, HTML, HWP, HWPX, MD, MHT, MHTML, ODT, OTT, PAGES, RTF, STW, SXW, TXT, WPS, WPT, XML, CSV, ET, ETT, FODS, NUMBERS, ODS, OTS, SXC, XLS, XLT, DPS, DPT, FODP, KEY, ODG, ODP, OTP, POT, PPS, PPT, SXI, DJVU, OXPS, XPS, VSDM, VSDX, VSSM, VSSX, VSTM, VSTX.
- The plugin will create a new **Open in ONLYOFFICE** menu option within the document library for office documents. This allows multiple users to collaborate in real time and save back those changes to Mattermost.

## Installing ONLYOFFICE Docs

You need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Mattermost and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to Mattermost directly.

ONLYOFFICE Docs and Mattermost can be installed either on different computers, or on the same machine. If you use one machine, set up a custom port for ONLYOFFICE Docs.

The easiest way to install an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/onlyoffice/Docker-DocumentServer).

## Installing ONLYOFFICE app for Mattermost

To start using ONLYOFFICE Docs with Mattermost, follow these steps:

1. Install Node.js. [Check instructions](https://github.com/nodesource/distributions#installation-instructions)
2. Install Go. [Check instructions](https://go.dev/doc/install)
3. Install make: 

    ```sh
    sudo apt install make
    ```
4. Clone the plugin branch: 

    ```sh
    git clone https://github.com/ONLYOFFICE/onlyoffice-mattermost.git
    ```
5. Go to the project root and start the build:
    ```sh
    cd onlyoffice-mattermost/
    make
    ```

## Configuring ONLYOFFICE app for Mattermost

![Mattermost settings](/assets/images/editor/mattermost-settings.png)

As a Mattermost administrator, configure the app via the System Console. App Marketplace -> find ONLYOFFICE app -> click the Configure button.

- **ONLYOFFICE Docs address**. To connect ONLYOFFICE Docs, enter the following address:

  ``` sh
  https://<documentserver>:<port>/
  ```

  where **documentserver** is the name of the server and **port** is the port number with **ONLYOFFICE Docs** installed. The address must be accessible from the user browser and from the Mattermost server. The Mattermost server address must also be accessible from **ONLYOFFICE Docs** for correct work. You can [register](https://www.onlyoffice.com/docs-registration.aspx?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

- **Document Server JWT Secret**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict the access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own secret key in the Mattermost plugin configuration. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

- **JWT Header**. If JWT protection is enabled, it is necessary to specify a custom header name since the Mattermost security policy blocks external **Authorization** headers. This header should be specified in the ONLYOFFICE Docs signature settings as well. Further information about signature can be found [here](../../additional-api/signature/signature.md).

- **JWT Prefix**. Specify the ONLYOFFICE Docs prefix.

You can also connect to the public test server of ONLYOFFICE Docs for one month by checking the corresponding box.

## Using ONLYOFFICE app for Mattermost

### Context menu

When files are sent in the chat message, the following actions are available in the file context menu by clicking the ⋮ symbol:

- **Open file in ONLYOFFICE** and **Change access rights** - for the author of the message.
- **Open file in ONLYOFFICE** - for the recipient of the message.

![Mattermost actions](/assets/images/editor/mattermost-actions.png)

### Creating a new file

Users can create new files directly in the chat:  click on the paperclip icon in the message input field and click ONLYOFFICE. Next, specify the file name, select the file format (Document, Spreadsheet, Presentation), and click the Create button.  A message with the created file will be sent to the chat.

### Opening the editors

Clicking on the file name opens a preview of the file with the Open button. 

When clicking on the _Open file in ONLYOFFICE_ button, the corresponding ONLYOFFICE editor opens in the same window.

![Mattermost editor](/assets/images/editor/mattermost-editor.png)

You can also open the file via the file context menu in the message.

### Setting file access rights

<img alt="Mattermost share" src="/assets/images/editor/mattermost-share.png" width="400px" />

By default, the sender of a message has full editing access to the file, while all recipients are granted read-only access. Only the sender can modify user access rights through the context menu by selecting the *Change access rights* option.

**In personal chats:** Access rights can be adjusted using a drop-down menu. When the access level is changed, the ONLYOFFICE bot will send a notification to the chat.

**In group chats:** A *Default access rights* option is available for quickly setting permissions for all participants. To grant specific access rights to an individual, simply type their name in the search bar and click Add.

The user will then appear in a list where you can assign their desired access level. To remove a user, click the cross icon next to their name. Their access will revert to the permissions set under *Default access rights*.

Whenever access levels are updated, the ONLYOFFICE bot will notify the chat. For individual changes, the bot will send a personal notification to the affected participant.

### Tracking changes

ONLYOFFICE bot sends notifications about changes in the document specifying the name of the user who made those changes.

All change notifications can be found within the message's discussion thread. Simply click the arrow on the right edge of the message to open a panel on the right, where the full history of the message's discussion is displayed.

<img alt="Mattermost bot" src="/assets/images/editor/mattermost-bot.png" width="300px" />

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

Download the ONLYOFFICE app for Mattermost plugin [here](https://github.com/ONLYOFFICE/onlyoffice-mattermost).
