# RunTextA

使用 UTF8 格式的单个命令运行所有文档创建命令。与 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 每次只允许执行一个命令不同，`CDocBuilder.RunTextA` 可以一次性输入所有文档创建命令。

:::note
此方法仅适用于 C++。对于 `.docbuilder` 文件，不使用 `CDocBuilder.RunTextA` 方法。
:::

## 语法

```cpp
bool RunTextA(const char* sCommands);
```

## 参数

| 名称      | 类型        | 描述                                                                                                                                                                                                                                                                                                                        |
| --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommands | const char* | UTF8 格式的命令，用于创建文档文件（在 C++ 中，当命令包含引号时必须使用转义字符）。所有包含 `builder.` 的命令都是行分隔的，即您不能将它们写在一行中，每个命令必须从自己的行开始。 |

## 示例

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.RunTextA("builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder::Dispose();
```
