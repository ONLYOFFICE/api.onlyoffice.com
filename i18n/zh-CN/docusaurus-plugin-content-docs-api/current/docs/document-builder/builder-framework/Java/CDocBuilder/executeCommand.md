import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# executeCommand

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用的命令的更多信息，请参见[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilder.executeCommand` 方法。而是直接使用命令本身。见下面的示例。

## 语法

```java
boolean executeCommand(String command, CDocBuilderValue retValue = 0);
```

## 参数

| 参数      | 类型                                                         | 默认值 | 描述                                                                                                                               |
| --------- | ------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| command   | String                                                       |        | 用于创建文档文件的 JavaScript 代码形式的命令（在 Java 中，当命令包含引号符号时，必须使用转义字符）。                                 |
| retValue  | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | 0      | 命令的返回值。                                                                                                                     |

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.executeCommand(L"oParagraph.AddText(\"Hello from Java!\");");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello from Java!");
        ```
    </TabItem>
</Tabs>
