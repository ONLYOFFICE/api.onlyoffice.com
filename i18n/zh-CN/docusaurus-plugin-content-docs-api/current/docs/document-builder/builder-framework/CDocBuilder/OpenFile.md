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
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | ------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | path   | str         | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | params | str \| None | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称    | 类型           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | ------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | sPath   | const wchar_t* | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | sParams | const wchar_t* | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                                                             |
        | ------ | ------------- | ----------------------------------------------------------------------- |
        | path   | BSTR          | 要打开的文件路径，包括文件名和扩展名。 |
        | params | BSTR          | 正确打开文件所需的参数。                                |
        | result | VARIANT_BOOL* | 指定操作是否成功。                        |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型   | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | path   | String | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | params | String | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
        | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | sPath   | String^ | 要打开的文件路径，包括文件名和扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | sParams | String^ | 正确打开文件所需的参数（最常用的是 `txt` 和 `csv` 文件类型的编码，或 `csv` 文件的分隔符，对于其他文件类型，这只是一个空字符串）。参数以 XML 标签的形式添加，其中 `m_nCsvTxtEncoding` 用于文本编码，`m_nCsvDelimiter` 用于分隔符。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的编码值。`csv` 分隔符的支持值包括：`0` - 无分隔符；`1` - 制表符；`2` - 分号；`3` - 冒号；`4` - 逗号；`5` - 空格。 |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.OpenFile(L"text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.openFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.OpenFile("text-document.csv", "<m_nCsvTxtEncoding>46</m_nCsvTxtEncoding><m_nCsvDelimiter>4</m_nCsvDelimiter>");
        ```
    </TabItem>
</Tabs>
