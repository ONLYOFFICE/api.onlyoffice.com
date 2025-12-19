# GetVersion (获取版本)

返回 ONLYOFFICE 文档构建器引擎版本。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetVersion` 方法。

## 语法

```py
def GetVersion(self);
```

## 示例

### Python

```py
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
paragraph.Call("AddText", "ONLYOFFICE 文档构建器版本 - " + version.decode("utf-8"))
content = context.CreateArray(1)
content[0] = paragraph
document.Call("InsertContent", content)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```