---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debugging

You can debug any Document Builder [component](../get-started/overview.md). To do this, follow the instructions below.

## Executing from a browser (for plugins and macros)

1. Open the **View** tab and click **Macros**.

2. Use the **debugger** command in your script:

   <!-- This code snippet is shown in the screenshot. -->

   <!-- eslint-skip -->
   
   ```ts
   debugger;
   const oDocument = Api.GetDocument();
   const oParagraph = oDocument.GetElement(0);
   oParagraph.AddText("Hello world!");
   ```

3. Open the developer console by pressing the **F12** button.

4. Click ![Play icon](/assets/images/plugins/play.svg) to run your script.

 > Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it.  

![Builder debugger](/assets/images/plugins/debugger.png)

The **debugger** command works as a breakpoint and pauses the execution at the script point where this command is inserted.

## Executing from Builder.Framework or Builder.App

> This instruction can also be used for any [Builder.Framework](../builder-framework/overview.md) version: C++, COM, .Net.

1. Open a terminal in the *DocumentBuilder* folder.

2. Set the **V8\_USE\_INSPECTOR** environment variable to 1:

   <Tabs>
      <TabItem value="win" label="Windows">
         ``` bash
         SET V8_USE_INSPECTOR=1
         ```
      </TabItem>
      <TabItem value="lin" label="Linux">
         ``` bash
         export  V8_USE_INSPECTOR=1
         ```
      </TabItem>
   </Tabs>

3. Run the Builder script with the **docbuilder** command:

   ```sh
   docbuilder script.docbuilder
   ```

4. A link will appear in the terminal. You must open it in your Chrome/Chromium browser to connect to the JavaScript context.

   ![Terminal](/assets/images/docbuilder/terminal.png)

5. Set the breakpoints by clicking the line numbers and run your script again.

6. Now you can debug the executed methods.

   ![DevTools](/assets/images/docbuilder/devtools.png)
