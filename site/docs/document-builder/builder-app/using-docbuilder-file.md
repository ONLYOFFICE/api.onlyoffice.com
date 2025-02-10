---
sidebar_position: -3
---

## Structure used for .docbuilder file

All **.docbuilder** files have simple structure which allows to create them easily. They consist of the following main parts each of them having the appropriate [CDocBuilder](../../document-builder/builder-framework/C++/CDocBuilder/CDocBuilder.md) class method used:

1. Preparing to work with the document (either the [CDocBuilder.CreateFile](../builder-framework/C++/CDocBuilder/CreateFile.md) or [CDocBuilder.OpenFile](../builder-framework/C++/CDocBuilder/OpenFile.md) methods are used together with the [CDocBuilder.SetTmpFolder](../builder-framework/C++/CDocBuilder/SetTmpFolder.md) method).

   ``` ts
   builder.SetTmpFolder("DocBuilderTemp")
   builder.CreateFile("docx")
   ```

2. Creating the document contents with the help of the [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md) method (the method is not used explicitly, the commands themselves are used instead).

   ``` ts
   const oDocument = Api.GetDocument()
   const oParagraph = Api.CreateParagraph()
   oParagraph.SetJc("center")
   oParagraph.AddText("Center")
   oDocument.Push(oParagraph)
   ```

3. Saving the document (using the [CDocBuilder.SaveFile](../builder-framework/C++/CDocBuilder/SaveFile.md) method) and releasing it to finish work with it (the [CloseFile](../builder-framework/C++/CDocBuilder/CloseFile.md) method).
   ``` ts
   builder.SaveFile("pdf", "images.pdf")
   builder.CloseFile()
   ```

## Rules for .docbuilder file

There are a few rules used for **.docbuilder** script file creation for them to work correctly:

- The file encoding is always **UTF8**.
- All the commands containing *builder.* are line separated, i.e. you cannot write them in one line, each command **must** start with its own line.
- All the common JavaScript commands and methods must be used inside the *builder.CreateFile()* and *builder.SaveFile()* lines, otherwise an error will be thrown when executing the code.
- The comments are allowed. Any line starting with *#* or *//* is considered to be a comment.
- Empty lines are allowed. You can enter any number of empty lines to separate the blocks, the parser will ignore them.
- All the *CDocBuilder* methods (except the [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md)) are started with *builder*.
- The [CDocBuilder.ExecuteCommand](../builder-framework/C++/CDocBuilder/ExecuteCommand.md) method is not used explicitly, the command itself is used instead. This is done to avoid the parsing complexity and allow the use of common JavaScript commands and methods.
- The [CDocBuilder.RunTextA](../builder-framework/C++/CDocBuilder/RunTextA.md), [CDocBuilder.RunTextW](../builder-framework/C++/CDocBuilder/RunTextW.md), [CDocBuilder.Initialize](../builder-framework/C++/CDocBuilder/Initialize.md) and [CDocBuilder.Dispose](../builder-framework/C++/CDocBuilder/Dispose.md) methods are not used in **.docbuilder** files.
- All the methods in **.docbuilder** file (except the ones listed above) are used the same way as in C++ code. See the list of the methods below to find more on each of them.

Thus the example of the complete working **.docbuilder** file is available below.

## Example

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
