# Change log

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
