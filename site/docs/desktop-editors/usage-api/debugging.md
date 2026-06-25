---
sidebar_position: -4
sidebar_label: Debugging
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running Desktop Editors in debug mode

In certain cases, it is necessary to run ONLYOFFICE Desktop Editors in debug mode — for example, to troubleshoot performance issues, inspect logs, or collect information for support.

Use the `--ascdesktop-support-debug-info` flag when launching the application:

<Tabs>
  <TabItem value="windows" label="Windows">

Run the following command in a terminal:

```
"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --ascdesktop-support-debug-info
```

**Option 1**. Run the app through the terminal:

1. Press **Win+R**.

2. In the appeared **Run** window, type `cmd` in the **Open** field.

   <img alt="Windows Run dialog" src="/assets/images/desktop/windows-terminal.png" width="416px" />

3. Click the **OK** button. The terminal will be opened.

4. Enter the command above and press **Enter**.

**Option 2**. Run the app through the shortcut:

1. Right-click the application shortcut on the desktop screen.
2. Choose **Properties**.
3. Open the **Shortcut** tab.
4. In the **Target** field, after the path to the application, enter a space and then type the `--ascdesktop-support-debug-info` flag.
5. Click the **Apply** button.

<img alt="Windows shortcut" src="/assets/images/desktop/windows-shortcut.png" width="416px" />

  </TabItem>
  <TabItem value="linux" label="Linux">

Run the following command in a terminal:

```bash
"/opt/onlyoffice/desktopeditors/DesktopEditors" --ascdesktop-support-debug-info
```

To open the terminal, press **Ctrl+Alt+T**:

<img alt="Linux terminal" src="/assets/images/desktop/linux-terminal.png" width="536px" />

  </TabItem>
  <TabItem value="macos" label="macOS">

Run the following command in a terminal:

```bash
"/Applications/ONLYOFFICE.app/Contents/MacOS/ONLYOFFICE" --ascdesktop-support-debug-info
```

To open the terminal:

1. Press **Command+Space**.

2. In the appeared **Spotlight** window, type `Terminal` in the search line.

   <img alt="macOS Spotlight" src="/assets/images/desktop/macos-spotlight.png" width="536px" />

3. Choose the **Terminal** option.

   <img alt="macOS terminal" src="/assets/images/desktop/macos-terminal.png" width="536px" />

  </TabItem>
</Tabs>

## Working in debug mode

To open the developer tools, right-click any editable field on the top toolbar (for example, font list combo) and click **Inspect Element**, or click anywhere in the document and press **F1**.

<img alt="Inspect Element" src="/assets/images/desktop/inspect-element.png" />

Here is the result:

![Debug](/assets/images/desktop/debugging.png#gh-light-mode-only)![Debug](/assets/images/desktop/debugging.dark.png#gh-dark-mode-only)

## --ascdesktop-support-debug-info-keep

You can use the `--ascdesktop-support-debug-info-keep` flag to persist the debug mode state across launches. To use it, follow the same instructions as for `--ascdesktop-support-debug-info` above.

| Value | Usage | Description |
| ------- | -------------------------------------------- | ---------------------------------------------------------- |
| `1` | `--ascdesktop-support-debug-info-keep=1` | Enables debug mode permanently. |
| `0` | `--ascdesktop-support-debug-info-keep=0` | Disables debug mode permanently. |
| `default` | `--ascdesktop-support-debug-info-keep=default` | Resets to the default state (debug mode off). |

For a reference of all available command-line flags, see [Command-line flags](./command-line-flags.md).
