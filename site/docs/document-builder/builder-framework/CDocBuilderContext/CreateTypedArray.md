import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateTypedArray

Creates a Uint8Array value, an analogue of `Uint8Array` in JS.

:::note
This method is not available for **Java** and **Python**.
For the `.docbuilder` file the `CDocBuilderContext.CreateTypedArray` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue CreateTypedArray(unsigned char* sBuffer, const int& nLength, const bool& bExternalize);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateTypedArray([in] VARIANT buffer, [in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ CreateTypedArray(array<Byte>^ aBuffer);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        | Name         | Type           | Description                                                                                                                                                                                                                                                                 |
        | ------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | sBuffer      | unsigned char* | The array buffer.                                                                                                                                                                                                                                                           |
        | nLength      | const int&     | The array length.                                                                                                                                                                                                                                                           |
        | bExternalize | const bool&    | Specifies if the application releases the memory after freeing Uint8Array (`true`). If this parameter is `false`, then the memory will be released automatically. In this case, the buffer must be created with the [AllocMemoryTypedArray](./AllocMemoryTypedArray.md) method. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type                                                            | Description               |
        | ------ | --------------------------------------------------------------- | ------------------------- |
        | buffer | VARIANT                                                         | The array buffer.         |
        | length | long                                                            | The array length.         |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The returned typed array. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name    | Type               | Description       |
        | ------- | ------------------ | ----------------- |
        | aBuffer | array\<Byte\>^     | The array buffer. |
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
        unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
        CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, false);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oArr = NULL;
        CComSafeArray<BYTE> arr;
        arr.Add(1);
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->CreateTypedArray(ATL::CComVariant(arr), 1, &oArr);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        array<System::Byte>^ aBuffer = gcnew array<Byte>(1500);
        CValue oTypedArray = oContext.CreateTypedArray(aBuffer);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
