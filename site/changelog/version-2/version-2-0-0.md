---
sidebar_label: v2.0.0
sidebar_position: -1
---

# Version 2.0.0 (February 12th, 2025)

## New features

- **Docspace**: Added the [Removed users page](../../docspace/api-backend/get-started/how-it-works/removed-users.md).
- **Docs API**:
  - Added the [`mobileEdit`](../../docs/docs-api/using-wopi/wopi-discovery.md#mobileEdit) WOPI action.
  - Added the [Checking PDF forms](../../docs/docs-api/get-started/how-it-works/checking-pdf-forms.md) page.
  - Added information on how to [call editor methods](../../docs/docs-api/get-started/frontend-frameworks/react.md#calling-editor-methods-in-the-react-component) in frameworks.
  - Added the [Key concepts](../../docs/docs-api/using-wopi/key-concepts.md) page for WOPI.
  - Added the [Config](../../docs/docs-api/using-wopi/config.md) page for WOPI.
  - Added [Docs API](../../docs/docs-api/more-information/changelog.md#version-83) version 8.3.
- **Office API**: Added [Office API](../../docs/office-api/more-information/changelog.md#version-83) version 8.3.
- **Plugins and macros**: Added [Plugins and macros](../../docs/plugin-and-macros/more-information/changelog.md#version-83) version 8.3.

## Improvements

- **Common**:
  - Increased build speed.
  - Renamed all files and links to kebab-case.
  - Added notifications for build and publish processes.
- **Docspace**: Added images for [JavaScript SDK samples](../../docspace/javascript-sdk/samples/authorization.md).
- **Docs API**:
  - Added a note about using a [token in the request body](../../docs/docs-api/additional-api/signature/request/token-in-body.md) and updated the [Signature section](../../docs/docs-api/additional-api/signature/signature.md).
  - Added a note about [default values](../../docs/docs-api/using-wopi/wopi-rest-api/checkfileinfo.md#required-response-properties) for WOPI.
  - Updated the [Overview page](../../docs/docs-api/using-wopi/overview.md) for WOPI.
- **Plugins and macros**: Added new [macro samples](../../docs/plugin-and-macros/samples/macro-samples/macro-samples.md).

## Bugfixes

- **Common**:
  - Removed tocs from the page start.
  - Removed a list of relative links, duplicated in the right pane.
  - Updated page and category titles.
- **Docs API**:
  - Restructured the [`CheckFileInfo` properties](../../docs/docs-api/using-wopi/wopi-rest-api/checkfileinfo.md) into tables.
  - Fixed key in [referenceData](../../docs/docs-api/usage-api/config/document/document.md#referencedata).
  - Fixed a note for [Automation API](../../docs/docs-api/usage-api/automation-api.md).
- **Plugins and macros**:
  - Fixed a link to the AI plugin.
  - Restructured the [Macro samples section](../../docs/plugin-and-macros/samples/macro-samples/macro-samples.md).
  - Removed the `InstallDeveloperPlugin` method from the changelog.
- **Desktop Editors**: Fixed variables for [desktop debugging](../../docs/desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md).
