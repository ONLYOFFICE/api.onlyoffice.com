import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CloseFile

关闭文件以停止对其进行操作。您可以使用单个 ONLYOFFICE Document Builder 实例来处理所有文件，但在这种情况下，您需要先关闭上一个文件，然后才能开始处理下一个文件。

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CloseFile(self)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void CloseFile();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CloseFile();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void closeFile();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void CloseFile();
        ```
    </TabItem>
    <TabItem value="js" label="JS">
        ```js
        CloseFile()
        ```
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
        oBuilder.CloseFile();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        oBuilder->Initialize();
        oBuilder->CloseFile();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.closeFile();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.CloseFile();
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="js" label="JS">
        ```js
        builder.CreateFile("docx");
        builder.SaveFile("docx", "result.docx");
        builder.CloseFile();
        ```
    </TabItem>
</Tabs>
