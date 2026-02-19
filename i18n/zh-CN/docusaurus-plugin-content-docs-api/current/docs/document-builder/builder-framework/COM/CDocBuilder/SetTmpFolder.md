import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder（设置临时文件夹）

设置程序临时保存正常运行所需文件的文件夹路径。成功创建文档文件后，该文件夹中的所有文件都将被删除。如果未设置临时文件夹，则会使用系统默认的临时文件夹。

## 语法

```cpp
HRESULT SetTmpFolder([in] BSTR folder);
```

## 参数

| **名称** | **类型** | **描述**                               |
| -------- | -------- | -------------------------------------- |
| folder   | BSTR     | 临时文件将要保存到的文件夹路径。       |

## 示例

### COM

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->SetTmpFolder(L"DocBuilderTemp");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
