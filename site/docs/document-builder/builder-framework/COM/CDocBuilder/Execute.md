import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Execute

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/docs/office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.Execute` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```cpp
HRESULT Execute([in] BSTR command, [out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| **Name** | **Type**                                                        | **Description**                                                                                                                             |
| -------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| command  | BSTR                                                            | The command which will be used to create the document file (the escape character must be used when the command contains quotation symbols). |
| result   | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The command return value.                                                                                                                   |

## Example

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderValue* oRun = NULL;
        oBuilder->Initialize();
        oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello, world!");
        ```
    </TabItem>
</Tabs>
