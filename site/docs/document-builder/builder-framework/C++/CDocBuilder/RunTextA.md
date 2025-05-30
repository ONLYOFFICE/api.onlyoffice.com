# RunTextA

Runs all the commands for the document creation using a single command in the UTF8 format. Compared to [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) where only one command at a time is allowed, `CDocBuilder.RunTextA` makes it possible to enter all the commands for the document creation at once.

> Please note, that for the `.docbuilder` file the `CDocBuilder.RunTextA` method is not used.

## Syntax

```cpp
bool RunTextA(const char* sCommands);
```

## Parameters

| **Name**  | **Data type** | **Description**                                                                                                                                                                                                                                                                                                       |
| --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommands | const char*   | The commands in the UTF8 format which will be used to create the document file (in C++, the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.RunTextA(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder::Dispose();
```
