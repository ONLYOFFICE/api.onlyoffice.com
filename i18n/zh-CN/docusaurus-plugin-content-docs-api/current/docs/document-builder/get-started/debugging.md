---
sidebar_position: -1
sidebar_class_name: hidden
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 调试

您可以调试任何文档构建器[组件](../get-started/overview.md)。为此，请按照以下说明操作。

## 从浏览器执行（适用于插件和宏）

1. 打开**视图**选项卡，然后点击**宏**。

2. 在您的脚本中使用**debugger**命令：

   <!-- 此代码片段显示在截图中。 -->

   <!-- eslint-skip -->
   
   ```ts
   debugger;
   const oDocument = Api.GetDocument();
   const oParagraph = oDocument.GetElement(0);
   oParagraph.AddText("Hello world!");
   ```

3. 按**F12**键打开开发者控制台。

4. 点击![Play icon](/assets/images/plugins/play.svg)运行您的脚本。

> 请注意，只有打开开发工具时，**debugger**命令才会生效。否则，浏览器会忽略它。

![Builder debugger](/assets/images/plugins/debugger.png)

**debugger**命令的作用类似于断点，会在插入该命令的脚本位置暂停执行。

## 从Builder.Framework或Builder.App执行

> 本说明也适用于任何[Builder.Framework](../builder-framework/overview.md)版本：C++、COM、.Net。

1. 在*DocumentBuilder*文件夹中打开终端。

2. 将**V8_USE_INSPECTOR**环境变量设置为1：

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

3. 使用**docbuilder**命令运行构建器脚本：

   ```sh
   docbuilder script.docbuilder
   ```

4. 终端中会出现一个链接。您必须在Chrome/Chromium浏览器中打开它，以连接到JavaScript上下文。

   ![Terminal](/assets/images/docbuilder/terminal.png)

5. 点击行号设置断点，然后再次运行您的脚本。

6. 现在您可以调试已执行的方法了。

   ![DevTools](/assets/images/docbuilder/devtools.png)
