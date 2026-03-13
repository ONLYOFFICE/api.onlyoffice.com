import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run

Runs the ONLYOFFICE Document Builder executable. If you do not want to write an application, you can simply use the `docbuilder.exe` executable file and run it with the `.docbuilder` file as an argument, where all the code for the document file creation will be written.

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

| Name | Type   | Description                                             |
| ---- | ------ | ------------------------------------------------------- |
| path | string | The path to the ONLYOFFICE Document Builder script file. |

## Example

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
