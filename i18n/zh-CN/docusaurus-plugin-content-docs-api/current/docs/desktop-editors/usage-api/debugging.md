---
sidebar_position: -4
sidebar_label: Debugging
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 以调试模式运行桌面编辑器

在某些情况下，有必要以调试模式运行 ONLYOFFICE 桌面编辑器——例如，用于排查性能问题、检查日志或为技术支持收集信息。

启动应用程序时使用 `--ascdesktop-support-debug-info` 标志：

<Tabs>
  <TabItem value="windows" label="Windows">

在终端中运行以下命令：

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --ascdesktop-support-debug-info
```

**选项 1**：通过终端运行应用程序：

1. 按下 **Win+R**。

2. 在弹出的 **运行** 窗口中，在 **打开** 字段中键入 `cmd`。

   <img alt="Windows 运行对话框" src="/assets/images/desktop/windows-terminal.png" width="416px" />

3. 单击 **确定** 按钮。终端将会打开。

4. 输入上述命令并按 **Enter**。

**选项 2**：通过快捷方式运行应用程序：

1. 右键单击桌面屏幕上的应用程序快捷方式。
2. 选择 **属性**。
3. 打开 **快捷方式** 选项卡。
4. 在 **目标** 字段中，在应用程序路径后输入一个空格，然后键入 `--ascdesktop-support-debug-info` 标志。
5. 单击 **应用** 按钮。

<img alt="Windows 快捷方式" src="/assets/images/desktop/windows-shortcut.png" width="416px" />

  </TabItem>
  <TabItem value="linux" label="Linux">

在终端中运行以下命令：

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --ascdesktop-support-debug-info
```

按下 **Ctrl+Alt+T** 打开终端：

<img alt="Linux 终端" src="/assets/images/desktop/linux-terminal.png" width="536px" />

  </TabItem>
  <TabItem value="macos" label="macOS">

在终端中运行以下命令：

```bash
"/Applications/ONLYOFFICE.app/Contents/MacOS/ONLYOFFICE" --ascdesktop-support-debug-info
```

打开终端的方法：

1. 按下 **Command+Space**。

2. 在弹出的 **Spotlight** 窗口中，在搜索框中键入 `Terminal`。

   <img alt="macOS Spotlight" src="/assets/images/desktop/macos-spotlight.png" width="536px" />

3. 选择 **终端** 选项。

   <img alt="macOS 终端" src="/assets/images/desktop/macos-terminal.png" width="536px" />

  </TabItem>
</Tabs>

## 在调试模式下工作

要打开开发者工具，右键单击顶部工具栏上的任何可编辑字段（例如，字体列表组合框），然后单击 **检查元素**，或者在文档中的任意位置单击并按 **F1**。

<img alt="检查元素" src="/assets/images/desktop/inspect-element.png" />

结果如下：

![调试](/assets/images/desktop/debugging.png#gh-light-mode-only)![调试](/assets/images/desktop/debugging.dark.png#gh-dark-mode-only)

## --ascdesktop-support-debug-info-keep

您可以使用 `--ascdesktop-support-debug-info-keep` 标志在每次启动应用程序时保留调试模式状态，无需每次都传递该标志。使用方法与上述 `--ascdesktop-support-debug-info` 相同。

| 值 | 用法 | 描述 |
| ------- | ------------------------------------------------ | -------------------------------------------- |
| `1` | `--ascdesktop-support-debug-info-keep=1` | 永久启用调试模式。 |
| `0` | `--ascdesktop-support-debug-info-keep=0` | 永久禁用调试模式。 |
| `default` | `--ascdesktop-support-debug-info-keep=default` | 重置为默认状态（调试模式关闭）。 |

有关所有可用命令行标志的参考，请参阅[命令行标志](./command-line-flags.md)。
