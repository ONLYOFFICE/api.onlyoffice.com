#### HRESULT Run(\[in] BSTR path, \[out, retval] VARIANT\_BOOL\* result);

Runs the **ONLYOFFICE Document Builder** executable. If you do not want to write an application, you can simply use the **docbuilder.exe** executable file and run it with the **.docbuilder** file as an argument, where all the code for the document file creation will be written. For COM, create the *CDocBuilder* object and call the *Run* method with the path to the executable file from the *path* parameter.

## Parameters:

| Name     | Type            | Description                                                                |
| -------- | --------------- | -------------------------------------------------------------------------- |
| *path*   | BSTR            | The path to the **ONLYOFFICE Document Builder** executable.                |
| *result* | VARIANT\_BOOL\* | Specifies if the operation of running the executable is successful or not. |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->Run("path-to-script.docbuilder", &b);
oBuilder->Dispose();
```

#### .docbuilder

```
docbuilder.exe mydocument.docbuilder
```