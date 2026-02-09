# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.

## Syntax

```py
def CreateArray(self, int length);
```

## Parameters

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| length    | int  | The array length. |

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

document = api.GetDocument()
paragraph = api.CreateParagraph()
paragraph.AddText("Hello, World!")
content = context.CreateArray(1)
content[0] = paragraph
document.InsertContent(content)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```
