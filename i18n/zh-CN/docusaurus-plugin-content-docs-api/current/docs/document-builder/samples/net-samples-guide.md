---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# .Net 示例指南

## 开始之前

为了让示例能够正常工作，请确保满足以下两个条件：

1. 已安装 ONLYOFFICE Document Builder。有关更多信息，请访问[安装页面](/docs/document-builder/get-started/installing.md)。
2. 您将要存储下载的示例的目录具有一般编辑权限，以便保存由 Document Builder 创建的文件。
3. [.NET SDK](https://learn.microsoft.com/zh-cn/dotnet/core/install/)。您可以使用 .NET 9、.NET 8、.NET Standard 或 .NET Core

##  Hello world 示例

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

            // 在路径中添加 Docbuilder 的 dll 文件
            System.Environment.SetEnvironmentVariable("PATH", System.Environment.GetEnvironmentVariable("PATH") + ";" + workDirectory);

            CreateHelloWorld(workDirectory, resultPath);
        }

        public static void CreateHelloWorld(string workDirectory, string resultPath)
        {
            var doctype = (int)OfficeFileTypes.Document.DOCX;

            // 初始化 DocBuilder
            CDocBuilder.Initialize(workDirectory);
            CDocBuilder builder = new();

            // 创建 docx 文件
            builder.CreateFile(doctype);

            CContext context = builder.GetContext();
            CValue global = context.GetGlobal();
            CValue api = global["Api"];

            // 添加 Hello, World!
            CValue document = api.Call("GetDocument");
            CValue paragraph = api.Call("CreateParagraph");
            CValue content = context.CreateArray(1);
            paragraph.Call("AddText", "Hello, World!");
            content[0] = paragraph;
            document.Call("InsertContent", content);

            // 保存文件并关闭 DocBuilder
            builder.SaveFile(doctype, resultPath);
            builder.CloseFile();

            CDocBuilder.Destroy();
        }
    }
}
```

运行示例：

<Tabs>
    <TabItem value="windows" label="Windows">
    像这样运行 C# 编译器：
    
    ```bash
    c:\windows\Microsoft.NET\Framework\v3.5\bin\csc.exe 
            /t:exe /out:MyApplication.exe MyApplication.cs  ...
    ```

    要运行生成的 EXE 文件，在命令提示符中输入 MyApplication，然后按 \<ENTER\> 键。

    :::note

    仅在安装了 Visual Studio 和 .NET SDK 的 Windows 上可用。

    :::
    </TabItem>
    <TabItem value="macos" label="macOS">
    在 Mac 上，语法类似，只是 C# 编译器名为 `csc`：

    ```bash
    csc /target:exe /out:MyApplication.exe MyApplication.cs ...
    ```

    然后运行它：

    ```bash
    mono MyApplication.exe
    ```
    </TabItem>
</Tabs>

![结果文件](/assets/images/docbuilder/cs-result-file.png)

## 运行其他示例

从 [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples) 克隆包含 Document Builder 示例的存储库。创建的文件夹必须具有一般编辑权限。

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

项目文件夹包含带有 C# 示例的 `cs` 文件夹。每个示例都有自己的文件夹，其中包含 `Program.cs` 程序文件。