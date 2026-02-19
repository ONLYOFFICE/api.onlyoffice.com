---
sidebar_position: -1
---

# 比较文档

如果您需要比较两个文档，可以使用**文档构建器（Document Builder）**。以下步骤将向您展示具体操作方法：

1. 创建一个名为 *compare.docbuilder* 的脚本文件，内容如下：

   ``` ts
   builder.OpenFile("https://example.com/file1.docx")
   const file = builderJS.OpenTmpFile("https://example.com/file2.docx")
   AscCommonWord.CompareDocuments(Api, file, null)
   file.Close()
   builder.SaveFile("docx", "Result.docx")
   builder.CloseFile()
   ```

   其中：

   `https://example.com/file1.docx` - 第一个待比较文件的路径，

   `https://example.com/file2.docx` - 第二个待比较文件的路径。

2. 向 **https://documentserver/docbuilder** 发送[POST请求](../../../docs-api/additional-api/document-builder-api.md)，请求体为以下JSON格式：

   ``` json
   {
     "async": false,
     "url": "https://example.com/compare.docbuilder"
   }
   ```

   其中：

   `https://example.com/compare.docbuilder` - *.docbuilder* 脚本的路径。

3. 文档生成完成后，会返回一个响应，其中包含比较后输出文件的绝对URL：

   ``` json
   {
     "key": "Khirz6zTPdfd7",
     "urls": {
       "Result.docx": "https://documents server/Result.docx"
     },
     "end": true
   }
   ```

4. 从收到的链接下载文档。现在，您可以查看所有文档差异，并使用顶部工具栏上的相应按钮接受或拒绝这些差异。

   ![比较文档](/assets/images/docbuilder/compare-documents.png)