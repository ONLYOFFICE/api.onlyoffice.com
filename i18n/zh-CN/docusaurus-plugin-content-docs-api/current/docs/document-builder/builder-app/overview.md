---
sidebar_position: -4
---

# 概述

**Builder.App** 是一个可执行文件 *docbuilder.exe*，可以从你的应用程序中运行，只需将 *.docbuilder* 脚本文件作为参数传入。

如果你打算在任何编程语言编写的应用程序中**仅使用** **ONLYOFFICE Document Builder**，可从你的应用程序中运行 Document Builder 可执行文件，并将用于创建文档的 **.docbuilder** 脚本文件作为参数传入。这种方式灵活性更高，将来可以独立于你的应用程序修改文档脚本文件（尤其是当存在多个脚本文件时）。只有当你需要添加更多文档脚本文件时，才需要重新编译应用程序。

要启动 **ONLYOFFICE Document Builder** 可执行文件，请运行以下命令：

```sh
docbuilder.exe mydocument.docbuilder
```

这里的 **docbuilder** 是 **ONLYOFFICE Document Builder** 可执行文件的名称。如果从该可执行文件所在文件夹以外的位置运行命令，必须加上路径。Windows 版本的命令为 **docbuilder.exe**，Linux 版本的命令为 **documentbuilder**。**mydocument.docbuilder** 参数是将构成文档内容的脚本文件的名称（必要时需加上路径）。

有关创建该文件时使用的文件结构和规则的更多信息，请访问 [.docbuilder](./using-docbuilder-file.md) 文件部分。

在 [此页面](../builder-server/overview.md) 中可以查看一些最流行编程语言的示例。

## 已知问题

如果将 **ONLYOFFICE Document Builder** 同时用作应用程序和脚本，你需要了解一些规则和限制：

1. 要在 C++ 应用程序中运行 ONLYOFFICE Document Builder 可执行文件，请按以下方式使用 [CDocBuilder.Run](../builder-framework/C++/CDocBuilder/Run.md) 方法：

   ```cpp
   CDocBuilder::Initialize(sWorkDirectory.c_str());
   CDocBuilder oBuilder;
   oBuilder.Run("path-to-script.docbuilder");
   CDocBuilder::Dispose();
   ```

   另一种方法是使用 **docbuilder.exe** 可执行文件，并将 **.docbuilder** 文件作为参数运行，其中将编写所有用于创建文档文件的代码：

   ```sh
   docbuilder.exe "path-to-script.docbuilder"
   ```

2. 要为构建器类设置一个可传递到 [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md) 方法外部程序的参数，可以在运行 **ONLYOFFICE Document Builder** 可执行文件时将其作为附加属性添加，或者作为程序 JavaScript 代码的一部分，但不要包含在文档文件脚本中：

   ### 为 CDocBuilder.Run 设置 --argument 属性

   ```sh
   docbuilder.exe "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"ONLYOFFICE Document Builder\"}" "path-to-script.docbuilder"
   ```

   ### 使用 JavaScript 代码设置 --argument 属性

   ``` ts
   const sCompany = Argument["company"]
   const sProduct = Argument["product"]
   ```

3. **builder** 对象方法不能与 JS 变量一起调用。必要时，请用 *jsValue* 指令将它们包裹起来：

   ``` ts
   const jsVar = "123.docx"
   builder.SaveFile("docx", jsVar) // 不正确
   builder.SaveFile("docx", "jsValue(jsVar)") // 正确
   ```

4. 为方便起见，格式类型已替换为字符串。

   例如，

   ``` ts
   builder.CreateFile("docx")
   ```

   与以下代码相同

   ``` ts
   CDocBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX)
   ```

   而

   ``` ts
   builder.SaveFile("docx", file_path)
   ```

   与以下代码相同

   ``` ts
   CDocBuilder.SaveFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX, file_path)
   ```

   ## 格式类型

   | 字符串 | 格式类型                                      |
   | ------ | --------------------------------------------- |
   | "docx" | OFFICESTUDIO_FILE_DOCUMENT_DOCX                |
   | "doc"  | OFFICESTUDIO_FILE_DOCUMENT_DOC                 |
   | "odt"  | OFFICESTUDIO_FILE_DOCUMENT_ODT                 |
   | "rtf"  | OFFICESTUDIO_FILE_DOCUMENT_RTF                 |
   | "txt"  | OFFICESTUDIO_FILE_DOCUMENT_TXT                 |
   | "dotx" | OFFICESTUDIO_FILE_DOCUMENT_DOTX                |
   | "ott"  | OFFICESTUDIO_FILE_DOCUMENT_OTT                 |
   | "html" | OFFICESTUDIO_FILE_DOCUMENT_HTML                |
   | "pdf"  | OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF           |
   | "pptx" | OFFICESTUDIO_FILE_PRESENTATION_PPTX            |
   | "ppt"  | OFFICESTUDIO_FILE_PRESENTATION_PPT             |
   | "odp"  | OFFICESTUDIO_FILE_PRESENTATION_ODP             |
   | "ppsx" | OFFICESTUDIO_FILE_PRESENTATION_PPSX            |
   | "potx" | OFFICESTUDIO_FILE_PRESENTATION_POTX            |
   | "otp"  | OFFICESTUDIO_FILE_PRESENTATION_OTP             |
   | "xlsx" | OFFICESTUDIO_FILE_SPREADSHEET_XLSX             |
   | "xls"  | OFFICESTUDIO_FILE_SPREADSHEET_XLS              |
   | "ods"  | OFFICESTUDIO_FILE_SPREADSHEET_ODS              |
   | "csv"  | OFFICESTUDIO_FILE_SPREADSHEET_CSV              |
   | "xltx" | OFFICESTUDIO_FILE_SPREADSHEET_XLTX             |
   | "ots"  | OFFICESTUDIO_FILE_SPREADSHEET_OTS              |
   | "pdf"  | OFFICESTUDIO_FILE_CROSSPLATFORM_PDF            |
   | "djvu" | OFFICESTUDIO_FILE_CROSSPLATFORM_DJVU           |
   | "xps"  | OFFICESTUDIO_FILE_CROSSPLATFORM_XPS            |
   | "pdfa" | OFFICESTUDIO_FILE_CROSSPLATFORM_PDFA           |
   | "jpg"  | OFFICESTUDIO_FILE_IMAGE_JPG                    |
   | "png"  | OFFICESTUDIO_FILE_IMAGE_PNG                    |
   | "bmp"  | OFFICESTUDIO_FILE_IMAGE_BMP                    |

5. 整个 JavaScript 上下文是其原生 CDocBuilder **builderJS** 对象的包装器。你需要像处理普通 JavaScript 对象一样处理它。在这种情况下，JS 变量不需要 *jsValue* 指令：

   ``` ts
   builderJS.OpenFile("path_or_url", "x2t_additons_as_xml")
   builderJS.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX)
   // 或 builderJS.CreateFile("docx")
   builderJS.SetTmpFolder("folder")
   builderJS.SaveFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX, "path", "x2t_additons_as_xml")
   // 或 builderJS.SaveFile("docx", "path", "x2t_additons_as_xml")
   builderJS.CloseFile()
   ```

6. Document Builder 始终处理一个文件。但在某些情况下，你需要能够打开另一个文件，不是为了将其数据添加到内容中，而是为了某种操作（文档比较、邮件合并等）。针对这种情况，Document Builder 提供了 **OpenTmpFile** 方法：

   ``` ts
   const tmpFile = builderJS.OpenTmpFile("path_or_url")
   ```

   ## 方法

   | 名称        | 描述                                                                 |
   | ----------- | -------------------------------------------------------------------- |
   | IsValid     | 指定临时文件是否有效（**true**）。                                   |
   | GetBinary   | 返回包含 *doct/pptt/xlst* 二进制内容的 Uint8Array。                  |
   | GetFolder   | 返回包含临时文件内容的临时文件夹的字符串路径。                        |
   | Close       | 关闭文件（删除临时文件夹内容）。                                     |
   | GetImageMap | 返回一个字典对象，包含 *imageId -> imagePath* 键值对（用于插入文档）。 |

7. 为了简化代码，请使用以下类型定义：

   ```cpp
   typedef CDocBuilderValue CValue;
   typedef CDocBuilderContext CContext;
   typedef CDocBuilderContextScope CContextScope;
   ```