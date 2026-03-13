import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetTmpFolder

设置程序临时保存所需文件的文件夹路径。文档文件创建成功后，所有文件将从该文件夹中删除。如果未设置临时文件夹，将使用系统临时文件夹。

## 语法

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

## 参数

| 名称   | 类型   | 描述                                                     |
| ------ | ------ | --------------------------------------------------------------- |
| folder | string | 临时文件将保存到的文件夹路径。 |

## 示例

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
