import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsEmpty

Returns true if the `CDocBuilderValue` object is empty.

:::note
For JS, this method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsEmpty(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsEmpty();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsEmpty([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isEmpty();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsEmpty();
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
        | Name   | Type          | Description                                                 |
        | ------ | ------------- | ----------------------------------------------------------- |
        | result | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is empty.   |
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
        globalObj = context.GetGlobal()
        bEmpty = globalObj.IsEmpty()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bEmpty = oGlobal.IsEmpty();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->IsEmpty(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        boolean bEmpty = global.isEmpty();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bEmpty = oGlobal.IsEmpty();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
