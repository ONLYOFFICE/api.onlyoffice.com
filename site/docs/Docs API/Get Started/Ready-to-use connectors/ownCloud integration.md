<iframe src="https://www.youtube.com/embed/IAjhUxBWKkQ?wmode=transparent" class="video-frame" width="700px" height="400px" frameborder="0" allowfullscreen></iframe>

This [app](https://github.com/ONLYOFFICE/onlyoffice-owncloud) enables users to edit office documents from [ownCloud](https://owncloud.com) using ONLYOFFICE Docs.

The latest connector signed versions are available in the official store for [ownCloud](https://marketplace.owncloud.com/apps/onlyoffice).

## Features

- Currently, the following document formats can be opened and edited with this app: DOCX, XLSX, PPTX, CSV, TXT, DOCXF, OFORM.
- The following formats are available for viewing only: PDF, DJVU, XPS.
- The following formats can be converted into OOXML: DOC, DOCM, DOT, DOTX, EPUB, HTM, HTML, ODP, ODT, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, RTF, XLS, XLSM, XLT, XLTM, XLTX. ODT, ODS, and ODP are also available for instant conversion. After you enable the corresponding option in the admin settings, ODF-formatted documents are immediately converted in the editor and opened after you click on it.
- The app will create an item in the **new (+)** menu to create **Document**, **Spreadsheet**, **Presentation**. It will also create a new **Open in ONLYOFFICE** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to ownCloud. Co-editing is also available between several federated ownCloud instances connected to one Document Server.
- Sharing files is possible with different permission types - viewing/editing, commenting, reviewing, filling forms. It's also possible to restrict downloading (in all editors) and modifying filters (in spreadsheets). Sharing via public link is also available.
- It is possible to work with documents, spreadsheets, and presentations within **ownCloud Web**.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from ownCloud and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to ownCloud directly.

ONLYOFFICE Docs and ownCloud can be installed either on different computers, or on the same machine. In case you select the latter variant, you will need to set up a custom port for Document Server as by default both ONLYOFFICE Docs and ownCloud work on port 80. Or you can use ONLYOFFICE Docs behind a proxy, please refer to [this article](https://helpcenter.onlyoffice.com/server/document/document-server-proxy.aspx) to learn how you can configure it.

You can also use our [Docker installation](https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud) to get installed and configured ONLYOFFICE Docs and ownCloud installation with a couple of commands.

## Installing ownCloud ONLYOFFICE integration app

The ownCloud administrator can install the integration app from the in-built application market. To do this, click the upper-left hamburger menu and select **Market**. After that, find **ONLYOFFICE** in the list of available applications and install it.

If the server with the ownCloud installed does not have the Internet access, or if you need it for some other reason, the administrator can install the application manually. To start using ONLYOFFICE Docs with ownCloud, the following steps must be performed:

1. Go to the ownCloud server *apps/* directory (or some other directory [used](https://doc.owncloud.org/server/admin_manual/installation/apps_management_installation.html#using-custom-app-directories) to connect applications):

  ``` sh
  cd apps/
  ```

2. Get the ownCloud ONLYOFFICE integration app. There are several ways to do that:

   1. Download the latest signed version from the official store for [ownCloud](https://marketplace.owncloud.com/apps/onlyoffice).
   2. Download the latest signed version from the application [release page](https://github.com/ONLYOFFICE/onlyoffice-owncloud/releases) on GitHub.
   3. Clone the application source code and compile it yourself:
   
   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-owncloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

   > ownCloud does not work with unsigned applications giving an alert, so you will need to use either the option **a** or **b** to get the application.

3. Change the owner to update the application right from ownCloud web interface:

  ``` sh
  chown -R www-data:www-data onlyoffice
  ```

4. In ownCloud, open the *\~/settings/admin?sectionid=apps\&category=disabled* page with **Not enabled** apps by administrator and click **Enable** for the **ONLYOFFICE** application.

## Configuring ownCloud ONLYOFFICE integration app

In ownCloud, open the *\~/settings/admin?sectionid=additional#onlyoffice* page with administrative settings for **ONLYOFFICE** section. Enter the following address to connect ONLYOFFICE Docs:

``` sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **ONLYOFFICE Docs** installed. The address must be accessible for the user browser and from the ownCloud server. The ownCloud server address must also be accessible from **ONLYOFFICE Docs** for correct work.

![Local](/assets/images/editor/owncloud-local.jpg)

Sometimes your network configuration might not allow the requests between installed ownCloud and ONLYOFFICE Docs using the public addresses. The **Advanced server settings** allows to set the ONLYOFFICE Docs address for internal requests from ownCloud server and the returning ownCloud address for the internal requests from ONLYOFFICE Docs. You need to enter them in the appropriate fields.

![Public](/assets/images/editor/owncloud-public.jpg)

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict the access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **Secret key** in the ownCloud administrative configuration. In the ONLYOFFICE Docs [config file](../../Additional%20API/Signature/Signature.md), specify the same secret key and enable the validation.

Enable or disable the **Open file in the same tab** setting.

The **Open in ONLYOFFICE** action will be added to the file context menu. You can specify this action as default and it will be used when the file name is clicked for the selected file types.

## Checking the connection

You can check the connection to ONLYOFFICE Docs by using the following occ command:

``` sh
occ onlyoffice:documentserver --check
```

You will see a text either with information about the successful connection or the cause of the error.

## Enabling editing for ownCloud Web

To enable work within **ownCloud Web**, register the connector in the ownCloud Web *config.json*:

- If you installed ownCloud Web from the [official marketplace](https://marketplace.owncloud.com/apps/onlyoffice), the path is *\<owncloud-root-catalog>/config/config.json*.
- If you compiled it from source code yourself using [this instruction](#install), the path is *\<owncloud-web-root-catalog>/config/config.json*.

To register the connector, use these lines:

``` json
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

The ONLYOFFICE integration follows the API documented [here](../Basic%20concepts.md).

1. When creating a new file, the user navigates to a document folder within ownCloud and clicks the **Document**, **Spreadsheet** or **Presentation** item in the **new (+)** menu.

2. The browser invokes the *create* method in the */lib/Controller/EditorController.php* controller. This method adds a copy of a file from the *assets* folder to the folder the user is currently in.

3. When opening an existing file, the user navigates to it within ownCloud and selects the **Open in ONLYOFFICE** menu option.

4. A new browser tab is opened and the *index* method of the */lib/Controller/EditorController.php* controller is invoked.

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

11. After [10 seconds](../How%20It%20Works/Saving%20file.md#save-delay) of inactivity, ONLYOFFICE Docs sends a POST to *callbackUrl* letting ownCloud know that the clients have finished editing the document and closed it.

12. ownCloud downloads a new version of the document, replacing the old one.

## Known issues

- **Connecting external storages**. Adding the storage using the **External storages** app has issues with the co-editing in some cases. If the connection is made using the same authorization keys (the *Username and password* or *Global credentials* authentication type is selected), then the co-editing is available for the users. If different authorization keys are used (*Log-in credentials, save in database* or *User entered, store in database* authentication options), the co-editing is not available. When the *Log-in credentials, save in session* authentication type is used, the files cannot be opened in the editor.

- **Encrypting file storage**. ownCloud provides an option to encrypt the file storage. But if the encryption with the *per-user encryption keys* (used by default in ownCloud **Default encryption module** app) is enabled, ONLYOFFICE Docs cannot open the encrypted files for editing and save them after the editing. The ONLYOFFICE section of the administrative settings page will display a notification about it. However, if you set the encryption with the *master key*, ONLYOFFICE application will work as intended. The instruction on enabling *master key* based encryption is available in the official documentation on [ownCloud](https://doc.owncloud.org/server/admin_manual/configuration/files/encryption/encryption_configuration.html#enabling-master-key-based-encryption-from-the-command-line) websites.

  > ownCloud recommends using *master encryption key* only on fresh installations with no existing data, or on systems where encryption has not already been enabled, as your files previously encrypted with the use of *per-user encryption keys* **might be lost forever** after you enable *master key* based encryption on them.

- **Validating certificate**. If you are using a self-signed certificate for your Document Server, ownCloud will not validate such a certificate and will not allow connection to/from ONLYOFFICE Docs. This issue can be solved in two ways:

  1. Check the **Disable certificate verification (insecure)** box on the ONLYOFFICE administration page, Server settings section, within your ownCloud.
  2. Change the ownCloud config file manually. Locate the ownCloud config file (*/owncloud/config/config.php*) and open it. Insert the following section to it:

  ``` php
  <?php
  'onlyoffice' => array (
      'verify_peer_off' => true
  )
  ?>
  ```

  This will disable the certificate verification and allow ownCloud to establish connection with ONLYOFFICE Docs.

  > Please remember that this is a temporary insecure solution and we strongly recommend that you replace the certificate with the one issued by some CA. Once you do that, do not forget to uncheck the corresponding setting box or remove the above section from the ownCloud config file.

- **Background task**. If the editors don't open or save documents after a period of proper functioning, the reason can be a problem in changing network settings or disabling any relevant services, or issues with the SSL certificate.

  To solve this, we added an asynchronous background task which runs on the server to check availability of the editors. It allows testing the connection between your **ownCloud instance** and **ONLYOFFICE Docs**, namely availability of server addresses and the validity of the JWT secret are being checked.

  If any issue is detected, the ONLYOFFICE integration connector (consequently, the ability to create and open files) will be disabled. As an ownCloud admin, you will get the corresponding notification.

  This option allows you to avoid issues when the server settings become incorrect and require changes.

  By default, this background task runs once a day. If necessary, you can change the frequency. To do so, open the ownCloud config file (*\_/owncloud/config/config.php\_*). Insert the following section and enter the required value in minutes:

  ``` php
  <?php
  "onlyoffice" => array (
      "editors_check_interval" => 3624
  )
  ?>
  ```

  To disable this check running, enter 0 value.

- **Federated Cloud Sharing**. If the document is shared using the **Federated Cloud Sharing** app, the co-editing between the ownCloud instances connected to different ONLYOFFICE servers will not be available. The users from one and the same Document Server can edit the document in the co-editing mode, but the users from two (or more) different Document Servers will not be able to collaborate on the same document in real time.

- **Converting files**. ONLYOFFICE Docs uses Office Open XML format as a basis when opening and editing files. If the file format is different from OOXML, it will still be converted to the corresponding OOXML for the ONLYOFFICE Docs proper work and faster performance. After that you can edit the file, making any changes available for the base OOXML format and save the file to this base OOXML format.

  In case the source ownCloud file format was different from the base one, and you still want to save it to the original format, the file will be converted to this format from OOXML. As the formats are fundamentally different, some data (such as charts, tables, autoshapes or images) and formatting can be lost due to the simple reason that some formats (*csv*, *txt*, etc.) do not support them or treat them differently than OOXML standard does. That is why all the non-OOXML files by default are opened for viewing only, although there is an option to convert the file in the context menu. If you realise the data/formatting loss risks after the conversion, but still want to open non-OOXML files for editing, you can check them in the list in the settings. Editing for *csv* and *txt* files is available by default.

- When accessing a document without download permission, file printing and using the system clipboard are not available. Copying and pasting within the editor is available via buttons in the editor toolbar and in the context menu.

Download the ownCloud ONLYOFFICE integration app [here](https://github.com/ONLYOFFICE/onlyoffice-owncloud).
