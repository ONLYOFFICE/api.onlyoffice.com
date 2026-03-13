import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AllocMemoryTypedArray

通过创建指定大小的缓冲区数组来为类型化数组分配内存。

:::note
此方法仅适用于 **C++**。
对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.AllocMemoryTypedArray` 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
        ```
    </TabItem>
</Tabs>

## 参数

| 名称  | 类型          | 描述            |
| ----- | ------------- | ---------------------- |
| nSize | const size_t* | 缓冲区数组大小。 |

## 示例

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
        CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, false);
        CDocBuilder::Dispose();
        ```
    </TabItem>
</Tabs>
