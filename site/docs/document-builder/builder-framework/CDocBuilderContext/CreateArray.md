import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

:::note
For the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateArray(self, length: int) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue CreateArray(const int& nLength);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateArray([in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createArray(int length);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ CreateArray(int nLength);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name   | Type | Description       |
        | ------ | ---- | ----------------- |
        | length | int  | The array length. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name    | Type       | Description       |
        | ------- | ---------- | ----------------- |
        | nLength | const int& | The array length. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type                                                            | Description         |
        | ------ | --------------------------------------------------------------- | ------------------- |
        | length | long                                                            | The array length.   |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned array. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name   | Type | Description       |
        | ------ | ---- | ----------------- |
        | length | int  | The array length. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name    | Type | Description       |
        | ------- | ---- | ----------------- |
        | nLength | int  | The array length. |
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
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oArray = oContext.CreateArray(2);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oContent = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->CreateArray(1, &oContent);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue arrayValue = context.createArray(2);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oArray = oContext.CreateArray(2);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
