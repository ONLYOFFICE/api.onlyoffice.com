---
sidebar_position: -4
---

# Adding custom functions

Custom functions are JavaScript functions that you write in the **Macros** plugin and then call in a spreadsheet like any built-in function. They are available in the spreadsheet editor starting from version 8.1.

## Creating custom functions

1. Open the **View** tab and select **Macros**. The macros window will pop up.
2. In the **Custom functions** section, click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only). You will be presented with the custom function template:

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

For a complete sample, see [Weighted average function](../samples/spreadsheet-editor/weighted-average-function.md).

## Accessing cell addresses

:::note

Starting from version 9.0.4, you can access cell address information inside custom functions.

:::

The following properties are available:

- `this.address` - the address of the cell where the custom function is being calculated, qualified with the name of the sheet (e.g., `"Sheet1!C5"`). A sheet name that contains spaces or special characters is enclosed in single quotes (e.g., `"'My Sheet'!C5"`);
- `this.args` - an array describing the input arguments. An entry is present only for an argument that is a cell or range reference, and holds a single `address` field with the address of that cell or range, qualified in the same way (e.g., `"Sheet1!A1"`). An argument passed as a literal value leaves its entry `undefined`. To read the values themselves, use the function parameters. This array has the following structure:

  ``` ts
  [
    {"address": "arg1_address"},
    {"address": "arg2_address"},
    ...
  ]
  ```

If the function is called as `=CUSTOMFUNC(5, A1)`, the first argument is a literal value and the second one is a cell reference, so `this.args[0]` is `undefined` and `this.args[1]` is `{"address": "Sheet1!A1"}`. Check an entry before reading its `address` field.

Example:

```ts
(function()
{
  /**
  * Returns the address of the cell where the function is calculated.
  * @customfunction
  * @param {any} arg1 Any data.
  * @param {any} arg2 Any data.
  * @returns {string} The address of the cell with the function.
  */
  function CUSTOMFUNC(arg1, arg2) {
    console.log("Function is evaluated in:", this.address);
    console.log("First argument:", arg1, "from cell:", this.args[0] && this.args[0].address);
    console.log("Second argument:", arg2, "from cell:", this.args[1] && this.args[1].address);
    return this.address;
  }
  Api.AddCustomFunction(CUSTOMFUNC);
})();
```

## Managing custom functions

If you want to rename your function, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Rename**. Enter a new name for the custom function and click **Ok**.

To delete an unnecessary custom function, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Delete**.

You can also copy your function. To do this, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the custom function name and select **Copy**.

![Custom function menu](/assets/images/plugins/custom-function-menu.png#gh-light-mode-only)![Custom function menu](/assets/images/plugins/custom-function-menu.dark.png#gh-dark-mode-only)

## Asynchronous functions

:::note

Starting from version 9.0, you can add asynchronous custom functions to manage any request within the function body.

:::

```ts
(function()
{
  /**
  * Function that returns the argument
  * @customfunction
  * @param {any} arg Any data.
  * @returns {any} The argument of the function.
  */
  async function myFunction(arg) {
    return arg;
  }
  Api.AddCustomFunction(myFunction);
})();
```

For a complete sample, see [Calculate World Bank indicator](../samples/spreadsheet-editor/calculate-world-bank-indicator.md).
