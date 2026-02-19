# IsSaveWithDoctrendererMode

指定在构建文档或从编辑器获取内容保存文件时，是否使用doctrenderer模式。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.IsSaveWithDoctrendererMode` 方法。

## 语法

```py
def IsSaveWithDoctrendererMode(self);
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

doctrendererMode = builder.IsSaveWithDoctrendererMode()

document = api.GetDocument()
paragraph = api.CreateParagraph()
paragraph.AddText("ONLYOFFICE Document Builder IsSaveWithDoctrendererMode - " + str(doctrendererMode))
content = context.CreateArray(1)
content[0] = paragraph
document.InsertContent(content)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```