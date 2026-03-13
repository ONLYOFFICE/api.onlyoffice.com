import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IsArray

如果 `CDocBuilderValue` 对象是数组，则返回 true。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.IsArray` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def IsArray(self) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool IsArray();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT IsArray([out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean isArray();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool IsArray();
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                           |
        | ------ | ------------- | ---------------------------------------------- |
        | result | VARIANT_BOOL* | 指定 `CDocBuilderValue` 对象是否为数组。       |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        bArray = globalObj.IsArray()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        bool bArray = oGlobal.IsArray();
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
        oGlobal->IsArray(&b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        boolean bArray = global.isArray();
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
        bool bArray = oGlobal.IsArray();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
