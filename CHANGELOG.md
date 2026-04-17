# Change log

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

* Fixed text document API overview: wrong method prefix, fragile line refs, stray "spreadsheet"

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
* Added links to all editor methods (text document, spreadsheet, presentation, PDF, form) in the connector executeMethod section

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
