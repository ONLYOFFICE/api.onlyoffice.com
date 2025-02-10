# runText

Runs all the commands for the document creation using a single command. Compared to [CDocBuilder.executeCommand](./executeCommand.md) where only one command at a time is allowed, `CDocBuilder.runText` makes it possible to enter all the commands for the document creation at once.

> Please note, that for the `.docbuilder` file the `CDocBuilder.runText` method is not used.

## Syntax

```java
boolean runText(String commands);
```

## Parameters

| Parameter | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| commands     | String | The commands which will be used to create the document file (in Java, the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
builder.runText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();");
CDocBuilder.dispose();
```
