---
sidebar_position: -2
sidebar_label: Linux
---

# 在 Linux 上以调试模式运行

使用终端在 Linux 上以调试模式运行 ONLYOFFICE 桌面编辑器：

1. 按下 **CTRL+ALT+T**，打开终端。

2. 在命令行中，输入应用程序的路径，加一个空格，然后输入 *--ascdesktop-support-debug-info* 标志：

   *"/opt/onlyoffice/desktopeditors/DesktopEditors" --ascdesktop-support-debug-info*

## 在调试模式下工作

要开始在调试模式下工作，右键单击顶部工具栏上的任何可编辑字段（例如，字体列表组合框），然后单击 **检查元素**，或者在文档中的任意位置单击并按 **F1**。

结果如下：

![调试](/assets/images/desktop/debugging.png)

## 运行应用程序

从 7.1 版本开始，您可以使用 `--ascdesktop-support-debug-info-keep` 标志运行 ONLYOFFICE 桌面编辑器。它可以与以下值一起使用：

### 参数

| 值      | 用法                                         | 描述                                  |
| ------- | -------------------------------------------- | ------------------------------------- |
| 1       | --ascdesktop-support-debug-info-keep=1       | 运行应用程序。                        |
| 0       | --ascdesktop-support-debug-info-keep=0       | 停止应用程序。                        |
| default | --ascdesktop-support-debug-info-keep=default | 默认应用程序状态 - 应用程序处于关闭状态。 |

要使用此标志启动 ONLYOFFICE 桌面编辑器，请使用与上述 `--ascdesktop-support-debug-info` 标志相同的说明。唯一的区别是 `--ascdesktop-support-debug-info-keep` 标志会存储传递给它的值。您无需在每次运行应用程序时都指定它。
