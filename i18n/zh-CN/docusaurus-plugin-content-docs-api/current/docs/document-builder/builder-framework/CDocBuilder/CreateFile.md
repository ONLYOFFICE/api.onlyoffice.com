import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

创建新文件。需要设置将要创建的文件类型。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateFile(self, type: int | str) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool CreateFile(int nExtension);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateFile([in] BSTR type, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean createFile(int | String type);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool CreateFile(int nType);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称 | 类型       | 描述                                                                                                                                                                                                                                   |
        | ---- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type | int \| str | 要创建的文件类型，Python 代码中使用十六进制整数，或在 `.docbuilder` 脚本文件中使用 `docx`、`xlsx`、`pptx` 或 `pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称       | 类型 | 描述                                                                                                                                                                                                                                                                                              |
        | ---------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nExtension | int  | 文件扩展名。可选值：`OFFICESTUDIO_FILE_DOCUMENT_DOCX`、`OFFICESTUDIO_FILE_SPREADSHEET_XLSX`、`OFFICESTUDIO_FILE_PRESENTATION_PPTX` 或 `OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                                                                                                                                                    |
        | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | type   | BSTR          | 文件扩展名。可选值：`docx`、`xlsx`、`pptx` 或 `pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
        | result | VARIANT_BOOL* | 指定创建文件操作是否成功。                                                                                                            |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称 | 类型          | 描述                                                                                                                                                                                                                                  |
        | ---- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type | int \| String | 要创建的文件类型，Java 代码中使用十六进制整数，或在 `.docbuilder` 脚本文件中使用 `docx`、`xlsx`、`pptx` 或 `pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称  | 类型 | 描述                                                                                                                                                                                                                                    |
        | ----- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nType | int  | 要创建的文件类型，.Net 代码中使用十六进制整数，或在 `.docbuilder` 脚本文件中使用 `docx`、`xlsx`、`pptx` 或 `pdf`（参见 [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) 值）。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.CreateFile("docx")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);
        CDocBuilder::Dispose();
        ```
    </TabItem>
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
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.createFile(FileTypes.Document.DOCX);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
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
