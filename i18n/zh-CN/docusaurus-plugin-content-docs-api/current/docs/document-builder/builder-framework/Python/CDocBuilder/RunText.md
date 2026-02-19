# RunText（运行文本）

使用单个命令运行所有用于创建文档的命令。与一次只允许一个命令的 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 相比，`CDocBuilder.RunText` 可以一次性输入所有用于创建文档的命令。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.RunText` 方法。

## 语法

```py
def RunText(self, str commands);
```

## 参数

| 参数     | 类型 | 描述                                                                                                                                                                                                 |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commands | str  | 用于创建文档文件的命令（在 Python 中，当命令包含引号时，必须使用转义字符）。所有包含 `builder.` 的命令都是分行的，即不能将它们写在一行中，每个命令都必须从新的一行开始。 |

## 示例

### Python

```py
import os
import docbuilder

builder = docbuilder.CDocBuilder()
builder.RunText("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();")
```