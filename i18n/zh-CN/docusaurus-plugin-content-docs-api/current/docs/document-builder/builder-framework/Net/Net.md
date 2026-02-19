---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# .Net

要将 ONLYOFFICE Document Builder 集成到任何应用程序中，需使用 .Net 的 doctrenderer 库。

## 类

当前应用程序版本包含四个主要类：

| **名称**                                                                      | **描述**                                                                                                                               |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | 供 ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）。                                           |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | 供 ONLYOFFICE Document Builder 用于获取工作所需的 JS 上下文。                                                                             |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为在本地范围内执行的所有操作设置执行上下文。                                                                                |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | 供 ONLYOFFICE Document Builder 用于获取已调用的 JS 命令的结果。它表示 JS 对象的包装器。                                                     |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ```cs
        using docbuilder_net;

        using OfficeFileTypes = docbuilder_net.FileTypes;
        using CValue = docbuilder_net.CDocBuilderValue;
        using CContext = docbuilder_net.CDocBuilderContext;
        using CContextScope = docbuilder_net.CDocBuilderContextScope;

        namespace Test
        {
            public class Program
            {
                public static void Main(string[] args)
                {
                    string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
                    string resultPath = "result.docx";

                    // 将 Docbuilder 的 dll 添加到路径中
                    System.Environment.SetEnvironmentVariable("PATH", System.Environment.GetEnvironmentVariable("PATH") + ";" + workDirectory);

                    Test(workDirectory, resultPath);

                    // 取消注释这些行以检查终结器调用
                    // GC.Collect();
                    // Console.ReadKey();
                }
                public static void Test(string workDirectory, string resultPath)
                {
                    var doctype = (int)OfficeFileTypes.Document.DOCX;

                    CDocBuilder.Initialize(workDirectory);
                    CDocBuilder oBuilder = new CDocBuilder();
                    oBuilder.SetProperty("--work-directory", workDirectory);
                    oBuilder.CreateFile(doctype);

                    CContext oContext = oBuilder.GetContext();
                    CContextScope oScope = oContext.CreateScope();
                
                    CValue oGlobal = oContext.GetGlobal();

                    CValue oApi = oGlobal["Api"];
                    CValue oDocument = oApi.Call("GetDocument");
                    CValue oParagraph = oApi.Call("CreateParagraph");
                    CValue oContent = oContext.CreateArray(1);

                    oParagraph.Call("SetSpacingAfter", 1000, false);
                    oParagraph.Call("AddText", "Hello from .net!");
                    oContent[0] = oParagraph;
                    oDocument.Call("InsertContent", oContent);

                    oBuilder.SaveFile(doctype, resultPath);
                    oBuilder.CloseFile();

                    CDocBuilder.Destroy();
                }
            }
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
        paragraph.AddText("Hello from .net!");
        doc.InsertContent([paragraph]);
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>