---
sidebar_position: -4
---

# Adding custom functions

Starting from version 8.1, you can add custom functions to the spreadsheets using the **Macros** plugin.

## Creating custom functions

1. Open the **View** tab and select **Macros**. The macros window will pop up.
2. In the **Custom functions** section, click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only). You will be presented with the custom function template:

    <!-- This code is related to macros. -->

    <!-- eslint-skip -->

    ``` ts
    (function()
    {
      /**
      * Function that returns the argument
      * @customfunction
      * @param {any} arg Any data.
      * @returns {any} The argument of the function.
      */
      function myFunction(arg) {
        return arg;
      }
      Api.AddCustomFunction(myFunction);
    })();
    ```

3. Write a description for your function, specify the parameters and return value if necessary. Add a script for your function. Use the [Api.AddCustomFunction](../../office-api/usage-api/spreadsheet-api/Api/Methods/AddCustomFunction.md) method to add a function to the system.

4. Click **Save**.

  ![Add custom function](/assets/images/plugins/add-custom-function.png#gh-light-mode-only)![Add custom function](/assets/images/plugins/add-custom-function.dark.png#gh-dark-mode-only)

Now you can use this function in the spreadsheet.

![Add function usage](/assets/images/plugins/add.png#gh-light-mode-only)![Add function usage](/assets/images/plugins/add.dark.png#gh-dark-mode-only)

## Accessing cell addresses (since v9.0.4)

Starting from version 9.0.4, you can access  cell address information inside custom functions:

- `this.address` — the address of the cell where the custom function is being calculated (e.g., `"C5"`);
- `this.args` — an array of input arguments. Each argument object includes an `address` field with the address of the source cell (e.g., `"A1"`). This array has the following structure:

  ``` ts
  [
    {"address": "arg1_address"},
    {"address": "arg2_address"},
    ...
  ]
  ```

Example:

``` ts
(function()
{
  /**
  * Function that returns the argument
  * @customfunction
  * @param {any} arg1 Any data.
  * @param {any} arg2 Any data.
  * @returns {any} The argument of the function.
  */
  function CUSTOMFUNC(arg1, arg2) {
    console.log("Function is evaluated in:", this.address);
    this.args.forEach(arg => {
      console.log("Argument value:", arg.value, "from cell:", arg.address);
    });
  }
  Api.AddCustomFunction(CUSTOMFUNC);
})();
```

## Managing custom functions

If you want to rename your function, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Rename**. Enter a new name for the custom function and click **Ok**.

To delete an unnecessary custom function, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Delete**.

You can also copy your function. To do this, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Copy**.

![Custom function menu](/assets/images/plugins/custom-function-menu.png#gh-light-mode-only)![Custom function menu](/assets/images/plugins/custom-function-menu.dark.png#gh-dark-mode-only)
