---
sidebar_position: 1
---

# FAQ

## Can I use Microsoft Office macros in ONLYOFFICE editors?

Microsoft Office macros use Visual Basic for Applications (VBA) scripting language, while ONLYOFFICE editors use JavaScript. But this is not difficult to convert your previously used macros into the new format. Some examples of converting MS VBA macros you can see [here](../../macros/macros/converting-vba-macros.md).

## Where can I find methods for writing macros?

Macros use JavaScript language syntax and [Office JavaScript API](../../office-api/get-started/overview.md) scripting notation, thus the methods available in JavaScript and all the methods supported by **Office API** are also supported by macros.

## Can I make a macro global?

Macros are attached to the specific documents and there is no possibility to make them global. However, you can write a [plugin](../../plugins/fundamentals/configuration/config-json.md) that will be loaded for all the users.

## Plugin-related questions

For questions about plugin installation, styling, localization, and distribution, see the [Plugins FAQ](../../plugins/more-information/faq.md).
