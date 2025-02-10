# Execute

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/Presentation%20API/Presentation%20API.md), or [Form API](../../../../office-api/usage-api/Form%20API/Form%20API.md) sections for more information which commands are available for various document types.

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

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderValue* oRun = NULL;
oBuilder->Initialize();
oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
oBuilder->Dispose();
```

### .docbuilder

```ts
oParagraph.AddText("Hello, world!")
```
