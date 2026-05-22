# Execute

Executes the command which will be used to create the document file (document, spreadsheet, presentation, form document, PDF). See the [Document API](/docs/office-api/usage-api/document-api/document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which commands are available for various document types.

:::note
This method is only available for **COM**.
:::

## Syntax

```cpp
HRESULT Execute([in] BSTR command, [out, retval] I_DOCBUILDER_VALUE** result);
```

## Parameters

| Name    | Type                                                            | Description                                                                                                                                 |
| ------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| command | BSTR                                                            | The command which will be used to create the document file (the escape character must be used when the command contains quotation symbols). |
| result  | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | The command return value.                                                                                                                   |

## Example

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
IONLYOFFICEDocBuilderValue* oRun = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->CreateFile(_bstr_t("docx"), &b);
oBuilder->Execute(_bstr_t("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello, world!\");"), &oRun);
oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);
oBuilder->CloseFile();
oBuilder->Dispose();
```
