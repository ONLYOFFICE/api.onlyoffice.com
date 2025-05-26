---
sidebar_position: -4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C++ samples guide

## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. ONLYOFFICE Document Builder is installed. For more information visit [installing page](../get-started/installing.md).
2. The directory in which you are going to store the downloaded samples has general editing access to save files created by the Document Builder.

## Hello world sample

This section will help you build the "Hello World" application. It is easy to integrate the **ONLYOFFICE Document Builder SDK** if you are able to open, save and close documents.

```cpp
#include <string>
#include "common.h"
#include "docbuilder.h"

// Specify the path to the Document Builder work directory and the result path (where the generated file will be saved)
#define WORK_DIRECTORY L"builder/opt/onlyoffice/documentbuilder"

using namespace NSDoctRenderer;

int main(int argc, char *argv[])
{
    // Init DocBuilder
    CDocBuilder::Initialize(WORK_DIRECTORY);
    CDocBuilder oBuilder;
    oBuilder.SetProperty("--work-directory", WORK_DIRECTORY);

    oBuilder.CreateFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX);

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
    std::wstring sDstPath = L"result.docx";
    oBuilder.SaveFile(OFFICESTUDIO_FILE_DOCUMENT_DOCX, sDstPath.c_str());
    oBuilder.CloseFile();

    CDocBuilder::Dispose();

    return 0;
}
```

Run the script:

<Tabs>
    <TabItem value="windows" label="Windows">
    - Create a new C++ Console Project for Windows called `hello-world`
    - Add `libdocbuilder.lib` to the project's Additional Dependencies in the Linker Input settings
    - Add `include` files to the project's Additional Include Directories in the C/C++ General Settings
    - Copy the `libdocbuilder.dll` file to the project's output directory
    - Replace the contents of `hello-world.cpp` with code above
    </TabItem>
    <TabItem value="linux" label="Linux">
    - Create a `hello-world.cpp` file in the CPP directory
    - Replace the contents of `hello-world.cpp` with code above
    - Build the project using:
    ```bash
    g++ hello-world.cpp -I../include -L../Lib -libdocbuilder -lstdc++ -lpthread -lm -lc -Wl,-rpath,../../../Lib -Wl,-rpath$ORIGIN -o hello-world
    ```
    - Run the application via ./hello-world
    </TabItem>
    <TabItem value="macos" label="macOS">
    - Create a `hello-world.cpp` file in the CPP directory
    - Replace the contents of `hello-world.cpp` with code above
    - Build the project using:
    ```bash
    g++ hello-world.cpp -I../include -L../Lib -libdocbuilder -lstdc++ -lpthread -lm -lc -Wl,-rpath,../../../Lib -Wl,-rpath$ORIGIN -o hello-world
    ```
    - Run the application via ./hello-world
    </TabItem>
</Tabs>

Call `make`, which will build and run the executable. Documents will be created in the same directory as Makefile.

![Result file](/assets/images/docbuilder/cpp-result-file.png)

## Run other samples

Clone a repository with the Document Builder samples from [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples). The created folder must have general editing access.

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

The project folder includes the `cpp` folder with the C++ samples. Each sample has its own folder with the `main.cpp` program file.