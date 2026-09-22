---
sidebar_position: -4
---

# 添加自定义函数

自定义函数是您在**宏**插件中编写的 JavaScript 函数，可以像内置函数一样在电子表格中调用。它们从 8.1 版本起在电子表格编辑器中可用。

## 创建自定义函数

1. 打开**视图**选项卡并选择**宏**，宏窗口将会弹出。
2. 在**自定义函数**区域，点击![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only)，您将看到一个自定义函数模板：

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

3. 为您的函数编写说明，并指定参数和返回值。JSDoc 注释是必需的：缺少该注释，或参数类型不受支持时，函数将不会被注册；缺少 `@returns` 时，函数会向单元格返回错误值。添加函数脚本，使用 [Api.AddCustomFunction](../../office-api/usage-api/spreadsheet-api/Api/Methods/AddCustomFunction.md) 方法将函数添加到系统中。

4. 点击**保存**。

![添加自定义函数](/assets/images/plugins/add-custom-function.png#gh-light-mode-only)![添加自定义函数](/assets/images/plugins/add-custom-function.dark.png#gh-dark-mode-only)

现在，您可以在电子表格中使用该函数了。

![函数使用示例](/assets/images/plugins/add.png#gh-light-mode-only)![函数使用示例](/assets/images/plugins/add.dark.png#gh-dark-mode-only)

完整示例请参阅[加权平均函数](../samples/spreadsheet-editor/weighted-average-function.md)。

## 访问单元格地址 {#accessing-cell-addresses}

:::note

从 9.0.4 版本开始，您可以在自定义函数中访问单元格地址信息。

:::

在自定义函数内部，`this` 指向一个上下文对象，其中包含正在计算的单元格的地址，以及各参数来源单元格的地址。以下属性可用：

- `this.address` - 自定义函数正在计算的单元格的地址，其中包含工作表名称（例如，`"Sheet1!C5"`）。如果工作表名称包含空格或特殊字符，则名称会用单引号括起来（例如，`"'My Sheet'!C5"`）；
- `this.args` - 描述输入参数的数组。只有当参数是单元格或区域引用时，对应的数组项才存在，其中仅包含一个 `address` 字段（该单元格或区域的地址，同样包含工作表名称，例如 `"Sheet1!A1"`）。以字面值传入的参数，其对应的数组项为 `undefined`。如需读取参数值，请使用函数的形参。该数组具有以下结构：

  ``` ts
  [
    {"address": "arg1_address"},
    {"address": "arg2_address"},
    ...
  ]
  ```

如果函数的调用方式为 `=CUSTOMFUNC(5, A1)`，第一个参数是字面值，第二个参数是单元格引用，因此 `this.args[0]` 为 `undefined`，而 `this.args[1]` 为 `{"address": "Sheet1!A1"}`。在读取数组项的 `address` 字段之前，请先检查该项是否存在。

示例：

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

## 管理自定义函数

如果您想重命名函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) 图标并且选择**重命名**。输入新的函数名称后点击**确定**。

要删除不需要的自定义函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) 图标然后选择**删除**。

要复制函数，方法是点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) 图标然后选择**复制**。

![自定义功能菜单](/assets/images/plugins/custom-function-menu.png#gh-light-mode-only)![自定义功能菜单](/assets/images/plugins/custom-function-menu.dark.png#gh-dark-mode-only)

## 异步函数 {#asynchronous-functions}

:::note

从 9.0 版本开始，您可以添加异步自定义函数，以便在函数体中管理任何请求。

:::

异步自定义函数返回的是 promise 而不是值，因此它可以发送网络请求或等待任何其他异步操作。当 promise 兑现时，编辑器会重新计算该单元格。如果 promise 被拒绝，则单元格中会显示 `#VALUE!` 错误。

```ts
(function()
{
  /**
  * 返回参数的函数
  * @customfunction
  * @param {any} arg 任意数据。
  * @returns {any} 函数的参数。
  */
  async function myFunction(arg) {
    return arg;
  }
  Api.AddCustomFunction(myFunction);
})();
```

完整示例请参阅[计算世界银行指标](../samples/spreadsheet-editor/calculate-world-bank-indicator.md)。
