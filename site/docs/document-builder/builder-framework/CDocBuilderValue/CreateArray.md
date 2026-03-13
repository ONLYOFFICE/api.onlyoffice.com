import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateArray

Creates an array value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateArray](../CDocBuilderContext/CreateArray.md) method.

:::note
This method is only available in **Python** and **Java**.
:::

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateArray` method is not used.

## Syntax

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

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name   | Type | Description       |
        | ------ | ---- | ----------------- |
        | length | int  | The array length. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name   | Type | Description       |
        | ------ | ---- | ----------------- |
        | length | int  | The array length. |
    </TabItem>
</Tabs>

## Example

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
