# CDocBuilder

仅由 ONLYOFFICE 文档生成器用于要生成的文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。

## 语法

```java
class CDocBuilder
```

## 实例方法

| **名称**                                                    | **描述**                                                                                                                         |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [closeFile](closeFile.md)                                   | 关闭文件以停止对其进行操作。                                                                                                      |
| [createFile](createFile.md)                                 | 创建一个新文件。                                                                                                                 |
| [dispose](dispose.md)                                       | 当不再需要 ONLYOFFICE 文档生成器时，将其从应用程序内存中卸载。                                                                    |
| [executeCommand](executeCommand.md)                         | 执行将用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。                                                       |
| [getContext](getContext.md)                                 | 返回当前的 JS 上下文。                                                                                                           |
| [getVersion](getVersion.md)                                 | 返回 ONLYOFFICE 文档生成器引擎版本。                                                                                             |
| [initialize](initialize.md)                                 | 初始化 ONLYOFFICE 文档生成器作为库，以便应用程序能够使用它。                                                                      |
| [isSaveWithDoctrendererMode](isSaveWithDoctrendererMode.md) | 指定在生成文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。                                                          |
| [openFile](openFile.md)                                     | 打开将要编辑并随后保存的文档文件。                                                                                                |
| [run](run.md)                                               | 运行 ONLYOFFICE 文档生成器可执行文件。                                                                                            |
| [runText](runText.md)                                       | 使用单个命令运行所有用于文档创建的命令。                                                                                          |
| [saveFile](saveFile.md)                                     | 在所有更改完成后保存文件。                                                                                                        |
| [setProperty](setProperty.md)                               | 设置一个参数，该参数可以传输到 [CDocBuilder.executeCommand](executeCommand.md) 方法之外的程序。                                   |
| [setTmpFolder](setTmpFolder.md)                             | 设置程序将临时保存其正常工作所需文件的文件夹路径。                                                                                |
| [writeData](writeData.md)                                   | 将数据写入日志文件。                                                                                                              |