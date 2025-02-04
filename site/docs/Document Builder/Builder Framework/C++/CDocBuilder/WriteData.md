# WriteData

Writes data to the log file. It is used for logs in JS code.

> Please note, that for the `.docbuilder` file the `CDocBuilder.WriteData` method is not used.

## Syntax

```cpp
void WriteData(const wchar_t* sPath, const wchar_t* sValue, const bool& bAppend);
```

## Parameters

| **Name** | **Data type**  | **Description**                                                                                            |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| sPath    | const wchar_t* | The path to the file where all the logs will be written.                                                   |
| sValue   | const wchar_t* | The data which will be written to the log file.                                                            |
| bAppend  | const bool&    | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.WriteData("result.log", "Alert!", false);
CDocBuilder::Dispose();
```
