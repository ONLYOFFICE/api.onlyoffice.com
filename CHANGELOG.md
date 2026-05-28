# Change log

## 8.7.0

### New features

#### Docs API

* Added `editorConfig.plugins.disable` parameter documentation
* Added Croatian language to version 9.4 changelog
* Removed deprecated `editorConfig.customization.commentAuthorOnly` parameter
* Added `roles` parameter to `onStartFilling` event and `destroyEditor` memory leak fix for v9.4

#### Office API

* Updated office-js-api reference documentation for version 9.4
* Added version 9.4 changelog with MergeDocuments and Color methods

#### Plugins and macros

* Updated plugins API reference documentation for version 9.4 (text annotations, form methods, comment events)
* Added version 9.4 changelog
* Improved `callCommand` documentation and added `asc_plugin_commands_log` debugging guide
* Added warning against calling API methods in `onTranslate` handler

#### Document Builder

* Published document comparison documentation and fixed CompareDocuments signature
* Added ability to select a specific sample via link

#### Common

* Added Video component and migrated all raw video tags

### Improvements

#### Office API

* Updated office-js-api reference documentation
* Fixed `CreateTable` argument order to match new (rows, cols) signature in samples

#### Docs API

* Updated screenshots with dark theme support across editor, customization, events, permissions, co-editing, reviewing, and other pages
* Added onRequestStartFilling screenshot to events page

#### Plugins and macros

* Normalized formatting to use backtick references across plugin configuration and customization pages
* Moved default values to header format on plugin configuration page
* Replaced static images with webm videos in macro samples
* Replaced generic "here" links with descriptive anchor text

#### Playground

* Replaced custom URL utilities with native URLSearchParams
* Loaded Monaco type libraries from Document Server

#### Localization

* Added dark theme support for zh-CN documentation screenshots

### Fixes

#### Docs API

* Fixed `onMakeActionLink` action.type to use string literal union
* Restructured `event.data` parameter tables on events page

#### Plugins and macros

* Fixed `doc` variable usage in `callCommand` error handling example
* Aligned `callCommand` parameter table column widths

#### Playground

* Fixed developer plugin installation to only apply for plugin script type
* Fixed null URL parameters coalesced to undefined
* Disabled Run button until editor is ready
* Fixed word type library loading for form editor
* Removed `installDeveloperPlugin` shim for v9.3.1

#### Localization

* Fixed stray Latin letters in zh-CN changelog
* Added missing Video import and frontmatter to zh-CN plugin pages
* Fixed ASCII quotes and spacing in zh-CN pages

#### Common

* Fixed broken anchor link to command logging in changelog

## 8.6.0

### New features

#### Docs API

* Added custom theme customization guide

#### Desktop

* Added custom theme customization guide

### Improvements

#### Docs API

* Removed "Defines"/"Specifies" prefix from parameter descriptions across config, editor, customization, document, methods, callback, connector, command service, additional API, and WOPI pages
* Renamed "Parameters" headings to "Request/Response parameters" in command service and additional API pages
* Redesigned API vs WOPI comparison table to feature-per-row format
* Renamed DocEditor constructor parameter from `placeholder` to `id`
* Improved license command response parameter table
* Updated connector window class introduction and removed italic parameter names
* Added `@onlyoffice/doceditor-types` package tip to DocEditor page

#### Plugins and macros

* Removed "Defines" prefix from plugin customization parameter descriptions

#### Desktop

* Removed "Defines" prefix from desktop editors usage API parameter descriptions

#### Common

* Replaced local config.d.ts with `@onlyoffice/doceditor-types` npm package

### Fixes

#### Docs API

* Fixed WOPI config and conversion API page errors
* Corrected broken relative links in editor config docs

## 8.5.0

### New features

#### Docs API

* Added DocEditor class with typed method signatures to TypeScript definition file
* Added mobile.disableForceDesktop customization parameter
* Added editorConfig.wopi section documentation
* Added user.roles parameter for PDF form filling
* Added reviewPermissions customization parameter
* Added startFillingForm customization parameter
* Added onSaveDocument event documentation
* Added onRequestFillingStatus event documentation
* Added onStartFilling event documentation
* Added roles parameter to onRequestStartFilling event

#### Playground

* Added auto-generated JSON schema from TypeScript types for Config Editor
* Added tri-state toggle (unset/true/false) and dimmed labels for unset controls in Config Editor
* Added Config section grouping for root-level primitive fields
* Added event handler checkboxes to Config Editor

### Improvements

#### Docs API

* Rewrote config reference pages with standardized formatting, backtick identifiers, and improved examples across document, editor, customization, permissions, embedded, plugins, and events sections
* Improved usage API method documentation with parameter headers, examples, and error descriptions
* Removed deprecated parameters: changeHistory, rename, author, created, onReady, user.firstname, user.lastname, plugins.url
* Standardized array type notation to TypeName[] format across all config pages
* Added missing document, editorConfig, and events sections to config overview page
* Updated images for the events page
* Documented removal of deprecated params in changelog entries for v6.1 and v6.3
* Used literal union types for mode, macrosMode, pointerMode, reviewDisplay, unit, tabStyle, and tabBackground config parameters
* Added supported language codes to lang parameter and regional settings to region parameter
* Documented actionLink sub-properties and insert/layout toolbar sub-properties in white label config
* Improved onMakeActionLink event documentation and extracted onRequestInsertImage undeclared note into callout
* Used danger admonitions for deprecated mailmerge and spellcheck.change events
* Rewrote editor, embedded, plugins, and white label config parameter descriptions for clarity
* Added JSDoc descriptions to all types and interfaces in TypeScript definition file
* Removed dead permissions.reader, canCoAuthoring, and embedded onBack event properties from config type definitions

#### Playground

* Unified form/JSON dirty tracking with bidirectional sync on tab switch
* Improved config schema types with per-document-type FileType unions and PlatformType alias
* Cleaned up playground editor config defaults and reduced re-renders
* Moved Run and Copy buttons from floating overlay to config editor header tab bar
* Added Reset button to config editor header tab bar
* Added toggleable sections for optional object and array properties in Config Editor

#### Common

* Added boolean token color to code syntax highlighting

### Fixes

#### Docs API

* Added missing autostart, isLink, and hml properties to config documentation
* Removed hardcoded permission values from sharingSettings.permissions
* Fixed broken anchors, links, and incorrect examples across config reference pages
* Corrected isForm type, commentGroups.view example, and grammar inconsistencies
* Removed .ashx extension and trailing slash from example URLs
* Fixed MCP documentation formatting issues
* Added deprecated fileChoiceUrl, mergeFolderUrl, saveAsUrl, and sharingSettingsUrl parameters to editor config documentation
* Restructured event sections with consistent description flow, typed parameters, and improved cross-references
* Simplified config section descriptions and updated JSDoc comments
* Cleaned up code examples in customization docs
* Used backtick formatting for types in methods parameter tables
* Used info admonitions for licensing notes in methods page
* Synced config descriptions across TypeScript definitions, docs, and zh-CN translations
* Added interface-level JSDoc to RecentDocument and DocumentTemplate types

#### Playground

* Fixed JSON editor changes not syncing to config on Run
* Fixed editor re-initialization and script replacement prompts
* Fixed enum deduplication and fileType grouping by documentType
* Fixed button style scoping and ArrayControl schema resolution
* Fixed anonymous mode, dark mode compatibility, and PDF form document names
* Fixed config editor section content padding and removed short descriptions from object section headers
* Fixed form state sync when applying config from code tab
* Fixed event handler function signatures in Config Editor
* Replaced inline descriptions with tooltips in config editor section headers
* Fixed bold and code formatting in config editor tooltips
* Fixed tooltip display for array-type properties in Config Editor
* Added italic markdown support in Config Editor tooltips

#### Homepage

* Linked home page Try buttons directly to playgrounds

#### Plugins and macros

* Updated macro code samples and synced Chinese localization
* Fixed method links and table formatting in custom AI tool samples
* Removed trailing slash before anchor in Asc.scope object link

#### Localization

* Fixed zh-CN product name spacing and synced translations for config pages

## 8.4.1

### Fixes

#### Playground

* Fixed editor re-initialization when script value changes in playground
* Fixed prompt before replacing modified script on script type change

## 8.4.0

### New features

#### DocSpace

* Added MCP server documentation section with getting started guides, client connection instructions, tutorials, use cases, troubleshooting, distribution guides, configuration reference, tools reference, and glossary
* Added MCP server homepage card and sidebar navigation

#### Playground

* Added Config Playground for the Docs API with interactive JSON Forms editor, live document preview, and split-pane layout
* Added screenshots for Config Playground cards

#### Docs API

* Added new entry-point page for the DocsAPI.DocEditor class

### Improvements

#### Playground

* Merged Config Playground into unified playground page
* Renamed toolbar labels for clarity (Preview→Mode, Document→File, Connector→Automation API)
* Replaced tooltip with popover for click-based interaction in Config Playground
* Unified playground card components into a single shared module
* Removed redundant Builder card from playground cards

#### Docs API

* Rewrote over 25 integration guides for improved integrator clarity, including how-it-works, saving-file, co-editing, document-history, security, JWT signature samples, and more
* Renamed Advanced parameters to Configuration overview and connected with DocEditor and Config pages
* Added cross-links to the DocEditor page from methods, preload, and installation pages
* Updated images for the commenting page

#### Office API

* Updated office-js-api documentation

#### Plugins and macros

* Removed broken PDF API method links from plugin changelog

#### DocSpace

* Consolidated MCP server distribution into a combined page
* Revised MCP server tutorial titles for clarity
* Refactored MCP server connection instructions

#### Localization

* Added Chinese translation for the Config Playground page
* Synced zh-CN config pages with English source
* Fixed Chinese localization for macro code snippets and paths

#### Common

* Consolidated Window type augmentations into global.d.ts

### Fixes

#### Playground

* Fixed Config Playground styling: improved color tokens, tooltips, focus indicators, section spacing, and SEO metadata
* Fixed Config Playground performance: optimized rendering with memoization, lazy serialization, and debounced updates
* Fixed Config Playground UI: consolidated action buttons into floating panel, corrected heading hierarchy, and hidden Ask AI button
* Fixed playground document key generation to use crypto.randomUUID
* Fixed File dropdown to show Sample before Blank
* Fixed Config Playground to use PDF format for form document type
* Fixed Config Playground info icon style and color

#### Docs API

* Fixed Try page PDF using blank instead of demo document
* Fixed opening-file and saving-file overview step lists
* Fixed action-link semicolon consistency
* Added missing onMakeActionLink event to complete config example
* Sorted word file extensions alphabetically

#### DocSpace

* Fixed grammar, punctuation, and broken links across MCP server docs
* Fixed sidebar labels and configuration category structure in MCP server docs
* Fixed capitalization issues in MCP server documentation
* Fixed broken links in MCP server use-cases sections
* Fixed troubleshooting pages order

## 8.3.1

### Fixes

#### Docs API

* Fixed Try page documents not opening due to placeholder URLs overriding actual document URLs in editor configuration

## 8.3.0

### New features

#### DocSpace

* Added live Public room embed example to the SDK get-started page
* Added embedding modes comparison table to the DocSpace SDK get-started page
* Added DocSpace SDK playground page with interactive editor and live preview

#### Playground

* Added Document Server settings dialog to playground toolbar

### Improvements

#### DocSpace

* Updated main page button to link to playground instead of cloud registration
* Replaced upload-and-summarize-document use case with a refocused chat-summary text flow
* Updated DocSpace playground to new portal

#### Office API

* Updated office-js-api documentation

#### Plugins and macros

* Updated Freeze panes macro sample code snippet
* Updated complete-address-information macro sample code snippet

#### Localization

* Added missing Chinese localization and frontmatter to macro samples
* Removed zh-CN DocSpace and workspace translations

### Fixes

#### Playground

* Fixed playground settings button: updated icon, colors, and click feedback
* Fixed DocSpace playground: added notice about Safari and incognito mode limitations
* Fixed DocSpace playground: removed undocumented buttonWithLogo from selector snippets
* Fixed DocSpace playground: added permission comments to Manager config params
* Fixed DocSpace playground: prevented iframe from overlapping resize handle
* Fixed DocSpace playground: re-run script on theme change to update preview
* Fixed DocSpace playground: allowed user-specified src to override default portal URL
* Fixed playground pages: moved JSX imports to top level instead of mdx-code-block fence
* Fixed playground builder mode: stripped single-line comments before collapsing newlines

#### DocSpace

* Fixed DocSpace auth: use SDK iframe login with hash instead of cross-origin fetch

#### Docs API

* Fixed Document API overview: wrong method prefix, fragile line refs, stray "spreadsheet"

#### Common

* Fixed button being required in Features type for Workspace and Samples pages
* Replaced console.log with visible actions in Playground connector examples
* Renamed "Word" to "Text Document" in Playground editor selector
* Fixed inconsistent admonition types for definitional and prerequisite notes
* Removed redundant "Please note" prefixes from admonitions, fixed "extrenal" typo
* Fixed blockquotes formatting across documentation

## 8.2.0

### New features

#### DocSpace

* Added SDK documentation with quick-start guides for C#, Java, PHP, Python, TypeScript, and Postman
* Added MCP server use-case samples to the Samples page

#### Common

* Added a new Samples page with filterable sample cards across all documentation sections
* Added search input with optimized filtering to the Samples page
* Added ?doctype= URL parameter support to the Samples page
* Added pagination and tag-based filtering to the Samples page
* Added Document Builder samples to the Samples page
* Added Document Connectors samples to the Samples page

### Improvements

#### Common

* Upgraded React to 19.2.0
* Upgraded Docusaurus to 3.10.0 and openapi-docs to 5.0.0
* Added description metadata to all sample pages across documentation
* Added tags and descriptions to sample pages across all documentation sections
* Shortened sample filenames and headers for better readability and URL consistency
* Added clickable tag filtering on the Samples page
* Renamed "Favorite/Recommended" to "Favorites/Frequently used" on the Samples page
* Renamed "AI" to "AI Tools" tag
* Renamed "Documents Editors" to "Document Editors"
* Removed tag display limit on the Samples page
* Translated the playground to Chinese (zh-CN)
* Moved generate-samples-data script to .github/scripts
* Cleaned up unused CSS styles, variables, comments, and normalized hex values

#### Homepage

* Updated tag labels in favorites samples

#### Docs API

* Removed unnecessary backslash escaping from fragment links in WOPI docs

#### Plugins and macros

* Fixed heading level for localeTranslate in plugin configuration docs
* Updated AI plugin and converting VBA macros documentation
* Renamed custom AI tools files to kebab-case and headers to sentence case

#### Playground

* Updated form inputs on template fill and restyled radio buttons
* Fixed redundant onChangeContentControl updates
* Restored playground plugin config.json

### Fixes

* Fixed homepage sample card links and cleaned up descriptions
* Fixed flash of favorites on first load with doctype parameter on the Samples page
* Fixed Samples page loading speed
* Removed unnecessary min-height from description and tags row on the Samples page
* Fixed curly quotes replaced with straight quotes in import statements
* Fixed pipe character alignment with table headers across EN and zh-CN docs
* Fixed missing table cell and closing pipe in zh-CN WOPI config
* Fixed extra space inside bold marker in content controls navigation
* Fixed extra indentation for list items in managing-versions FAQ
* Fixed missing blank lines before code blocks, tables, and lists
* Fixed heading levels: use H2 instead of H3 for top-level sections
* Fixed typos across documentation (raws → rows, standart → standard, exabled → enabled, DocSpaace → DocSpace)
* Fixed punctuation: use Chinese period in zh-CN working-with-content-controls
* Fixed links to renamed custom AI tools pages
* Fixed active navbar link highlight to use accent color
* Fixed duplicate .menu__link CSS rule
* Fixed missing space before brace in CSS selector
* Fixed broken links to language-specific-examples in changelog

## 8.1.0

### New features

#### Plugins and macros

* Reworked the Get Started section with improved quick-start tutorials
* Added Hello World Plugin guide
* Added Hello World Macro guide
* Added Comment Text AI Tool tutorial
* Added Insert Formulas Row macro sample for spreadsheet editor
* Added Create AI assistant documentation with example

#### Docs API

* Added comprehensive Document Server configuration documentation
* New configuration sections include ActiveMQ, RabbitMQ, Redis, AI settings, security, token, storage, WOPI integration, and more
* Restructured Automation API documentation into a dedicated section with separate pages for Connector class and Connector window methods
* Added Working with content controls sample for Automation API
* Added links to all editor methods (document, spreadsheet, presentation, PDF, form) in the connector executeMethod section

#### Office API

* Updated PDF API documentation (ApiRun, ApiRichRun, ApiTextPr, ApiShape classes)
* Updated Presentation API documentation
* Updated Spreadsheet API documentation

### Improvements

#### Common

* Updated 165 images across the documentation with higher quality screenshots
* Added new dark mode variants for plugin-related images (`plugin-manager.dark.png`, `submit-plugin.dark.png`)
* Enhanced visual clarity for plugin screenshots and structure diagrams
* Added `rebuild-server-config.yaml` workflow for automated DocServer config documentation rebuilds
* Removed legacy GIF assets and replaced with webm videos
* Renamed webm files from camelCase to kebab-case for consistent naming
* Replaced non-breaking spaces (U+00A0) with regular spaces across documentation
* Enabled new S3 sync scheme for production deployment

#### Docs API

* Removed outdated Office JavaScript API limitation notes
* Removed redundant callback descriptions from how-to-call-commands
* Consolidated `ContextMenuItem` type definitions in connector class documentation
* Updated server config link to internal documentation
* Redesigned review changes sample with live demo UI and change counter
* Updated filling out the form and working with comments samples

#### Plugins and macros

* Converted blockquotes to admonitions in macro samples

#### Homepage

* Swapped DocSpace/Docs positioning on the first screen
* Replaced blog articles on homepage
* Fixed Cyrillic "С" (U+0421) replaced with Latin "C" in CSS class names
* Reduced DOM nesting and removed unused assets
* Changed navbar sorting

#### Localization

* Localized external links on zh-CN plugin and macro pages with Chinese equivalents
* Added zh-CN translation for AI plugin page with localized links

#### Playground

* Removed unused legacy scripts (`cell/api.js`, `slide/api.js`, `word/api.js`)
* Removed deprecated plugin folder
* Restructured `DEFAULT_SCRIPTS` configuration for better flexibility

### Fixes

* Fixed link in documentation
* Fixed Docusaurus configuration to exclude `index.md` from category index convention
* Fixed unnecessary `setTimeout` wrapper in insert-formulas-row macro sample
* Fixed example in macro documentation
* Changed warning admonition to info where appropriate
* Fixed broken links across documentation
* Fixed external components

## 8.0.0

### New features

#### Document Builder

* Restructured documentation to concatenate all programming languages on single pages instead of separate pages per language.
* Rewrote the Builder Framework overview to emphasize runtime usage patterns.
* Added comprehensive CLI documentation with improved examples.
* Changed code examples from `.docbuilder` extension to `.js` for better IDE support.
* Improved the Document Builder API async workflow documentation with detailed response parameters.
* Added curl command examples throughout the API documentation.

#### Plugins and Macros

* Added AI custom tools text annotations feature documentation.
* Added new PDF macros samples.
* Added freeze panes macro example.
* Added bookmark last view macro example.
* Added OData plugin to plugin examples.
* Added Chinese translations for the entire Plugins API section.

#### Office API

* Added PDF section support in the Playground.
* Updated the Playground with new default scripts for SSE.
* Added comprehensive Chinese translations for Office API usage documentation.
* Added **Document** type selector to the Playground toolbar for choosing between documents with blank or sample content.
* The Playground now opens with a sample document when accessed from the Playground overview pages.

#### DocSpace

* Added MCP server use cases documentation.
* Added new samples to API Backend documentation.
* Updated Plugins SDK documentation with improved structure and examples.

### Improvements

#### Common

* Simplified Playground implementation by removing redundant variables.
* Improved code quality by removing unused comments across the codebase.
* Updated integration documentation for WordPress, SuiteCRM, Strapi, SharePoint, Redmine, Plone, ownCloud, Odoo, Nuxeo, Moodle, and Mattermost with Chinese translations.

#### Document Builder

* Added link to supported properties in argument parameter descriptions.
* Improved API page formatting and readability.
* Standardized Parameters section with tabs for all languages.
* Updated Python examples in CDocBuilderValue docs to use direct method calls.
* Improved signature documentation consistency and formatting.
* Moved debugging docs to using-cli section.

#### Docs API

* Updated connectors documentation.
* Fixed grammar in integration docs.

#### Office API

* Updated input-helper pages.
* Added deprecation info for legacy methods.
* Fixed `scrollWidth` null reference issue in code blocks.
* Fixed select popup position in Playground.

### Fixes

* Fixed broken links across Document Builder documentation.
* Fixed broken links throughout the documentation site.
* Fixed wrong arguments in some Office API methods.
* Fixed Recording macros page.
* Fixed editor type for forms in Office API.
* Corrected `review.reviewDisplay` documentation.
* Fixed styles for announcement bar with multistring content.
* Fixed problem with previous merge deleting files.
* Fixed Currency Conversion macro to use proper `RecalculateAllFormulas` API instead of internal method with timeout.
* Fixed Hide or Unhide Rows and Columns macro example.
* Fixed Java syntax highlighting in CDocBuilder and CDocBuilderValue method examples.
* Fixed C++, Java, .Net, Python, and COM code samples in Document Builder methods (SaveFile, SetProperty, Execute, ExecuteCommand, CreateInstance).
* Fixed delete-annotations sample.
* Fixed markdown table alignment in Document Builder API page.
* Fixed markdown formatting in Mattermost and Nextcloud integration docs.
* Fixed broken markdown link in Chinese writing-macros.md.
* Fixed ASCII punctuation in Chinese saving-file.md translation.
* Fixed editor type in Playground.
* Standardized note format in builder-framework docs.
* Hidden comparing-documents.md pages.
* Fixed usage API documentation examples and improved consistency.
* Fixed AI Tools samples video.
* Fixed default scripts for PDF, builder, and mobile in Playground.
* Fixed announcement bar on try-docs example page.
* Updated PDF document name from 'demo' to 'blank' in Playground.
* Shortened case titles.
* Fixed Playground initialization issue with document type when opening via URL parameters.

### Breaking changes

#### Document Builder

* Documentation structure changed from separate language pages to unified multi-language pages. Update any direct links to language-specific builder documentation pages.

## 7.6.6

### New features

#### Common

* Added the announcement bar at the top containing information about new releases.

#### Office API

* Updated the [Office API documentation](/docs/office-api/get-started/overview) for version 9.3.0.

## 7.6.5

### New features

#### Desktop

* Added MCP server connection documentation for Desktop Editors v9.2

#### Docspace

* Enhanced MCP server documentation with AI agent capabilities and examples

#### Docs API

* Updated parameters of NextCloud integration
* Added configuration parameters section to Chinese Nextcloud docs
* Added Working with forms info to Odoo connector page

#### Document Builder

* Added `Creating form from JSON` sample
* Added `Getting form values by ID` sample
* Added `Removing individual fields` sample
* Added `Setting default values` sample
* Added `Updating placeholders` sample
* Added `Creating multiple NDA documents` sample
* Added `Creating employee onboarding checklist` sample
* Added `Creating purchase order` sample
* Added `Creating event form` sample
* Added `Validating exam form` sample
* Added Chinese translations for new samples

#### Plugins and macros

* Updated plugin installation docs with correct paths
* Updated plugin-and-macros changelog with v9.1 and v9.2 changes
* Improved adding custom functions documentation
* Edited 'Creating plugin template' page (moved info about old template to the Migration section)

### Fixes

* Updated Docusaurus to 3.9.2
* Updated DocSearch to 4.6.0
* Fixed broken links across documentation
* Fixed incorrect DOM selector methods and code formatting in localization docs
* Improved conversion API documentation formatting

## 7.6.4

### Fixes

* Fixed `Copy page` and `View as markdown` actions of the AI multi button

## 7.6.3

### New features

* Added LLM multi button on all pages
* Added `Context` option to `Ask AI`

### Fixes

* Update Docusaurus OpenAPI plugin to version 4.7.1
* Removed unused scripts

#### Docs API

* Fixed typos and formating on some pages

#### Docspace

* Deleted generation of the `for-hosting-providers` section

## 7.6.2

* Added button `Ask AI` to chat with LLM
* Theme colors for the code block changed to similar VSCode

### New features

#### Docs API

* Added `Recording macros` page
* Added `AI Agent` and `AI Plugin` pages for Chinese
* Updated `Playground` section
* Added `Builder` option to playground script target

### Fixes

#### Docspace

* Changed `MCP Server` section
* Hidden `For hosting providers` section

#### Docs API

* Fixed Getting started page
* Fixed styles of the right panel of OpenAI
* Fixed problems in the code examples for plugins due to the lack of required parameters
* Fixed style for plugins configuration description pages

## 7.6.1

### New features

* Updated the main page

### Fixes

#### Docs API

* Edited the document.info.favorite parameter description

## 7.6.0

### New features

#### Docspace

* Updated DocSpace version 3.6

#### Docs

* Translated Document Builder section into Chinese

## 7.5.0

### New features

#### Docs

* Updated Office API documentation for version 9.2.0

#### Plugins and macros

* Added the Debugging subsection to the Tutorials section
* Updated the plugin Icons page with additional info
* Added the How to customize themes page
* Added the Troubleshooting section to the Localization page

#### Desktop

* Translated Desktop Editors section into Chinese

### Fixes

#### Plugins and macros

* Added missing links to the samples

## 7.4.0

### New features

* Updated Docusaurus version 3.9.2
* Added system theme mode
* Updated documentation start page

### Fixes

#### Docs

* Updated documentation in Chinese

## 7.3.0

### New features

#### Docspace

* Updated JavaScript SDK section

## 7.2.0

### New features

#### Docspace

* Added new API Backend samples
* Added error handling in API Backend samples
* Added js language to API Backend samples
* Added JavaScript SDK react samples

#### Docs API

* Added YouTube videos to ready-to-use connectors
* Added additional examples for documentserver and api instructions

### Fixes

* Restructured parameters description to tables

#### Docs

* Fixed Office API documentation

#### Docs API

* Fixed note style
* Fixed code samples
* Fixed sorting for Docs API integration samples

## 7.1.0

### New features

#### Docspace

* Updated DocSpace version 3.5
* Updated documentation for Plugins SDK 2.0.0

#### Docs

* Updated Office API documentation for version 9.1.0

#### Docs API

* The editorConfig.customization.uitheme parameter is now available for the mobile editors
* Added the UserCanOnlyComment property to the CheckFileInfo WOPI operation
* Changed the required size of the logo customization parameter
* Added opening for hml format
* Added conversion from pptx format to txt

## 7.0.0

### New features

* Updated Docusaurus version 3.9.1
* Added AskAI feature

#### Plugins and macros

* Added samples for custom AI tools
* Updated documentation in Chinese in the Interacting with editors section

## 6.6.0

### New features

* Restructured changelog

#### Docs

* Added new Office API samples

#### Plugins and macros

* Added the bundled plugin type description
* Added the AI plugin section
* Added the ability to access cell address information inside custom functions

### Fixes

#### Docs

* Updated documentation in Chinese
* Hide right panel in Office Api and macro samples
* Hide the changelog reading time

#### Docspace

* Fixed API Backend samples position

## 6.5.0

### New features

#### Docspace

* Added new integration samples to API Backend section
* Added new Plugins SDK samples

#### Docs

* Updated Office API documentation for version 9.0.4

#### Docs API

* Added GitHub links to each language-specific example
* Added the website Changelog section
* Added missing formats to the document.fileType parameter
* Added fonts information to Changing default fonts language specific example

#### Plugins and macros

* Updated documentation in Chinese
* Added pages with full list of events to Interacting with editors section

### Fixes

* Fixes for samples structure

## 6.4.0

### New features

#### Docs

* Added new Office API samples

#### Docs API

* Added the editorConfig.customization.suggestFeature parameter

#### Plugins and macros

* Added documentation in Chinese

#### Docspace

* Added new Api Backend samples

### Fixes

#### Docs

* Fixed default theme for editors in the Results tab

## 6.3.0

### New features

#### Docs

* Added new Office API samples

#### Docs API

* Updated behavior of `customization.macros` — it now disables all macro-related functionality including adding, editing, and execution
* Added more questions to Customization FAQ

#### Plugins and macros

* Added a sample for asynchronous custom functions
* Added the ability to automatically convert VBA code into ONLYOFFICE macros using AI plugin
* Added the ability to automatically generate ONLYOFFICE macros using AI plugin
* Added instruction on how to run a macro sample
* Added new Macro samples

### Fixes

#### Plugins and macros

* Replaced gifs with YouTube videos

## 6.2.0

### New features

#### Docspace

* Removed the Filtering pages
* Added new API Backend samples
* Added new Plugins SDK samples

#### Docs

* Updated Office API documentation for version 9.0.3

#### Docs API

* The editorConfig.customization.toolbarHideFileName parameter is now available for the mobile editors
* Updated documentation in Chinese

#### Plugins and macros

* Restructured Interacting with editors section
* Added Events section

## 6.1.0

### New features

#### Docspace

* Updated DocSpace version 3.2

## 6.0.0

### New features

#### Docs

* Added Plugins version 9.0
* Updated Office API documentation for version 9.0
* Added new Macro samples

#### Docs API

* Added the theme-white and theme-night theme ids to the editorConfig.customization.uiTheme parameter
* Added opening for odg format
* Added opening for md format
* Added the ability to preload the editor static resources
* Added the editorConfig.customization.forceWesternFontSize parameter for the Chinese (Simplified) UI
* Added the editorConfig.customization.layout.header.user parameter
* Added conversion from vsdm, vsdx, vssm, vssx, vstm, vstx formats
* Added the diagram document type to the documentType parameter

#### Plugins and macros

* Added a link to the plugins storybook
* Updated the Tutorials/Samples page of the Plugins and macros
* Updated the Get started structure of the Plugins and macros

#### Docspace

* Updated DocSpace version 3.2

### Fixes

* Renamed categories titles

#### Docs

* Fixed Automation API examples and usage

#### Plugins and macros

* Fixed Plugins and macros description and samples
* Deprecated attachEvent method

## 5.4.0

### New features

#### Samples

* Added Samples section

#### Docs

* Updated Office API documentation
* Added Playground page to the Office API, Plugins and macros sections

#### Docs API

* Updated the main page for the Automation API samples
* Updated documentation in Chinese

### Fixes

#### Docs

* Fixed examples for Automation API

## 5.3.0

### New features

#### Docspace

* Added DocSpace version 3.2
* Added the MCP server

#### Docs

* Added new Macro samples

### Fixes

#### Document Builder

* Updated C++ samples

## 5.2.0

### New features

#### Docspace

* Added new JavaScript SDK samples
* Added the MCP server

#### Docs

* Updated parameter descriptions
* Added Inserting text into a document sample

#### Docs API

* Added interactive examples for Automation API
* Updated samples in Document Builder section
* Updated documentation in Chinese

### Fixes

* Fixed code samples

#### Docs API

* Fixed Try Docs page

## 5.1.0

### New features

#### Docs

* Added Results to the Office API samples

#### Docs API

* Added Try Docs page
* Updated a list of the validated parameters in the browser
* Added scrolling to tables

#### Docspace

* Update the Authentication section

#### Plugins and macros

* Added YouTube videos for plugins samples

### Fixes

* Fixed anchors

## 5.0.0

### New features

#### Docs API

* Added the Go and PHP (Laravel) test examples
* Updated test examples
* Added the Changing the default font page for test examples

#### Docs

* Added instruction to install plugins for all users

#### Docspace

* Restructured the JS SDK section
* Added the Authentication section
* Added the API keys page
* Added DocSpace version 3.1
* Added the Plugins SDK samples

### Fixes

* Changed loading YouTube frames

#### Docs API

* Updated documentation in Chinese
* Updated Office API usage page

#### Docspace

* Fixed installation links
* Updated the Webhooks page

## 4.6.0

### New features

#### Docs API

* Updated Document Builder section
* Added Playground page for testing the capabilities of the Docs APIs

#### Docspace

* Updated Docspace openAPI docs

### Fixes

#### Docs

* Updated conversion tables
* Fixed Office API examples

## 4.5.1

### New features

#### Docs API

* Added the Size response property to CheckFileInfo

#### Docs

* Updated Office API usage page

### Fixes

* Added pdf editor
* Fixed anchors

## 4.5.0

### New features

#### Docs API

* Updated the config page for WOPI
* Added javascript example for signing with jwt
* Updated documentation in Chinese

#### Docspace

* Updated Docspace openAPI docs

#### Plugins and macros

* Added PDF Forms section in macro samples

### Fixes

* Hid workspace section
* Added ruby language for highlighting in code block
* Changed Edition titles
* Fixed anchors
* Updated docs titles

#### Docs

* Updated Document Builder section

#### Docs API

* Fixed config parameters

#### Plugins and macros

* Fixed import hyperlink example

## 4.4.0

### New features

#### Docs

* Updated Office API usage page
* Updated Plugins and Macros pages

#### Docs API

* Added the editorConfig.customization.features.featuresTips parameter
* Added opening for hwp, hwpx formats
* Updated docs config page

#### Docspace

* Updated list of languages for OpenAPI
* Added host and port for server url as parameters

### Fixes

* Added tabs for convenient display of OS/services/languages
* Fixed loading for ONLYOFFICE Docs editor tab
* Fixed anchors
* Fixed Docspace and Workspace sidebars

#### Docs API

* Updated conversion tables

## 4.3.0

### New features

#### Docs API

* Added the document.isForm parameter
* Added the editorConfig.customization.showHorizontalScroll parameter
* Added the editorConfig.customization.showVerticalScroll parameter
* Added logos for connectors
* Updated documentation in Chinese
* Updated docs config page

#### Docspace

* Updated Docspace openAPI docs

### Fixes

* Fixed loading for ONLYOFFICE Docs editor tab
* Fixed ONLYOFFICE Docs editor tab in the dark mode
* Fixed anchors

## 4.2.0

### New features

#### Docs API

* Updated documentation in Chinese
* Added the Frontend frameworks page

### Fixes

* Added screenshots for dark mode

#### Docs

* Updated Macro samples page
* Fixed Office API usage page
* Added the editorConfig.customization.anonymous.request parameter to the editor config

## 4.1.0

### New features

#### Site

* Added develop edit url for pages

#### Docs

* Added links to the dynamic pages
* Added tabs for win/mac/linux
* Added card list for ready-to-use connectors
* Added the Conversion API page
* Changed the Plugins and Macros section title

### Fixes

* Fixed anchors
* Fixed customization description
* Fixed links in ready-to-use connectors
* Fixed the jsValue argument

## 4.0.0

### New features

#### Site

* Swizzled CodeBlock/Content
* Added ONLYOFFICE Docs editor tab for code
* Added edit page link on all doc pages
* Added readme to generate OpenAPI docs
* Added package to generate OpenAPI docs

#### Docs

* Added editor tab for office js api examples
* Updated view of command to run desktop in debug mode for macOS

#### Docspace

* Updated docspace openAPI docs For Hosting Providers

#### Workspace

* Updated workspace openAPI docs, add tags and x-tagGroups
* Grouped paths by tagGroup instead of tag for workspaceBackend

## 3.0.0

### New features

#### Site

* Added search
* Enabled trailing slash

## 2.0.0

### New features

#### Site

* Increased build speed
* Rename all files and links to kebab-case
* Add notification about build and publish

#### Docs API

* Added the mobileEdit WOPI actions
* Added a note about using token in body and updated the Signature section
* Added the Checking PDF forms page
* Added the information about calling editor methods in the frameworks
* Added a note about default values for WOPI
* Added Key concepts page for WOPI
* Added the config page for WOPI
* Updated Overview page for WOPI
* Added Office API version 8.3
* Added Plugins version 8.3
* Added Docs API version 8.3
* Added the editorConfig.customization.wordHeadingsColor parameter
* Added the editorConfig.customization.slidePlayerBackground parameter

#### Docspace

* Added images for js SDK samples
* Added the Removed user page

#### Plugins and macros

* Added Sum of Highlighted Cells Macro Sample
* Added Remove extra spaces Sample
* Added Change font family and size Sample
* Added Hide or unhide rows and columns Sample
* Added Generate word definitions Sample
* Added Import hyperlinks Sample
* Added Find company logos Sample
* Added macro sample that adds state from zipcode
* Added currency-conversion macro sample
* Added generate hyperlinks in document macro sample
* Added change slide background color macro sample
* Added mask card numbers macro sample
* Added reset all forms macro sample
* Added Set USA date format macro sample
* Removed the Currency exchange rates macro sample

### Fixes

#### Docs API

* Restructured CheckFileInfo properties to tables
* Fixed key in referenceData
* Fixed the link to the AI plugin
* Fixed a note for Automation API
* Removed tocs from the page start
* Removed the InstallDeveloperPlugin method from changelog
* Removed list of relative links, duplicated in right pane
* Updated page and category titles

#### Plugins and macros

* Restructured Macro samples section

#### Desktop

* Fixed vars for Desktop debugging

## 1.0.0

### New features

* use new engine docusaurus
* add open api support for docspace and workspace
* add office js api and plugins from https://github.com/ONLYOFFICE/office-js-api
* add new main page
* add new product pages
* add zh-CH locale
* add new light and dark themes

### Fixes

* fix structure of files
* fix styles for sidebars and pages
* fix md-files problems with '<', '@' and '{'
* delete junk TOC from files and use page navigation
