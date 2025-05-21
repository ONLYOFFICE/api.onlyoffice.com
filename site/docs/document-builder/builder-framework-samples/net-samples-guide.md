---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# .Net samples guide

## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. ONLYOFFICE Document Builder is installed. For more information visit [installing page](../get-started/installing.md).
2. The directory in which you are going to store the downloaded samples has general editing access to save files created by the Document Builder.

## Hello world sample

```cs
using docbuilder_net;

using OfficeFileTypes = docbuilder_net.FileTypes;
using CValue = docbuilder_net.CDocBuilderValue;
using CContext = docbuilder_net.CDocBuilderContext;

namespace Sample
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string workDirectory = Constants.BUILDER_DIR;
            string resultPath = "../../../result.docx";

            // add Docbuilder dlls in path
            System.Environment.SetEnvironmentVariable("PATH", System.Environment.GetEnvironmentVariable("PATH") + ";" + workDirectory);

            CreateHelloWorld(workDirectory, resultPath);
        }

        public static void CreateHelloWorld(string workDirectory, string resultPath)
        {
            var doctype = (int)OfficeFileTypes.Document.DOCX;

            // Init DocBuilder
            CDocBuilder.Initialize(workDirectory);
            CDocBuilder builder = new();

            // Create docx file
            builder.CreateFile(doctype);

            CContext context = builder.GetContext();
            CValue global = context.GetGlobal();
            CValue api = global["Api"];

            // Add Hello, World!
            CValue document = api.Call("GetDocument");
            CValue paragraph = api.Call("CreateParagraph");
            CValue content = context.CreateArray(1);
            paragraph.Call("AddText", "Hello, World!");
            content[0] = paragraph;
            document.Call("InsertContent", content);

            // Save file and close DocBuilder
            builder.SaveFile(doctype, resultPath);
            builder.CloseFile();

            CDocBuilder.Destroy();
        }
    }
}
```

Run the sample:

<Tabs>
    <TabItem value="windows" label="Windows">
    Run the C# compiler like this:
    
    ```bash
    c:\windows\Microsoft.NET\Framework\v3.5\bin\csc.exe 
            /t:exe /out:MyApplication.exe MyApplication.cs  ...
    ```

    To run the resulting EXE, type MyApplication, followed by \<ENTER\> using the command prompt.

    :::note

    Available only on Windows with Visual Studio and .NET SDK installed.

    :::
    </TabItem>
    <TabItem value="macos" label="macOS">
    On a Mac, syntax is similar, only C sharp Compiler is just named `csc`:

    ```bash
    csc /target:exe /out:MyApplication.exe MyApplication.cs ...
    ```

    Then to run it :

    ```bash
    mono MyApplication.exe
    ```
    </TabItem>
</Tabs>

![Result file](/assets/images/docbuilder/cs-result-file.png)

## Run other samples

Clone a repository with the Document Builder samples from [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples). The created folder must have general editing access.

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

The project folder includes the `cs` folder with the C# samples. Each sample has its own folder with the `Program.cs` program file.
