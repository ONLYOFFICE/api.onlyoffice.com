---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing Document Builder

ONLYOFFICE Document Builder can be installed on various platforms to generate, edit, and convert Office and PDF documents.

:::warning

The free version of ONLYOFFICE Document Builder includes a watermark on all generated documents. To remove this limitation and access the full feature set, a commercial license is required.

For purchasing details, please contact us at [sales@onlyoffice.com](mailto:sales@onlyoffice.com).

:::

## Prerequisites

<Tabs>
    <TabItem value="python" label="Python">
        - [Python 3.10 - 3.12](https://www.python.org/downloads/)
        - `pip3`. Make sure `python3` and `pip3` are installed in your system. You can check your python version and pip3 version by using thecommand in terminal:

        ```bash
        python3 --version
        python3 -m pip --version
        ```

        :::note

        Use `pip` and `python` for Windows. Make sure the executable name is python.exe (default on Windows) and Python is added to your path environment variable.

        :::

        If you need to install them, you can use the following commands:

        ```bash
        sudo apt install python3 python3-pip
        ```

        :::info

        You can install `python3` and `pip3` fo macOS with [Homebrew](https://brew.sh/) using the following command:

        ```bash
        brew install python3
        ```

        :::
    </TabItem>
    <TabItem value="c++" label="C++">
        - [Visual Studio](https://visualstudio.microsoft.com/vs/older-downloads/) for Windows
        - GCC ≥ 4.2.1 (32-bit, 64-bit) or GCC ≥ 8 (64-bit ARM) for Linux
        - GCC ≥ 4.2.1 for macOS
    </TabItem>
    <TabItem value="java" label="Java">
        - JDK >= 5. Make sure that the JDK has been added to your `path` environment variable
    </TabItem>
    <TabItem value="net" label=".Net">
        - [.NET SDK](https://learn.microsoft.com/en-us/dotnet/core/install/linux?WT.mc_id=dotnet-35129-website)
    </TabItem>
</Tabs>

## Installing

Download the SDK
<Tabs>
    <TabItem value="windows" label="Windows">
        - Download [Document Builder x64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-windows-x64.zip) or [Document Builder x86](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-windows-x86.zip) SDK archive
        - Extract the folder from the .zip file
    </TabItem>
    <TabItem value="linux" label="Linux">
        - Download [Document Builder aarch64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-linux-aarch64.tar.xz) or [Document Builder x86_64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-linux-x86_64.tar.xz) SDK archive
        - Extract via `tar xvzf onlyoffice-documentbuilder-8.3.2-14-linux-aarch64.tar.xz` or `tar xvzf onlyoffice-documentbuilder-8.3.2-14-linux-x86_64.tar.xz`.
        - 
    </TabItem>
    <TabItem value="macos" label="macOS">
        - Download [Document Builder arm64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-macos-arm64.tar.xz) or [Document Builder x86_64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-8.3.2-14-macos-x86_64.tar.xz) SDK archive
        - Extract via `tar xvzf onlyoffice-documentbuilder-8.3.2-14-macos-arm64.tar.xz` or `tar xvzf onlyoffice-documentbuilder-8.3.2-14-macos-x86_64.tar.xz`.
    </TabItem>
</Tabs>

:::note

For python you can use `pip3` to install `document-builder` library in terminal

```bash
pip3 install document-builder
```

:::

## Run the Samples

Download `document-builder` [Samples](https://github.com/ONLYOFFICE/document-builder-samples).

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

<Tabs>
    <TabItem value="python" label="Python">
        1. Execute `configure.py` with `--test python`:
        ```shell
        python3 configure.py --test python
        ```
        Provide directory to Document Builder with `--dir` if necessary.
        It is needed for generating auxiliary module containing the path to Document Builder.

        2. Go to test directory:
        ```shell
        cd python/creating_basic_form
        ```

        3. Run the script
        ```shell
        python3 main.py
        ```
    </TabItem>
    <TabItem value="c++vs" label="C++ (VS)">
        > **NOTE:** Only available on Windows

        1. Use `configure.py` to generate VS project files. For example:

            ```shell
            python configure.py --vs --test cpp/creating_basic_form --test cpp/creating_advanced_form
            ```

        2. Open `.sln` file in Visual Studio. It will prompt you to retarget Windows SDK and VS toolset to your installed version – click "OK".

        3. The solution is ready to be built and run. Documents will be created in the project files directory.

    </TabItem>
    <TabItem value="c++qt" label="C++ (QT)">
        
        1. Use `configure.py` to generate Qt project files. For example:

            ```shell
            python configure.py --qt --test cpp
            ```

        2. Open `.pro` file in Qt Creator.
        3. The project is ready to be built and run. Documents will be created in the `build` directory.

        - Makefile

        > **NOTE:** Only available on Linux and Mac OS.

        1. Use `configure.py` to generate Makefile. For example:

            ```shell
            python configure.py --make --test cpp/filling_spreadsheet
            ```

        2. Go to the directory with generated Makefile:

            ```shell
            cd ../out/cpp/filling_spreadsheet
            ```

        3. Call

            ```shell
            make
            ```

            `make` will build and run the executable. Documents will be created in the same directory as Makefile is.
    </TabItem>
    <TabItem value="java" label="Java">
        > **NOTE:** JDK 8 or newer is required

        1. Go to test directory:

            ```shell
            cd java/creating_presentation
            ```

        2. Compile the `Program.java` providing the path to ***docbuilder.jar***, located in the Document Builder directory:

            ```shell
            javac -cp "C:\Program Files\ONLYOFFICE\DocumentBuilder\docbuilder.jar" Program.java
            ```

        3. `.class` file should appear in the directory. Run the program:

            ```shell
            java -cp "C:\Program Files\ONLYOFFICE\DocumentBuilder\docbuilder.jar;." Program
            ```

            Note, that on UNIX systems the path separator is `:` instead of `;`. Thus, on Linux or Mac OS it should be:

            ```shell
            java -cp "/opt/onlyoffice/documentbuilder/docbuilder.jar:." Program
            ```
    </TabItem>
    <TabItem value="net" label=".Net">
        > **NOTE:** Only available on Windows with Visual Studio and .NET SDK installed

        1. Use `configure.py` to generate VS project files. For example:

            ```shell
            python configure.py --vs --test cs
            ```

        2. Open `.sln` file in Visual Studio. Depending on your installed .NET SDK version you may need to set different target framework by setting it in Visual Studio project properties or editing it directly in the `.csproj` file.

        3. The solution is ready to be built and run. Documents will be created in the project files directory.
    </TabItem>
</Tabs>

Documents will be created in the test directory.
