---
sidebar_position: -1
---

# ONLYOFFICE 云服务

您可以将插件作为**扩展程序**添加到**云服务**中。此操作适用于 Google Chrome、Opera 和 Microsoft Edge 浏览器。

## 第一步：创建扩展程序

1. 创建扩展程序前，你需要拥有一个 [GitHub](https://github.com/) 账户。登录已有账号或注册新账号。

2. 分叉插件市场仓库：[onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io)。

   你将获得一个地址为 `https://github.com/YOUR-USERNAME/onlyoffice.github.io` 的仓库。

3. 从该仓库构建你自己的 GitHub 页面网站。请参考官方 [GitHub 文档](https://docs.github.com/en/pages/quickstart) 了解详细操作。

4. 将分叉仓库克隆到本地计算机。

5. 将插件文件夹添加到 `onlyoffice.github.io/sdkjs-plugins/content/` 并推送到远程仓库。

   ![新文件夹](/assets/images/plugins/new-folder.png)

6. 打开 `onlyoffice.github.io/store/plugin-dev/extension/inject.js` 文件，将 GitHub Pages 网站中插件的路径赋值给 `URL_TO_PLUGIN` 变量：

   ``` ts
   const URL_TO_PLUGIN = "https://YOUR-USERNAME.github.io/onlyoffice.github.io/sdkjs-plugins/content/helloworld/"
   ```

`onlyoffice.github.io/store/plugin-dev/extension` 文件夹即为新的扩展。

:::note
请注意，当您将扩展程序添加至 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/zh)时，**标题**和 **总结**会根据 `manifest.json` 文件中的**名字**和**介绍**参数自动填写。您之后将无法在商店中修改这些信息。
:::

## 第二步：将扩展程序上传到浏览器

扩展程序准备好后，请参考你使用的浏览器类型，依照以下指南上传扩展程序。

### 在 Google Chrome 中安装扩展程序

1. 启动 Chrome 浏览器，访问 `chrome://extensions/`。

2. 打开**开发者模式**，点击**加载已解压的扩展程序**按钮：

   ![Chrome 开发者模式](/assets/images/plugins/chrome-developer-mode.png)

3. 选择您创建的扩展程序主文件夹：

   ![Chrome 扩展文件夹](/assets/images/plugins/chrome-extension-folder.png)

4. 新扩展程序将出现在浏览器中：

   ![Chrome 拓展程序](/assets/images/plugins/chrome-extension.png)

5. 启动 ONLYOFFICE 云服务并打开任意文档，确认插件是否出现在编辑器中：

   ![Hello world 图标](/assets/images/plugins/helloworld_icon.png)

#### 从 Google Chrome 中移除扩展程序

点击扩展卡片中的**移除**按钮，在弹出窗口中确认操作：

![Chrome 移除扩展](/assets/images/plugins/chrome-removing-extension.png)

页面刷新后，该插件将从 ONLYOFFICE 云服务中移除。

### 在 Opera 中安装扩展程序

1. 启动 Opera 浏览器。

2. 点击浏览器右上角的扩展图标，在弹出的**扩展**窗口中点击**管理扩展**：

   ![Opera 扩展程序](/assets/images/plugins/opera-extensions.png)

3. 打开**开发者模式**，点击**加载已解压的扩展程序**按钮：

   ![Opera 开发者模式](/assets/images/plugins/opera-developer-mode.png)

4. 选择您创建的扩展程序主文件夹：

   ![Opera 扩展程序文件夹](/assets/images/plugins/opera-extension-folder.png)

5. 新扩展程序将出现在浏览器中：

   ![Opera 扩展程序](/assets/images/plugins/opera-extension.png)

6. 启动 ONLYOFFICE 云服务并打开任意文档，确认插件是否出现在编辑器中：

   ![Hello world 图标](/assets/images/plugins/helloworld_icon.png)

#### 从 Opera 中移除插件

要从 ONLYOFFICE 编辑器的**插件**标签中移除插件，请点击扩展卡片中的**禁用**按钮或关闭开关。你可以随时重新启用扩展程序。

![Opera 禁用扩展](/assets/images/plugins/opera-disabling-extension.png)

要从 Opera 浏览器中彻底移除扩展程序：

1. 点击扩展卡片中的**移除**按钮。

2. 在弹出窗口中确认操作：

   ![Opera 移除扩展](/assets/images/plugins/opera-removing-extension.png)

页面刷新后，该插件将从 ONLYOFFICE 云服务中移除。

### 在 Microsoft Edge 中安装扩展程序

1. 启动 Microsoft Edge 浏览器，访问 `edge://extensions/`。

2. 进入**扩展**标签，打开**开发者模式**，点击**加载已解压的扩展程序**按钮：

   ![Edge 开发者模式](/assets/images/plugins/edge-developer-mode.png)

3. 选择你创建的扩展程序主文件夹：

   ![Edge 扩展文件夹](/assets/images/plugins/edge-extension-folder.png)

4. 新扩展程序将出现在浏览器中：

   ![Edge 扩展程序](/assets/images/plugins/edge-extension.png)

5. 启动 ONLYOFFICE 云服务并打开任意文档，确认插件是否出现在编辑器中：

   ![Hello world 图标](/assets/images/plugins/helloworld_icon.png)

#### 从 Microsoft Edge 中移除插件

要从 ONLYOFFICE 编辑器的**插件**标签中移除插件，请关闭扩展开关。你可以随时重新启用扩展程序。

若要从 Microsoft Edge 浏览器中彻底移除扩展程序，请点击扩展卡片中的**移除**按钮，并在弹出窗口中确认操作：

![Edge 移除扩展](/assets/images/plugins/edge-removing-extension.png)

页面刷新后，该插件将从 ONLYOFFICE 云服务中移除。
