---
sidebar_position: -4
---

# C++ samples guide

## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. ONLYOFFICE Document Builder is installed. For more information visit [installing page](../get-started/installing.md).
2. The directory in which you are going to store the downloaded samples has general editing access to save files created by the Document Builder.

## Hello world sample

```cpp
#include "./../common_deploy.h"
#include "../docbuilder.h"
#include "./utils.cpp"

using namespace NSDoctRenderer;
int main(int argc, char *argv[])
{
    std::wstring sProcessDirectory = NSUtils::GetProcessDirectory();
    // Specify the path to the Document Builder work directory and the result path (where the generated file will be saved)
    std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();

    // Init DocBuilder
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

    // Save and close
    std::wstring sDstPath = sProcessDirectory + L"/result.docx";
    oBuilder.SaveFile("docx", sDstPath.c_str());
    oBuilder.CloseFile();

    CDocBuilder::Dispose();

    return 0;
}
```

Run the script:

Call `make`, which will build and run the executable. Documents will be created in the same directory as Makefile.

![Result file](/assets/images/docbuilder/cpp-result-file.png)

## Run other samples

Clone a repository with the Document Builder samples from [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples). The created folder must have general editing access.

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

The project folder includes the `cpp` folder with the C++ samples. Each sample has its own folder with the `main.cpp` program file.