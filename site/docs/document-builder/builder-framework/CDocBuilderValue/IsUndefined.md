import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsUndefined

Returns true if the `CDocBuilderValue` object is undefined.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsUndefined` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsUndefined(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsUndefined();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsUndefined([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isUndefined();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsUndefined();
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                                                     |
        | ------ | ------------- | --------------------------------------------------------------- |
        | result | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is undefined.   |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        bUndefined = globalObj.IsUndefined()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bUndefined = oGlobal.IsUndefined();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->IsUndefined(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        boolean bUndefined = global.isUndefined();
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
        bool bUndefined = oGlobal.IsUndefined();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
