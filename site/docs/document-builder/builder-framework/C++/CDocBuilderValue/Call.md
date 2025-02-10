# Call

Calls the specified Document Builder method. See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/Presentation%20API/Presentation%20API.md) or [Form API](../../../../office-api/usage-api/Form%20API/Form%20API.md) sections for more information which methods are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Call` method is not used explicitly. The method itself is used instead. See the example below.

## Syntax

```cpp
CDocBuilderValue Call(const wchar_t* | const char* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
```

## Parameters

| **Name** | **Data type**                                               | **Description**                                                        |
| -------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| sName    | const wchar_t* \| const char*                               | The name of the Document Builder method in the Unicode or UTF8 format. |
| p1-p6    | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | The parameters that the Document Builder method takes as arguments.    |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
CDocBuilder::Dispose();
```

### .docbuilder

```ts
const oDocument = Api.GetDocument()
```
