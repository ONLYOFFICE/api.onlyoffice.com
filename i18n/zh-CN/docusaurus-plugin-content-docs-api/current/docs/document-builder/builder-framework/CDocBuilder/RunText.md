import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RunText

使用单个命令运行所有文档创建命令。与 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 每次只允许执行一个命令不同，`CDocBuilder.RunText` 可以一次性输入所有文档创建命令。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.RunText` 方法。此方法在 C++ 中不可用（请改用 [RunTextA](RunTextA.md) 或 [RunTextW](RunTextW.md)）。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def RunText(self, commands: str) -> bool
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT RunText([in] BSTR commands, [out, retval] VARIANT_BOOL* result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        boolean runText(String commands);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        bool RunText(String^ sCommands);
        ```
    </TabItem>
</Tabs>

## 参数

| 名称     | 类型   | 描述                                                                                                                                                                                                                                                                                                          |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commands | string | 用于创建文档文件的命令（当命令包含引号时必须使用转义字符）。所有包含 `builder.` 的命令都是行分隔的，即您不能将它们写在一行中，每个命令必须从自己的行开始。 |

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();")
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        VARIANT_BOOL b;
        oBuilder->RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();", &b);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.runText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
