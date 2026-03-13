import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsTypedArray

Returns true if the `CDocBuilderValue` object is a typed array.

:::note
This method is only available in **C++**, **COM**, and **.Net**.
:::

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsTypedArray` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsTypedArray();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsTypedArray([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsTypedArray();
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                                                       |
        | ------ | ------------- | ----------------------------------------------------------------- |
        | result | VARIANT_BOOL* | Specifies whether the `CDocBuilderValue` object is a typed array. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bTypedArray = oGlobal.IsTypedArray();
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
        oGlobal->IsTypedArray(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bTypedArray = oGlobal.IsTypedArray();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
