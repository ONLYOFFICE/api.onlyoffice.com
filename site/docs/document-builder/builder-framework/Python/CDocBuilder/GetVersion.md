# GetVersion

Returns the ONLYOFFICE Document Builder engine version.

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetVersion` method is not used.

## Syntax

```py
def GetVersion(self);
```

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

version = builder.GetVersion()

document = api.Call("GetDocument")
paragraph = api.Call("CreateParagraph")
paragraph.Call("AddText", "ONLYOFFICE Document Builder Version - " + version.decode("utf-8"))
content = context.CreateArray(1)
content[0] = paragraph
document.Call("InsertContent", content)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```
