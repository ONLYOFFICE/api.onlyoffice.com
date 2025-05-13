# WriteData

Writes data to the log file. It is used for logs in JS code.

> Please note, that for the `.docbuilder` file the `CDocBuilder.WriteData` method is not used.

## Syntax

```py
def WriteData(self, str path, str value, bool append);
```

## Parameters

| Parameter | Type | Description                                                                                                |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| path      | str  | The path to the file where all the logs will be written.                                                   |
| value     | str  | The data which will be written to the log file.                                                            |
| append    | bool | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

### Python

``` py
import os
import docbuilder

builder = docbuilder.CDocBuilder()
builder.CreateFile("docx")

context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]

builder.WriteData("result.log", "Alert!", False)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```
