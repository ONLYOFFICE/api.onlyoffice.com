import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile（创建文件）

创建一个新文件。需要设置将要创建的文件类型。

## 语法

```cs
bool CreateFile(int nType);
```

## 参数

| 参数   | 类型 | 描述                                                                                                                                                                                                 |
| ------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nType  | int  | 要创建的文件类型，在 .Net 代码中设置为十六进制整数，在 `.docbuilder` 脚本文件中设置为 `docx`、`xlsx`、`pptx` 或 `pdf`（请参见 [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) 值）。 |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        var doctype = (int)OfficeFileTypes.Document.DOCX;
        oBuilder.CreateFile(doctype);
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>
