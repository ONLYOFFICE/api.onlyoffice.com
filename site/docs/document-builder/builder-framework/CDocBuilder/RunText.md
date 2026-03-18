import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RunText

Runs all the commands for the document creation using a single command. Compared to [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) where only one command at a time is allowed, `CDocBuilder.RunText` makes it possible to enter all the commands for the document creation at once.

:::note
For JS, this method is not used. This method is not available in C++ (use [RunTextA](RunTextA.md) or [RunTextW](RunTextW.md) instead).
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def RunText(self, commands: str) -> bool
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT RunText([in] BSTR commands, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean runText(String commands);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool RunText(String^ sCommands);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name     | Type | Description                                                                                                                                                                                                                                                                               |
        | -------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | commands | str  | The commands which will be used to create the document file (the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name     | Type          | Description                                                                                                                                                                                                                                                                               |
        | -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | commands | BSTR          | The commands which will be used to create the document file (the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |
        | result   | VARIANT_BOOL* | Specifies if the operation is successful or not.                                                                                                                                                                                                                                          |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name     | Type   | Description                                                                                                                                                                                                                                                                               |
        | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | commands | String | The commands which will be used to create the document file (the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name      | Type    | Description                                                                                                                                                                                                                                                                               |
        | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | sCommands | String^ | The commands which will be used to create the document file (the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();")
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        VARIANT_BOOL b;
        oBuilder->RunText(_bstr_t("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();"), &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.runText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
