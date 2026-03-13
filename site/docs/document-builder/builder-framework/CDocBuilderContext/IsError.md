import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsError

Checks for errors in JS. The error message and call stack will be written to `std::cerr`.

:::note
For the `.docbuilder` file the `CDocBuilderContext.IsError` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsError(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsError();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsError([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isError();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsError();
        ```
    </TabItem>
</Tabs>

## Parameters

*COM only*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                       |
        | ------ | ------------- | --------------------------------- |
        | result | VARIANT_BOOL* | Specifies whether an error occurs |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        bError = context.IsError()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        bool bError = oContext.IsError();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->IsError(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        boolean errorValue = context.isError();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        bool bError = oContext.IsError();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
