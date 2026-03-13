import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsTypedArray

如果 `CDocBuilderValue` 对象是类型化数组，则返回 true。

:::note
此方法仅在 **C++**、**COM** 和 **.Net** 中可用。
:::

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.IsTypedArray` 方法。

## 语法

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

## 参数

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                               |
        | ------ | ------------- | -------------------------------------------------- |
        | result | VARIANT_BOOL* | 指定 `CDocBuilderValue` 对象是否为类型化数组。     |
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
