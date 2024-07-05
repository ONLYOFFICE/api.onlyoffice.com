#### HRESULT Call(\[in] BSTR name, \[in, optional] VARIANT val1, \[in, optional] VARIANT val2, \[in, optional] VARIANT val3, \[in, optional] VARIANT val4, \[in, optional] VARIANT val5, \[in, optional] VARIANT val6, \[out, retval] I\_DOCBUILDER\_VALUE\*\* result);

Calls the specified Document Builder method. See the [Text document API](/officeapi/textdocumentapi), [Spreadsheet API](/officeapi/spreadsheetapi), [Presentation API](/officeapi/presentationapi), or [Form API](/officeapi/formapi) sections for more information which methods are available for various document types.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.Call* method is not used explicitly. The method itself is used instead. See the example below.

## Parameters:

| Name        | Type                     | Description                                                         |
| ----------- | ------------------------ | ------------------------------------------------------------------- |
| *name*      | BSTR                     | The name of the Document Builder method.                            |
| *val1-val6* | VARIANT                  | The parameters that the Document Builder method takes as arguments. |
| *result*    | I\_DOCBUILDER\_VALUE\*\* | The returned method value.                                          |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oBuilder->Dispose();
```

#### .docbuilder

```
var oDocument = Api.GetDocument();
```