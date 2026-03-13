import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateUndefined

Creates an undefined value, an analogue of `undefined` in JS.

:::note
For the `.docbuilder` file the `CDocBuilderContext.CreateUndefined` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateUndefined(self) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue CreateUndefined();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateUndefined([out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createUndefined();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ CreateUndefined();
        ```
    </TabItem>
</Tabs>

## Parameters

*COM only*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type                                                            | Description                   |
        | ------ | --------------------------------------------------------------- | ----------------------------- |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned undefined value. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        content = context.CreateUndefined()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oUndefined = oContext.CreateUndefined();
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
        oContext->CreateUndefined(&oContent);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue undefinedValue = context.createUndefined();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oUndefined = oContext.CreateUndefined();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
