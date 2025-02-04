# SetProperty

Sets an argument in the UTF8 format to the builder class which can be trasferred to the program outside the [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) method, i.e. either as an additional property when running ONLYOFFICE Document Builder executable file or as a part of program code, but not included into the document file script.

> Please note, that for the `.docbuilder` file the `CDocBuilder.SetProperty` method is not used explicitly. The argument itself is used instead as an additional property for the executable. See the example below.

## Syntax

```cpp
void SetProperty(const char* sParam, const char* sValue);
```

## Parameters

| **Name** | **Data type** | **Description**                                                            |
| -------- | ------------- | -------------------------------------------------------------------------- |
| sParam   | const char*   | The parameter name in the UTF8 format, the value is always `--argument`.   |
| sValue   | const char*   | The parameter value in the UTF8 format which will be used in the document. |

## Supported properties

| **Name**                  | **Data type**  | **Default** | **Description**                                                                                                            |
| ------------------------- | -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| --use-doctrenderer-scheme | bool           | false       | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --check-fonts             | bool           | true        | Specifies if the system fonts are cached for faster work.                                                                  |
| --work-directory          | const wchar_t* | ""          | The path to the temporary directory.                                                                                       |
| --cache-scripts           | bool           | true        | Specifies if the sdkjs scripts are cached.                                                                                 |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --save-use-only-names     | bool           | false       | Specifies if the destination paths are used (for server work). For example: `/home/user/1.txt` => `/tmp/1.txt`.            |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --all-fonts-path          | const wchar_t* | ""          | The path to the `AllFonts.js` script.                                                                                      |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --argument                | const wchar_t* | ""          | The JSON argument which is sent to the global parameters of all the opened JS context.                                     |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --fonts-system            | bool           | true        | Specifies if the system fonts are used.                                                                                    |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --fonts-dir               | const wchar_t* | ""          | The path to the additional fonts directory (may be many records).                                                          |  | --use-doctrenderer-scheme | bool | false | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |

Once added, the argument will be available as the `Argument` variable with its parameter values set:

```cpp
Argument.name === "ONLYOFFICE" // true
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetProperty("--argument", L"{\"name\":\"ONLYOFFICE\"}");
CDocBuilder::Dispose();
```

### .docbuilder

```sh
docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
```

## Adding or removing fonts

It is also possible to update the font list when you either add new fonts or remove old ones. To do this, the `check-fonts` variable is used:

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetProperty("--check-fonts", L"true");
CDocBuilder::Dispose();
```

### .docbuilder

```sh
docbuilder.exe "--check-fonts=true" test.docbuilder
```
