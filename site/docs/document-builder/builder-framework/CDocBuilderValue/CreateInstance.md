# CreateInstance

Creates an instance of the `CDocBuilderValue` class.

:::note
This method is only available for **COM**.
:::

## Syntax

```cpp
HRESULT CreateInstance([in, optional] VARIANT value);
```

## Parameters

| Name  | Type    | Description                                  |
| ----- | ------- | -------------------------------------------- |
| value | VARIANT | A value from which an instance will be created. |

## Example

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* oParagraph = NULL;
I_DOCBUILDER_VALUE* p1 = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilderValue), NULL, CLSCTX_INPROC_SERVER, __uuidof(I_DOCBUILDER_VALUE), (void**)&p1);
p1->CreateInstance(1000);
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
oParagraph->Call(_bstr_t("SetSpacingAfter"), p1, ATL::CComVariant(VARIANT_FALSE), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
oBuilder->Dispose();
```
