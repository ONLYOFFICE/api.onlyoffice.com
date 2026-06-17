---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Command-line flags

ONLYOFFICE Desktop Editors supports command-line flags that let you control how the application launches and behaves. Pass a flag by appending it to the executable path when starting the application.

## How to pass a flag

<Tabs>
  <TabItem value="windows" label="Windows">

**Via shortcut**: right-click the application shortcut → **Properties** → **Shortcut** tab → add the flag at the end of the **Target** field → **Apply**.

**Via terminal**: press **Win+R**, type `cmd`, then run:

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" <flag>
```

  </TabItem>
  <TabItem value="linux" label="Linux">

Press **Ctrl+Alt+T** to open a terminal, then run:

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" <flag>
```

  </TabItem>
  <TabItem value="macos" label="macOS">

Press **Command+Space**, type `Terminal`, open it, then run:

```bash
"/Applications/ONLYOFFICE.app/Contents/MacOS/ONLYOFFICE" <flag>
```

  </TabItem>
</Tabs>

## Flags

| Flag | Platform | Description |
| ---- | -------- | ----------- |
| `--ascdesktop-support-debug-info` | All | Launches in debug mode with browser console access. See [Debugging](./debugging.md) for step-by-step instructions. |
| `--ascdesktop-support-debug-info-keep=VALUE` | All | Persists debug mode state across launches. `VALUE`: `1` — enable, `0` — disable, `default` — reset. |
| `--system-title-bar` | Linux | Uses the system window frame instead of the custom title bar. |
| `--custom-title-bar` | Linux | Uses the ONLYOFFICE title bar; overrides `--system-title-bar`. |
| `--review=path` | Windows, Linux | Opens a DOCX in Track Changes mode without the ability to disable it; XLSX and PPTX open in view-only mode. Enclose paths containing spaces in double quotes. |
| `--view=path` | Windows, Linux | Opens a DOCX, XLSX, or PPTX in view-only mode. Enclose paths containing spaces in double quotes. |
| `--edit=path` | Windows, Linux | Opens a file for editing in a separate window without the main application window. Enclose paths containing spaces in double quotes. |
| `--force-use-tab` | Windows, Linux | Used with `--edit`, `--review`, or `--view`; opens the file in a new tab instead of a separate window. |
| `--single-window-app` | All | Launches as an independent process; prevents cascading close warnings across instances. |
| `--ignore-certificate-errors` | All | Disables SSL certificate validation for connections to servers with self-signed certificates. |
| `--new:word` | All | Creates and opens a new blank DOCX file. |
| `--new:cell` | All | Creates and opens a new blank XLSX file. |
| `--new:slide` | All | Creates and opens a new blank PPTX file. |

## Examples

### Open a file in Track Changes mode

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

### Open a file for editing in a separate window

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

### Open a file in view-only mode

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

### Combine flags

Open a file in Track Changes mode in a new tab instead of a separate window:

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
