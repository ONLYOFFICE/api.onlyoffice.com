---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debugging

You can debug Document Builder scripts executed via CLI. To do this, follow the instructions below.

1. Open a terminal in the *DocumentBuilder* folder.

2. Set the `V8_USE_INSPECTOR` environment variable to `1` and run the script:

   <Tabs groupId="os">
      <TabItem value="windows" label="Windows">
         ```bash
         SET V8_USE_INSPECTOR=1
         docbuilder.exe script.js
         ```
      </TabItem>
      <TabItem value="linux" label="Linux">
         ```bash
         export V8_USE_INSPECTOR=1
         documentbuilder script.js
         ```
      </TabItem>
      <TabItem value="macos" label="macOS">
         ```bash
         export V8_USE_INSPECTOR=1
         documentbuilder script.js
         ```
      </TabItem>
   </Tabs>

3. A link will appear in the terminal. Open it in your Chrome/Chromium browser to connect to the JavaScript context.

   ![Terminal](/assets/images/docbuilder/terminal.png)

4. Set the breakpoints by clicking the line numbers and run your script again.

5. Now you can debug the executed methods.

   ![DevTools](/assets/images/docbuilder/devtools.png)
