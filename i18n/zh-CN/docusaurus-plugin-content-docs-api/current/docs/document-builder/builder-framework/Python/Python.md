---
sidebar_position: -6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python

要将 ONLYOFFICE Document Builder 集成到任何应用程序中，需使用 Python 的 doctrenderer 库。

## 类

当前应用程序版本包含四个主要类：

| **名称**                                                                 | **描述**                                                                                                                               |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                | 供 ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）。                                         |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)           | 供 ONLYOFFICE Document Builder 用于获取工作所需的 JS 上下文。                                                                           |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为在本地作用域内执行的所有操作设置执行上下文。                                                                            |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                 | 供 ONLYOFFICE Document Builder 用于获取已调用的 JS 命令的结果。它表示 JS 对象的包装器。                                                 |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]

        document = api.Call("GetDocument")
        paragraph = api.Call("CreateParagraph")
        paragraph.Call("SetSpacingAfter", 1000, False)
        paragraph.Call("AddText", "Hello, World!")
        content = context.CreateArray(1)
        content[0] = paragraph
        document.Call("InsertContent", content)

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        builder.CreateFile("docx");
        let doc = Api.GetDocument();
        let paragraph = Api.CreateParagraph();
        paragraph.SetSpacingAfter(1000, false);
        paragraph.AddText("Hello, World!");
        doc.InsertContent([paragraph]);
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>