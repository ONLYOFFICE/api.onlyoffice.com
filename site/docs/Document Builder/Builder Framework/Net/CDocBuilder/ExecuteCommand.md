# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](../../../../Office%20API/Usage%20API/Text%20Document%20API/Text%20Document%20API.md), [Spreadsheet API](../../../../Office%20API/Usage%20API/Presentation%20API/Presentation%20API.md), [Presentation API](../../../../Office%20API/Usage%20API/Presentation%20API/Presentation%20API.md), or [Form API](../../../../Office%20API/Usage%20API/Form%20API/Form%20API.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.ExecuteCommand` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```cs
bool ExecuteCommand(String^ sCommand, CDocBuilderValue^% oRetValue = 0);
```

## Parameters

| Parameter | Type                                                          | Default | Description                                                                                                                                                                         |
| --------- | ------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sCommand  | String^                                                       |         | The command in the form of JavaScript code which will be used to create the document file (in .Net, the escape character must be used when the command contains quotation symbols). |
| oRetValue | [CDocBuilderValue^%](../CDocBuilderValue/CDocBuilderValue.md) | 0       | The command return value.                                                                                                                                                           |

## Example

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello from .net!\");");
CDocBuilder.Destroy();
```

### .docbuilder

``` ts
oParagraph.AddText("Hello from .net!")
```
