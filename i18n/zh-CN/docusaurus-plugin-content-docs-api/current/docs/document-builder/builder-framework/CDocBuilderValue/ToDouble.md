import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ToDouble

将 `CDocBuilderValue` 对象转换为双精度值。

:::note
此方法不适用于 **JS**。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def ToDouble(self) -> float
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        double ToDouble();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT ToDouble([out, retval] double* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        double toDouble();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        double ToDouble();
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        此方法没有参数。
    </TabItem>
    <TabItem value="cpp" label="C++">
        此方法没有参数。
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型    | 描述               |
        | ------ | ------- | ------------------ |
        | result | double* | 返回的双精度值。   |
    </TabItem>
    <TabItem value="java" label="Java">
        此方法没有参数。
    </TabItem>
    <TabItem value="net" label=".Net">
        此方法没有参数。
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        dGlobal = globalObj.ToDouble()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        double dGlobal = oGlobal.ToDouble();
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
        double d;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->ToDouble(&d);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        double doubleValue = global.toDouble();
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
        double dGlobal = oGlobal.ToDouble();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
