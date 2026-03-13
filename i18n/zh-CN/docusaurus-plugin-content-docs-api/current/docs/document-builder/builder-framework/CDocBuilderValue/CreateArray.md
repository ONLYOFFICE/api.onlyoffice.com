import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateArray

创建数组值。此方法返回当前[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其 [CreateArray](../CDocBuilderContext/CreateArray.md) 方法。

:::note
此方法仅在 **Python** 和 **Java** 中可用。
:::

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.CreateArray` 方法。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateArray(self, length: int) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createArray(int length);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型 | 描述       |
        | ------ | ---- | ---------- |
        | length | int  | 数组长度。 |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型 | 描述       |
        | ------ | ---- | ---------- |
        | length | int  | 数组长度。 |
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
        array = api.CreateArray(2)
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue arrayValue = api.createArray(2);
        CDocBuilder.dispose();
        ```
    </TabItem>
</Tabs>
