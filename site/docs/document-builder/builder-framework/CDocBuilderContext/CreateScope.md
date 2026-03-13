import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateScope

Creates a [context scope](../CDocBuilderContextScope/CDocBuilderContextScope.md) which sets the execution context for all operations executed within a local scope.

:::note
For the `.docbuilder` file the `CDocBuilderContext.CreateScope` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateScope(self) -> CDocBuilderContextScope
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderContextScope CreateScope();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateScope([out, retval] I_DOCBUILDER_CONTEXT_SCOPE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderContextScope createScope();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderContextScope^ CreateScope();
        ```
    </TabItem>
</Tabs>

## Parameters

*COM only*

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type                                                                                  | Description                 |
        | ------ | ------------------------------------------------------------------------------------- | --------------------------- |
        | result | [I_DOCBUILDER_CONTEXT_SCOPE**](../CDocBuilderContextScope/CDocBuilderContextScope.md) | The returned context scope. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        scope = context.CreateScope()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CContextScope oScope = oContext.CreateScope();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderContextScope* oScope = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->CreateScope(&oScope);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderContextScope scope = context.createScope();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CContextScope oScope = oContext.CreateScope();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
