import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WriteData

将数据写入日志文件。用于 JS 代码中的日志记录。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.WriteData` 方法。
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

| 名称   | 类型   | 描述                                                                                                |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------- |
| path   | string | 所有日志将写入的文件路径。                                                   |
| value  | string | 将写入日志文件的数据。                                                            |
| append | bool   | 指定新数据是追加到已存在的日志文件还是创建新文件。 |

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
        oBuilder->WriteData("result.log", "Alert!", VARIANT_FALSE);
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
