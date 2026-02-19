import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# call（调用）

调用指定的文档生成器方法。有关各种文档类型可用的方法，请参阅[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilderValue.call` 方法。而是直接使用该方法本身。请参见下面的示例。

## 语法

```java
CDocBuilderValue call(String name, Object p1, Object p2, Object p3, Object p4, Object p5, Object p6);
```

## 参数

| 参数   | 类型   | 描述                                  |
| ------ | ------ | ------------------------------------- |
| name   | String | 文档生成器方法的名称。                |
| p1-p6  | Object | 文档生成器方法作为参数接收的参数值。  |

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue doc = api.call("GetDocument");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
