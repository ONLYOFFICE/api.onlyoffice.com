import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WriteData

将数据写入日志文件。用于 JS 代码中的日志记录。

:::note
此方法不适用于 **JS**。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def WriteData(self, path: str, value: str, append: bool)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void WriteData(const wchar_t* sPath, const wchar_t* sValue, const bool& bAppend);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT WriteData([in] BSTR path, [in] BSTR value, [in] VARIANT_BOOL append);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void writeData(String path, String value, boolean append);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void WriteData(String^ sPath, String^ sValue, bool bAppend);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型 | 描述                                                       |
        | ------ | ---- | ---------------------------------------------------------- |
        | path   | str  | 所有日志将写入的文件路径。                                 |
        | value  | str  | 将写入日志文件的数据。                                     |
        | append | bool | 指定新数据是追加到已存在的日志文件还是创建新文件。         |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称    | 类型           | 描述                                                       |
        | ------- | -------------- | ---------------------------------------------------------- |
        | sPath   | const wchar_t* | 所有日志将写入的文件路径。                                 |
        | sValue  | const wchar_t* | 将写入日志文件的数据。                                     |
        | bAppend | const bool&    | 指定新数据是追加到已存在的日志文件还是创建新文件。         |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型         | 描述                                                       |
        | ------ | ------------ | ---------------------------------------------------------- |
        | path   | BSTR         | 所有日志将写入的文件路径。                                 |
        | value  | BSTR         | 将写入日志文件的数据。                                     |
        | append | VARIANT_BOOL | 指定新数据是追加到已存在的日志文件还是创建新文件。         |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型    | 描述                                                       |
        | ------ | ------- | ---------------------------------------------------------- |
        | path   | String  | 所有日志将写入的文件路径。                                 |
        | value  | String  | 将写入日志文件的数据。                                     |
        | append | boolean | 指定新数据是追加到已存在的日志文件还是创建新文件。         |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型    | 描述                                                       |
        | ------- | ------- | ---------------------------------------------------------- |
        | sPath   | String^ | 所有日志将写入的文件路径。                                 |
        | sValue  | String^ | 将写入日志文件的数据。                                     |
        | bAppend | bool    | 指定新数据是追加到已存在的日志文件还是创建新文件。         |
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.WriteData("result.log", "Alert!", False)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.WriteData(L"result.log", L"Alert!", false);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        oBuilder->WriteData(_bstr_t("result.log"), _bstr_t("Alert!"), VARIANT_FALSE);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.writeData("result.log", "Alert!", false);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.WriteData("result.log", "Alert!", false);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
