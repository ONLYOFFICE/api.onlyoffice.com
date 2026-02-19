# runText

使用单个命令运行所有用于创建文档的命令。与一次只允许一个命令的 [CDocBuilder.executeCommand](./executeCommand.md) 相比，`CDocBuilder.runText` 能够一次性输入所有用于创建文档的命令。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.runText` 方法。

## 语法

```java
boolean runText(String commands);
```

## 参数

| 参数      | 类型     | 描述                                                         |
| --------- | -------- | ------------------------------------------------------------ |
| commands  | String   | 用于创建文档文件的命令（在 Java 中，当命令包含引号时，必须使用转义字符）。所有包含 `builder.` 的命令都是分行的，即不能将它们写在一行中，每个命令必须单独起一行开始。 |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
builder.runText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder.dispose();
```