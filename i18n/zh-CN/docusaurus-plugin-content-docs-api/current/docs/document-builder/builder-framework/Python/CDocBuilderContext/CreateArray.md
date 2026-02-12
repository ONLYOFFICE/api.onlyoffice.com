# CreateArray（创建数组）

创建一个数组值，类似于 JavaScript 中的 `new Array(length)`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateArray` 方法。

## 语法

```py
def CreateArray(self, int length);
```

## 参数

| 参数   | 类型 | 描述         |
| ------ | ---- | ------------ |
| length | int  | 数组的长度。 |

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