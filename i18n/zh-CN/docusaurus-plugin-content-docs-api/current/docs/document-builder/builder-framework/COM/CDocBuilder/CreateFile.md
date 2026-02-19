import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile（创建文件）

创建一个新文件。需要设置将要创建的文件类型。

## 语法

```cpp
HRESULT CreateFile([in] BSTR type, [out, retval] VARIANT_BOOL* result);
```

## 参数

| **名称** | **类型**       | **描述**                                                                                                                                   |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | BSTR           | 文件扩展名。可能的值包括：`docx`、`xlsx`、`pptx` 或 `pdf`（请参见 [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) 值）。 |
| result   | VARIANT_BOOL*  | 指定创建文件的操作是否成功。                                                                                                               |

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->CreateFile(_bstr_t("docx"), &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>