import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/presentation-api/presentation-api.md), [Presentation API](../../../../office-api/usage-api/presentation-api/presentation-api.md), or [Form API](../../../../office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

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

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.ExecuteCommand(L"oParagraph.AddText(\"Hello from .net!\");");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        oParagraph.AddText("Hello from .net!")
        ```
    </TabItem>
</Tabs>
