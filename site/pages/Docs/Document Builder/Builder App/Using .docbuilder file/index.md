## Structure used for .docbuilder file

All **.docbuilder** files have simple structure which allows to create them easily. They consist of the following main parts each of them having the appropriate [CDocBuilder](/docbuilder/integrationapi/c/cdocbuilder) class method used:

1. Preparing to work with the document (either the [CDocBuilder.CreateFile](/docbuilder/integrationapi/c/cdocbuilder/createfile) or [CDocBuilder.OpenFile](/docbuilder/integrationapi/c/cdocbuilder/openfile) methods are used together with the [CDocBuilder.SetTmpFolder](/docbuilder/integrationapi/c/cdocbuilder/settmpfolder) method).
   ```
   builder.SetTmpFolder("DocBuilderTemp");
   builder.CreateFile("docx");
   ```
2. Creating the document contents with the help of the [CDocBuilder.ExecuteCommand](/docbuilder/integrationapi/c/cdocbuilder/executecommand) method (the method is not used explicitly, the commands themselves are used instead).
   ```
   var oDocument = Api.GetDocument();
   var oParagraph;
   oParagraph = Api.CreateParagraph();
   oParagraph.SetJc("center");
   oParagraph.AddText("Center");
   oDocument.Push(oParagraph);
   ```
3. Saving the document (using the [CDocBuilder.SaveFile](/docbuilder/integrationapi/c/cdocbuilder/savefile) method) and releasing it to finish work with it (the [CloseFile](/docbuilder/integrationapi/c/cdocbuilder/closefile) method).
   ```
   builder.SaveFile("pdf", "images.pdf");
   builder.CloseFile();
   ```

## Rules for .docbuilder file

There are a few rules used for **.docbuilder** script file creation for them to work correctly:

* The file encoding is always **UTF8**.
* All the commands containing *builder.* are line separated, i.e. you cannot write them in one line, each command **must** start with its own line.
* All the common JavaScript commands and methods must be used inside the *builder.CreateFile()* and *builder.SaveFile()* lines, otherwise an error will be thrown when executing the code.
* The comments are allowed. Any line starting with *#* or *//* is considered to be a comment.
* Empty lines are allowed. You can enter any number of empty lines to separate the blocks, the parser will ignore them.
* All the *CDocBuilder* methods (except the [CDocBuilder.ExecuteCommand](/docbuilder/integrationapi/c/cdocbuilder/executecommand)) are started with *builder*.
* The [CDocBuilder.ExecuteCommand](/docbuilder/integrationapi/c/cdocbuilder/executecommand) method is not used explicitly, the command itself is used instead. This is done to avoid the parsing complexity and allow the use of common JavaScript commands and methods.
* The [CDocBuilder.RunTextA](/docbuilder/integrationapi/c/cdocbuilder/runtexta), [CDocBuilder.RunTextW](/docbuilder/integrationapi/c/cdocbuilder/runtextw), [CDocBuilder.Initialize](/docbuilder/integrationapi/c/cdocbuilder/initialize) and [CDocBuilder.Dispose](/docbuilder/integrationapi/c/cdocbuilder/dispose) methods are not used in **.docbuilder** files.
* All the methods in **.docbuilder** file (except the ones listed above) are used the same way as in C++ code. See the list of the methods below to find more on each of them.

Thus the example of the complete working **.docbuilder** file is available below.

## Example

```
builder.SetTmpFolder("DocBuilderTemp");
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
oParagraph = oDocument.GetElement(0);
oParagraph.SetJc("center");
oParagraph.AddText("Center");
builder.SaveFile("pdf", "images.pdf");
builder.CloseFile();
```