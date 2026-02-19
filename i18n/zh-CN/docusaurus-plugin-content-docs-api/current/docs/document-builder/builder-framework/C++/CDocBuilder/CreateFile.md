import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile (创建文件)

创建一个新文件。需要设置将要创建的文件类型。

## 语法

```cpp
bool CreateFile(int nExtension);
```

## 参数

| **名称**   | **数据类型**  | **描述**                                                                                                                                                                  |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nExtension | int | 文件扩展名。可能的值有：`OFFICESTUDIO_FILE_DOCUMENT_DOCX`、`OFFICESTUDIO_FILE_SPREADSHEET_XLSX`、`OFFICESTUDIO_FILE_PRESENTATION_PPTX` 或 `OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF`（参见 [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) 值）。 |

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>