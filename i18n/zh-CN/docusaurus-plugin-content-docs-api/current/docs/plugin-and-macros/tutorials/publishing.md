---
sidebar_position: -2
---

# 插件发布

如果您希望将插件发布到 ONLYOFFICE 插件市场供其他用户使用，请按照以下步骤提交申请：

1. 登录已有的 [GitHub](https://github.com/) 账号，或创建一个新账号。

2. 分叉插件市场仓库：[onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io)。

   您将获得一个仓库，地址如下：`https://github.com/YOUR-USERNAME/onlyoffice.github.io`。

3. 从该仓库构建您自己的 GitHub 页面网站，以便后续在网页版中测试插件。请查阅官方 [GitHub 文档](https://docs.github.com/zh/pages/quickstart)了解具体操作方法。

4. 将分叉仓库克隆到您的本地计算机。

5. 在 `onlyoffice.github.io/sdkjs-plugins/content/` 目录下添加一个您的插件文件夹。

   ![新建文件夹](/assets/images/plugins/new-folder.png)

6. 将插件文件夹推送到远程仓库。

7. 从您的交叉仓库向 `https://github.com/ONLYOFFICE/onlyoffice.github.io` 提交一个 [拉取请求](https://github.com/ONLYOFFICE/onlyoffice.github.io/pulls)。您也可以在插件管理器窗口中点击**提交插件**按钮来提交。

   ![提交插件](/assets/images/plugins/submit-plugin.png)
   
   如果您的插件运行正常，拉取请求将被批准，该插件将出现在插件市场中。
    
   您也可以在[市场仓库](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues)中发布话题来讨论插件开发、请求新功能或报告程序出错。
