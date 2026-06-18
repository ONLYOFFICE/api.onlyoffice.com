---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 命令行标志

ONLYOFFICE 桌面编辑器支持命令行标志，用于控制应用程序的启动方式和运行行为。在启动应用程序时，将标志附加到可执行文件路径后面即可传递。

## 如何传递标志

在以下命令中，将 `<标志>` 替换为[标志](#标志)表中的某个标志。

<Tabs>
  <TabItem value="windows" label="Windows">

**通过快捷方式**：右键单击应用程序快捷方式 → **属性** → **快捷方式** 选项卡 → 在 **目标** 字段末尾添加标志 → **应用**。

**通过终端**：按下 **Win+R**，键入 `cmd`，然后运行：

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" <标志>
```

  </TabItem>
  <TabItem value="linux" label="Linux">

按下 **Ctrl+Alt+T** 打开终端，然后运行：

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" <标志>
```

  </TabItem>
  <TabItem value="macos" label="macOS">

按下 **Command+Space**，键入 `Terminal` 并打开，然后运行：

```bash
"/Applications/ONLYOFFICE.app/Contents/MacOS/ONLYOFFICE" <标志>
```

  </TabItem>
</Tabs>

## 标志

| 标志 | 平台 | 描述 |
| ---- | ---- | ---- |
| `--ascdesktop-support-debug-info` | 全平台 | 以调试模式启动，启用浏览器开发者控制台访问。分步说明请参阅[调试](./debugging.md)。 |
| `--ascdesktop-support-debug-info-keep=VALUE` | 全平台 | 跨启动持久保存调试模式状态。`VALUE`：`1` — 启用，`0` — 禁用，`default` — 重置。 |
| `--system-title-bar` | Linux | 使用系统窗口框架，而不使用自定义标题栏。 |
| `--custom-title-bar` | Linux | 使用 ONLYOFFICE 标题栏；覆盖 `--system-title-bar`。 |
| `--review=path` | Windows、Linux | 以修订模式打开 DOCX 文件且无法禁用修订；XLSX 和 PPTX 以只读模式打开。路径含空格时请用双引号括起。 |
| `--view=path` | Windows、Linux | 以只读模式打开 DOCX、XLSX 或 PPTX 文件。路径含空格时请用双引号括起。 |
| `--edit=path` | Windows、Linux | 在单独窗口中打开文件进行编辑，不显示主应用程序窗口。路径含空格时请用双引号括起。 |
| `--force-use-tab` | Windows、Linux | 与 `--edit`、`--review` 或 `--view` 一起使用；在新标签页中打开文件，而非单独窗口。 |
| `--single-window-app` | 全平台 | 作为独立进程启动；防止多实例关闭时产生级联警告。 |
| `--ignore-certificate-errors` | 全平台 | 禁用 SSL 证书验证，用于连接使用自签名证书的服务器。 |
| `--new:word` | 全平台 | 创建并打开新的空白 DOCX 文件。 |
| `--new:cell` | 全平台 | 创建并打开新的空白 XLSX 文件。 |
| `--new:slide` | 全平台 | 创建并打开新的空白 PPTX 文件。 |

## 示例

### 以修订模式打开文件

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --review="C:\Users\username\Documents\Document1.docx"
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --review="/home/username/Documents/Document1.docx"
```

  </TabItem>
</Tabs>

### 在单独窗口中打开文件进行编辑

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --edit="C:\Users\username\Documents\Document1.docx"
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --edit="/home/username/Documents/Document1.docx"
```

  </TabItem>
</Tabs>

### 以只读模式打开文件

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --view="C:\Users\username\Documents\Document1.docx"
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --view="/home/username/Documents/Document1.docx"
```

  </TabItem>
</Tabs>

### 组合标志

以修订模式在新标签页（而非单独窗口）中打开文件：

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --review="C:\Users\username\Documents\Document1.docx" --force-use-tab
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --review="/home/username/Documents/Document1.docx" --force-use-tab
```

  </TabItem>
</Tabs>
