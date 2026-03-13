import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用命令的更多信息，请参阅 [文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

:::note
对于 `.docbuilder` 文件，不直接使用 `CDocBuilder.ExecuteCommand` 方法，而是直接使用命令本身。请参阅下面的示例。
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
        | 名称     | 类型                                                                    | 默认值 | 描述                                                                                                                                                                            |
        | -------- | ----------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | command  | str                                                                     |         | JavaScript 代码形式的命令，用于创建文档文件（在 Python 中，当命令包含引号时必须使用转义字符）。 |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) \| None     | None    | 命令返回值。                                                                                                                                                              |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称      | 类型                                                               | 默认值 | 描述                                                                                                                                      |
        | --------- | ------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sCommand  | const wchar_t*                                                     |         | 用于创建文档文件的命令（在 C++ 中，当命令包含引号时必须使用转义字符）。 |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)*       | 0       | 命令返回值。                                                                                                                        |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称    | 类型          | 描述                                                                                                                                       |
        | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
        | command | BSTR          | 用于创建文档文件的命令（在 COM 中，当命令包含引号时必须使用转义字符）。 |
        | result  | VARIANT_BOOL* | 指定执行命令操作是否成功。                                                                          |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称     | 类型                                                              | 默认值 | 描述                                                                                                                                                                          |
        | -------- | ----------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | command  | String                                                            |         | JavaScript 代码形式的命令，用于创建文档文件（在 Java 中，当命令包含引号时必须使用转义字符）。 |
        | retValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)       | null    | 命令返回值。                                                                                                                                                            |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称      | 类型                                                                | 默认值 | 描述                                                                                                                                                                          |
        | --------- | ------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sCommand  | String^                                                             |         | JavaScript 代码形式的命令，用于创建文档文件（在 .Net 中，当命令包含引号时必须使用转义字符）。 |
        | oRetValue | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)^%       | null    | 命令返回值。                                                                                                                                                            |
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
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello, world!\");");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderValue* oRun = NULL;
        VARIANT_BOOL b;
        oBuilder->Initialize();
        oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
        oBuilder->ExecuteCommand(L"oParagraph.SetSpacingAfter(1000, false);", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.executeCommand("oParagraph.AddText(\"Hello from Java!\");");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.ExecuteCommand("oParagraph.AddText(\"Hello from .Net!\");");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello, world!");
        ```
    </TabItem>
</Tabs>
