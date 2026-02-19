```
---
sidebar_position: -2
---

# 使用命令行参数

如果您需要通过命令行向创建的文档传递一些参数，可以借助**文档生成器（Document Builder）** 来实现。为此，您需要修改您的**.docbuilder**脚本文件的代码，并在运行**文档生成器**的命令中包含所需的参数。

> 这与使用[SetProperty](../builder-framework/C++/CDocBuilder/SetProperty.md)方法的原理相同。

在这种情况下，命令将如下所示：

```sh
docbuilder.exe "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"ONLYOFFICE Document Builder\",\"compatibility\":\"100%\"}" "path-to-file\sample_with_arguments.docbuilder"
```

**.docbuilder**脚本文件的示例代码如下：

## 示例

``` ts
builder.CreateFile("docx")
const sCompany = Argument["company"]
const sProduct = Argument["product"]
const sCompatibility = Argument["compatibility"]
const oDocument = Api.GetDocument()
const oParagraph = oDocument.GetElement(0)
oParagraph.AddText("这是一个在ONLYOFFICE文档生成器中使用命令行参数的示例。")
oParagraph.AddLineBreak()
oParagraph.AddLineBreak()
oParagraph.AddText(`公司名称：${sCompany}`)
oParagraph.AddLineBreak()
oParagraph.AddText(`产品：${sProduct}`)
oParagraph.AddLineBreak()
oParagraph.AddText(`与OOXML标准的兼容性：${sCompatibility}`)
builder.SaveFile("docx", "ArgumentUse.docx")
builder.CloseFile()
```
```