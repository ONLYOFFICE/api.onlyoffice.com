import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run

运行 ONLYOFFICE Document Builder 可执行文件。如果您不想编写应用程序，可以简单地使用 `docbuilder.exe` 可执行文件，并将 `.docbuilder` 文件作为参数运行，其中将包含所有用于创建文档文件的代码。

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

| 名称 | 类型   | 描述                                             |
| ---- | ------ | ------------------------------------------------------- |
| path | string | ONLYOFFICE Document Builder 脚本文件的路径。 |

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.Run("path-to-script.docbuilder")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.Run(L"path-to-script.docbuilder");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->Run("path-to-script.docbuilder", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.run("path-to-script.docbuilder");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.Run("path-to-script.docbuilder");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```bash
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
