---
sidebar_position: -2
---

# 更新日志

ONLYOFFICE Document Builder 的变更列表。

## 版本 10.0

- 新增 PDF 编辑支持。[OpenFile](../builder-framework/CDocBuilder/OpenFile.md#opening-pdf-files) 方法会在文档编辑器中打开在 ONLYOFFICE 中创建的 PDF 表单，在 PDF 编辑器中打开其他任何 PDF 文件，并可使用完整的 [PDF API](../../office-api/usage-api/pdf-api/pdf-api.md)。
- 为 [OpenFile](../builder-framework/CDocBuilder/OpenFile.md#opening-pdf-files) 方法新增 `m_sPassword` 参数，用于打开受密码保护的 PDF 文件。
- 使用 `pdf` 文件类型调用 [CreateFile](../builder-framework/CDocBuilder/CreateFile.md) 方法时，将创建 PDF 表单。
