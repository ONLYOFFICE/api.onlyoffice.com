import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/docs/office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

:::note
For the `.docbuilder` file the `CDocBuilder.ExecuteCommand` method is not used explicitly. The command itself is used instead. See the example below.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def ExecuteCommand(self, command: str, retValue: CDocBuilderValue | None = None) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool ExecuteCommand(const wchar_t* sCommand, CDocBuilderValue* oRetValue = 0);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT ExecuteCommand([in] BSTR command, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean executeCommand(String command, CDocBuilderValue retValue);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool ExecuteCommand(String^ sCommand, CDocBuilderValue^% oRetValue);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name     | Type                                                                    | Default | Description                                                                                                                                                                            |
        | -------- | ----------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | command  | str                                                                     |         | The command in the form of JavaScript code which will be used to create the document file (in Python, the escape character must be used when the command contains quotation symbols). |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) \| None     | None    | The command return value.                                                                                                                                                              |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name      | Type                                                               | Default | Description                                                                                                                                      |
        | --------- | ------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sCommand  | const wchar_t*                                                     |         | The command which will be used to create the document file (in C++, the escape character must be used when the command contains quotation symbols). |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)*       | 0       | The command return value.                                                                                                                        |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name    | Type          | Description                                                                                                                                       |
        | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
        | command | BSTR          | The command which will be used to create the document file (in COM, the escape character must be used when the command contains quotation symbols). |
        | result  | VARIANT_BOOL* | Specifies if the operation of executing a command is successful or not.                                                                          |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name     | Type                                                              | Default | Description                                                                                                                                                                          |
        | -------- | ----------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | command  | String                                                            |         | The command in the form of JavaScript code which will be used to create the document file (in Java, the escape character must be used when the command contains quotation symbols). |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)       | null    | The command return value.                                                                                                                                                            |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name      | Type                                                                | Default | Description                                                                                                                                                                          |
        | --------- | ------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sCommand  | String^                                                             |         | The command in the form of JavaScript code which will be used to create the document file (in .Net, the escape character must be used when the command contains quotation symbols). |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)^%       | null    | The command return value.                                                                                                                                                            |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        builder.ExecuteCommand("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText('Hello from Python!');")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello, world!\");");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderValue* oRun = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
        oBuilder->ExecuteCommand(L"oParagraph.SetSpacingAfter(1000, false);", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.executeCommand("oParagraph.AddText(\"Hello from Java!\");");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.ExecuteCommand("oParagraph.AddText(\"Hello from .Net!\");");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello, world!");
        ```
    </TabItem>
</Tabs>
