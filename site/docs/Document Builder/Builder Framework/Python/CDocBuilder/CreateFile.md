# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```py
def CreateFile(self, int | str type);
```

## Parameters

| Parameter | Type       | Description                                                                                                                                                                                                                                        |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | int \| str | The type of the file to be created set as a hexadecimal integer for the Python code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../../Builder%20App/Overview.md#format-types) values). |

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
builder.CreateFile("docx")
```

### .docbuilder

``` ts
builder.CreateFile("docx")
```
