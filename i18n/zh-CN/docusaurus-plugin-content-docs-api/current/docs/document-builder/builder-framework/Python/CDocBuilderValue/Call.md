import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Call（调用）

调用指定的文档生成器方法。有关各种文档类型可用的方法，请参阅[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilderValue.Call` 方法。而是直接使用该方法本身。请参见下面的示例。

## 语法

```py
def Call(self, str name, CDocBuilderValue *args);
```

## 参数

| 参数   | 类型                                                          | 描述                                                         |
| ------ | ------------------------------------------------------------- | ------------------------------------------------------------ |
| name   | str                                                           | 文档生成器方法的名称。                                       |
| *args  | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)   | 文档生成器方法作为参数接收的参数。                           |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
