---
sidebar_position: -13
---

# 转换和下载文件

文档转换服务是ONLYOFFICE文档的一部分。它允许用户将文件从一种格式转换为另一种格式，以便之后在**文档编辑器**中打开，或者用于文件导出。

在两种主要情况下需要进行文档转换。

## 文档编辑所需的临时转换

为了使**文档编辑器**能够正确处理文档文件，建议在编辑之前将它们转换为Office Open XML格式：

- 文本文档转换为*docx*格式，
- 电子表格转换为*xlsx*格式，
- 演示文稿转换为*pptx*格式。

以下参考图和步骤解释了文档转换的过程。

<img alt="Interim conversion needed for document editing" src="/assets/images/editor/conversion.jpg" width="720px" />

1. 用户在计算机硬盘驱动器上选择要上传到**文档管理器**的文件。
2. **文档管理器**将所选文件上传到**文档存储服务**。
3. **文档存储服务**使用[转换API](../../additional-api/conversion-api/request.md)将上传的文件发送到ONLYOFFICE文档的**文档转换服务**，以将其转换为Office Open XML格式。
4. **文档转换服务**将所选文件转换为Office Open XML格式。
5. **文档存储服务**下载已转换的文档文件。

## 文档导出

当用户需要以下载与Office Open XML格式不同的某种格式的文件时，ONLYOFFICE文档会在导出之前将保存在**文档存储服务**中的文档文件转换为适当的格式。

以下参考图和步骤解释了文档导出的过程。

<img alt="Document export" src="/assets/images/editor/export.jpg" width="720px" />

1. 用户在**文档管理器**中选择文件，并选择文件必须下载的格式。
2. **文档管理器**将用户的这一操作转换为对**文档存储服务**的请求。
3. **文档存储服务**使用[转换API](../../additional-api/conversion-api/request.md)将上传的文件发送到ONLYOFFICE文档的**文档转换服务**，以将其转换为适当的格式。
4. **文档转换服务**将所选文件转换为适当的格式。
5. 转换完成后，**文档存储服务**下载已转换的文件。
6. **文档存储服务**通知**文档管理器**转换已成功完成。
7. **文档存储服务**下载已转换的文件。
