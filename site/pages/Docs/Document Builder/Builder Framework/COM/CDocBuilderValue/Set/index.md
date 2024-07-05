#### HRESULT Set(\[in] long index, \[in] I\_DOCBUILDER\_VALUE\* value);

Sets an array value by its index.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.Set* method is not used.

## Parameters:

| Name    | Type                   | Description                   |
| ------- | ---------------------- | ----------------------------- |
| *index* | long                   | The index of the array value. |
| *value* | I\_DOCBUILDER\_VALUE\* | The array value to be set.    |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* aParagraphs = NULL;
IONLYOFFICEDocBuilderValue* oParagraph = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->Call(_bstr_t("GetAllParagraphs"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aParagraphs);
oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
aParagraphs->Set(1, oParagraph);
oBuilder->Dispose();
```