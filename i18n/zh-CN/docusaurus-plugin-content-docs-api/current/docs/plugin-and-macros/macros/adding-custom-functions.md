---
sidebar_position: -4
---

# 添加自定义函数

从 8.1 版本起，您可以使用**宏**插件向电子表格添加自定义函数：

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
  * @returns {any} The argumet of the function.
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

如果您想重命名函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标并且选择**重命名**。输入新的函数名称后点击**确定**。

要删除不需要的自定义函数，请点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标然后选择**删除**。

要复制函数，方法是点击自定义函数名称旁的 ![Dots icon](/assets/images/plugins/dots.svg) 图标然后选择**复制**。

![自定义功能菜单](/assets/images/plugins/custom-function-menu.png#gh-light-mode-only)![自定义功能菜单](/assets/images/plugins/custom-function-menu.dark.png#gh-dark-mode-only)
