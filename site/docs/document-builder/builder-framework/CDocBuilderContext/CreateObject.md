import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateObject

Creates an empty object, an analogue of `{}` in JS.

:::note
For JS, this method is not used.
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

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        This method has no parameters.
    </TabItem>
    <TabItem value="cpp" label="C++">
        This method has no parameters.
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type                                                            | Description                                   |
        | ------ | --------------------------------------------------------------- | --------------------------------------------- |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The pointer to store the created empty object |
    </TabItem>
    <TabItem value="java" label="Java">
        This method has no parameters.
    </TabItem>
    <TabItem value="net" label=".Net">
        This method has no parameters.
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
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
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
