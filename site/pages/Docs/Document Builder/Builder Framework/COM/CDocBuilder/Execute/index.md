#### HRESULT Execute(\[in] BSTR command, \[out, retval] I\_DOCBUILDER\_VALUE\*\* result);

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/officeapi/textdocumentapi), [Spreadsheet API](/officeapi/spreadsheetapi), [Presentation API](/officeapi/presentationapi), or [Form API](/officeapi/formapi) sections for more information which commands are available for various document types.

Please note, that for the *.docbuilder* file the *CDocBuilder.Execute* method is not used explicitly. The command itself is used instead. See the example below.

## Parameters:

| Name      | Type                     | Description                                                                                                                                 |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *command* | BSTR                     | The command which will be used to create the document file (the escape character must be used when the command contains quotation symbols). |
| *result*  | I\_DOCBUILDER\_VALUE\*\* | The command return value.                                                                                                                   |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderValue* oRun = NULL;
oBuilder->Initialize();
oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
oBuilder->Dispose();
```

#### .docbuilder

```
oParagraph.AddText("Hello, world!");
```
