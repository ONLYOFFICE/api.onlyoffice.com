---
sidebar_position: -4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# COM

为了将 ONLYOFFICE Document Builder 集成到任何应用程序中，使用了 COM doctrenderer 库。

## 类

当前应用程序版本包含四个主要类：

| **名称**                                                                      | **描述**                                                                                                                               |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | 由 ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）。                                        |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | 由 ONLYOFFICE Document Builder 用于获取工作所需的 JS 上下文。                                                                          |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为在局部作用域内执行的所有操作设置执行上下文。                                                                            |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | 由 ONLYOFFICE Document Builder 用于获取已调用的 JS 命令的结果。它表示 JS 对象的包装器。                                                |

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        #include <iostream>
        #include <comutil.h>
        #include <atlcomcli.h>
        #include <atlsafe.h>

        #include "../../src/docbuilder_midl.h"

        #ifdef _UNICODE
        # pragma comment(lib, "comsuppw.lib")
        #else
        # pragma comment(lib, "comsupp.lib")
        #endif

        #define RELEASEINTERFACE(pinterface)  \
        {                                     \
            if (NULL != pinterface)           \
            {                                 \
                pinterface->Release();        \
                pinterface = NULL;            \
            }                                 \
        }

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
            oContext->CreateArray(1, &oContent);

            oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
            oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
            oContext->CreateArray(1, &oContent);

            oParagraph->Call(_bstr_t("SetSpacingAfter"), ATL::CComVariant(1000), ATL::CComVariant(VARIANT_FALSE), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
            oParagraph->Call(_bstr_t("AddText"), ATL::CComVariant("Hello from COM!"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
            oContent->Set(0, oParagraph);

            oDocument->Call(_bstr_t("InsertContent"), ATL::CComVariant(oContent), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);

            oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);

            RELEASEINTERFACE(oContent);

            IONLYOFFICEDocBuilderValue* oArr = NULL;
            CComSafeArray<BYTE> arr;
            arr.Add(1);
            oContext->CreateTypedArray(ATL::CComVariant(arr), 1, &oArr);

            oBuilder->CloseFile();
            oBuilder->Dispose();

            RELEASEINTERFACE(oBuilder);
            RELEASEINTERFACE(oContext);
            RELEASEINTERFACE(oScope);

            RELEASEINTERFACE(oGlobal);
            RELEASEINTERFACE(oApi);
            RELEASEINTERFACE(oDocument);
            RELEASEINTERFACE(oParagraph);
            RELEASEINTERFACE(oContent);

            CoUninitialize();
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
        paragraph.AddText("Hello from COM!");
        doc.InsertContent([paragraph]);
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>