---
sidebar_position: -5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C++

要将 ONLYOFFICE Document Builder 集成到任何应用程序中，需使用 C++ 的 doctrenderer 库。

## 类

当前应用程序版本包含四个主要类：

| **名称**                                                                      | **描述**                                                                                                                               |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | 供 ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）。                                           |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | 供 ONLYOFFICE Document Builder 用于获取工作所需的 JS 上下文。                                                                             |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为在局部作用域内执行的所有操作设置执行上下文。                                                                            |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | 供 ONLYOFFICE Document Builder 用于获取已调用的 JS 命令的结果。它表示 JS 对象的包装器。                                                 |

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        #include <string>
        #include "common.h"
        #include "docbuilder.h"

        // 指定 Document Builder 工作目录的路径和结果路径（生成的文件将保存到此处）
        #define WORK_DIRECTORY L"builder/opt/onlyoffice/documentbuilder"

        using namespace NSDoctRenderer;

        int main(int argc, char *argv[])
        {
            CDocBuilder::Initialize(WORK_DIRECTORY);

            CDocBuilder oBuilder;
            oBuilder.SetProperty("--work-directory", WORK_DIRECTORY);

            oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);

            CContext oContext = oBuilder.GetContext();
            CContextScope oScope = oContext.CreateScope();

            CValue oGlobal = oContext.GetGlobal();

            CValue oApi = oGlobal["Api"];
            CValue oDocument = oApi.Call("GetDocument");
            CValue oParagraph = oApi.Call("CreateParagraph");
            oParagraph.Call("SetSpacingAfter", 1000, false);
            oParagraph.Call("AddText", "Hello, world!");
            CValue oContent = oContext.CreateArray(1);
            oContent[0] = oParagraph;
            oDocument.Call("InsertContent", oContent);

            std::wstring sDstPath = L"result.docx";
            oBuilder.SaveFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX, sDstPath.c_str());
            oBuilder.CloseFile();

            CDocBuilder::Dispose();

            return 0;
        }
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        builder.CreateFile("docx");
        let doc = Api.GetDocument();
        let paragraph = Api.CreateParagraph();
        paragraph.SetSpacingAfter(1000, false);
        paragraph.AddText("Hello, world!");
        doc.InsertContent([paragraph]);
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>