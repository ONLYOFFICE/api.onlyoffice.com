This [plugin](https://github.com/ONLYOFFICE/onlyoffice-mattermost) enables users to edit office documents from [Mattermost](https://mattermost.com/) using ONLYOFFICE Docs.

## Features

* Currently, the following document formats can be edited: DOCX, XLSX, PPTX.
* The following formats are available for viewing only: XLS, CSV, XLSM, XLT, XLTM, ODS, FODS, OTS, PPS, PPSX, PPSM, PPT, PPTM, POT, POTX, POTM, ODP, FODP, OTP, DOC, DOCM, DOT, DOTX, DOTM, ODT, FODT, OTT, RTF.
* The plugin will create a new **Open in ONLYOFFICE** menu option within the document library for office documents. This allows multiple users to collaborate in real time and save back those changes to Mattermost.

## Installing ONLYOFFICE Docs

You need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Mattermost and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to Mattermost directly.

ONLYOFFICE Docs and Mattermost can be installed either on different computers, or on the same machine. If you use one machine, set up a custom port for ONLYOFFICE Docs.

The easiest way to install an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/onlyoffice/Docker-DocumentServer).

## Installing Mattermost ONLYOFFICE integration plugin

To start using ONLYOFFICE Docs with Mattermost, follow these steps:

1. Clone the [master branch](https://github.com/ONLYOFFICE/onlyoffice-mattermost).

2. Go to the project root.

3. Install the dependencies:

   npm install --legacy-peer-deps Please note that you need to have Node.js v.15.14.0 installed on your machine to build the plugin.

4. Run the following command:

   make dist

5. Go to *\<your\_mattermost\_host>/admin\_console/plugins/plugin\_management*.

6. Choose the compiled plugin from your *dist* folder and press **Upload**.

## Configuring Mattermost ONLYOFFICE integration plugin

![Mattermost settings](/content/img/editor/mattermost-settings.png)

* **Enable Plugin**. Enable the Mattermost ONLYOFFICE integration plugin by setting this parameter to **true**.

* **Document Editing Service address**. To connect ONLYOFFICE Docs, enter the following address:

  https\://\<documentserver>:\<port>/

  where **documentserver** is the name of the server and **port** is the port number with **ONLYOFFICE Docs** installed. The address must be accessible from the user browser and from the Mattermost server. The Mattermost server address must also be accessible from **ONLYOFFICE Docs** for correct work.

* **Secret key**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict the access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own secret key in the Mattermost plugin configuration. In the ONLYOFFICE Docs [config file](/editors/signature/), specify the same secret key and enable the validation.

* **JWT Header**. If JWT protection is enabled, it is necessary to specify a custom header name since the Mattermost security policy blocks external **Authorization** headers. This header should be specified in the ONLYOFFICE Docs signature settings as well. Further information about signature can be found [here](/editors/signature/).

* **JWT Prefix**. Specify the ONLYOFFICE Docs prefix.

## Using Mattermost ONLYOFFICE integration plugin

Users are able to open files sent in personal and group Mattermost chats for viewing and co-editing.

When files are sent in the chat message, the following actions are available in the file context menu by clicking the ⋮ symbol:

* **Open file in ONLYOFFICE** and **Change access rights** - for the author of the message.
* **Open file in ONLYOFFICE** - for the recipient of the message.

![Mattermost actions](/content/img/editor/mattermost-actions.png)

When clicking on the **Open file in ONLYOFFICE** button, the corresponding ONLYOFFICE editor opens in the same window.

![Mattermost editor](/content/img/editor/mattermost-editor.png)

The author of the message with attached documents is able to change access rights to the file via the context menu using the **Change access rights** option. This action is available both in personal and group chats.

![Mattermost share](/content/img/editor/mattermost-share.png)

ONLYOFFICE bot sends notifications about changes in the document specifying the name of the user who made those changes.

![Mattermost bot](/content/img/editor/mattermost-bot.png)

## How it works

The ONLYOFFICE integration follows the API documented [here](/editors/basic).

\


Download the Mattermost ONLYOFFICE integration plugin [here](https://github.com/ONLYOFFICE/onlyoffice-mattermost).
