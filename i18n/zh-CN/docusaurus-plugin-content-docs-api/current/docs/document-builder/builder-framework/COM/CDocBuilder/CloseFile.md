import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile（关闭文件）

关闭文件以停止对其进行操作。您可以使用单个 ONLYOFFICE 文档构建器实例来处理所有文件，但在这种情况下，需要先关闭前一个文件，然后才能开始处理下一个文件。

## 语法

```cpp
HRESULT CloseFile();
```

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->CloseFile();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>