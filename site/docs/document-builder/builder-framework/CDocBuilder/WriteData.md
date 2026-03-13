import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WriteData

Writes data to the log file. It is used for logs in JS code.

:::note
For the `.docbuilder` file the `CDocBuilder.WriteData` method is not used.
:::

## Syntax

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

## Parameters

| Name   | Type   | Description                                                                                                |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------- |
| path   | string | The path to the file where all the logs will be written.                                                   |
| value  | string | The data which will be written to the log file.                                                            |
| append | bool   | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

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
