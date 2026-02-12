---
sidebar_position: -5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C++

For the integration of ONLYOFFICE Document Builder into any application, the C++ doctrenderer library is used.

## Classes

The current application version contains four main classes:

| **Name**                                                                      | **Description**                                                                                                                           |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | Used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated. |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | Used by ONLYOFFICE Document Builder for getting JS context for working.                                                                   |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | The stack-allocated class which sets the execution context for all operations executed within a local scope.                              |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | Used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object.               |

## Example

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        #include <string>
        #include "common.h"
        #include "docbuilder.h"

        // Specify the path to the Document Builder work directory and the result path (where the generated file will be saved)
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
