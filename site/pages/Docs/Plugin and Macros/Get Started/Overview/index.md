ONLYOFFICE Plugins and Macrosv8.1

ONLYOFFICE [Docs](https://www.onlyoffice.com/office-suite.aspx) and [Desktop Editors](https://www.onlyoffice.com/desktop.aspx) offer support for plugins allowing developers to add specific features to the editors that are not directly related to the OOXML format.

Plugin is an HTML page that is embedded in the editor and uses API to work with it.

This documentation describes:

* How to [build](/plugin/structure), [localize](/plugin/localization), run, [test](/plugin/developing) and [publish](/plugin/publishing) a plugin
* How to [write](/plugin/writingmacros), [debug](/plugin/debugging) and run a macro or [convert](/plugin/convertingvbamacros) VBA macros to use in ONLYOFFICE
* How to use ONLYOFFICE [methods](/plugin/plugin) and [events](/plugin/events)
* Where to find guides and [plugin](/plugin/example/)/[macro](/plugin/macrosamples) code samples to get started

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE plugins:

* connect third-party services, like [Telegram](/plugin/example/telegram), [YouTube](/plugin/example/youtube), [Thesaurus](/plugin/example/thesaurus), [Translator](/plugin/example/translator), [Zotero](/plugin/example/zotero), [OCR](/plugin/example/ocr), etc.;
* add custom components & controls in the UI, like **Trackchanges**, **Trackchanges\_off**;
* enhance the existing user experience and the editors’ functionality: [Autocomplete](/plugin/example/autocomplete), [Search & Replace](/plugin/example/searchandreplace), [Move cursor](/plugin/example/movecursor), [Extended comments](/plugin/example/extendedcomments);
* automate tasks in documents with [Macros](/plugin/macros).

Code samples are available at <https://github.com/ONLYOFFICE/sdkjs-plugins>.

If you are looking for ready-to-use plugins, please visit [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

To quickly install and update plugins, you can use [ONLYOFFICE Plugin Marketplace](/plugin/installation/onpremises#plugin-manager).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Learn the fundamental concepts for building plugins on the [Getting started with plugins](/plugin/gettingstarted) page and write code that defines the plugin appearance and behavior.
2. After building the plugin, [test](/plugin/developing) it thoroughly and make sure the plugin looks and works as you expected. Try to anticipate the problems that might occur and suggest your solutions to them.
3. Now you can use the plugin on your own or suggest it for [publishing](/plugin/publishing) by creating a pull request to the [plugin marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io).

## How to get help

If you have any questions about plugins, try to find them in the [FAQ](/plugin/faq) section first.

You can request a feature or report a bug by posting an issue on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).

You can also ask our developers on [ONLYOFFICE forum](https://forum.onlyoffice.com/c/plugins/38) (registration required).
