---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/plone.svg
---

# Plone integration

This [plugin](https://github.com/ONLYOFFICE/onlyoffice-plone) allows users to edit office documents within [Plone](https://plone.org/) using ONLYOFFICE Docs.

## Features

- Currently, the following document formats can be edited: DOCX, XLSX, PPTX.
- The following formats are available for viewing only: DJVU, DOC, DOCM, DOT, DOTM, DOTX, EPUB, FB2, FODT, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, TXT, XPS, XML, CSV, FODS, ODS, OTS, XLS, XLSB, XLSM, XLT, XLTM, XLTX, FODP, ODP, OTP, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM.
- The following formats are available for converting (download as): DOC, DOCM, DOCX, DOT, DOTM, DOTX, EPUB, FB2, FODT, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, XPS, XML, FODS, ODS, OTS, XLS, XLSB, XLSM, XLSX, XLT, XLTM, XLTX, FODP, ODP, OTP, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, PPTX.
- The following formats are available for converting to Office Open XML: DOC, DOCM, DOT, DOTM, DOTX, EPUB, FB2, FODT, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, XPS, XML, FODS, ODS, OTS, XLS, XLSB, XLSM, XLT, XLTM, XLTX, FODP, ODP, OTP, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM.
- The plugin will create a new **ONLYOFFICE Edit** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to Plone.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Plone and any end-clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to Plone directly.

The easiest way to start an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/onlyoffice/Docker-DocumentServer).

## Installing Plone ONLYOFFICE integration plugin

To start using ONLYOFFICE Docs with Plone, the following steps must be performed:

1. Installation instructions can be found under [Install Plone add-ons](https://6.docs.plone.org/admin-guide/add-ons.html).

2. Go to **Site Setup -> Add-ons** and press the **Install** button to enable plugin.

You could also install plugin via Docker:

``` sh
docker run -p 8080:8080 -e ADDONS="onlyoffice.plone" plone/plone-backend:6.0 start
```

:::note
Please note that if you have the previous plugin version installed (earlier plugin versions with the previous name *onlyoffice.connector*), please remove it before installing the new version.
:::

## Configuring Plone ONLYOFFICE integration plugin

To configure plugin, go to **Site Setup**. Scroll down to **Add-ons Configuration** section and press the **ONLYOFFICE Configuration** button.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict the access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **Secret key** on the Plone configuration page. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Developing Plone ONLYOFFICE plugin

Run this command to install the addon from the local repository:
   ```
   docker run -p 8080:8080 -e DEVELOP="/app/src/onlyoffice.plone" -v /path/to/onlyoffice.plone:/app/src/onlyoffice.plone plone/plone-backend:6.0 start
   ```

:::note
For more information, check [Developing packages variable](https://6.dev-docs.plone.org/install/containers/images/backend.html#developing-packages-variable).
:::

## Upgrade Plone ONLYOFFICE integration plugin

1. If you specified a concrete plugin version in your *buildout.cfg* file (so-called *pinning*, and a recommended practice), like *onlyoffice.plone = 1.0.0*, update this reference to point to the newer version. If the plugin version is not specified, then the latest version will be automatically loaded:

   ``` ini
   [versions]
   onlyoffice.plone = 1.0.1
   ```

2. Run *bin/buildout*. Wait until a new version is downloaded and installed.

3. Restart Plone. Your site may look weird, or even be inaccessible until you have performed the next step.

4. Navigate to the **Add-on** screen (add */prefs\_install\_products\_form* to your site URL) and in the **Upgrades** list select **onlyoffice.plone** and click **Upgrade onlyoffice.plone**.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

1. User navigates to a document within Plone and selects the **ONLYOFFICE Edit** action.

2. Plone prepares a JSON object for the ONLYOFFICE Docs with the following properties:

   - **url**: the URL that ONLYOFFICE Docs uses to download the document;
   - **callbackUrl**: the URL that ONLYOFFICE Docs informs about status of the document editing;
   - **key**: the *UUID+Modified Timestamp* to instruct ONLYOFFICE Docs whether to download the document again or not;
   - **title**: the document title (name).

3. Plone constructs a page from the *.pt* template, filling in all of those values so that the client browser can load up the editor.

4. The client browser makes a request to the JavaScript library from ONLYOFFICE Docs and sends ONLYOFFICE Docs the DocEditor configuration with the above properties.

5. Then ONLYOFFICE Docs downloads the document from Plone and the user begins editing.

6. ONLYOFFICE Docs sends a POST request to *callbackUrl* to inform Plone that a user is editing the document.

7. When all users and client browsers are done with editing, they close the editing window.

8. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, ONLYOFFICE Docs sends a POST to *callbackUrl* letting Plone know that the clients have finished editing the document and closed it.

9. Plone downloads a new version of the document, replacing the old one.

Download the Plone ONLYOFFICE integration plugin [here](https://github.com/ONLYOFFICE/onlyoffice-plone).
