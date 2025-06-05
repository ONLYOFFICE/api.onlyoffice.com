import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# executeCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/docs/office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.executeCommand` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```java
boolean executeCommand(String command, CDocBuilderValue retValue = 0);
```

## Parameters

| Parameter | Type                                                        | Default | Description                                                                                                                                                                         |
| --------- | ----------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| command   | String                                                      |         | The command in the form of JavaScript code which will be used to create the document file (in Java, the escape character must be used when the command contains quotation symbols). |
| retValue  | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | 0       | The command return value.                                                                                                                                                           |

## Example

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.executeCommand(L"oParagraph.AddText(\"Hello from Java!\");");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello from Java!");
        ```
    </TabItem>
</Tabs>
