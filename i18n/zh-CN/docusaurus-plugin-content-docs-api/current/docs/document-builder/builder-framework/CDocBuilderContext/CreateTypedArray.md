import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateTypedArray

创建 Uint8Array 值，相当于 JS 中的 `Uint8Array`。

:::note
此方法不适用于 **Java** 和 **Python**。
对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateTypedArray` 方法。
:::

## 语法

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

## 参数

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        | 名称         | 类型           | 描述                                                                                                                                                                                                                                                                 |
        | ------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | sBuffer      | unsigned char* | 数组缓冲区。                                                                                                                                                                                                                                                           |
        | nLength      | const int&     | 数组长度。                                                                                                                                                                                                                                                           |
        | bExternalize | const bool&    | 指定在释放 Uint8Array 后应用程序是否释放内存（`true`）。如果此参数为 `false`，则内存将自动释放。在这种情况下，缓冲区必须使用 [AllocMemoryTypedArray](./AllocMemoryTypedArray.md) 方法创建。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型                                                            | 描述               |
        | ------ | --------------------------------------------------------------- | ------------------------- |
        | buffer | VARIANT                                                         | 数组缓冲区。         |
        | length | long                                                            | 数组长度。         |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的类型化数组。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型               | 描述       |
        | ------- | ------------------ | ----------------- |
        | aBuffer | array\<Byte\>^     | 数组缓冲区。 |
    </TabItem>
</Tabs>

## 示例

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
