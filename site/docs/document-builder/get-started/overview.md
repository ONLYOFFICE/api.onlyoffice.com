---
sidebar_position: -3
---

**ONLYOFFICE Document Builder** is a C++ library used to create and edit Office Open XML format files (documents, spreadsheets and presentations) and save them to DOCX, XSLX, PPTX and PDF formats.

It allows you to build a document easily without the need to actually run a document processing editor. It also allows the developers to automate document building using the templates you create or inserting the data from some database of yours into a document or a set of documents. It has all the features of a common document editor but is lightweight and can be easily integrated into your document management system, CRM system, etc. using its [JavaScript API](../../../docs/office-api/get-started/overview.md).

## How to use

There are two ways to use ONLYOFFICE Document Builder in your own project:

1. Integrate this library into your own application. To get ONLYOFFICE Document Builder, visit [this page](./get-document-builder.md).

   After you download and unpack the files, the library is ready for [integration](../builder-framework/overview.md).

2. Use [Builder.App](../builder-app/overview.md), the provided executive binary wrapper for an easy start. The latest versions of executable files can always be downloaded [here](https://www.onlyoffice.com/document-builder.aspx?from=api). After the file download, run it and see the examples of how ONLYOFFICE Document Builder can be used without the need to write any application.

## Document Builder components

ONLYOFFICE Document Builder consists of four components:

| Component                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Builder.Framework](../builder-framework/overview.md) | A software tool that contains a collection of libraries, classes, and functions used to develop applications. The following frameworks are available: [C++](../builder-framework/C++/C++.md), [COM](../builder-framework/COM/COM.md), [Java](../builder-framework/Java/Java.md), [.Net](../builder-framework/Net/Net.md), [Python](../builder-framework/Python/Python.md). |
| [Builder.App](../builder-app/overview.md)             | The *docbuilder.exe* executable file that can be run from your application with the *.docbuilder* script file as a parameter to it.                                                                                                                                                                                                                                                                        |
| [Builder.Server](../builder-server/overview.md)       | The code for the sample of ONLYOFFICE Document Builder integration into your application.                                                                                                                                                                                                                                                                                                                  |
