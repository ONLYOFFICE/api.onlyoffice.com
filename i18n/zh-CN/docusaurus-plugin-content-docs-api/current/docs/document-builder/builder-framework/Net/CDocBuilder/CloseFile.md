import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile（关闭文件）

关闭文件以停止对其进行操作。您可以使用单个 ONLYOFFICE 文档构建器实例来处理所有文件，但在这种情况下，需要先关闭上一个文件，才能开始处理下一个文件。

## 语法

```cs
void CloseFile();
```

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.CloseFile();
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
