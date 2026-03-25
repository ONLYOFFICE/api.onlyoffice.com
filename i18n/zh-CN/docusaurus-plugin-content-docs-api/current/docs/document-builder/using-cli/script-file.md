---
sidebar_position: 1
---

# 脚本文件

所有 **.js** 脚本文件都遵循简单的结构。它们由三个主要部分组成，每个部分使用相应的 [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) 类方法：

1. **创建或打开文档**，使用 [CreateFile](../builder-framework/CDocBuilder/CreateFile.md) 或 [OpenFile](../builder-framework/CDocBuilder/OpenFile.md)。可选地，使用 [SetTmpFolder](../builder-framework/CDocBuilder/SetTmpFolder.md) 设置临时文件夹。

   ```js
   builderJS.SetTmpFolder("DocBuilderTemp");
   builderJS.CreateFile("docx");
   ```

2. **构建文档内容**，使用 [Office API](../../office-api/get-started/overview.md)。

   ```js
   const oDocument = Api.GetDocument();
   const oParagraph = Api.CreateParagraph();
   oParagraph.SetJc("center");
   oParagraph.AddText("Center");
   oDocument.Push(oParagraph);
   ```

3. **保存和关闭文档**，使用 [SaveFile](../builder-framework/CDocBuilder/SaveFile.md) 和 [CloseFile](../builder-framework/CDocBuilder/CloseFile.md)。

   ```js
   builderJS.SaveFile("pdf", "output.pdf");
   builderJS.CloseFile();
   ```

:::tip
使用 **builderJS** 可以直接处理 JavaScript 变量。如果使用 **builder**，变量必须用 `jsValue()` 包装。有关详细信息，请参阅 [builder 与 builderJS 的区别](./overview.md#builder-vs-builderjs)。
:::

## 规则

- 文件编码必须是 **UTF-8**。
- 支持使用 `//` 或 `#` 在行首添加注释。
- 空行会被忽略。
- 所有 [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) 方法（除了 [ExecuteCommand](../builder-framework/CDocBuilder/ExecuteCommand.md)）都通过 **builder** 或 **builderJS** 调用。
- [ExecuteCommand](../builder-framework/CDocBuilder/ExecuteCommand.md) 方法在脚本中不会显式使用——直接编写命令即可。
- 以下方法在 **.js** 文件中不可用：[RunTextA](../builder-framework/CDocBuilder/RunTextA.md)、[RunTextW](../builder-framework/CDocBuilder/RunTextW.md)、[Initialize](../builder-framework/CDocBuilder/Initialize.md)、[Dispose](../builder-framework/CDocBuilder/Dispose.md)。

### builder 对象的规则

使用 **builder** 对象时：

- 包含 `builder.` 的命令必须在单独的行上。
- 所有 JavaScript 代码必须放在 `builder.CreateFile()` 和 `builder.SaveFile()` 调用之间。
- 传递给 builder 方法的 JavaScript 变量必须包装：`"jsValue(myVar)"`。

### builderJS 对象的规则

使用 **builderJS** 对象时：

- JavaScript 变量可以直接使用，无需包装。
- 提供额外的 [OpenTmpFile](./overview.md#opentmpfile) 方法用于处理临时文件。

## 示例

```js
const outputPath = "output.pdf";
const text = "Hello, Document Builder!";
const currentDate = new Date().toLocaleDateString();

builderJS.CreateFile("docx");

const oDocument = Api.GetDocument();
const oParagraph = oDocument.GetElement(0);
oParagraph.SetJc("center");
oParagraph.AddText(text);
oParagraph.AddLineBreak();
oParagraph.AddText("Generated on: " + currentDate);

builderJS.SaveFile("pdf", outputPath);
builderJS.CloseFile();
```
