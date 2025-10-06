---
sidebar_position: -1
---

# 更改默认字体

要更改 ONLYOFFICE 文档[测试示例](language-specific-examples.md)中创建的所有新文档的默认字体，请修改现有文档模板：

1. 导航到包含文档模板的文件夹。此文件夹的路径取决于测试示例的编程语言：

   - **.Net (C# MVC)** - *assets/document-templates/new*
   - **.Net (C#)** - *assets/document-templates/new*
   - **Go** - *static/assets/document-templates/new*
   - **Java** - *src/main/resources/assets/document-templates/new*
   - **Java Spring** - *src/main/resources/assets/document-templates/new*
   - **Node.js** - *public/assets/document-templates/new*
   - **PHP** - *assets/document-templates/new*
   - **PHP (Laravel)** - *public/assets/document-templates/new*
   - **Python** - *assets/document-templates/new*
   - **Ruby** - *assets/document-templates/new*

2. 在 ONLYOFFICE 桌面编辑器中打开所需编辑器类型（*new.docx*、*new.xlsx*、*new.pptx* 或 *new.pdf*）的模板，并调整字体名称和/或大小。

3. 保存文件。

之后，所有新文档都将使用指定的字体创建。

## 已知问题 {#known-issues}

在 ONLYOFFICE 文档中编辑或打开文档时，系统会使用服务器上预装的字体列表。字体替换的工作原理如下：

- **默认字体支持**：ONLYOFFICE 文档自带一组默认的开源字体。
- **字体替换机制**：如果文档包含专有字体（例如，使用第三方编辑器创建的字体），ONLYOFFICE 文档会自动选择最接近的可用字体进行替代。

为避免字体替换导致的布局问题，请在上传使用外部软件创建的模板之前，先在文档服务器上安装自定义字体。请遵循 [Windows](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-fonts-windows.aspx)、[Linux](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-fonts-linux.aspx) 或 [Docker](https://helpcenter.onlyoffice.com/docs/installation/docs-install-fonts-docker.aspx) 的官方说明。
