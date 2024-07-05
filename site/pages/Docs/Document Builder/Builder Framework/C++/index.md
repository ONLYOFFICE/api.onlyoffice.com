For the integration of **ONLYOFFICE Document Builder** into any application, the C++ **doctrenderer** library is used. The current application version contains six main classes:

* *CDoctrenderer* class - used by **ONLYOFFICE Document Builder** in the file conversion process.
* *CString* class - the string class with the *wchar\_t\** property.
* [CDocBuilder](/docbuilder/integrationapi/c/cdocbuilder) class - used by **ONLYOFFICE Document Builder** for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated.
* [CDocBuilderContext](/docbuilder/integrationapi/c/cdocbuildercontext) class - used by **ONLYOFFICE Document Builder** for getting JS context for working.
* [CDocBuilderContextScope](/docbuilder/integrationapi/c/cdocbuildercontextscope) class - the stack-allocated class which sets the execution context for all operations executed within a local scope.
* [CDocBuilderValue](/docbuilder/integrationapi/c/cdocbuildervalue) class - used by **ONLYOFFICE Document Builder** for getting the results of called JS commands. It represents a wrapper for a JS object.

## Example

#### C++

```
#include "./../common_deploy.h"
#include "../docbuilder.h"
#include "./utils.cpp"

using namespace NSDoctRenderer;
int main(int argc, char *argv[])
{
    std::wstring sProcessDirectory = NSUtils::GetProcessDirectory();
    std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();

    CDocBuilder::Initialize(sWorkDirectory.c_str());

    CDocBuilder oBuilder;
    oBuilder.SetProperty("--work-directory", sWorkDirectory.c_str());

    oBuilder.CreateFile("docx");

    CContext oContext = oBuilder.GetContext();
    CContextScope oScope = oContext.CreateScope();

    CValue oGlobal = oContext.GetGlobal();

    CValue oApi = oGlobal["Api"];
    CValue oDocument = oApi.Call("GetDocument");
    CValue oParagraph = oApi.Call("CreateParagraph");
    oParagraph.Call("SetSpacingAfter", 1000, false);
    oParagraph.Call("AddText", "Hello, world!");
    CValue oContent = oContext.CreateArray(1);
    oContent[0] = oParagraph;
    oDocument.Call("InsertContent", oContent);

    std::wstring sDstPath = sProcessDirectory + L"/result.docx";
    oBuilder.SaveFile("docx", sDstPath.c_str());
    oBuilder.CloseFile();

    CDocBuilder::Dispose();

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
oParagraph.AddText("Hello, world!");
oDocument.InsertContent([oParagraph]);
builder.SaveFile("docx", "result.docx");
builder.CloseFile();
```