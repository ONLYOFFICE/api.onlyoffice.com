import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

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

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name | Type       | Description                                                                                                                                                                                                                                   |
        | ---- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type | int \| str | The type of the file to be created set as a hexadecimal integer for the Python code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) values). |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name       | Type | Description                                                                                                                                                                                                                                                                                              |
        | ---------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nExtension | int  | The file extension. The following values are possible: `OFFICESTUDIO_FILE_DOCUMENT_DOCX`, `OFFICESTUDIO_FILE_SPREADSHEET_XLSX`, `OFFICESTUDIO_FILE_PRESENTATION_PPTX`, or `OFFICESTUDIO_FILE_DOCUMENT_OFORM_PDF` (see [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) values). |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                                                                                                                                                                    |
        | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | type   | BSTR          | The file extension. The following values are possible: `docx`, `xlsx`, `pptx`, or `pdf` (see [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) values). |
        | result | VARIANT_BOOL* | Specifies if the operation of creating a file is successful or not.                                                                                                            |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name | Type          | Description                                                                                                                                                                                                                                  |
        | ---- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | type | int \| String | The type of the file to be created set as a hexadecimal integer for the Java code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) values). |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name  | Type | Description                                                                                                                                                                                                                                    |
        | ----- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | nType | int  | The type of the file to be created set as a hexadecimal integer for the .Net code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../get-started/supported-formats.md) values). |
    </TabItem>
</Tabs>

## Example

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
