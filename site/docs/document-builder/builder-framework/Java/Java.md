---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java

For the integration of ONLYOFFICE Document Builder into any application, the Java doctrenderer library is used.

## Classes

The current application version contains four main classes:

| **Name**                                                                      | **Description**                                                                                                                           |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md)                                     | Used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated. |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md)                | Used by ONLYOFFICE Document Builder for getting JS context for working.                                                                   |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | The stack-allocated class which sets the execution context for all operations executed within a local scope.                              |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md)                      | Used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object.               |

> JDK 8 and above is supported.

## Example

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
