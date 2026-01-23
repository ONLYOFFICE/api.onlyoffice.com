---
sidebar_position: -3
---

# 使用 .docbuilder 文件

## .docbuilder 文件的结构

所有 **.docbuilder** 文件都具有简单的结构，便于创建。它们由以下主要部分组成，每个部分都使用了相应的 [CDocBuilder](../../document-builder/builder-framework/C++/CDocBuilder/CDocBuilder.md) 类方法：

1. 准备处理文档（使用 [CDocBuilder.CreateFile](../builder-framework/C++/CDocBuilder/CreateFile.md) 或 [CDocBuilder.OpenFile](../builder-framework/C++/CDocBuilder/OpenFile.md) 方法，以及 [CDocBuilder.SetTmpFolder](../builder-framework/C++/CDocBuilder/SetTmpFolder.md) 方法）。

   ``` ts
   builder.SetTmpFolder("DocBuilderTemp")
   builder.CreateFile("docx")
   ```

2. 借助 [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md) 方法创建文档内容（该方法不直接显式使用，而是使用命令本身）。

   ``` ts
   const oDocument = Api.GetDocument()
   const oParagraph = Api.CreateParagraph()
   oParagraph.SetJc("center")
   oParagraph.AddText("Center")
   oDocument.Push(oParagraph)
   ```

3. 保存文档（使用 [CDocBuilder.SaveFile](../builder-framework/C++/CDocBuilder/SaveFile.md) 方法）并释放文档以结束处理（使用 [CloseFile](../builder-framework/C++/CDocBuilder/CloseFile.md) 方法）。
   ``` ts
   builder.SaveFile("pdf", "images.pdf")
   builder.CloseFile()
   ```

## .docbuilder 文件的规则

创建 **.docbuilder** 脚本文件时，需遵循以下规则以确保其正常工作：

- 文件编码始终为 **UTF8**。
- 所有包含 *builder.* 的命令都必须分行，即不能写在同一行，每个命令**必须**单独起一行。
- 所有常见的 JavaScript 命令和方法必须在 *builder.CreateFile()* 和 *builder.SaveFile()* 这两行之间使用，否则执行代码时会抛出错误。
- 允许使用注释。任何以 *#* 或 *//* 开头的行都被视为注释。
- 允许空行。可以插入任意数量的空行来分隔代码块，解析器会忽略它们。
- 所有 *CDocBuilder* 方法（除了 [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md)）都以 *builder* 开头。
- [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md) 方法不直接显式使用，而是使用命令本身。这样做是为了降低解析复杂度，并允许使用常见的 JavaScript 命令和方法。
- [CDocBuilder.RunTextA](../builder-framework/C++/CDocBuilder/RunTextA.md)、[CDocBuilder.RunTextW](../builder-framework/C++/CDocBuilder/RunTextW.md)、[CDocBuilder.Initialize](../builder-framework/C++/CDocBuilder/Initialize.md) 和 [CDocBuilder.Dispose](../builder-framework/C++/CDocBuilder/Dispose.md) 方法不在 **.docbuilder** 文件中使用。
- **.docbuilder** 文件中的所有方法（除上述列出的方法外）的使用方式与在 C++ 代码中相同。查看下面的方法列表以了解每个方法的更多信息。

以下是一个完整可用的 **.docbuilder** 文件示例。

## 示例

``` ts
builder.SetTmpFolder("DocBuilderTemp")
builder.CreateFile("docx")
const oDocument = Api.GetDocument()
const oParagraph = oDocument.GetElement(0)
oParagraph.SetJc("center")
oParagraph.AddText("Center")
builder.SaveFile("pdf", "images.pdf")
builder.CloseFile()
```