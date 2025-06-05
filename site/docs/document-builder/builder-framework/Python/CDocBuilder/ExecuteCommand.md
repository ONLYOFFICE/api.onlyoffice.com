import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/docs/office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.ExecuteCommand` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```py
def ExecuteCommand(self, str command, CDocBuilderValue | None retValue = None);
```

## Parameters

| Parameter | Type                     | Default | Description                                                                                                                                                                           |
| --------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| command   | str                      |         | The command in the form of JavaScript code which will be used to create the document file (in Python, the escape character must be used when the command contains quotation symbols). |
| retValue  | CDocBuilderValue \| None | None    | The command return value.                                                                                                                                                             |

## Example

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        builder.ExecuteCommand("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText('Hello from Python!');");

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello, world!");
        ```
    </TabItem>
</Tabs>
