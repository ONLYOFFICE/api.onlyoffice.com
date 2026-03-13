import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateNull

创建空值。此方法返回当前[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其 [CreateNull](../CDocBuilderContext/CreateNull.md) 方法。

:::note
此方法在 **COM** 中不可用。
:::

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.CreateNull` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateNull() -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        static CDocBuilderValue CreateNull();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createNull();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        static CDocBuilderValue^ CreateNull();
        ```
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        null = api.CreateNull()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oNull = oApi.CreateNull();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue nullValue = api.createNull();
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
        CValue oApi = oGlobal["Api"];
        CValue oNull = oApi.CreateNull();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
