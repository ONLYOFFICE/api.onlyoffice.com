---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安装 Document Builder

ONLYOFFICE Document Builder 可安装在多种平台上，用于生成、编辑和转换 Office 及 PDF 文档。

:::warning

ONLYOFFICE Document Builder 的免费版本会在所有生成的文档上添加水印。要去除此限制并使用全部功能，需要商业许可证。

如需购买详情，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 与我们联系。

:::

## 先决条件

<Tabs>
    <TabItem value="python" label="Python">
        - [Python 3.10 - 3.12](https://www.python.org/downloads/)
        - `pip3`。确保系统中已安装 `python3` 和 `pip3`。您可以在终端中使用以下命令检查 Python 版本和 pip3 版本：

        ```bash
        python3 --version
        python3 -m pip --version
        ```

        :::note

        在 Windows 系统上使用 `pip` 和 `python`。确保可执行文件名为 `python.exe`（Windows 系统默认），且 Python 已添加到 `PATH` 环境变量中。

        :::

        如果需要安装它们，可以使用以下命令：

        ```bash
        sudo apt install python3 python3-pip
        ```

        :::info

        对于 macOS，您可以使用 [Homebrew](https://brew.sh/) 安装 `python3` 和 `pip3`，命令如下：

        ```bash
        brew install python3
        ```

        :::
    </TabItem>
    <TabItem value="c++" label="C++">
        - 适用于 Windows 的 [Visual Studio](https://visualstudio.microsoft.com/vs/older-downloads/)
        - 适用于 Linux 的 GCC ≥ 4.2.1（32 位、64 位）或 GCC ≥ 8（64 位 ARM）
        - 适用于 macOS 的 GCC ≥ 4.2.1
    </TabItem>
    <TabItem value="java" label="Java">
        - JDK >= 8。确保 JDK 已添加到 `PATH` 环境变量中。
    </TabItem>
    <TabItem value="net" label=".NET">
        - [.NET SDK](https://learn.microsoft.com/en-us/dotnet/core/install/linux?WT.mc_id=dotnet-35129-website)
    </TabItem>
</Tabs>

## 安装步骤

下载 SDK。
<Tabs>
    <TabItem value="windows" label="Windows">
        - 下载 [Document Builder x64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-windows-x64.zip) 或 [Document Builder x86](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-windows-x86.zip) SDK 压缩包。
        - 从 `.zip` 文件中提取文件夹。
    </TabItem>
    <TabItem value="linux" label="Linux">
        - 下载 [Document Builder aarch64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-linux-aarch64.tar.xz) 或 [Document Builder x86_64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-linux-x86_64.tar.xz) SDK 压缩包。
        - 通过 `tar xvJf onlyoffice-documentbuilder-linux-aarch64.tar.xz` 或 `tar xvJf onlyoffice-documentbuilder-linux-x86_64.tar.xz` 命令提取。

        例如：
        ```bash
        ARCH=$(uname -m)
        if [[ "$ARCH" == "aarch64" || "$ARCH" == "arm64" ]]; then
            FILE_NAME="onlyoffice-documentbuilder-linux-aarch64.tar.xz"
        else
            FILE_NAME="onlyoffice-documentbuilder-linux-x86_64.tar.xz"
        fi

        curl -L -o "$FILE_NAME" "https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/$FILE_NAME"

        mkdir -p builder
        tar xvJf "$FILE_NAME" -C builder
        ```
    </TabItem>
    <TabItem value="macos" label="macOS">
        - 下载 [Document Builder arm64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-macos-arm64.tar.xz) 或 [Document Builder x86_64](https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/onlyoffice-documentbuilder-macos-x86_64.tar.xz) SDK 压缩包。
        - 通过 `tar xvJf onlyoffice-documentbuilder-macos-arm64.tar.xz` 或 `tar xvJf onlyoffice-documentbuilder-macos-x86_64.tar.xz` 命令提取。

        例如：
        ```bash
        ARCH=$(uname -m)
        if [[ "$ARCH" == "arm64" ]]; then
            FILE_NAME="onlyoffice-documentbuilder-macos-arm64.tar.xz"
        else
            FILE_NAME="onlyoffice-documentbuilder-macos-x86_64.tar.xz"
        fi

        curl -L -o "$FILE_NAME" "https://github.com/ONLYOFFICE/DocumentBuilder/releases/latest/download/$FILE_NAME"

        mkdir -p builder
        tar xvJf "$FILE_NAME" -C builder
        ```
    </TabItem>
</Tabs>

:::note

对于 Python，您可以在终端中使用 `pip3` 安装 `document-builder` 库：

```bash
pip3 install document-builder
```

:::

## 运行示例

下载 `document-builder` [示例](https://github.com/ONLYOFFICE/document-builder-samples)：

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

<Tabs>
    <TabItem value="python" label="Python">
        1. 执行 `configure/configure.py` 并带上 `--test python` 参数：

            ```shell
            python3 configure/configure.py --test python
            ```

            必要时，使用 `--dir` 参数提供 Document Builder 的目录。
            这是生成包含 Document Builder 路径的辅助模块所必需的。

        2. 进入测试目录：

            ```shell
            cd python/creating_basic_form
            ```

        3. 运行脚本：

            ```shell
            python3 main.py
            ```

        文档将在测试目录中创建。
    </TabItem>
    <TabItem value="c++vs" label="C++ (VS)">
        :::note
        仅在 Windows 上可用。
        :::

        1. 使用 `configure/configure.py` 生成 VS 项目文件。例如：

            ```shell
            python configure/configure.py --vs --test cpp/creating_basic_form --test cpp/creating_advanced_form
            ```

        2. 在 Visual Studio 中打开 `.sln` 文件。它会提示您将 Windows SDK 和 VS 工具集重新定向到您安装的版本 - 点击“确定”。

        3. 解决方案已准备好进行构建和运行。文档将在项目文件目录中创建。

    </TabItem>
    <TabItem value="c++qt" label="C++ (Qt)">
        
        1. 使用 `configure/configure.py` 生成 Qt 项目文件。例如：

            ```shell
            python configure/configure.py --qt --test cpp
            ```

        2. 在 Qt Creator 中打开 `.pro` 文件。
        3. 项目已准备好进行构建和运行。文档将在 `build` 目录中创建。

        #### Makefile

        :::note
        仅在 Linux 和 macOS 上可用。
        :::

        1. 使用 `configure/configure.py` 生成 Makefile。例如：

            ```shell
            python configure/configure.py --make --test cpp/filling_spreadsheet
            ```

        2. 进入生成的 Makefile 所在目录：

            ```shell
            cd out/cpp/filling_spreadsheet
            ```

        3. 运行：

            ```shell
            make
            ```

            `make` 将构建并运行可执行文件。文档将在与 Makefile 相同的目录中创建。
    </TabItem>
    <TabItem value="java" label="Java">
        :::note
        需要 JDK 8 或更高版本。
        :::

        1. 进入测试目录：

            ```shell
            cd java/creating_presentation
            ```

        2. 编译 `Program.java`，并提供位于 Document Builder 目录中的 ***docbuilder.jar*** 的路径：

            ```shell
            javac -cp "C:\Program Files\ONLYOFFICE\DocumentBuilder\docbuilder.jar" Program.java
            ```

        3. 目录中应出现 `.class` 文件。运行程序：

            ```shell
            java -cp "C:\Program Files\ONLYOFFICE\DocumentBuilder\docbuilder.jar;." Program
            ```

            请注意，在 UNIX 系统上，路径分隔符是 `:` 而不是 `;`。因此，在 Linux 或 macOS 上应为：

            ```shell
            java -cp "/opt/onlyoffice/documentbuilder/docbuilder.jar:." Program
            ```

        文档将在测试目录中创建。
    </TabItem>
    <TabItem value="net" label=".NET">
        :::note
        仅在安装了 Visual Studio 和 .NET SDK 的 Windows 上可用。
        :::

        1. 使用 `configure/configure.py` 生成 VS 项目文件。例如：

            ```shell
            python configure/configure.py --vs --test cs
            ```

        2. 在 Visual Studio 中打开 `.sln` 文件。根据您安装的 .NET SDK 版本，您可能需要通过在 Visual Studio 项目属性中设置或直接编辑 `.csproj` 文件来更改目标框架。

        3. 解决方案已准备好进行构建和运行。文档将在项目文件目录中创建。
    </TabItem>
</Tabs>