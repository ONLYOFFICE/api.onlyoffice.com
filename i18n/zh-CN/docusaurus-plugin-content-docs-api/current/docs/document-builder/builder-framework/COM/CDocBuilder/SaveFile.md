import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SaveFile（保存文件）

在所有更改完成后保存文件。需要设置将要保存的文件类型。

## 语法

```cpp
HRESULT SaveFile([in] BSTR type, [in] BSTR path, [out, retval] VARIANT_BOOL* result);
```

## 参数

| **名称** | **类型**       | **描述**                                                                                                                                                                                              |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | BSTR           | 文件扩展名。可能的值包括：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) 对应的值）。 |
| path     | BSTR           | 要保存的文件的路径，包含文件名和扩展名。                                                                                                                                                             |
| result   | VARIANT_BOOL*  | 指定文件保存操作是否成功。                                                                                                                                                                           |

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->SaveFile("docx", "result.docx", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("docx", "result.docx");
        ```
    </TabItem>
</Tabs>
