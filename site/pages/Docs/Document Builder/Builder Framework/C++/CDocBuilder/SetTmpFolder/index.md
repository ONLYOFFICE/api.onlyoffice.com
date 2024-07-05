#### void SetTmpFolder(sFolder);

Sets the path to the folder where the program will temporarily save files needed for the program correct work. After the successful document file creation, all the files will be deleted from the folder. If no temporary folder is set, the system one will be used.

## Parameters:

| Name      | Type             | Description                                                     |
| --------- | ---------------- | --------------------------------------------------------------- |
| *sFolder* | const wchar\_t\* | The path to the folder where the temporary files will be saved. |

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetTmpFolder(L"DocBuilderTemp");
CDocBuilder::Dispose();
```

#### .docbuilder

```
builder.SetTmpFolder("DocBuilderTemp");
```