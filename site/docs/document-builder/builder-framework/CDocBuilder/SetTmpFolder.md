import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def SetTmpFolder(self, folder: str)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void SetTmpFolder(const wchar_t* sFolder);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT SetTmpFolder([in] BSTR folder);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void setTmpFolder(String folder);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void SetTmpFolder(String^ sFolder);
        ```
    </TabItem>
</Tabs>

## Parameters

| Name   | Type   | Description                                                     |
| ------ | ------ | --------------------------------------------------------------- |
| folder | string | The path to the folder where the temporary files will be saved. |

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import os
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.SetTmpFolder("DocBuilderTemp")
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
        oBuilder.SetTmpFolder(L"DocBuilderTemp");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->SetTmpFolder("DocBuilderTemp");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.setTmpFolder("DocBuilderTemp");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.SetTmpFolder("DocBuilderTemp");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
