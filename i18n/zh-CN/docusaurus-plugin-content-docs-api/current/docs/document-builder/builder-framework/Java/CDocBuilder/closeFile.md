import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# closeFile

关闭文件以停止对其进行操作。您可以使用单个 ONLYOFFICE Document Builder 实例来处理所有文件，但在这种情况下，需要先关闭前一个文件，才能开始处理下一个文件。

## 语法

```java
void closeFile();
```

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.closeFile();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
