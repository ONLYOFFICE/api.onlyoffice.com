For the integration of **ONLYOFFICE Document Builder** into any application, the COM **doctrenderer** library is used. The current application version contains five main classes:

* *CDoctrenderer* class - used by **ONLYOFFICE Document Builder** in the file conversion process.
* [CDocBuilder](/docbuilder/integrationapi/com/cdocbuilder) class - used by **ONLYOFFICE Document Builder** for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated.
* [CDocBuilderContext](/docbuilder/integrationapi/com/cdocbuildercontext) class - used by **ONLYOFFICE Document Builder** for getting JS context for working.
* [CDocBuilderContextScope](/docbuilder/integrationapi/com/cdocbuildercontextscope) class - the stack-allocated class which sets the execution context for all operations executed within a local scope.
* [CDocBuilderValue](/docbuilder/integrationapi/com/cdocbuildervalue) class - used by **ONLYOFFICE Document Builder** for getting the results of called JS commands. It represents a wrapper for a JS object.

## Example

#### COM

```
#include <iostream>
#include <comutil.h>
#include <atlcomcli.h>
#include <atlsafe.h>

#include "../../src/docbuilder_midl.h"

#ifdef _UNICODE
# pragma comment(lib, "comsuppw.lib")
#else
# pragma comment(lib, "comsupp.lib")
#endif

#define RELEASEINTERFACE(pinterface)  \
{                                     \
    if (NULL != pinterface)           \
    {                                 \
        pinterface->Release();        \
        pinterface = NULL;            \
    }                                 \
}

int main(int argc, char *argv[])
{
	CoInitialize(NULL);

	IONLYOFFICEDocBuilder* oBuilder = NULL;
	IONLYOFFICEDocBuilderContext* oContext = NULL;
	IONLYOFFICEDocBuilderContextScope* oScope = NULL;

	IONLYOFFICEDocBuilderValue* oGlobal = NULL;
	IONLYOFFICEDocBuilderValue* oApi = NULL;
	IONLYOFFICEDocBuilderValue* oDocument = NULL;
	IONLYOFFICEDocBuilderValue* oParagraph = NULL;
	IONLYOFFICEDocBuilderValue* oContent = NULL;

	HRESULT hr = CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_ALL, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);

	if (FAILED(hr))
	{
		CoUninitialize();                                             \
		return 1;
	}

	VARIANT_BOOL b;

	oBuilder->Initialize();
	oBuilder->CreateFile(_bstr_t("docx"), &b);
	oBuilder->GetContext(&oContext);

	oContext->CreateScope(&oScope);
	oContext->GetGlobal(&oGlobal);

	oGlobal->GetProperty(_bstr_t("Api"), &oApi);
	oContext->CreateArray(1, &oContent);

	oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
	oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
	oContext->CreateArray(1, &oContent);
	
	oParagraph->Call(_bstr_t("SetSpacingAfter"), ATL::CComVariant(1000), ATL::CComVariant(VARIANT_FALSE), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
	oParagraph->Call(_bstr_t("AddText"), ATL::CComVariant("Hello from COM!"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
	oContent->Set(0, oParagraph);

	oDocument->Call(_bstr_t("InsertContent"), ATL::CComVariant(oContent), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);

	oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);

	RELEASEINTERFACE(oContent);

	IONLYOFFICEDocBuilderValue* oArr = NULL;
	CComSafeArray<BYTE> arr;
	arr.Add(1);
	oContext->CreateTypedArray(ATL::CComVariant(arr), 1, &oArr);

	oBuilder->CloseFile();
	oBuilder->Dispose();

	RELEASEINTERFACE(oBuilder);
	RELEASEINTERFACE(oContext);
	RELEASEINTERFACE(oScope);

	RELEASEINTERFACE(oGlobal);
	RELEASEINTERFACE(oApi);
	RELEASEINTERFACE(oDocument);
	RELEASEINTERFACE(oParagraph);
	RELEASEINTERFACE(oContent);

	CoUninitialize();
	return 0;
}
```

#### .docbuilder

```
builder.SetTmpFolder("DocBuilderTemp");
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingAfter(1000, false);
oParagraph.AddText("Hello from COM!");
oDocument.InsertContent([oParagraph]);
builder.SaveFile("docx", "result.docx");
builder.CloseFile();
```