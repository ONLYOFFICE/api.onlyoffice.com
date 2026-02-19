# RunTextW

使用单个命令以 Unicode 格式运行所有用于创建文档的命令。与一次仅允许一个命令的 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 相比，`CDocBuilder.RunTextW` 能够一次性输入所有用于创建文档的命令。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.RunTextW` 方法。

## 语法

```cpp
bool RunTextW(const wchar_t* sCommands);
```

## 参数

| **名称**   | **数据类型**   | **描述**                                                                                                                                                                                                                                                |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommands  | const wchar_t* | 用于创建文档文件的 Unicode 格式命令（在 C++ 中，当命令包含引号时，必须使用转义字符）。所有包含 `builder.` 的命令都是分行的，即不能将它们写在一行中，每个命令都必须从新的一行开始。 |

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.RunTextW(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder::Dispose();
```