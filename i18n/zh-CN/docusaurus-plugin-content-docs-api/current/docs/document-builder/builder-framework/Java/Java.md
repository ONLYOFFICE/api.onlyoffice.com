---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java

要将 ONLYOFFICE Document Builder 集成到任何应用程序中，需使用 Java 的 doctrenderer 库。

## 类

当前应用程序版本包含四个主要类：

| **名称**                                                                      | **描述**                                                                                                                               |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | 供 ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）。                                           |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | 供 ONLYOFFICE Document Builder 用于获取工作所需的 JS 上下文。                                                                           |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为在本地作用域内执行的所有操作设置执行上下文。                                                                            |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | 供 ONLYOFFICE Document Builder 用于获取已调用的 JS 命令的结果。它表示 JS 对象的包装器。                                                 |

> 支持 JDK 8 及以上版本。

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        import docbuilder.*;

        public class Program {
            public static void main(String[] args) {
                String resultPath = "result.docx";

                test(resultPath);

                System.gc();
            }

            public static void test(String resultPath) {
                CDocBuilder.initialize("");
                CDocBuilder builder = new CDocBuilder();
                builder.createFile(FileTypes.Document.DOCX);

                CDocBuilderContext context = builder.getContext();

                CDocBuilderValue global = context.getGlobal();

                CDocBuilderValue api = global.get("Api");
                CDocBuilderValue doc = api.call("GetDocument");
                CDocBuilderValue paragraph1 = api.call("CreateParagraph");

                paragraph1.call("SetSpacingAfter", 1000, false);
                paragraph1.call("AddText", "Hello from Java!");

                CDocBuilderValue paragraph2 = api.call("CreateParagraph");
                paragraph2.call("AddText", "Goodbye!");

                CDocBuilderValue[] paragraphs = { paragraph1, paragraph2 };
                CDocBuilderValue content = new CDocBuilderValue(paragraphs);

                doc.call("InsertContent", content);

                builder.saveFile(FileTypes.Document.DOCX, resultPath);
                builder.closeFile();

                CDocBuilder.dispose();
            }
        }
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        builder.CreateFile("docx");
        let doc = Api.GetDocument();
        let paragraph1 = Api.CreateParagraph();
        paragraph1.SetSpacingAfter(1000, false);
        paragraph1.AddText("Hello from Java!");
        let paragraph2 = Api.CreateParagraph();
        paragraph2.AddText("Goodbye!");
        let paragraphs = [paragraph1, paragraph2];
        doc.InsertContent(paragraphs);
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>