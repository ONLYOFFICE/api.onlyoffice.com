---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python

For the integration of ONLYOFFICE Document Builder into any application, the Python doctrenderer library is used. 

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
    <TabItem value="python" label="Python">
        ``` py
        import os
        import sys
        sys.path.append("C:/Program Files/ONLYOFFICE/documentBuilder")
        import docbuilder

        builder = docbuilder.CDocBuilder()

        builder.CreateFile("docx")

        context = builder.GetContext()
        scope = context.CreateScope()

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
        builder.SetTmpFolder("DocBuilderTemp")
        builder.CreateFile("docx")
        const oDocument = Api.GetDocument()
        const oParagraph = Api.CreateParagraph()
        oParagraph.SetSpacingAfter(1000, false)
        oParagraph.AddText("Hello, World!")
        oDocument.InsertContent([oParagraph])
        builder.SaveFile("docx", "result.docx")
        builder.CloseFile()
        ```
    </TabItem>
</Tabs>
