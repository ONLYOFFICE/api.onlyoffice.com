---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 调试

您可以调试通过 CLI 执行的 Document Builder 脚本。请按照以下说明操作。

1. 在 *DocumentBuilder* 文件夹中打开终端。

2. 将 `V8_USE_INSPECTOR` 环境变量设置为 `1` 并运行脚本：

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

3. 终端中会出现一个链接。在 Chrome/Chromium 浏览器中打开它以连接到 JavaScript 上下文。

   ![Terminal](/assets/images/docbuilder/terminal.png)

4. 点击行号设置断点，然后再次运行脚本。

5. 现在您可以调试已执行的方法了。

   ![DevTools](/assets/images/docbuilder/devtools.png)
