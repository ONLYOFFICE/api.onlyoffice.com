import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FreeMemoryTypedArray

释放类型化数组的内存。

:::note
此方法仅适用于 **C++**。
对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.FreeMemoryTypedArray` 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        static void FreeMemoryTypedArray(unsigned char* sData, const size_t* nSize);
        ```
    </TabItem>
</Tabs>

## 参数

| 名称  | 类型           | 描述                      |
| ----- | -------------- | -------------------------------- |
| sData | unsigned char* | 要释放的已分配内存。 |
| nSize | const size_t*  | 缓冲区数组大小。           |

## 示例

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
        CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, true);
        oContext.FreeMemoryTypedArray(sBuffer, 3);
        CDocBuilder::Dispose();
        ```
    </TabItem>
</Tabs>
