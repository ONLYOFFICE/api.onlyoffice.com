# SetTmpFolder

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Syntax

```cpp
void SetTmpFolder(const wchar_t* sFolder);
```

## Parameters

| **Name** | **Data type**  | **Description**                                                 |
| -------- | -------------- | --------------------------------------------------------------- |
| sFolder  | const wchar_t* | The path to the folder where the temporary files will be saved. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetTmpFolder(L"DocBuilderTemp");
CDocBuilder::Dispose();
```

### .docbuilder

```ts
builder.SetTmpFolder("DocBuilderTemp")
```
