---
description: Integrate ONLYOFFICE Docs into Nextcloud for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/nextcloud.svg
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# Nextcloud integration

<YoutubeVideo videoId="vN9v9sJ0HVw"/>

The ONLYOFFICE app for Nextcloud enables users to edit office documents from [Nextcloud](https://nextcloud.com) using ONLYOFFICE Docs. Its source code is available on [GitHub](https://github.com/ONLYOFFICE/onlyoffice-nextcloud), and the latest signed versions are in the [Nextcloud App Store](https://apps.nextcloud.com/apps/onlyoffice).

## Features

- Currently, the following document formats can be opened and edited with this app: DOCM, DOCX, DOTM, DOTX, PDF, POTM, POTX, PPSM, PPSX, PPTM, PPTX, XLSB, XLSM, XLSX, XLTM, XLTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOT, DPS, DPT, EPUB, ET, ETT, FB2, FODP, FODS, FODT, HTM, HTML, HWP, HWPX, KEY, MD, MHT, MHTML, NUMBERS, ODG, ODP, ODS, ODT, OTP, OTS, OTT, OXPS, PAGES, POT, PPS, PPT, RTF, STW, SXC, SXI, SXW, TSV, TXT, VSDM, VSDX, VSSM, VSSX, VSTM, VSTX, WPS, WPT, XLS, XLT, XML, XPS.
- The following formats can be converted into OOXML: DOC, DOCM, DOT, DOTX, EPUB, HTM, HTML, ODP, ODT, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, RTF, XLS, XLSM, XLT, XLTM, XLTX.
- The app will create an item in the **new (+)** menu to create **Document**, **Spreadsheet**, **Presentation**, **PDF**. It will also create a new **Open in ONLYOFFICE** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to Nextcloud. Co-editing is also available between several federated Nextcloud instances connected to one Document Server.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Nextcloud and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/docs/installation/community/linux/installing/install-ubuntu). ONLYOFFICE Docs must also be able to POST to Nextcloud directly.

ONLYOFFICE Docs and Nextcloud can be installed either on different computers, or on the same machine. In case you select the latter variant, you will need to set up a custom port for Document Server as by default both ONLYOFFICE Docs and Nextcloud work on port 80. Or you can use ONLYOFFICE Docs behind a proxy, please refer to [this article](https://helpcenter.onlyoffice.com/docs/configuration/community/docker/proxy) to learn how you can configure it.

The easiest way to start an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer).

You can also use our [Docker installation](https://github.com/ONLYOFFICE/docker-onlyoffice-nextcloud) to get installed and configured ONLYOFFICE Docs and Nextcloud installation with a couple of commands.

## Installing ONLYOFFICE app for Nextcloud

The Nextcloud administrator can install the integration app from the in-built application market. To do this, go to the user name and select **Apps**. After that, find **ONLYOFFICE** in the list of available applications and install it.

If the server with the Nextcloud installed does not have the Internet access, or if you need it for some other reason, the administrator can install the application manually. To start using ONLYOFFICE Docs with Nextcloud, the following steps must be performed:

1. Go to the Nextcloud server *apps/* directory (or some other directory [used](https://docs.nextcloud.com/server/stable/admin_manual/apps_management.html#using-custom-app-directories) to connect applications): 

   ``` sh
   cd apps/
   ```

2. Get the ONLYOFFICE app for Nextcloud. There are several ways to do that:

   1. Download the latest signed version from the official store for [Nextcloud](https://apps.nextcloud.com/apps/onlyoffice).
   2. Download the latest signed version from the application [release page](https://github.com/ONLYOFFICE/onlyoffice-nextcloud/releases) on GitHub.
   3. Clone the application source code and compile it yourself:
   
   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-nextcloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

3. Run the build (only if you chose to clone on the previous step):

   ``` sh
   npm install
   npm run build
   ```

4. Install Composer dependencies (only if you chose to clone on the step 2):

   ``` sh
   composer install
   composer scope-dependencies
   rm -rf vendor/firebase
   composer dump-autoload
   ```

5. Change the owner to update the application right from Nextcloud web interface:

    ``` sh
    chown -R www-data:www-data onlyoffice
    ```

6. In Nextcloud, open the *\~/settings/apps/disabled* page with **Not enabled** apps by administrator and click **Enable** for the **ONLYOFFICE** application.

## Configuring ONLYOFFICE app for Nextcloud

In Nextcloud, open the *\~/settings/admin/onlyoffice* page with administrative settings for **ONLYOFFICE** section. Enter the following address to connect ONLYOFFICE Docs:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **ONLYOFFICE Docs** installed. The address must be accessible from both the user's browser and the Nextcloud server. The Nextcloud server address must also be accessible from **ONLYOFFICE Docs** for correct work. You can [register](https://www.onlyoffice.com/signup?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

![Local](/assets/images/editor/nextcloud-local.jpg)

Sometimes your network configuration might not allow the requests between installed Nextcloud and ONLYOFFICE Docs using the public addresses. The **Advanced server settings** allows to set the ONLYOFFICE Docs address for internal requests from Nextcloud server and the returning Nextcloud address for the internal requests from ONLYOFFICE Docs. You need to enter them in the appropriate fields.

![Public](/assets/images/editor/nextcloud-public.jpg)

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **Secret key** in the Nextcloud administrative configuration. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

Enable or disable the **Open file in the same tab** setting.

The **Open in ONLYOFFICE** action will be added to the file context menu. You can specify this action as default and it will be used when the file name is clicked for the selected file types.

### ONLYOFFICE connector for Nextcloud: configuration parameters

These are all available configuration parameters for the ONLYOFFICE integration app for Nextcloud, split into three tables below:

- Basic configuration: parameters configurable via the Nextcloud admin UI or `occ` commands.
- Watermark settings: also configurable via the UI or `occ`, but stored under the `files` app instead of `onlyoffice`.
- Advanced configuration: parameters configurable via the `config/config.php` file.

Some parameters (e.g. `DocumentServerUrl`, `jwt_secret`, `jwt_header`, `verify_peer_off`) can be set both ways, so they appear in both the basic and the advanced table. For these, the connector reads the value from `config/config.php` only if none is set via the UI or an `occ` command.

#### Basic configuration (UI / `occ`)

These settings are available through the Nextcloud admin interface or via `occ` commands.

| Parameter                                    | Description                                                                 |
|---------------------------------------------|-----------------------------------------------------------------------------|
| `DocumentServerUrl`                         | Public address of the ONLYOFFICE Docs server.                              |
| `verify_peer_off`                           | If `true`, disables SSL certificate verification. Default: `false`.        |
| `jwt_secret`                                | Secret key used to sign and validate JWT tokens.                           |
| `Advanced server settings`                  | Groups Authorization header and internal server URL settings. Available via UI only. |
| `jwt_header`                                | Name of the HTTP header used to send the JWT. Must match the header configured in ONLYOFFICE Docs. Default: `Authorization`; `AuthorizationJWT` when the built-in demo server is enabled. |
| `DocumentServerInternalUrl`                 | Internal address of ONLYOFFICE Docs used for server-to-server communication. |
| `StorageUrl`                                | Internal address of the Nextcloud server used by ONLYOFFICE Docs.          |
| `demo`                                      | Connects to the built-in demo ONLYOFFICE Docs server. Available via UI only. |
| `groups`                                    | Allows specific groups to access editors. Example: `["admin", "editors"]`. |
| `restrictExternalStorage`                   | Restricts access to ONLYOFFICE for files from external storages. Default: `false`. |
| `preview`                                   | Enables document preview generation.                                       |
| `sameTab`                                   | Opens files in the same tab. Default: `true`.                              |
| `enableSharing`                             | Enables sharing. If forcibly enabled via `occ`, editors open in a new tab even when `sameTab` is `true`. Default: `false`. |
| `advanced`                                  | Enables advanced document permissions. Default: `false`.                   |
| `versionHistory`                            | Keeps metadata for each document version. Default: `true`.                 |
| `cronChecker`                               | Enables background connection check to editors. Default: `true`.           |
| `emailNotifications`                        | Enables e-mail notifications. Default: `true`.                             |
| `unknownAuthor`                             | Display name for unknown authors. Example: `Guest User`.                   |
| `defFormats`                                | Formats for which **Open in ONLYOFFICE** is the default action when the file name is clicked. JSON object mapping format names to booleans. Example: `{"docx":true,"xlsx":true}`. |
| `editFormats`                               | Formats opened for editing instead of viewing. JSON object mapping format names to booleans. Example: `{"csv":true,"txt":true}`. |
| `customizationForcesave`                    | Keeps intermediate versions when editing (forcesave). Default: `false`.    |
| `liveViewOnShare`                           | Enables live-viewing mode when a file is accessed via a public link. Default: `false`. |
| `customizationChat`                         | Enables or disables chat panel.                                            |
| `customizationCompactHeader`                | Enables compact header mode.                                               |
| `customizationFeedback`                     | Enables feedback and support links.                                        |
| `customizationHelp`                         | Enables help link.                                                         |
| `customizationReviewDisplay`                | Review mode for viewing. Possible values: `original`, `markup`, `final`. Default: `original`. |
| `customizationTheme`                        | Sets the editor color theme. Possible values: `theme-system`, `default-light`, `default-dark`. Default: `theme-system`. |
| `customization_plugins`                     | Enables plugins. Default: `true`.                                           |
| `customization_macros`                      | Enables document macros. Default: `true`.                                   |
| `protection`                                | Controls who can protect documents. Possible values: `owner`, `all`. Default: `owner`. |

:::tip
You can also use the `occ` command-line interface to get/set these parameters:

```sh
php occ config:app:set onlyoffice customizationChat --value=false
```
:::

#### Watermark settings

Watermark settings (the `watermark_*` keys) are stored under the `files` app, not `onlyoffice`. Use `files` as the app ID when setting them with `occ`:

```sh
php occ config:app:set files {watermark_setting_key} --value={setting_value}
```

The switches accept `yes` or `no`.

| Parameter                 | Description                                                                                  | Default              |
|---------------------------|----------------------------------------------------------------------------------------------|----------------------|
| `watermark_enabled`       | Enables watermarking.                                                                        | `no`                 |
| `watermark_text`          | Watermark text. Supported tags: `{userId}`, `{userDisplayName}`, `{email}`, `{date}`, `{themingName}`. | `{userId}, {date}` |
| `watermark_allGroups`     | Shows the watermark for users of the groups listed in `watermark_allGroupsList`.             | `no`                 |
| `watermark_allGroupsList` | Comma-separated list of groups whose users see the watermark. Example: `admin,editors`.      | empty                |
| `watermark_allTags`       | Shows the watermark on files tagged with the tags listed in `watermark_allTagsList`.         | `no`                 |
| `watermark_allTagsList`   | Comma-separated list of system tag IDs of files that show the watermark. Example: `3,7`.     | empty                |
| `watermark_linkAll`       | Shows the watermark for all link shares.                                                     | `no`                 |
| `watermark_shareAll`      | Shows the watermark for all shares received from other users.                                | `no`                 |
| `watermark_shareRead`     | Shows the watermark on read-only shares.                                                     | `no`                 |
| `watermark_linkSecure`    | Shows the watermark on link shares that have downloading disabled.                           | `no`                 |
| `watermark_linkRead`      | Shows the watermark on read-only link shares.                                                | `no`                 |
| `watermark_linkTags`      | Shows the watermark on link shares tagged with the tags listed in `watermark_linkTagsList`.  | `no`                 |
| `watermark_linkTagsList`  | Comma-separated list of system tag IDs whose link shares show the watermark. Example: `3,7`. | empty                |

#### Advanced configuration (`config/config.php`)

You can define the following parameters in the `config/config.php` file to customize the behavior of the ONLYOFFICE connector:

| Parameter                   | Description                                                                                     |
|----------------------------|-------------------------------------------------------------------------------------------------|
| `DocumentServerUrl`         | Public address of the ONLYOFFICE Docs server.                                                  |
| `DocumentServerInternalUrl` | Internal address of ONLYOFFICE Docs used for server-to-server communication.                    |
| `StorageUrl`                | Internal address of the Nextcloud server used by ONLYOFFICE Docs.                               |
| `jwt_secret`               | Secret key used to sign and validate JWT tokens.                                               |
| `jwt_header`               | Name of the HTTP header used to send the JWT. Must match the header configured in ONLYOFFICE Docs. Default: `Authorization`; `AuthorizationJWT` when the built-in demo server is enabled. |
| `jwt_leeway`               | Leeway in seconds to account for clock skew when validating JWT tokens.                        |
| `jwt_expiration`           | JWT token expiration time in seconds.                                                          |
| `verify_peer_off`          | If `true`, disables SSL certificate verification. Default: `false`.                            |
| `limit_thumb_size`         | Maximum file size in bytes for which thumbnails will be generated.                             |
| `disable_download`         | If `true`, disables file download functionality.                                               |
| `editors_check_interval`   | Interval in seconds for checking the availability of ONLYOFFICE Docs using cron. Default: `86400`. |
| `permissions_modifyFilter` | Applies the spreadsheet filter globally (`true`, affects all users) or locally (`false`). Default: `true`. |
| `customization_customer`   | Customer information displayed in the editor's "About" section.                                |
| `customization_logo`       | Logo displayed in the editor header.                                                           |
| `customization_loaderLogo` | Logo displayed on the editor loading screen.                                                   |
| `customization_loaderName` | Text displayed on the editor loading screen.                                                   |
| `customization_zoom`       | Default document zoom level in percentage. Default: `100`.                                     |
| `customization_autosave`   | Enables autosave while editing. Default: `true`.                                               |

The following parameters must be added manually to the `config/config.php` file in your Nextcloud installation:

```php
<?php
'onlyoffice' => array (
    'jwt_secret' => 'your_secret_key',
    'jwt_header' => 'Authorization',
)
?>
```

## Checking the connection

You can check the connection to ONLYOFFICE Docs by using the following occ command:

```sh
occ onlyoffice:documentserver --check
```

You will see a text either with information about the successful connection or the cause of the error.

### Self-signed certificates

If you are using a self-signed certificate for your ONLYOFFICE Docs, Nextcloud will not validate such a certificate and will not allow connections to or from ONLYOFFICE Docs. You can turn off the certificate verification in one of two ways:

1. Check the **Disable certificate verification (insecure)** box on the ONLYOFFICE administration page, **Server settings** section, within your Nextcloud.
2. Change the Nextcloud config file manually. Locate the Nextcloud config file (*/nextcloud/config/config.php*) and open it. Add the following entry to the `$CONFIG` array (if the array already has an `onlyoffice` entry, add the key to it):

   ```php
   'onlyoffice' => array (
       'verify_peer_off' => true,
   ),
   ```

   Nextcloud reads this entry only as long as `verify_peer_off` has never been set in the UI or with an `occ` command (see the [configuration parameters](#basic-configuration-ui--occ)). Once the server settings are saved, the **Disable certificate verification (insecure)** box takes precedence.

This will disable the certificate verification and allow Nextcloud to establish connection with ONLYOFFICE Docs. The setting applies only to the requests from Nextcloud to ONLYOFFICE Docs, not to the requests between Nextcloud instances connected through **Federated Cloud Sharing**.

If Nextcloud also uses a self-signed certificate, ONLYOFFICE Docs will not be able to download files from Nextcloud either. To disable the certificate verification on the ONLYOFFICE Docs side, set the [`services.CoAuthoring.requestDefaults.rejectUnauthorized`](../configuration/server-config/server-config.md#services.CoAuthoring.requestDefaults.rejectUnauthorized) parameter to `false` in the ONLYOFFICE Docs *local.json* configuration file and restart the ONLYOFFICE Docs services.

:::note
Please remember that this is a temporary insecure solution and we strongly recommend that you replace the certificate with one issued by a trusted CA. Once you do that, do not forget to uncheck the **Disable certificate verification (insecure)** box (or remove the `config.php` entry if `verify_peer_off` was never set in the UI or with `occ`), and set `rejectUnauthorized` back to `true`.
:::

### Background connection check

If the editors don't open or save documents after a period of proper functioning, the reason can be a problem in changing network settings or disabling any relevant services, or issues with the SSL certificate.

To detect this, the ONLYOFFICE app runs a background task on the server that checks the connection between your **Nextcloud instance** and **ONLYOFFICE Docs**, namely the availability of the server addresses and the validity of the JWT secret. The check is skipped if the Nextcloud address that ONLYOFFICE Docs uses is `localhost` or `127.0.0.1`. In this case, specify the **Server address for internal requests from ONLYOFFICE Docs** in the **Advanced server settings**.

If any issue is detected, the ONLYOFFICE editors are no longer registered, so files can no longer be created or opened in ONLYOFFICE. Members of the `admin` group get a notification, and also an e-mail if the **Enable e-mail notifications** box is checked (the default). While the error is stored, the check does not run again, so the editors do not come back on their own. Fix the cause, then save the server settings on the administration page or run `occ onlyoffice:documentserver --check`. Once the connection succeeds, the editors return.

By default, this background task runs once a day (`86400` seconds). If necessary, you can change the frequency with the `editors_check_interval` parameter (see the [advanced configuration](#advanced-configuration-configconfigphp)). To do so, open the Nextcloud config file (*/nextcloud/config/config.php*) and add the entry to the `$CONFIG` array with the required value in seconds. For example, to run the check hourly:

```php
'onlyoffice' => array (
    'editors_check_interval' => 3600,
),
```

To turn the check off, uncheck the **Enable background connection check to the editors** box on the administration page (the `cronChecker` parameter in the [basic configuration](#basic-configuration-ui--occ)), or set `editors_check_interval` to `0`.

## Advanced document permissions

The Advanced tab allows you to grant additional access rights only to those users specified in the Sharing tab without the ability to re-share the file. Depending on the chosen Custom permission option and the file type (docx, pptx, xlsx), you can grant different additional rights.

- If the **DOCX** file is shared with the Custom permission (Edit enabled, Share disabled) in the Sharing tab, you can set the given rights to only reviewing (**Review only**) or only commenting (**Comment only**) in the Advanced tab.
- If the **XLSX** file is shared with the Custom permission (Edit enabled, Share disabled) in the Sharing tab, you can set the given rights to only commenting (**Comment only**) or applying filtering for everyone (**Global filter**, which is enabled by default) in the Advanced tab.
- If the **PPTX** file is shared with the Custom permission (Edit enabled, Share disabled) in the Sharing tab, you can set the given rights to only commenting (**Comment only**) in the Advanced tab.
- If the **PDF** file is shared with the Custom permission (Edit enabled, Share disabled) in the Sharing tab, you can set the given rights to only filling out (**Form Filling**) in the Advanced tab.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

1. When creating a new file, the user navigates to a document folder within Nextcloud and clicks the **Document**, **Spreadsheet** or **Presentation** item in the **new (+)** menu.

2. The browser invokes the *create* method in the */lib/Controller/editorController.php* controller. This method adds a copy of a file from the *assets* folder to the folder the user is currently in.

3. When opening an existing file, the user navigates to it within Nextcloud and selects the **Open in ONLYOFFICE** menu option.

4. A new browser tab is opened and the *index* method of the */lib/Controller/editorController.php* controller is invoked.

5. The app prepares a JSON object with the following properties:

   - **url** - the URL that ONLYOFFICE Docs uses to download the document;
   - **callbackUrl** - the URL that ONLYOFFICE Docs informs about status of the document editing;
   - **documentServerUrl** - the URL that the client needs to respond to ONLYOFFICE Docs (can be set at the administrative settings page);
   - **key** - the *UUID+Modified Timestamp* to instruct ONLYOFFICE Docs whether to download the document again or not.

6. Nextcloud takes this object and constructs a page from *templates/editor.php* template, filling in all of those values so that the client browser can load up the editor.

7. The client browser makes a request to the JavaScript library from ONLYOFFICE Docs and sends ONLYOFFICE Docs the DocEditor configuration with the above properties.

8. Then ONLYOFFICE Docs downloads the document from Nextcloud and the user begins editing.

9. ONLYOFFICE Docs sends a POST request to *callbackUrl* to inform Nextcloud that a user is editing the document.

10. When all users and client browsers are done with editing, they close the editing window.

11. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, ONLYOFFICE Docs sends a POST to *callbackUrl* letting Nextcloud know that the clients have finished editing the document and closed it.

12. Nextcloud downloads a new version of the document, replacing the old one.

## Converting files

ONLYOFFICE Docs uses Office Open XML format as a basis when opening and editing files. If the file format is different from OOXML, it will still be converted to the corresponding OOXML for the ONLYOFFICE Docs proper work and faster performance. When the file is saved to its original format, it is converted back from OOXML. As the formats are fundamentally different, some data (such as charts, tables, autoshapes or images) and formatting can be lost due to the simple reason that some formats (*csv*, *txt*, etc.) do not support them or treat them differently than OOXML standard does.

That is why the ONLYOFFICE app treats formats differently:

- OOXML files and *pdf* open for editing.
- Formats that can be edited with a risk of losing data, such as *odt*, *ods*, *odp*, *rtf*, *txt*, *csv*, *tsv*, *epub* or *html*, open for viewing only by default. To open them for editing, check them in the **Open the file for editing (due to format restrictions, the data might be lost when saving to the formats from the list below)** list in the settings. *txt* and *csv* are checked by default.
- Other formats, such as *doc*, *xls*, *ppt*, *md* or *hwp*, open for viewing only and cannot be edited.

For *doc*, *xls*, *ppt* and similar formats, as well as for *odt*, *ods*, *odp*, *rtf* and other ones from the list above (but not *txt*, *csv* or *tsv*), the file context menu has the **Convert with ONLYOFFICE** option. It creates an OOXML copy of the file in the same folder.

## Known issues

If you run into a problem that is not listed here, report it in the app's [GitHub issue tracker](https://github.com/ONLYOFFICE/onlyoffice-nextcloud/issues).

### Connecting external storages

Adding the storage using the **External storages** app has issues with the co-editing in some cases. If the connection is made using the same authorization keys (the *Username and password* or *Global credentials* authentication type is selected), then the co-editing is available for the users. If different authorization keys are used (*Log-in credentials, save in database* or *User entered, store in database* authentication options), the co-editing is not available. When the *Log-in credentials, save in session* authentication type is used, the files cannot be opened in the editor. To block opening files from external storages in ONLYOFFICE completely, use the `restrictExternalStorage` parameter (see the [basic configuration](#basic-configuration-ui--occ)).

### Federated Cloud Sharing

If the document is shared using the **Federated Cloud Sharing** app, the co-editing between the Nextcloud instances connected to different ONLYOFFICE servers will not be available. Users connected to the same ONLYOFFICE Docs server can co-edit the document, but users connected to two (or more) different ONLYOFFICE Docs servers will not be able to collaborate on the same document in real time. Co-editing also requires the ONLYOFFICE app on the remote instance, since the document key is requested from it. Without the app, the file still opens, but the users of the two instances edit it in separate sessions.

### Files shared without download permission

ONLYOFFICE Docs downloads the file from Nextcloud to open it. For a file shared without download permission, Nextcloud allows this download only if the **Secret key** is specified in the ONLYOFFICE settings. Without the secret key, such files do not open in the editor.

When accessing a document without download permission, file printing and using the system clipboard are not available. Copying and pasting within the editor is available via buttons in the editor toolbar and in the context menu. The `disable_download` parameter (see the [advanced configuration](#advanced-configuration-configconfigphp)) has the same effect in the editor for all users and files.

### Editing in other tools at the same time

If a lock provider, such as the [Temporary File Lock](https://apps.nextcloud.com/apps/files_lock) app, is installed, the ONLYOFFICE app uses Nextcloud file locking: it locks the file while it is being edited in ONLYOFFICE and opens a file locked by another user or app for viewing only. Without a lock provider, nothing prevents a file from being edited in ONLYOFFICE and in other tools at the same time, and changes may be overwritten or lost.
