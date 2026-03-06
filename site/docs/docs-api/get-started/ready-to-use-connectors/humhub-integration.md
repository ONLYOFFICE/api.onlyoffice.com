---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/humhub.svg
---

# HumHub integration

This [module](https://github.com/ONLYOFFICE/onlyoffice-humhub) enables users to edit office documents from [HumHub](https://www.humhub.com/) using ONLYOFFICE Docs.

The module is available in the official [HumHub Marketplace](https://marketplace.humhub.com/module/onlyoffice).

## Features

- Currently, the following document formats can be opened and edited with this module: DOCX, XLSX, PPTX.
- The following formats are available for viewing only: ODT, ODS, ODP, DOC, XLS, PPT, TXT, PDF.
- The following formats can be converted into OOXML: ODT, ODS, ODP, DOC, XLS, PPT, TXT, CSV.
- The module will create a new **Edit/View** menu option for Office documents. This allows multiple users to collaborate in real time and to save back those changes to HumHub.

## Installing ONLYOFFICE Docs

You will need an instance of ONLYOFFICE Docs (Document Server) that is resolvable and connectable both from HumHub and any end clients. If that is not the case, use the official [ONLYOFFICE Docs documentation page](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx). ONLYOFFICE Docs must also be able to POST to HumHub directly.

The easiest way to start an instance of ONLYOFFICE Docs is to use [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer).

## Installing ONLYOFFICE module for HumHub

Either install it from [HumHub Marketplace](https://marketplace.humhub.com/module/onlyoffice) or clone the [repository](https://github.com/ONLYOFFICE/onlyoffice-humhub) inside one of the folders specified by *moduleAutoloadPaths* parameter. For more information, see [HumHub Documentation](https://docs.humhub.org/docs/develop/environment#module-loader-path).

## Configuring ONLYOFFICE module for HumHub

To configure the module, navigate to **Administration -> Modules**. Find the ONLYOFFICE module and click **Configure**.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to ONLYOFFICE Docs and for security reasons and data integrity. Specify your own **JWT Secret** on the HumHub configuration page. In the ONLYOFFICE Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## How it works

The ONLYOFFICE integration follows the API documented [here](../basic-concepts.md).

1. When creating a new file, the user will be provided with **Document**, **Spreadsheet** or **Presentation** options in the **Create document** menu.

2. The browser invokes the *index* method in the */controllers/CreateController.php* controller.

3. When opening an existing file, the user will be provided with **View document** or **Edit document** depending on the file extension.

4. A popup is opened and the *index* method of the */controllers/OpenController.php* controller is invoked.

5. The app prepares a JSON object with the following properties:

   - **url** - the URL that ONLYOFFICE Docs uses to download the document;
   - **callbackUrl** - the URL that ONLYOFFICE Docs informs about status of the document editing;
   - **key** - the random MD5 hash to instruct ONLYOFFICE Docs whether to download the document again or not;
   - **title** - the document title (name);
   - **id** - the user identification;
   - **name** - the user name.

6. HumHub takes this object and constructs a page from *views/open/index.php* template, filling in all of those values so that the client browser can load up the editor.

7. The client browser makes a request to the JavaScript library from ONLYOFFICE Docs and sends ONLYOFFICE Docs the DocEditor configuration with the above properties.

8. Then ONLYOFFICE Docs downloads the document from HumHub and the user begins editing.

9. ONLYOFFICE Docs sends a POST request to *callbackUrl* to inform HumHub that a user is editing the document.

10. When all users and client browsers are done with editing, they close the editing window.

11. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, ONLYOFFICE Docs sends a POST to *callbackUrl* letting HumHub know that the clients have finished editing the document and closed it.

12. HumHub downloads a new version of the document, replacing the old one.

Download the ONLYOFFICE module for HumHub [here](https://github.com/ONLYOFFICE/onlyoffice-humhub).
