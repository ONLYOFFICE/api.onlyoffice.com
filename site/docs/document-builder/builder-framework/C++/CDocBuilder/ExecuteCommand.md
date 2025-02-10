# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/presentation-api/presentation-api.md), or [Form API](../../../../office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.ExecuteCommand` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```cpp
bool ExecuteCommand(const wchar_t* sCommand, CDocBuilderValue* oRetValue = 0);
```

## Parameters

| **Name**  | **Data type**                                                | **Default** | **Description**                                                                                                                                     |
| --------- | ------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommand  | const wchar_t*                                               |             | The command which will be used to create the document file (in C++, the escape character must be used when the command contains quotation symbols). |
| oRetValue | [CDocBuilderValue*](../CDocBuilderValue/CDocBuilderValue.md) | 0           | The command return value.                                                                                                                           |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello, world!\");");
CDocBuilder::Dispose();
```

### .docbuilder

```ts
oParagraph.AddText("Hello, world!")
```
