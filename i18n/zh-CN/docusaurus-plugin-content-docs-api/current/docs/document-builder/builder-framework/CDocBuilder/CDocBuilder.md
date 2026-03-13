# CDocBuilder

ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。

## 语法

```cpp
class CDocBuilder
```

## 方法

| 名称                                                       | 描述                                                                                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [CloseFile](CloseFile.md)                                  | 关闭文件以停止对其进行操作。                                                                                        |
| [CreateFile](CreateFile.md)                                | 创建新文件。                                                                                                             |
| [CreateInstance](CreateInstance.md)                        | 创建 CDocBuilder 类的实例。*（仅限 COM）*                                                                      |
| [Dispose](Dispose.md)                                      | 当不再需要时，从应用程序内存中卸载 ONLYOFFICE Document Builder。*（不用于 .Net）*          |
| [Destroy](Destroy.md)                                      | 当不再需要时，从应用程序内存中卸载 ONLYOFFICE Document Builder。*（仅限 .Net）*                 |
| [Execute](Execute.md)                                      | 执行命令并返回 [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)。*（仅限 COM）*                  |
| [ExecuteCommand](ExecuteCommand.md)                        | 执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。 |
| [GetContext](GetContext.md)                                | 返回当前的 JS 上下文。                                                                                                 |
| [GetVersion](GetVersion.md)                                | 返回 ONLYOFFICE Document Builder 引擎版本。*（不用于 COM）*                                                     |
| [Initialize](Initialize.md)                                | 将 ONLYOFFICE Document Builder 初始化为库，以便应用程序能够使用它。                       |
| [IsSaveWithDoctrendererMode](IsSaveWithDoctrendererMode.md) | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。    |
| [OpenFile](OpenFile.md)                                    | 打开将要编辑并随后保存的文档文件。                                                              |
| [Run](Run.md)                                              | 运行 ONLYOFFICE Document Builder 可执行文件。                                                                                |
| [RunText](RunText.md)                                      | 使用单个命令运行所有文档创建命令。*（不用于 C++）*                                    |
| [RunTextA](RunTextA.md)                                    | 使用 UTF8 格式的单个命令运行所有文档创建命令。*（仅限 C++）*                        |
| [RunTextW](RunTextW.md)                                    | 使用 Unicode 格式的单个命令运行所有文档创建命令。*（仅限 C++）*                     |
| [SaveFile](SaveFile.md)                                    | 在完成所有更改后保存文件。                                                                                  |
| [SetProperty](SetProperty.md)                              | 设置可以在 CDocBuilder.ExecuteCommand 方法之外传递给程序的参数。                         |
| [SetPropertyW](SetPropertyW.md)                            | 设置可以在 CDocBuilder.ExecuteCommand 方法之外传递给程序的 Unicode 格式参数。*（仅限 C++）* |
| [SetTmpFolder](SetTmpFolder.md)                            | 设置程序临时保存所需文件的文件夹路径。                  |
| [WriteData](WriteData.md)                                  | 将数据写入日志文件。                                                                                                    |

:::note
Java 使用驼峰命名法：`closeFile`、`createFile`、`executeCommand` 等。
:::
