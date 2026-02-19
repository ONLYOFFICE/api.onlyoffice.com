import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile（创建文件）

创建一个新文件。需要设置将要创建的文件类型。

## 语法

```py
def CreateFile(self, int | str type);
```

## 参数

| 参数   | 类型       | 描述                                                                                                                                                                                                   |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type   | int \| str | 要创建的文件类型，在Python代码中设置为十六进制整数，在`.docbuilder`脚本文件中设置为`docx`、`xlsx`、`pptx`或`pdf`（参见[OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md)值）。 |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.CreateFile("docx");
        ```
    </TabItem>
</Tabs>
