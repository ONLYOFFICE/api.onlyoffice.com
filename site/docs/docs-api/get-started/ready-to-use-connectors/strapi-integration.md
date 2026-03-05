---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/strapi.svg
---

# Strapi integration

This [plugin](https://github.com/ONLYOFFICE/onlyoffice-strapi) enables users to edit office documents from [Strapi](https://strapi.io/) using ONLYOFFICE Docs.

## Features

- Currently, the following document formats can be opened and edited with this plugin: DOCX, XLSX, PPTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOCM, DOCX, DOT, DOTM, DOTX, EPUB, FB2, FODP, FODS, FODT, HTM, HTML, MHT, ODP, ODS, ODT, OTP, OTS, OTT, OXPS, PDF, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, PPTX, RTF, TXT, XLS, XLSM, XLSX, XLT, XLTM, XLTX, XML, XPS.
- The plugin will create a new **Edit in ONLYOFFICE** menu option within the document library for office documents. This allows multiple users to collaborate in real time and to save back those changes to Strapi.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from Strapi and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to Strapi directly.

The easiest way to start an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer).

## Installing ONLYOFFICE plugin for Strapi

To start using ONLYOFFICE Docs with Strapi, follow these steps:

1. Change the Strapi middlewares file: *strapi/config/middlewares.js*.

   To allow inserting a frame with the editor and loading *api.js*, replace the *strapi::security* line in this file with the following:

   ``` js
   const config = {
     name: "strapi::security",
     config: {
       contentSecurityPolicy: {
         useDefaults: true,
         directives: {
           "script-src": ["'self'", "https:", "http:"],
           "frame-src": ["'self'", "https:", "http:"],
         },
       },
     },
   }
   ```

   If such a config already exists, you just need to add *directives*.

2. Install the plugin in your Strapi project:

   ``` sh
   npm install onlyoffice-strapi --save
   ```

3. After successful installation, you have to rebuild the admin UI so it will include this plugin. To rebuild and restart Strapi, run:

   ``` sh
   # using yarn
   yarn build
   yarn develop

   # using npm
   npm run build
   npm run develop
   ```

## Configuring ONLYOFFICE plugin for Strapi

You can configure the ONLYOFFICE plugin via Strapi **Dashboard -> Settings -> Global settings -> ONLYOFFICE**. On the settings page, enter:

- **Document server address**. The URL of the installed ONLYOFFICE Docs.
- **Document server JWT secret key**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own secret key on the Strapi settings page. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Using ONLYOFFICE plugin for Strapi

Users are able to view, edit, and co-author documents added to the Strapi Media Library. Documents available for viewing/editing can be found and sorted on the ONLYOFFICE file page within Strapi. The editor opens by clicking on the file name.

### Access rights

- Opening files for editing: roles with the **Update (crop, details, replace) + delete** permission setting.
- Opening files for viewing: roles with the **Access the Media Library** permission setting.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

Download the ONLYOFFICE plugin for Strapi [here](https://github.com/ONLYOFFICE/onlyoffice-strapi).
