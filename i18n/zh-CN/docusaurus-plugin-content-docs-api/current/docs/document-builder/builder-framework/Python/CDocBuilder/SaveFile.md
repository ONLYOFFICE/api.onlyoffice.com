import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SaveFile（保存文件）

在所有更改完成后保存文件。需要设置将要保存的文件类型。

## 语法

```py
def SaveFile(self, int | str type, str path, str | None params = None);
```

## 参数

| 参数   | 类型         | 默认值 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type   | int \| str   |        | 要保存的文件类型，在Python代码中设置为十六进制整数。对于 `.docbuilder` 脚本文件，可能的值有：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO_FILE_XXX](../../../get-started/supported-formats.md) 值）。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| path   | str          |        | 要保存的文件的路径，包含其名称和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| params | str \| None  | None   | 正确保存文件所需的参数（最常见的是，`txt` 和 `csv` 文件类型使用编码，`csv` 文件使用分隔符，对于其他文件类型，此参数为空字符串）。参数以XML标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于 `csv` 分隔符。您可以在 [此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js) 中找到所有支持的编码值。支持的 `csv` 分隔符值包括：<br/>`0` - 无分隔符；<br/>`1` - 制表符；<br/>`2` - 分号；<br/>`3` - 冒号；<br/>`4` - 逗号；<br/>`5` - 空格。<br/>当保存为图像文件（`png` 或 `jpg`）以创建缩略图时，会使用额外的参数。[参见下文](#保存为图像) 了解详情。 |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("docx", "result.docx");
        ```
    </TabItem>
</Tabs>

## 保存为图像

ONLYOFFICE Document Builder 允许将文档文件保存为图像文件，创建第一页或所有页面的缩略图。这通过 `SaveFile()` 方法的参数来实现。参数以XML标签的形式添加，可使用以下标签：

- `m_oThumbnail` - 核心标签，表示将使用内部节点从文档文件创建缩略图；
- `format` - 用于创建缩略图的图像文件格式（可取值：`3` - JPG文件，`4` - PNG文件）；
- `aspect` - 从文档文件创建缩略图时的图像纵横比（可取值：`1` - 保持原始纵横比，`0` - 拉伸图像以适应下面设置的宽度和高度）；
- `first` - 是否仅将第一页或所有页面转换为缩略图（可取值：`true` - 仅转换第一页，`false` - 使用所有文档页面创建缩略图，在这种情况下，文件将保存为图像归档，每页一个图像）；
- `width` - 图像宽度（以像素为单位）；
- `height` - 图像高度（以像素为单位）。

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import os
        import docbuilder
        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]

        document = api.GetDocument()
        paragraph = api.CreateParagraph()
        paragraph.AddText("Hello, World!")
        content = context.CreateArray(1)
        content[0] = paragraph
        document.InsertContent(content)

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile(docbuilder.FileTypes.Graphics.PNG, "images.zip", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>")
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("image", "./thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
</Tabs>
