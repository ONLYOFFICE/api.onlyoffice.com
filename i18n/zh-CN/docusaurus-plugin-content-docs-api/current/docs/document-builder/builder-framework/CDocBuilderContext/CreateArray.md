import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreateArray

创建数组值，相当于 JS 中的 `new Array (length)`。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateArray` 方法。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def CreateArray(self, length: int) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue CreateArray(const int& nLength);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT CreateArray([in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue createArray(int length);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ CreateArray(int nLength);
        ```
    </TabItem>
</Tabs>

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称   | 类型 | 描述       |
        | ------ | ---- | ----------------- |
        | length | int  | 数组长度。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称    | 类型       | 描述       |
        | ------- | ---------- | ----------------- |
        | nLength | const int& | 数组长度。 |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型                                                            | 描述         |
        | ------ | --------------------------------------------------------------- | ------------------- |
        | length | long                                                            | 数组长度。   |
        | result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的数组。 |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称   | 类型 | 描述       |
        | ------ | ---- | ----------------- |
        | length | int  | 数组长度。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称    | 类型 | 描述       |
        | ------- | ---- | ----------------- |
        | nLength | int  | 数组长度。 |
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

        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]

        document = api.GetDocument()
        paragraph = api.CreateParagraph()
        paragraph.AddText("Hello, World!")
        content = context.CreateArray(1)
        content[0] = paragraph
        document.InsertContent(content)

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
        CContext oContext = oBuilder.GetContext();
        CValue oArray = oContext.CreateArray(2);
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oContent = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->CreateArray(1, &oContent);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue arrayValue = context.createArray(2);
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oArray = oContext.CreateArray(2);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
