import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RunText

Runs all the commands for the document creation using a single command. Compared to [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) where only one command at a time is allowed, `CDocBuilder.RunText` makes it possible to enter all the commands for the document creation at once.

> Please note, that for the `.docbuilder` file the `CDocBuilder.RunText` method is not used.

## Syntax

```cs
bool RunText(String^ sCommands);
```

## Parameters

| Parameter | Type    | Description                                                                                                                                                                                                                                                                                         |
| --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommands | String^ | The commands which will be used to create the document file (in .Net, the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |

## Example

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.RunText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\nbuilder.CreateFile(\"docx\");");
        ```
    </TabItem>
</Tabs>
