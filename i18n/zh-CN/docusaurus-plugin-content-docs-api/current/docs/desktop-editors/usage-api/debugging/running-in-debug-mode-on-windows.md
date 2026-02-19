---
sidebar_position: -3
sidebar_label: Windows
---

# 在 Windows 上以调试模式运行

在 Windows 上启动应用程序有两种方式：通过快捷方式或终端。

**选项 1**：通过快捷方式运行应用程序：

1. 右键单击桌面屏幕上的应用程序快捷方式。
2. 选择 **属性**。
3. 打开 **快捷方式** 选项卡。
4. 在 **目标** 字段中，在应用程序路径后输入一个空格，然后键入 *--ascdesktop-support-debug-info* 标志。
5. 单击 **应用** 按钮。

<img alt="Windows 快捷方式" src="/assets/images/desktop/windows-shortcut.png" width="416px" />

**选项 2**：通过终端运行应用程序：

1. 按下 **Win+R**。

2. 在弹出的 **运行** 窗口中，在 **打开** 字段中键入 *cmd*。

   <img alt="Windows 终端" src="/assets/images/desktop/windows-terminal.png" width="416px" />

3. 单击 **确定** 按钮。终端将会打开。

4. 在命令行中，输入应用程序的路径，添加一个空格，然后键入 *--ascdesktop-support-debug-info* 标志：

   *"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --ascdesktop-support-debug-info*

## 在调试模式下工作

要开始在调试模式下工作，右键单击顶部工具栏上的任何可编辑字段（例如，字体列表组合框），然后单击 **检查元素**，或者在文档中的任意位置单击并按 **F1**。

结果如下：

![调试](/assets/images/desktop/debugging.png)

## 运行应用程序 {#running-the-application}

从 7.1 版本开始，您可以使用 `--ascdesktop-support-debug-info-keep` 标志运行 ONLYOFFICE 桌面编辑器。它可以与以下值一起使用：

### 参数

| 值      | 用法                                         | 描述                                                  |
| ------- | -------------------------------------------- | ----------------------------------------------------- |
| 1       | --ascdesktop-support-debug-info-keep=1       | 运行应用程序。                                        |
| 0       | --ascdesktop-support-debug-info-keep=0       | 停止应用程序。                                        |
| default | --ascdesktop-support-debug-info-keep=default | 默认应用程序状态 - 应用程序处于关闭状态。              |

要使用此标志启动 ONLYOFFICE 桌面编辑器，请使用与上述 `--ascdesktop-support-debug-info` 标志相同的说明。唯一的区别是 `--ascdesktop-support-debug-info-keep` 标志会存储传递给它的值。您无需在每次运行应用程序时都指定它。
