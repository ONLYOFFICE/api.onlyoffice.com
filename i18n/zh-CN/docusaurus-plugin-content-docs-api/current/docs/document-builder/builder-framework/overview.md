---
sidebar_position: -7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概述

您可以将 **ONLYOFFICE Document Builder** 集成到您的 Python、C++、COM、Java 或 .Net 应用程序中，以动态生成文档。脚本和数据在运行时通过 [Run](CDocBuilder/Run.md)、[RunText](CDocBuilder/RunText.md) 或 [ExecuteCommand](CDocBuilder/ExecuteCommand.md) 等方法传递，非常适合按需生成文档，例如发票、报告或基于用户输入的个性化内容。

## 类

| 类 | 描述 |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。 |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | ONLYOFFICE Document Builder 用于获取 JS 上下文的类。 |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为本地作用域内执行的所有操作设置执行上下文。 |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | ONLYOFFICE Document Builder 用于获取所调用 JS 命令结果的类。它表示 JS 对象的包装器。 |

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]

        document = api.GetDocument()
        paragraph = api.CreateParagraph()
        paragraph.AddText("Hello, World!")
        content = context.CreateArray(1)
        content[0] = paragraph
        document.InsertContent(content)

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        #include <string>
        #include "common.h"
        #include "docbuilder.h"

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
            oParagraph.Call("AddText", "Hello, World!");
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
    <TabItem value="com" label="COM">
        ```cpp
        #include <comutil.h>
        #include <atlcomcli.h>
        #include "docbuilder_midl.h"

        int main(int argc, char *argv[])
        {
            CoInitialize(NULL);

            IONLYOFFICEDocBuilder* oBuilder = NULL;
            IONLYOFFICEDocBuilderContext* oContext = NULL;
            IONLYOFFICEDocBuilderContextScope* oScope = NULL;
            IONLYOFFICEDocBuilderValue* oGlobal = NULL;
            IONLYOFFICEDocBuilderValue* oApi = NULL;
            IONLYOFFICEDocBuilderValue* oDocument = NULL;
            IONLYOFFICEDocBuilderValue* oParagraph = NULL;
            IONLYOFFICEDocBuilderValue* oContent = NULL;

            HRESULT hr = CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_ALL, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
            if (FAILED(hr))
            {
                CoUninitialize();
                return 1;
            }

            VARIANT_BOOL b;

            oBuilder->Initialize();
            oBuilder->CreateFile(_bstr_t("docx"), &b);
            oBuilder->GetContext(&oContext);

            oContext->CreateScope(&oScope);
            oContext->GetGlobal(&oGlobal);

            oGlobal->GetProperty(_bstr_t("Api"), &oApi);
            oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
            oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
            oContext->CreateArray(1, &oContent);

            oParagraph->Call(_bstr_t("AddText"), ATL::CComVariant("Hello, World!"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
            oContent->Set(0, oParagraph);
            oDocument->Call(_bstr_t("InsertContent"), ATL::CComVariant(oContent), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);

            oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);
            oBuilder->CloseFile();
            oBuilder->Dispose();

            CoUninitialize();
            return 0;
        }
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        import docbuilder.*;

        public class Program {
            public static void main(String[] args) {
                CDocBuilder.initialize("");
                CDocBuilder builder = new CDocBuilder();
                builder.createFile(FileTypes.Document.DOCX);

                CDocBuilderContext context = builder.getContext();
                CDocBuilderValue global = context.getGlobal();
                CDocBuilderValue api = global.get("Api");

                CDocBuilderValue document = api.call("GetDocument");
                CDocBuilderValue paragraph = api.call("CreateParagraph");
                paragraph.call("AddText", "Hello, World!");

                CDocBuilderValue[] paragraphs = { paragraph };
                CDocBuilderValue content = new CDocBuilderValue(paragraphs);
                document.call("InsertContent", content);

                builder.saveFile(FileTypes.Document.DOCX, "result.docx");
                builder.closeFile();
                CDocBuilder.dispose();
            }
        }
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        using docbuilder_net;

        using OfficeFileTypes = docbuilder_net.FileTypes;
        using CValue = docbuilder_net.CDocBuilderValue;
        using CContext = docbuilder_net.CDocBuilderContext;
        using CContextScope = docbuilder_net.CDocBuilderContextScope;

        namespace Sample
        {
            public class Program
            {
                public static void Main(string[] args)
                {
                    string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
                    var doctype = (int)OfficeFileTypes.Document.DOCX;

                    CDocBuilder.Initialize(workDirectory);
                    CDocBuilder builder = new CDocBuilder();
                    builder.SetProperty("--work-directory", workDirectory);
                    builder.CreateFile(doctype);

                    CContext context = builder.GetContext();
                    CContextScope scope = context.CreateScope();
                    CValue global = context.GetGlobal();

                    CValue api = global["Api"];
                    CValue document = api.Call("GetDocument");
                    CValue paragraph = api.Call("CreateParagraph");
                    CValue content = context.CreateArray(1);

                    paragraph.Call("AddText", "Hello, World!");
                    content[0] = paragraph;
                    document.Call("InsertContent", content);

                    builder.SaveFile(doctype, "result.docx");
                    builder.CloseFile();
                    CDocBuilder.Destroy();
                }
            }
        }
        ```
    </TabItem>
    <TabItem value="js" label="JS">
        ```js
        builder.CreateFile("docx");

        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("Hello, World!");
        oDocument.InsertContent([oParagraph]);

        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
