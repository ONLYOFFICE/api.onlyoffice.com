---
description: Integrate ONLYOFFICE Docs into ownCloud for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/owncloud.svg
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# ownCloud integration

<YoutubeVideo videoId="33w03FcPWTo"/>

The ONLYOFFICE app for ownCloud enables users to edit office documents from [ownCloud](https://owncloud.com) using ONLYOFFICE Docs. Its source code is available on [GitHub](https://github.com/ONLYOFFICE/onlyoffice-owncloud), and the latest signed versions are in the [ownCloud Marketplace](https://marketplace.owncloud.com/apps/onlyoffice).

## Features

- Currently, the following document formats can be opened and edited with this app: DOCM, DOCX, DOTM, DOTX, PDF, POTM, POTX, PPSM, PPSX, PPTM, PPTX, XLSB, XLSM, XLSX, XLTM, XLTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOT, DPS, DPT, EPUB, ET, ETT, FB2, FODP, FODS, FODT, HTM, HTML, HWP, HWPX, KEY, MD, MHT, MHTML, NUMBERS, ODG, ODP, ODS, ODT, OTP, OTS, OTT, OXPS, PAGES, POT, PPS, PPT, RTF, STW, SXC, SXI, SXW, TXT, VSDM, VSDX, VSSM, VSSX, VSTM, VSTX, WPS, WPT, XLS, XLT, XML, XPS.
- The following formats can be converted into OOXML: DOC, DOCM, DOT, DOTX, EPUB, HTM, HTML, ODP, ODT, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, RTF, XLS, XLSM, XLT, XLTM, XLTX. ODT, ODS, and ODP are also available for instant conversion. After you enable the corresponding option in the admin settings, ODF-formatted documents are immediately converted in the editor and opened after you click on it.
- The app will create an item in the **new (+)** menu to create **Document**, **Spreadsheet**, **Presentation**. It will also create a new **Open in ONLYOFFICE** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to ownCloud. Co-editing is also available between several federated ownCloud instances connected to one Document Server.
- Sharing files is possible with different permission types - viewing/editing, commenting, reviewing, filling forms. It's also possible to restrict downloading (in all editors) and modifying filters (in spreadsheets). Sharing via public link is also available.
- It is possible to work with documents, spreadsheets, and presentations within **ownCloud Web**.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from ownCloud and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to ownCloud directly.

ONLYOFFICE Docs and ownCloud can be installed either on different computers, or on the same machine. In case you select the latter variant, you will need to set up a custom port for Document Server as by default both ONLYOFFICE Docs and ownCloud work on port 80. Or you can use ONLYOFFICE Docs behind a proxy, please refer to [this article](https://helpcenter.onlyoffice.com/server/document/document-server-proxy.aspx) to learn how you can configure it.

You can also use our [Docker installation](https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud) to get installed and configured ONLYOFFICE Docs and ownCloud installation with a couple of commands.

## Installing ONLYOFFICE app for ownCloud

The ownCloud administrator can install the integration app from the in-built application market. To do this, click the upper-left hamburger menu and select **Market**. After that, find **ONLYOFFICE** in the list of available applications and install it.

If the server with the ownCloud installed does not have the Internet access, or if you need it for some other reason, the administrator can install the application manually. To start using ONLYOFFICE Docs with ownCloud, the following steps must be performed:

1. Go to the ownCloud server *apps/* directory (or some other directory [used](https://doc.owncloud.com/server/11.1/admin_manual/configuration/server/config_sample_php_parameters.html#define-alternative-app-directories) to connect applications):

   ``` sh
   cd apps/
   ```

2. Get the ONLYOFFICE app for ownCloud. There are several ways to do that:

   1. Download the latest signed version from the official store for [ownCloud](https://marketplace.owncloud.com/apps/onlyoffice).
   2. Download the latest signed version from the application [release page](https://github.com/ONLYOFFICE/onlyoffice-owncloud/releases) on GitHub.
   3. Clone the application source code and compile it yourself:
   
   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-owncloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

   :::note
   ownCloud does not work with unsigned applications giving an alert, so you will need to use either the option **1** or **2** to get the application.
   :::

3. Change the owner to update the application right from ownCloud web interface:

    ``` sh
    chown -R www-data:www-data onlyoffice
    ```

4. In ownCloud, open the *\~/settings/admin?sectionid=apps\&category=disabled* page with **Not enabled** apps by administrator and click **Enable** for the **ONLYOFFICE** application.

## Configuring ONLYOFFICE app for ownCloud

In ownCloud, open the *\~/settings/admin?sectionid=additional#onlyoffice* page with administrative settings for **ONLYOFFICE** section. Enter the following address to connect ONLYOFFICE Docs:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **ONLYOFFICE Docs** installed. The address must be accessible from both the user's browser and the ownCloud server. The ownCloud server address must also be accessible from **ONLYOFFICE Docs** for correct work. You can [register](https://www.onlyoffice.com/signup?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

![Local](/assets/images/editor/owncloud-local.jpg)

Sometimes your network configuration might not allow the requests between installed ownCloud and ONLYOFFICE Docs using the public addresses. The **Advanced server settings** allows to set the ONLYOFFICE Docs address for internal requests from ownCloud server and the returning ownCloud address for the internal requests from ONLYOFFICE Docs. You need to enter them in the appropriate fields.

![Public](/assets/images/editor/owncloud-public.jpg)

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **Secret key** in the ownCloud administrative configuration. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

Enable or disable the **Open file in the same tab** setting.

The **Open in ONLYOFFICE** action will be added to the file context menu. You can specify this action as default and it will be used when the file name is clicked for the selected file types.

## Checking the connection

You can check the connection to ONLYOFFICE Docs by using the following occ command:

```sh
occ onlyoffice:documentserver --check
```

You will see a text either with information about the successful connection or the cause of the error.

### Self-signed certificates

If you are using a self-signed certificate for your ONLYOFFICE Docs, ownCloud will not validate such a certificate and will not allow connections to or from ONLYOFFICE Docs. You can turn off the certificate verification in one of two ways:

1. Check the **Disable certificate verification (insecure)** box on the ONLYOFFICE administration page, **Server settings** section, within your ownCloud.
2. Change the ownCloud config file manually. Locate the ownCloud config file (*/owncloud/config/config.php*) and open it. Add the following entry to the `$CONFIG` array (if the array already has an `onlyoffice` entry, add the key to it):

   ```php
   'onlyoffice' => array (
       'verify_peer_off' => true,
   ),
   ```

   ownCloud reads this entry only as long as `verify_peer_off` has never been set in the UI or with an `occ` command. Once the server settings are saved, the **Disable certificate verification (insecure)** box takes precedence.

This will disable the certificate verification and allow ownCloud to establish connection with ONLYOFFICE Docs. The setting applies only to the requests from ownCloud to ONLYOFFICE Docs, not to the requests between ownCloud instances connected through **Federated Cloud Sharing**.

If ownCloud also uses a self-signed certificate, ONLYOFFICE Docs will not be able to download files from ownCloud either. To disable the certificate verification on the ONLYOFFICE Docs side, set the [`services.CoAuthoring.requestDefaults.rejectUnauthorized`](../configuration/server-config/server-config.md#services.CoAuthoring.requestDefaults.rejectUnauthorized) parameter to `false` in the ONLYOFFICE Docs *local.json* configuration file and restart the ONLYOFFICE Docs services.

:::note
Please remember that this is a temporary insecure solution and we strongly recommend that you replace the certificate with one issued by a trusted CA. Once you do that, do not forget to uncheck the **Disable certificate verification (insecure)** box (or remove the `config.php` entry if `verify_peer_off` was never set in the UI or with `occ`), and set `rejectUnauthorized` back to `true`.
:::

### Background connection check

If the editors don't open or save documents after a period of proper functioning, the reason can be a problem in changing network settings or disabling any relevant services, or issues with the SSL certificate.

To detect this, the ONLYOFFICE app runs a background task on the server that checks the connection between your **ownCloud instance** and **ONLYOFFICE Docs**, namely the availability of the server addresses and the validity of the JWT secret. The check is skipped if the ownCloud address that ONLYOFFICE Docs uses is `localhost` or `127.0.0.1`. In this case, specify the **Server address for internal requests from ONLYOFFICE Docs** in the **Advanced server settings**.

If any issue is detected, the ONLYOFFICE actions are removed, so files can no longer be created or opened in ONLYOFFICE. Members of the `admin` group get a notification, and also an e-mail if the **Enable e-mail notifications** box is checked (the default). While the error is stored, the check does not run again, so the actions do not come back on their own. Fix the cause, then save the server settings on the administration page or run `occ onlyoffice:documentserver --check`. Once the connection succeeds, the actions return.

By default, this background task runs once a day (`86400` seconds). If necessary, you can change the frequency. To do so, open the ownCloud config file (*/owncloud/config/config.php*) and add the `editors_check_interval` entry to the `$CONFIG` array with the required value in seconds. For example, to run the check hourly:

```php
'onlyoffice' => array (
    'editors_check_interval' => 3600,
),
```

To turn the check off, uncheck the **Enable background connection check to the editors** box on the administration page, or set `editors_check_interval` to `0`.

## Enabling editing for ownCloud Web

To enable work within **ownCloud Web**, register the app in the ownCloud Web *config.json*:

- If you installed ownCloud Web from the [official marketplace](https://marketplace.owncloud.com/apps/onlyoffice), the path is *\<owncloud-root-catalog>/config/config.json*.
- If you compiled it from source code yourself using [this instruction](#installing-onlyoffice-app-for-owncloud), the path is *\<owncloud-web-root-catalog>/config/config.json*.

To register the app, use these lines:

```json
{
  "external_apps": [
    {
      "id": "onlyoffice",
      "path": "http(s)://<owncloud-10-server-address>/custom/onlyoffice/js/web/onlyoffice.js"
    }
  ]
}

```

Depending on your webserver configuration you can drop the *index.php* segment from the URL path.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

1. When creating a new file, the user navigates to a document folder within ownCloud and clicks the **Document**, **Spreadsheet** or **Presentation** item in the **new (+)** menu.

2. The browser invokes the *create* method in the */lib/Controller/editorController.php* controller. This method adds a copy of a file from the *assets* folder to the folder the user is currently in.

3. When opening an existing file, the user navigates to it within ownCloud and selects the **Open in ONLYOFFICE** menu option.

4. A new browser tab is opened and the *index* method of the */lib/Controller/editorController.php* controller is invoked.

5. The app prepares a JSON object with the following properties:

   - **url** - the URL that ONLYOFFICE Docs uses to download the document;
   - **callbackUrl** - the URL that ONLYOFFICE Docs informs about status of the document editing;
   - **documentServerUrl** - the URL that the client needs to respond to ONLYOFFICE Docs (can be set at the administrative settings page);
   - **key** - the *UUID+Modified Timestamp* to instruct ONLYOFFICE Docs whether to download the document again or not.

6. ownCloud takes this object and constructs a page from *templates/editor.php* template, filling in all of those values so that the client browser can load up the editor.

7. The client browser makes a request to the JavaScript library from ONLYOFFICE Docs and sends ONLYOFFICE Docs the DocEditor configuration with the above properties.

8. Then ONLYOFFICE Docs downloads the document from ownCloud and the user begins editing.

9. ONLYOFFICE Docs sends a POST request to *callbackUrl* to inform ownCloud that a user is editing the document.

10. When all users and client browsers are done with editing, they close the editing window.

11. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, ONLYOFFICE Docs sends a POST to *callbackUrl* letting ownCloud know that the clients have finished editing the document and closed it.

12. ownCloud downloads a new version of the document, replacing the old one.

## Converting files

ONLYOFFICE Docs uses Office Open XML format as a basis when opening and editing files. If the file format is different from OOXML, it will still be converted to the corresponding OOXML for the ONLYOFFICE Docs proper work and faster performance. When the file is saved to its original format, it is converted back from OOXML. As the formats are fundamentally different, some data (such as charts, tables, autoshapes or images) and formatting can be lost due to the simple reason that some formats (*csv*, *txt*, etc.) do not support them or treat them differently than OOXML standard does.

That is why the ONLYOFFICE app treats formats differently:

- OOXML files and *pdf* open for editing.
- Formats that can be edited with a risk of losing data, such as *odt*, *ods*, *odp*, *rtf*, *txt*, *csv*, *tsv*, *epub* or *html*, open for viewing only by default. To open them for editing, check them in the **Open the file for editing (due to format restrictions, the data might be lost when saving to the formats from the list below)** list in the settings. *txt* and *csv* are checked by default.
- Other formats, such as *doc*, *xls*, *ppt*, *md* or *hwp*, open for viewing only and cannot be edited.

For *doc*, *xls*, *ppt* and similar formats, as well as for *odt*, *ods*, *odp*, *rtf* and other ones from the list above (but not *txt*, *csv* or *tsv*), the file context menu has the **Convert with ONLYOFFICE** option. It creates an OOXML copy of the file in the same folder.

## Known issues

If you run into a problem that is not listed here, report it in the app's [GitHub issue tracker](https://github.com/ONLYOFFICE/onlyoffice-owncloud/issues).

### Connecting external storages

Adding the storage using the **External storages** app has issues with the co-editing in some cases. If the connection is made using the same authorization keys (the *Username and password* or *Global credentials* authentication type is selected), then the co-editing is available for the users. If different authorization keys are used (*Log-in credentials, save in database* or *User entered, store in database* authentication options), the co-editing is not available. When the *Log-in credentials, save in session* authentication type is used, the files cannot be opened in the editor.

### Encrypting file storage

ownCloud provides an option to encrypt the file storage. But if the encryption with the *per-user encryption keys* (used by default in ownCloud **Default encryption module** app) is enabled, ONLYOFFICE Docs cannot download the encrypted files and save them after the editing. The ONLYOFFICE app does not prevent opening such files: the editor opens, but the document fails to load. The ONLYOFFICE section of the administrative settings page will display a notification about it. However, if you set the encryption with the *master key*, ONLYOFFICE application will work as intended, except that **Keep intermediate versions when editing (forcesave)** is not available with any encryption enabled. The instructions on enabling *master key* based encryption are available in the [ownCloud documentation](https://doc.owncloud.com/server/11.1/admin_manual/configuration/files/encryption/encryption_configuration.html#enabling-master-key-based-encryption-from-the-command-line).

:::note
ownCloud recommends using *master encryption key* only on fresh installations with no existing data, or on systems where encryption has not already been enabled, as your files previously encrypted with the use of *per-user encryption keys* **might be lost forever** after you enable *master key* based encryption on them.
:::

### Federated Cloud Sharing

If the document is shared using the **Federated Cloud Sharing** app, the co-editing between the ownCloud instances connected to different ONLYOFFICE servers will not be available. Users connected to the same ONLYOFFICE Docs server can co-edit the document, but users connected to two (or more) different ONLYOFFICE Docs servers will not be able to collaborate on the same document in real time. Co-editing also requires the ONLYOFFICE app on the remote instance, since the document key is requested from it. Without the app, the file still opens, but the users of the two instances edit it in separate sessions.

### Files shared without download permission

ONLYOFFICE Docs downloads the file from ownCloud to open it. For a file shared without download permission, ownCloud allows this download only if the **Secret key** is specified in the ONLYOFFICE settings. Without the secret key, such files do not open in the editor.

When accessing a document without download permission, file printing and using the system clipboard are not available. Copying and pasting within the editor is available via buttons in the editor toolbar and in the context menu.
