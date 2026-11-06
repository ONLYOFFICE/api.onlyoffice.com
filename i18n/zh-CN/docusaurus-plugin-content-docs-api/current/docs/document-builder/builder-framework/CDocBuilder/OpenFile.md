import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenFile

打开将要编辑并随后保存的文档文件。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def OpenFile(self, path: str, params: str | None = None) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        int OpenFile(const wchar_t* sPath, const wchar_t* sParams);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT OpenFile([in] BSTR path, [in] BSTR params, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean openFile(String path, String params);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool OpenFile(String^ sPath, String^ sParams);
        ```
    </TabItem>
    <TabItem value="js" label="JS">
        ```js
        OpenFile(path, params)
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | path   | str         | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                       |
        | params | str \| None | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0`：无分隔符；`1`：制表符；`2`：分号；`3`：冒号；`4`：逗号；`5`：空格。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称    | 类型           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | ------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sPath   | const wchar_t* | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                       |
        | sParams | const wchar_t* | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0`：无分隔符；`1`：制表符；`2`：分号；`3`：冒号；`4`：逗号；`5`：空格。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                     |
        | ------ | ------------- | ---------------------------------------- |
        | path   | BSTR          | 要打开的文件路径，包括文件名和扩展名。   |
        | params | BSTR          | 正确打开文件所需的参数。                 |
        | result | VARIANT_BOOL* | 指定操作是否成功。                       |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型   | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | path   | String | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                       |
        | params | String | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0`：无分隔符；`1`：制表符；`2`：分号；`3`：冒号；`4`：逗号；`5`：空格。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
        | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
        | sPath   | String^ | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                       |
        | sParams | String^ | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0`：无分隔符；`1`：制表符；`2`：分号；`3`：冒号；`4`：逗号；`5`：空格。 |
    </TabItem>
    <TabItem value="js" label="JS">
        | 名称   | 类型   | 描述                                                                           |
        | ------ | ------ | ------------------------------------------------------------------------------ |
        | path   | String | 要打开的文件路径，包括文件名和扩展名。                                         |
        | params | String | 可选。打开文件所需的参数（`txt`/`csv` 的编码，`csv` 的分隔符）。 |
    </TabItem>
</Tabs>

## 打开 PDF 文件 {#opening-pdf-files}

从 10.0 版本开始，可以打开 PDF 文件进行编辑。编辑器根据文件内容选择：

- 在 ONLYOFFICE 中创建的 PDF 表单在文档编辑器中打开。请使用 [Document API](../../../office-api/usage-api/document-api/document-api.md) 和 [Form API](../../../office-api/usage-api/form-api/form-api.md) 对其进行编辑。
- 其他任何 PDF 文件均在 PDF 编辑器中打开。请使用 [PDF API](../../../office-api/usage-api/pdf-api/pdf-api.md) 对其进行编辑。

要打开受密码保护的 PDF 文件，请在 `params` 参数的 `m_sPassword` 标签中传递密码，例如 `<m_sPassword>password</m_sPassword>`。

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.OpenFile("document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.OpenFile(L"document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        VARIANT_BOOL b;
        oBuilder->OpenFile(_bstr_t("document.csv"), _bstr_t("<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>"), &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.openFile("document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.OpenFile("document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="js" label="JS">
        ```js
        builder.OpenFile("document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        builder.SaveFile("xlsx", "result.xlsx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
