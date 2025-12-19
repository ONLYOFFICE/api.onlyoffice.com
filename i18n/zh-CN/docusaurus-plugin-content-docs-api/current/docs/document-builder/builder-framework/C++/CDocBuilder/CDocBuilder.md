# CDocBuilder

ONLYOFFICE 文档生成器（Document Builder）用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。

## 语法

```cpp
class CDocBuilder
```

## 实例方法

| **名称**                                                     | **描述**                                                                                                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [CloseFile](CloseFile.md)                                    | 关闭文件以停止对其进行操作。                                                                                                              |
| [CreateFile](CreateFile.md)                                  | 创建一个新文件。                                                                                                                          |
| [Dispose](Dispose.md)                                        | 当不再需要 ONLYOFFICE 文档生成器时，将其从应用程序内存中卸载。                                                                            |
| [ExecuteCommand](ExecuteCommand.md)                          | 执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。                                                                 |
| [GetContext](GetContext.md)                                  | 返回当前的 JS 上下文。                                                                                                                    |
| [GetVersion](GetVersion.md)                                  | 返回 ONLYOFFICE 文档生成器引擎版本。                                                                                                      |
| [Initialize](Initialize.md)                                  | 初始化 ONLYOFFICE 文档生成器作为库，使应用程序能够使用它。                                                                                  |
| [IsSaveWithDoctrendererMode](IsSaveWithDoctrendererMode.md)  | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。                                                                    |
| [OpenFile](OpenFile.md)                                      | 打开将要编辑并随后保存的文档文件。                                                                                                        |
| [Run](Run.md)                                                | 运行 ONLYOFFICE 文档生成器可执行文件。                                                                                                    |
| [RunTextA](RunTextA.md)                                      | 使用 UTF8 格式的单个命令运行所有用于创建文档的命令。                                                                                        |
| [RunTextW](RunTextW.md)                                      | 使用 Unicode 格式的单个命令运行所有用于创建文档的命令。                                                                                     |
| [SaveFile](SaveFile.md)                                      | 在所有更改完成后保存文件。                                                                                                                |
| [SetProperty](SetProperty.md)                                | 设置 UTF8 格式的参数，该参数可以传输到 [CDocBuilder.ExecuteCommand](ExecuteCommand.md) 方法之外的程序。                                   |
| [SetPropertyW](SetPropertyW.md)                              | 设置 Unicode 格式的参数，该参数可以传输到 [CDocBuilder.ExecuteCommand](ExecuteCommand.md) 方法之外的程序。                                |
| [SetTmpFolder](SetTmpFolder.md)                              | 设置程序将临时保存其正常工作所需文件的文件夹路径。                                                                                          |
| [WriteData](WriteData.md)                                    | 将数据写入日志文件。                                                                                                                      |