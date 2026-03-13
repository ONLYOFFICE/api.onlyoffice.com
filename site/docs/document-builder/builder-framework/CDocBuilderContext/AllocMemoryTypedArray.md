import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AllocMemoryTypedArray

Allocates the memory for a typed array by creating a buffer array of the specified size.

:::note
This method is only available for **C++**.
For the `.docbuilder` file the `CDocBuilderContext.AllocMemoryTypedArray` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="cpp" label="C++">
        ```cpp
        static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
        ```
    </TabItem>
</Tabs>

## Parameters

| Name  | Type          | Description            |
| ----- | ------------- | ---------------------- |
| nSize | const size_t* | The buffer array size. |

## Example

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
