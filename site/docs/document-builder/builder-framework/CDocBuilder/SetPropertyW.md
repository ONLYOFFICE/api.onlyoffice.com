# SetPropertyW

Sets an argument in the Unicode format which can be transferred to the program outside the [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) method, i.e. either as an additional property when running ONLYOFFICE Document Builder executable file or as a part of program code, but not included into the document file script.

:::note
This method is C++ only. For the `.docbuilder` file the `CDocBuilder.SetPropertyW` method is not used explicitly.
:::

## Syntax

```cpp
void SetPropertyW(const wchar_t* sParam, const wchar_t* sValue);
```

## Parameters

| Name   | Type           | Description                                                              |
| ------ | -------------- | ------------------------------------------------------------------------ |
| sParam | const wchar_t* | The parameter name in the Unicode format, the value is always `--argument`. |
| sValue | const wchar_t* | The parameter value in the Unicode format which will be used in the document. |

## Supported properties

See [SetProperty](SetProperty.md#supported-properties) for the list of supported properties.

## Example

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetPropertyW(L"--argument", L"{\"name\":\"ONLYOFFICE\"}");
CDocBuilder::Dispose();
```
