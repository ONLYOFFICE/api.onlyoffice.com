---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/drupal.svg
---

# Drupal integration

The ONLYOFFICE [module](https://github.com/ONLYOFFICE/onlyoffice-drupal) enables users to edit files in the Media module from [Drupal](https://www.drupal.org/) using ONLYOFFICE Docs.

## Features

- Currently, the following document formats can be edited: DOCX, XLSX, PPTX, PDF.
- The following formats are available for viewing: DJVU, DOC, DOCM, DOT, DOTM, DOTX, EPUB, FB2, FODT, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, TXT, XPS, XML, CSV, FODS, ODS, OTS, XLS, XLSM, XLT, XLTM, XLTX, FODP, ODP, OTP, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM.
- The module also allows previewing files on public pages.
- The module will create a new **Edit in ONLYOFFICE** menu option within the document library for office documents. This allows multiple users to collaborate in real time and to save back those changes to Drupal.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Drupal and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to Drupal directly.

The easiest way to start an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer).

## Requirements

- **firebase/php-jwt**: 6.0.0 or higher

Make sure to run:

``` sh
composer require firebase/php-jwt:^6.0
```

## Installing ONLYOFFICE module for Drupal

To start using ONLYOFFICE Docs with Drupal, follow these steps:

### Step 1: Add the module

There are two options to add the Drupal module.

**Option 1**. Add a module with [Composer](https://www.drupal.org/docs/extending-drupal/installing-modules#s-add-a-module-with-composer).

This is the recommended method. Enter the following command at the root of your Drupal site:

``` sh
composer require onlyoffice/onlyoffice-drupal
```

To apply the localization settings, run:

``` sh
drush locale-check
drush locale-update
```

**Option 2**. Add a module [manually](https://www.drupal.org/docs/user_guide/en/extend-module-install.html).

New modules can no longer be uploaded through the Drupal web interface.

1. Go to the **ONLYOFFICE module for Drupal** project page on [drupal.org](https://www.drupal.org/project/onlyoffice/) and scroll to the **Releases** section at the bottom of the page. Click the **View all releases** link and choose the required version from the list.
2. Download the *tar.gz* or *zip* archive for your chosen release.
3. Extract the archive and place the module folder into your site's `/modules/contrib/` directory.
4. Proceed to enable the module as described in the next section.

:::note
The "Add new module" UI option with a URL field has been removed from Drupal core. Manual installation now requires downloading and placing the files directly into the modules directory.
:::

### Step 2: Enable the module

After installation (by either method above), enable the module using one of the following approaches:

**Option 1**. Using the [Drupal administrative interface](https://www.drupal.org/docs/extending-drupal/installing-modules#s-using-the-drupal-user-interface-easy).

1. In the **Manage** administrative menu, navigate to the **Extend** page (admin/modules).
2. Locate the **ONLYOFFICE Connector** module and check the box.
3. Click **Install** to enable the module.

**Option 2**. Using the command line.

1. Run the following **Drush** command, giving the project name as a parameter:

   ``` sh
   drush pm:enable onlyoffice
   ```

2. Follow the instructions on the screen to complete the process.

## Configuring ONLYOFFICE module for Drupal

In Drupal, open the *\~/config/system/onlyoffice-settings* page with administrative settings for **ONLYOFFICE** section. Or follow **Configuration → MEDIA → ONLYOFFICE Connector settings**. Enter the following address to connect ONLYOFFICE Docs:

``` sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **ONLYOFFICE Docs** installed. The address must be accessible from both the user's browser and the Drupal server. The Drupal server address must also be accessible from ONLYOFFICE Docs for correct work. You can [register](https://www.onlyoffice.com/docs-registration.aspx?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **Secret key** in the Drupal administrative configuration. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Using ONLYOFFICE module for Drupal

### Edit files already uploaded to Drupal

All office files added to Media can be opened for editing. In the last table column, call the drop-down list and select the **Edit in ONLYOFFICE** action. The editor opens in the same tab. Users with Administrator rights are able to co-edit files using ONLYOFFICE Docs. All changes are saved in the same file.

### Create new posts

When creating a post, you can add the new ONLYOFFICE element:

1. Go to **Structure → Content types → Manage fields**. On the opened page, click **Add field**. Add a new field: **File** or **Media**. Set the label and save.
2. For the added **File** field, specify the file extensions. Go to **Structure → Content types → Manage fields**. In the **Allowed file extensions** field, specify the file formats that will be shown in the editors (docx, xlsx, pptx).
3. For the added **Media** field, click the **Document** checkbox.
4. Go to **Structure → Media types → Document → Manage display**.
5. For the **Document** field, specify the *ONLYOFFICE Preview* format. By clicking on the gear symbol, you can specify the dimensions of the embedded editor window.

When you are done with the pre-settings, you can create posts on the **Content** tab. Click on the **Add Content** button and select the created content.

Specify title and select a file (if the content contains **File** fields).

For **Media** section, specify the name of the previously uploaded file.

Your site visitors will also be able to view the created page (**People → Permissions → View published content**).

### Work with forms

The ONLYOFFICE form section allows Drupal users to create new PDF forms: **Manage → Content → ONLYOFFICE form**.

**Creating, uploading, editing PDF forms**

To create a new PDF form, click the **Create & Upload** button. Select the **Blank** option and fill in the name for the new file.

To upload, select the **Upload** option and upload a PDF form from your device.

The created/uploaded file will appear in the list on the Forms page and open in editing mode in the ONLYOFFICE editor in a new tab.

**Publishing PDF forms on a Drupal page**

To add a PDF form to a Drupal page, some initial setup is required. Navigate to **Manage → Structure → Content types**. For the desired content type, select **Manage fields**. On the next page, click **Create a new field**, choose **ONLYOFFICE form**, and set a field name. This will add a field of the ONLYOFFICE form type to the selected content type.

To add a PDF form to a site page, navigate to **Manage → Content**. Click the **Add content** button and select the content type that includes the previously added ONLYOFFICE form field. In the form field, enter the name of the existing form. If the form hasn’t been created yet, click **Create new ONLYOFFICE form** to open the PDF Forms section, where you can upload or create a new PDF form. Finally, click the **Save** button to complete the page creation in Drupal.

**Filling out PDF forms**

On the Drupal page, users can fill out the form with their data. To submit the completed form, click the **Complete & Submit** button in the top editor panel.

Once submitted, the completed form will be sent to the site. Visitors can also download a copy to their device by opening the context menu in the top editor panel and selecting **Download as DOCX** or **Download as PDF**.

**Working with the filled forms**

In the **Manage → Content → ONLYOFFICE form → Submitted forms** section, Drupal users can view completed forms, organized by template name. To view all responses for a specific template, simply select the form's template name.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

Download the ONLYOFFICE module for Drupal [here](https://github.com/ONLYOFFICE/onlyoffice-drupal).
