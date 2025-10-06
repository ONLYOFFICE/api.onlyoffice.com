---
sidebar_position: -4
---

# 添加自定义函数

从 8.1 版本起，您可以使用**宏**插件向电子表格添加自定义函数：

## 创建自定义函数

1. 打开**视图**选项卡并选择**宏**，宏窗口将会弹出。
2. 在**自定义函数**区域，点击![Plus icon](/assets/images/plugins/plus.svg)，您将看到一个自定义函数模板：

<!-- 以下代码与宏相关。 -->

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

3. 为您的函数编写说明。如有需要，请指定参数和返回值，添加函数脚本，使用 [Api.AddCustomFunction](../../office-api/usage-api/spreadsheet-api/Api/Methods/AddCustomFunction.md) 方法将函数添加到系统中。

4. 点击**保存**。

![添加自定义函数](/assets/images/plugins/add-custom-function.png#gh-light-mode-only)![添加自定义函数](/assets/images/plugins/add-custom-function.dark.png#gh-dark-mode-only)

现在，您可以在电子表格中使用该函数了。

![函数使用示例](/assets/images/plugins/add.png#gh-light-mode-only)![函数使用示例](/assets/images/plugins/add.dark.png#gh-dark-mode-only)

您可以在[此处](../samples/macro-samples/spreadsheet-editor/weighted-average-function.md)找到自定义函数的示例。
<!--
## 访问单元格地址（自 v9.0.4 起） {#accessing-cell-addresses-since-v904}

从 9.0.4 版本开始，您可以在自定义函数中访问单元格地址信息：

- `this.address` — 自定义函数正在计算的单元格的地址（例如，`"C5"`）；
- `this.args` — 输入参数的数组。每个参数对象包含一个 `address` 字段，表示源单元格的地址（例如，`"A1"`）。该数组具有以下结构：

  ``` ts
  [
    {"address": "arg1_address"},
    {"address": "arg2_address"},
    ...
  ]
  ```

示例：

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
```-->

## 管理自定义函数

如果您想重命名函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标并且选择**重命名**。输入新的函数名称后点击**确定**。

要删除不需要的自定义函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标然后选择**删除**。

要复制函数，方法是点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标然后选择**复制**。

![自定义功能菜单](/assets/images/plugins/custom-function-menu.png#gh-light-mode-only)![自定义功能菜单](/assets/images/plugins/custom-function-menu.dark.png#gh-dark-mode-only)

## 异步函数 {#asynchronous-functions}

从 9.0 版本开始，您可以添加异步自定义函数，以便在函数体中管理任何请求：

<!-- 此代码与宏相关。 -->

<!-- eslint-skip -->

``` ts
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

您可以在[此处](../samples/macro-samples/spreadsheet-editor/calculate-world-bank-indicator.md)找到异步自定义函数的示例。
