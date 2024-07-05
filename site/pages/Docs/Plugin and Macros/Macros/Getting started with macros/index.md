Macros are small scripts used to facilitate your day-to-day routine work with different types of documents. ONLYOFFICE macros use the JavaScript syntax and [Office JavaScript API](/officeapi/basic) scripting notation.

There are several reasons why ONLYOFFICE uses JavaScript for macros:

* cross-platform,
* easy to use,
* security, as macros do not have any access to the system. They are just JS code that runs in the same window with the editors.

Please note that starting from version 7.1, the access to the *window* and *document* objects and the *alert* function is restricted from the macros because the *"use strict"* mode was applied to the macro scripts. Don't forget to declare variables before using them so that the macros work correctly.

You can find ready-to-use macros [here](/plugin/macrosamples/) or create your own ones.

How to start writing your macro:

1. Open the **Plugins** tab and click **Macros**.
2. Click **New** in the appeared window.
3. Consult the [API documentation](/officeapi/basic) to write the script.
4. [Write](/plugin/writingmacros) code for your macro.
5. **Rename** your macro by clicking the corresponding button.
6. When ready, click **Run** to run your code in the document.

![Macros window](/content/img/plugins/macro_window.png)

If you want to delete an unnecessary macro, click the **Delete** button.