import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RunText

使用单个命令运行所有用于文档创建的命令。与一次仅允许一个命令的 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 相比，`CDocBuilder.RunText` 能够一次性输入所有用于文档创建的命令。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.RunText` 方法。

## 语法

```cs
bool RunText(String^ sCommands);
```

## 参数

| 参数      | 类型     | 描述                                                                                                                                                                                                    |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommands | String^  | 用于创建文档文件的命令（在 .Net 中，当命令包含引号时，必须使用转义字符）。所有包含 `builder.` 的命令都是分行的，即不能将它们写在一行中，每个命令都必须单独起一行开始。 |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.RunText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
        builder.CreateFile(\"docx\");\n\
        var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
        builder.SaveFile(\"pdf\", \"images.pdf\");\n\
        builder.CloseFile();");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\nbuilder.CreateFile(\"docx\");");
        ```
    </TabItem>
</Tabs>
