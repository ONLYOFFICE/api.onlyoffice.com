---
sidebar_position: -6
---

# Getting started

Macros are small scripts used to facilitate your day-to-day routine work with different types of documents. ONLYOFFICE macros use the JavaScript syntax and [Office JavaScript API](../../office-api/get-started/overview.md) scripting notation.

There are several reasons why ONLYOFFICE uses JavaScript for macros:

- cross-platform,
- easy to use,
- security, as macros do not have any access to the system. They are just JS code that runs in the same window with the editors.

> Please note that starting from version 7.1, the access to the *window* and *document* objects and the *alert* function is restricted from the macros because the *"use strict"* mode was applied to the macro scripts. Don't forget to declare variables before using them so that the macros work correctly.

You can find ready-to-use macros [here](../samples/macro-samples/macro-samples.md) or create your own ones.

How to start writing your macro:

1. Open the **View** tab and click **Macros**.
2. Consult the [API documentation](../../office-api/get-started/overview.md) to write the script.
3. [Write](./writing-macros.md) code for your macro.
4. To rename the macro, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the macro name and select **Rename**. Enter a new name for the macro and click **Ok**.
5. When ready, click ![Play icon](/assets/images/plugins/play.svg) to run your code in the document.

![Macros window](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Macros window](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)

To add more macros, click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only).

If you want to delete an unnecessary macro, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the macro name and select **Delete**.

You can also copy your macro. To do this, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the macro name and select **Copy**.
