import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run

Runs the ONLYOFFICE Document Builder executable with a script file as an argument.

:::note
For JS, this method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Run(self, path: str) -> bool
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        bool Run(const wchar_t* sPath);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Run([in] BSTR path, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean run(String path);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool Run(String^ sPath);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name | Type | Description                     |
        | ---- | ---- | ------------------------------- |
        | path | str  | The path to the JS script file. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name  | Type           | Description                     |
        | ----- | -------------- | ------------------------------- |
        | sPath | const wchar_t* | The path to the JS script file. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type          | Description                                      |
        | ------ | ------------- | ------------------------------------------------ |
        | path   | BSTR          | The path to the JS script file.                  |
        | result | VARIANT_BOOL* | Specifies if the operation is successful or not. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name | Type   | Description                     |
        | ---- | ------ | ------------------------------- |
        | path | String | The path to the JS script file. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name  | Type    | Description                     |
        | ----- | ------- | ------------------------------- |
        | sPath | String^ | The path to the JS script file. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.Run("path-to-script.js")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.Run(L"path-to-script.js");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        VARIANT_BOOL b;
        oBuilder->Run(_bstr_t("path-to-script.js"), &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.run("path-to-script.js");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.Run("path-to-script.js");
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
