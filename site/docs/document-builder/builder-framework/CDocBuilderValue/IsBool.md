import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsBool

Returns true if the `CDocBuilderValue` object is a boolean value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsBool` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsBool(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsBool();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsBool([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isBool();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsBool();
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                                                         |
        | ------ | ------------- | ------------------------------------------------------------------- |
        | result | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is a boolean value. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        bBool = globalObj.IsBool()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bBool = oGlobal.IsBool();
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
        oGlobal->IsBool(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        boolean bBool = global.isBool();
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
        bool bBool = oGlobal.IsBool();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
