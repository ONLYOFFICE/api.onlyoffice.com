# WriteData

Writes data to the log file. It is used for logs in JS code.

> Please note, that for the `.docbuilder` file the `CDocBuilder.WriteData` method is not used.

## Syntax

```cpp
HRESULT WriteData([in] BSTR path, [in] BSTR value, [in] VARIANT_BOOL append);
```

## Parameters

| **Name** | **Type**     | **Description**                                                                                            |
| -------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| path     | BSTR         | The path to the file where all the logs will be written.                                                   |
| value    | BSTR         | The data which will be written to the log file.                                                            |
| append   | VARIANT_BOOL | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->WriteData("result.log", "Alert!", false);
oBuilder->Dispose();
```
