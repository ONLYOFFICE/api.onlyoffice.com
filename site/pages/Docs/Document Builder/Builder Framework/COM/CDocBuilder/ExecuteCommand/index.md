#### HRESULT ExecuteCommand(\[in] BSTR command, \[out, retval] VARIANT\_BOOL\* result);

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](/officeapi/textdocumentapi), [Spreadsheet API](/officeapi/spreadsheetapi), [Presentation API](/officeapi/presentationapi), or [Form API](/officeapi/formapi) sections for more information which commands are available for various document types.

Please note, that for the *.docbuilder* file the *CDocBuilder.ExecuteCommand* method is not used explicitly. The command itself is used instead. See the example below.

## Parameters:

| Name      | Type            | Description                                                                                                                                         |
| --------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| *command* | BSTR            | The command which will be used to create the document file (in COM, the escape character must be used when the command contains quotation symbols). |
| *result*  | VARIANT\_BOOL\* | Specifies if the operation of executing a command is successful or not.                                                                             |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderValue* oRun = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
oBuilder->ExecuteCommand(L"oParagraph.SetSpacingAfter(1000, false);", &b);
oBuilder->Dispose();
```

#### .docbuilder

```
oParagraph.AddText("Hello, world!");
oParagraph.SetSpacingAfter(1000, false);
```