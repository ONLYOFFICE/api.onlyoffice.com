import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SaveFile

在完成所有更改后保存文件。需要设置将要保存的文件类型。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def SaveFile(self, type: int | str, path: str, params: str | None = None) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        int SaveFile(int nExtension, const wchar_t* sPath, const wchar_t* sParams);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT SaveFile([in] BSTR type, [in] BSTR path, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        int saveFile(int | String type, String path, String params);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool SaveFile(int nType, String^ sPath, String^ sParams);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型        | 默认值 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
        | ------ | ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type   | int \| str  |         | 要保存的文件类型，Python 代码中使用十六进制整数。对于 `.docbuilder` 脚本文件，可选值：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
        | path   | str         |         | 要保存的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | params | str \| None | None    | 正确保存文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于 `csv` 分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。当保存为图像文件（`png` 或 `jpg`）以创建缩略图时，会使用额外的参数。请参阅[下方](#保存为图像)了解详情。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称       | 类型           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
        | ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nExtension | int            | 文件扩展名。可选值：`OFFICESTUDIO_FILE_DOCUMENT_DOCX`、`OFFICESTUDIO_FILE_DOCUMENT_ODT`、`OFFICESTUDIO_FILE_DOCUMENT_RTF`、`OFFICESTUDIO_FILE_DOCUMENT_TXT`、`OFFICESTUDIO_FILE_PRESENTATION_PPTX`、`OFFICESTUDIO_FILE_PRESENTATION_ODP`、`OFFICESTUDIO_FILE_SPREADSHEET_XLSX`、`OFFICESTUDIO_FILE_SPREADSHEET_ODS`、`OFFICESTUDIO_FILE_SPREADSHEET_CSV`、`OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF`、`OFFICESTUDIO_FILE_CROSSPLATFORM_PDF`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
        | sPath      | const wchar_t* | 要保存的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | sParams    | const wchar_t* | 正确保存文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于 `csv` 分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。当保存为图像文件（`png` 或 `jpg`）以创建缩略图时，会使用额外的参数。请参阅[下方](#保存为图像)了解详情。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                                                                                                                                                                                |
        | ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type   | BSTR          | 文件扩展名。可选值：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO_FILE_XXX](../../get-started/supported-formats.md) 值）。 |
        | path   | BSTR          | 要保存的文件路径，包括文件名和扩展名。                                                                                                                                     |
        | result | VARIANT_BOOL* | 指定保存文件操作是否成功。                                                                                                                                          |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型          | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
        | ------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type   | int \| String | 要保存的文件类型，Java 代码中使用十六进制整数。对于 `.docbuilder` 脚本文件，可选值：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
        | path   | String        | 要保存的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | params | String        | 正确保存文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于 `csv` 分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。当保存为图像文件（`png` 或 `jpg`）以创建缩略图时，会使用额外的参数。请参阅[下方](#保存为图像)了解详情。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
        | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nType   | int     | 要保存的文件类型，.Net 代码中使用十六进制整数。对于 `.docbuilder` 脚本文件，可选值：`docx`、`odt`、`rtf`、`txt`、`pptx`、`xlsx`、`ods`、`csv`、`pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
        | sPath   | String^ | 要保存的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | sParams | String^ | 正确保存文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于 `csv` 分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。当保存为图像文件（`png` 或 `jpg`）以创建缩略图时，会使用额外的参数。请参阅[下方](#保存为图像)了解详情。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        std::wstring sDstPath = sProcessDirectory + L"/result.docx";
        oBuilder.SaveFile("docx", sDstPath.c_str());
        CDocBuilder::Dispose();
        ```
    </TabItem>
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
    <TabItem value="java" label="Java">
        ```java
        String resultPath = "result.docx";
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.saveFile(FileTypes.Document.DOCX, resultPath);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        string resultPath = "result.docx";
        var doctype = (int)OfficeFileTypes.Document.DOCX;
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.SaveFile(doctype, resultPath);
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("docx", "result.docx");
        ```
    </TabItem>
</Tabs>

## 保存为图像

ONLYOFFICE Document Builder 允许将文档文件保存为图像文件，创建文档第一页或所有页面的缩略图。这是通过 `SaveFile` 方法的参数完成的。参数以 XML 标签的形式添加，可以使用以下标签：

- `m_oThumbnail` - 核心标签，表示内部节点将用于从文档文件创建缩略图；
- `format` - 用于创建缩略图的图像文件格式（可选值：`3` - JPG 文件，`4` - PNG 文件）；
- `aspect` - 从文档文件创建缩略图时的图像纵横比（可选值：`1` - 保持原始纵横比，`0` - 拉伸图像以适应下面设置的宽度和高度）；
- `first` - 是仅转换第一页还是所有页面为缩略图（可选值：`true` - 仅转换第一页，`false` - 使用所有文档页面创建缩略图，在这种情况下，文件将保存为图像存档，每页一个图像）；
- `width` - 图像宽度（像素）；
- `height` - 图像高度（像素）。

### 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder.SaveFile(docbuilder.FileTypes.Graphics.PNG, "images.zip", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        oBuilder.SaveFile(OFFICESTUDIO_FILE_IMAGE, L"thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        oBuilder->SaveFile("image", "thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>", &b);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        builder.saveFile(FileTypes.Graphics.PNG, "thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        oBuilder.SaveFile(OFFICESTUDIO_FILE_IMAGE, "thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SaveFile("image", "./thumbnail.png", "<m_oThumbnail><format>4</format><aspect>1</aspect><first>false</first><width>1000</width><height>1000</height></m_oThumbnail>");
        ```
    </TabItem>
</Tabs>
