import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateObject

Creates an empty object, an analogue of `{}` in JS.

:::note
For the `.docbuilder` file the `CDocBuilderContext.CreateObject` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateObject(self) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue CreateObject();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateObject([out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createObject();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ CreateObject();
        ```
    </TabItem>
</Tabs>

## Parameters

*COM only*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type                                                            | Description                                   |
        | ------ | --------------------------------------------------------------- | --------------------------------------------- |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The pointer to store the created empty object |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        content = context.CreateObject()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oObject = oContext.CreateObject();
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
        oContext->CreateObject(&oContent);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue objectValue = context.createObject();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oObject = oContext.CreateObject();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
