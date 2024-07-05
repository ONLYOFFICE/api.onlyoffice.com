#### bool RunText(sCommands);

Runs all the commands for the document creation using a single command. Compared to [CDocBuilder.ExecuteCommand](/docbuilder/integrationapi/net/cdocbuilder/executecommand) where only one command at a time is allowed, *CDocBuilder.RunText* makes it possible to enter all the commands for the document creation at once.

Please note, that for the *.docbuilder* file the *CDocBuilder.RunText* method is not used.

## Parameters:

| Name        | Type    | Description                                                                                                                                                                                                                                                                                             |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *sCommands* | String^ | The commands which will be used to create the document file (in .Net, the escape character must be used when the command contains quotation symbols). All the commands containing *builder.* are line separated, i.e. you cannot write them in one line, each command **must** start with its own line. |

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.RunText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder.Destroy();
```