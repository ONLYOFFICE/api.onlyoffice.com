#### bool Run(sPath);

Runs the **ONLYOFFICE Document Builder** executable. If you do not want to write a C++ application, you can simply use the **docbuilder.exe** executable file and run it with the **.docbuilder** file as an argument, where all the code for the document file creation will be written. For C++, create the *CDocBuilder* object and call the *Run* method with the path to the executable file from the *sPath* parameter.

## Parameters:

| Name    | Type             | Description                                                 |
| ------- | ---------------- | ----------------------------------------------------------- |
| *sPath* | const wchar\_t\* | The path to the **ONLYOFFICE Document Builder** executable. |

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
int wmain(int argc, wchar_t *argv[])
{
  if (argc <= 0)
    return 0;
  CDocBuilder::Initialize(sWorkDirectory.c_str());
  CDocBuilder oBuilder;
#ifdef _DOC_BUILDER_EXECUTABLE_
  std::wstring sBuildFile(argv[argc - 1]);
  oBuilder.Run(argv[argc - 1]);
#endif
  CDocBuilder::Dispose();
  return 0;
}
```

#### .docbuilder

```
docbuilder.exe mydocument.docbuilder
```