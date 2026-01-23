import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand（执行命令）

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用的命令的更多信息，请参见[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/presentation-api/presentation-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或[表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilder.ExecuteCommand` 方法。而是直接使用命令本身。见下面的示例。

## 语法

```cs
bool ExecuteCommand(String^ sCommand, CDocBuilderValue^% oRetValue = 0);
```

## 参数

| 参数      | 类型                                                          | 默认值 | 描述                                                                                                                               |
| --------- | ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| sCommand  | String^                                                       |        | 以 JavaScript 代码形式存在的命令，用于创建文档文件（在 .Net 中，当命令包含引号时，必须使用转义字符）。                               |
| oRetValue | [CDocBuilderValue^%](../CDocBuilderValue/CDocBuilderValue.md) | 0      | 命令的返回值。                                                                                                                     |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello from .net!\");");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello from .net!");
        ```
    </TabItem>
</Tabs>
