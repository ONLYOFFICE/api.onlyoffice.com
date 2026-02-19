# WriteData（写入数据）

将数据写入日志文件。用于JS代码中的日志记录。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilder.WriteData` 方法。

## 语法

```py
def WriteData(self, str path, str value, bool append);
```

## 参数

| 参数   | 类型 | 描述                                                                 |
| ------ | ---- | -------------------------------------------------------------------- |
| path   | str  | 用于写入所有日志的文件路径。                                         |
| value  | str  | 将要写入日志文件的数据。                                             |
| append | bool | 指定新数据是追加到已存在的日志文件中，还是创建一个新文件。           |

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

builder.WriteData("result.log", "Alert!", False)

dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```