import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile（关闭文件）

关闭文件以停止对其进行操作。您可以使用单个 ONLYOFFICE 文档生成器实例来处理所有文件，但在这种情况下，需要先关闭前一个文件，然后才能开始处理下一个文件。

## 语法

```cpp
void CloseFile();
```

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CloseFile();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
