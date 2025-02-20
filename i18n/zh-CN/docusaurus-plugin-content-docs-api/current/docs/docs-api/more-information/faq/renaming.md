---
sidebar_position: -2
---

# Renaming

## 如何重命名创建的文档？

请参阅[重命名文件部分](../../get-started/how-it-works/renaming-files.md)了解文件重命名在 ONLYOFFICE 文档中的工作方式，以及重命名创建的文档需要什么。

## 如何为所有协作编辑器更新文档的名称？

为此，可以使用[元](../../additional-api/command-service/meta.md)选项。必须使用 *c* 参数的 *元* 值将请求发送到 [文档命令服务](../../additional-api/command-service/command-service.md):

  ``` json
  {
    "c": "meta",
    "key": "Khirz6zTPdfd7",
    "meta": {
      "title": "Example Document Title.docx"
    }
  }
  ```
