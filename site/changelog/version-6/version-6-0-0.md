---
sidebar_label: v6.0.0
sidebar_position: -1
---

# Version 6.0.0 (June 23d, 2025)

## New features

- **DocSpace**: Updated the [DocSpace Backend REST API documentation](../../docspace/api-backend/get-started/basic-concepts.md) for version 3.2.0.
- **Docs API**:
  - Added the `theme-white` and `theme-night` theme IDs to the [`editorConfig.customization.uiTheme`](../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#uitheme) parameter.
  - Added opening for [odg](../../docs/docs-api/usage-api/config/document/document.md#filetype) format.
  - Added opening for [md](../../docs/docs-api/usage-api/config/document/document.md#filetype) format.
  - Added the ability to [preload](../../docs/docs-api/get-started/configuration/preload.md) the editor static resources.
  - Added the [`editorConfig.customization.forceWesternFontSize`](../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md#forcewesternfontsize) parameter for the Chinese (Simplified) UI.
  - Added the [`editorConfig.customization.layout.header.user`](../../docs/docs-api/usage-api/config/editor/customization/customization-white-label.md#layoutheaderuser) parameter.
  - Added conversion from [vsdm, vsdx, vssm, vssx, vstm, vstx](../../docs/docs-api/additional-api/conversion-api/conversion-tables.md#diagram-document-file-formats) formats.
  - Added the `diagram` document type to the [`documentType`](../../docs/docs-api/usage-api/config/config.md#documenttype) parameter.
- **Office API**: Updated the [Office API documentation](../../docs/office-api/more-information/changelog.md#version-90) for version 9.0.0.
- **Plugins and macros**: Updated the [Plugins and macros documentation](../../docs/plugin-and-macros/more-information/changelog.md#version-90) for version 9.0.0.

## Improvements

- **Plugins and macros**:
  - Added a link to the [plugins storybook](https://onlyoffice.github.io/storybook/static/?path=/docs/components-button--docs).
  - Updated the [Plugin samples](../../docs/plugin-and-macros/samples/plugin-samples/plugin-samples.md) page.
  - Updated the [Get started](../../docs/plugin-and-macros/get-started/get-started.md) structure.

## Bugfixes

- **Common**: Renamed titles of documentation sections.
- **Docs API**: Fixed the [Automation API examples](../../docs/docs-api/samples/external-access-to-the-document-editing/external-access-to-the-document-editing.md) and usage documentation.
- **Plugins and macros**: Fixed descriptions and samples of the [Plugins and macros section](../../docs/plugin-and-macros/get-started/get-started.md).

## Deprecations

- **Plugins and macros**: The [`attachEvent`](../../docs/plugin-and-macros/interacting-with-editors/overview/how-to-attach-events.md#option-2-using-the-attachevent-method) method is deprecated. Use the [`attachEditorEvent`](../../docs/plugin-and-macros/interacting-with-editors/overview/how-to-attach-events.md#option-1-using-the-attacheditorevent-method) method instead.
