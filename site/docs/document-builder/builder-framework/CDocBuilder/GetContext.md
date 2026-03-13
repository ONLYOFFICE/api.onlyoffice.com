import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

:::note
For the `.docbuilder` file the `CDocBuilder.GetContext` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def GetContext(self) -> CDocBuilderContext
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderContext GetContext();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT GetContext([out, retval] I_DOCBUILDER_CONTEXT** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderContext getContext(boolean enterContext);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderContext^ GetContext();
        ```
    </TabItem>
</Tabs>

## Parameters

*COM and Java only*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type                   | Description              |
        | ------ | ---------------------- | ------------------------ |
        | result | [I_DOCBUILDER_CONTEXT**](../CDocBuilderContext/CDocBuilderContext.md) | The returned JS context. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name         | Type    | Default | Description                                    |
        | ------------ | ------- | ------- | ---------------------------------------------- |
        | enterContext | boolean | false   | Specifies whether the context will be entered. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CDocBuilderContext oContext = oBuilder.GetContext();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        oBuilder->GetContext(&oContext);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
