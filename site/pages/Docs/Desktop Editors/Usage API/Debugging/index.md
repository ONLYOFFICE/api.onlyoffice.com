To run ONLYOFFICE Desktop Editors in debug mode, follow the instructions depending on the operating system you use.

* Windows
* Linux
* Mac OS

## Running in debug mode on Windows

There are two ways to launch the application: through the shortcut or the terminal.

**Option 1**. Run the app through the shortcut:

1. Right-click the application shortcut on the desktop screen.
2. Choose **Properties**.
3. Open the **Shortcut** tab.
4. In the **Target** field, after the path to the application, enter a space and then type the *--ascdesktop-support-debug-info* flag.
5. Click the **Apply** button.

![Windows shortcut](/content/img/desktop/windows-shortcut.png)

\


**Option 2**. Run the app through the terminal:

1. Press **Win+R**.

2. In the appeared **Run** window, type *cmd* in the **Open** field.

   ![Windows terminal](/content/img/desktop/windows-terminal.png)

3. Click the **OK** button. The terminal will be opened.

4. In the command line, enter the path to the application, add a space and then type the *--ascdesktop-support-debug-info* flag:

   *"%ProgramFiles%\ONLYOFFICE\DesktopEditors\DesktopEditors" --ascdesktop-support-debug-info*

## Running in debug mode on Linux

Use the terminal to run ONLYOFFICE Desktop Editors in debug mode:

1. Press **CTRL+ALT+T**. The terminal will be opened.

2. In the command line, enter the path to the application, add a space and then type the *--ascdesktop-support-debug-info* flag:

   *"/opt/onlyoffice/desktopeditors/DesktopEditors" --ascdesktop-support-debug-info*

## Running in debug mode on Mac OS

Use the terminal to run ONLYOFFICE Desktop Editors in debug mode:

1. Press **Command+Space**.

2. In the appeared **Spotlight** window, type *Terminal* in the search line.

3. Choose the **Terminal** option. The terminal will be opened.

4. In the command line, enter the path to the application, add a space and then type the *--ascdesktop-support-debug-info* flag:

   *"/Applications/ONLYOFFICE.app/Contents/MacOS/ONLYOFFICE" --ascdesktop-support-debug-info*

## Working in debug mode

To start working in debug mode, right-click any editable field on the top toolbar (for example, font list combo) and click **Inspect Element**, or click anywhere in the document and press **F1**.

Here is the result:

![Debug](/content/img/desktop/debugging.png)

## Running the application

Starting from version 7.1, you can run ONLYOFFICE Desktop Editors with the *--ascdesktop-support-debug-info-keep* flag. It can have the following values:

Parameters

| Value   | Description                                                | Usage                                        |
| ------- | ---------------------------------------------------------- | -------------------------------------------- |
| 1       | Runs the application.                                      | --ascdesktop-support-debug-info-keep=1       |
| 0       | Stops the application.                                     | --ascdesktop-support-debug-info-keep=0       |
| default | The default application condition - the app is turned off. | --ascdesktop-support-debug-info-keep=default |

To launch ONLYOFFICE Desktop Editors with this flag, use the same instructions as for the *--ascdesktop-support-debug-info* flag [above](#system-instructions). The only difference is that the *--ascdesktop-support-debug-info-keep* flag stores the value passed to it. You will not need to specify it every time you run the application.