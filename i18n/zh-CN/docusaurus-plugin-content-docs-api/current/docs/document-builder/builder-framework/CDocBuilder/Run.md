import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run

使用脚本文件作为参数运行 ONLYOFFICE Document Builder 可执行文件。

:::note
此方法不适用于 **JS**。
:::

## 语法

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

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称 | 类型 | 描述                     |
        | ---- | ---- | ------------------------ |
        | path | str  | JS 脚本文件的路径。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称  | 类型           | 描述                     |
        | ----- | -------------- | ------------------------ |
        | sPath | const wchar_t* | JS 脚本文件的路径。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型          | 描述                           |
        | ------ | ------------- | ------------------------------ |
        | path   | BSTR          | JS 脚本文件的路径。       |
        | result | VARIANT_BOOL* | 指定操作是否成功。 |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称 | 类型   | 描述                     |
        | ---- | ------ | ------------------------ |
        | path | String | JS 脚本文件的路径。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称  | 类型    | 描述                     |
        | ----- | ------- | ------------------------ |
        | sPath | String^ | JS 脚本文件的路径。 |
    </TabItem>
</Tabs>

## 示例

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
