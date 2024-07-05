#### HRESULT WriteData(\[in] BSTR path, \[in] BSTR value, \[in] VARIANT\_BOOL append);

Writes data to the log file. It is used for logs in JS code.

Please note, that for the *.docbuilder* file the *CDocBuilder.WriteData* method is not used.

## Parameters:

| Name     | Type          | Description                                                                                                |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| *path*   | BSTR          | The path to the file where all the logs will be written.                                                   |
| *value*  | BSTR          | The data which will be written to the log file.                                                            |
| *append* | VARIANT\_BOOL | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->WriteData("result.log", "Alert!", false);
oBuilder->Dispose();
```