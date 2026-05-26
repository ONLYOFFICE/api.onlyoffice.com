---
sidebar_position: -7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

You can integrate **ONLYOFFICE Document Builder** into your Python, C++, COM, Java, or .Net application to generate documents dynamically. Scripts and data are passed at runtime using methods like [Run](CDocBuilder/Run.md), [RunText](CDocBuilder/RunText.md), or [ExecuteCommand](CDocBuilder/ExecuteCommand.md), making it ideal for generating documents on demand — such as invoices, reports, or personalized content based on user input.

## Classes

| Class | Description |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | Base class used by ONLYOFFICE Document Builder for the document file (document, spreadsheet, presentation, form document, PDF) to be generated. |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | Class used by ONLYOFFICE Document Builder for getting JS context for working. |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | Stack-allocated class which sets the execution context for all operations executed within a local scope. |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object. |

## Example

<Tabs groupId="lang" queryString="lang">
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
