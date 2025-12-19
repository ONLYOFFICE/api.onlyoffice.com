import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder（设置临时文件夹）

设置程序临时保存正常工作所需文件的文件夹路径。文档文件成功创建后，该文件夹中的所有文件都将被删除。如果未设置临时文件夹，则会使用系统默认的临时文件夹。

## 语法

```cpp
void SetTmpFolder(const wchar_t* sFolder);
```

## 参数

| **名称** | **数据类型**   | **描述**                                   |
| -------- | -------------- | ------------------------------------------ |
| sFolder  | const wchar_t* | 临时文件将要保存到的文件夹路径。           |

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.SetTmpFolder(L"DocBuilderTemp");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
