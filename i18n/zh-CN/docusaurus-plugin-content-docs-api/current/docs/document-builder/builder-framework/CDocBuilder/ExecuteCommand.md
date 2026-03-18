import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用命令的更多信息，请参阅 [文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

:::note
对于 **JS**，请直接调用 API 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def ExecuteCommand(self, command: str, retValue: CDocBuilderValue | None = None) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool ExecuteCommand(const wchar_t* sCommand, CDocBuilderValue* oRetValue = 0);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT ExecuteCommand([in] BSTR command, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean executeCommand(String command, CDocBuilderValue retValue);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool ExecuteCommand(String^ sCommand, CDocBuilderValue^% oRetValue);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称     | 类型                                                                | 默认值 | 描述                                                                                                             |
        | -------- | ------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
        | command  | str                                                                 |        | JavaScript 代码形式的命令，用于创建文档文件（在 Python 中，当命令包含引号时必须使用转义字符）。                  |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) \| None | None   | 命令返回值。                                                                                                     |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称      | 类型                                                         | 默认值 | 描述                                                                                         |
        | --------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
        | sCommand  | const wchar_t*                                               |        | 用于创建文档文件的命令（在 C++ 中，当命令包含引号时必须使用转义字符）。                      |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)* | 0      | 命令返回值。                                                                                 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称    | 类型          | 描述                                                                                         |
        | ------- | ------------- | -------------------------------------------------------------------------------------------- |
        | command | BSTR          | 用于创建文档文件的命令（在 COM 中，当命令包含引号时必须使用转义字符）。                      |
        | result  | VARIANT_BOOL* | 指定执行命令操作是否成功。                                                                   |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称     | 类型                                                        | 默认值 | 描述                                                                                                             |
        | -------- | ----------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
        | command  | String                                                      |        | JavaScript 代码形式的命令，用于创建文档文件（在 Java 中，当命令包含引号时必须使用转义字符）。                    |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | null   | 命令返回值。                                                                                                     |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称      | 类型                                                          | 默认值 | 描述                                                                                                             |
        | --------- | ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
        | sCommand  | String^                                                       |        | JavaScript 代码形式的命令，用于创建文档文件（在 .Net 中，当命令包含引号时必须使用转义字符）。                    |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)^% | null   | 命令返回值。                                                                                                     |
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

        builder.ExecuteCommand("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText('Hello from Python!');")

        dstPath = os.getcwd() + "/result.docx"
        builder.SaveFile("docx", dstPath)
        builder.CloseFile()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        std::wstring sDstPath = sWorkDirectory + L"/result.docx";
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);
        oBuilder.ExecuteCommand(L"var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello, world!\");");
        oBuilder.SaveFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX, sDstPath.c_str());
        oBuilder.CloseFile();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->CreateFile(_bstr_t("docx"), &b);
        oBuilder->ExecuteCommand(_bstr_t("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello, world!\");"), &b);
        oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);
        oBuilder->CloseFile();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        String resultPath = "result.docx";
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.createFile(FileTypes.Document.DOCX);
        builder.executeCommand("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello from Java!\");");
        builder.saveFile(FileTypes.Document.DOCX, resultPath);
        builder.closeFile();
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
        oBuilder.CreateFile(doctype);
        oBuilder.ExecuteCommand("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello from .Net!\");");
        oBuilder.SaveFile(doctype, resultPath);
        oBuilder.CloseFile();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
