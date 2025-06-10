# IsSaveWithDoctrendererMode

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

> Please note, that for the `.docbuilder` file the `CDocBuilder.IsSaveWithDoctrendererMode` method is not used.

## Syntax

```py
def IsSaveWithDoctrendererMode(self);
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

doctrendererMode = builder.IsSaveWithDoctrendererMode()

document = api.Call("GetDocument")
paragraph = api.Call("CreateParagraph")
paragraph.Call("AddText", "ONLYOFFICE Document Builder IsSaveWithDoctrendererMode - " + str(doctrendererMode))
content = context.CreateArray(1)
content[0] = paragraph
document.Call("InsertContent", content)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```
