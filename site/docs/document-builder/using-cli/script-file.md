---
sidebar_position: 1
---

# Script file

All **.js** script files follow a simple structure. They consist of three main parts, each using the appropriate [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) class methods:

1. **Creating or opening a document** using [CreateFile](../builder-framework/CDocBuilder/CreateFile.md) or [OpenFile](../builder-framework/CDocBuilder/OpenFile.md). Optionally set a temporary folder with [SetTmpFolder](../builder-framework/CDocBuilder/SetTmpFolder.md).

   ```js
   builderJS.SetTmpFolder("DocBuilderTemp");
   builderJS.CreateFile("docx");
   ```

2. **Building the document contents** using the [Office API](../../office-api/get-started/overview.md).

   ```js
   const oDocument = Api.GetDocument();
   const oParagraph = Api.CreateParagraph();
   oParagraph.SetJc("center");
   oParagraph.AddText("Center");
   oDocument.Push(oParagraph);
   ```

3. **Saving and closing the document** using [SaveFile](../builder-framework/CDocBuilder/SaveFile.md) and [CloseFile](../builder-framework/CDocBuilder/CloseFile.md).

   ```js
   builderJS.SaveFile("pdf", "output.pdf");
   builderJS.CloseFile();
   ```

:::tip
Use **builderJS** for working with JavaScript variables directly. If you use **builder**, variables must be wrapped with `jsValue()`. See [builder vs builderJS](./overview.md#builder-vs-builderjs) for details.
:::

## Rules

- The file encoding must be **UTF-8**.
- Comments are supported using `//` or `#` at the start of a line.
- Empty lines are ignored.
- All [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) methods (except [ExecuteCommand](../builder-framework/CDocBuilder/ExecuteCommand.md)) are called via **builder** or **builderJS**.
- The [ExecuteCommand](../builder-framework/CDocBuilder/ExecuteCommand.md) method is not used explicitly in scripts—write the commands directly instead.
- The following methods are not available in **.js** files: [RunTextA](../builder-framework/CDocBuilder/RunTextA.md), [RunTextW](../builder-framework/CDocBuilder/RunTextW.md), [Initialize](../builder-framework/CDocBuilder/Initialize.md), [Dispose](../builder-framework/CDocBuilder/Dispose.md).

### Rules for builder object

When using the **builder** object:

- Commands containing `builder.` must be on separate lines.
- All JavaScript code must be placed between `builder.CreateFile()` and `builder.SaveFile()` calls.
- JavaScript variables passed to builder methods must be wrapped: `"jsValue(myVar)"`.

### Rules for builderJS object

When using the **builderJS** object:

- JavaScript variables can be used directly without wrapping.
- Provides the additional [OpenTmpFile](./overview.md#opentmpfile) method for working with temporary files.

## Example

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
