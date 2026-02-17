---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java 示例指南

## 开始之前

为了使示例能够正常工作，请确保满足以下两个条件：

1. 已安装 ONLYOFFICE Document Builder。有关更多信息，请访问[安装页面](/docs/document-builder/get-started/installing.md)。
2. 您打算存储下载示例的目录具有一般编辑权限，以便保存由 Document Builder 创建的文件。

##  Hello world 示例

```java
import docbuilder.*;

public class Program {
    public static void main(String[] args) {
        String resultPath = "result.docx";

        test(resultPath);

        System.gc();
    }

    public static void test(String resultPath) {
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.createFile(FileTypes.Document.DOCX);

        CDocBuilderContext context = builder.getContext();

        CDocBuilderValue global = context.getGlobal();

        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue doc = api.call("GetDocument");
        CDocBuilderValue paragraph1 = api.call("CreateParagraph");

        paragraph1.call("SetSpacingAfter", 1000, false);
        paragraph1.call("AddText", "Hello from Java!");

        CDocBuilderValue paragraph2 = api.call("CreateParagraph");
        paragraph2.call("AddText", "Goodbye!");

        CDocBuilderValue[] paragraphs = { paragraph1, paragraph2 };
        CDocBuilderValue content = new CDocBuilderValue(paragraphs);

        doc.call("InsertContent", content);

        builder.saveFile(FileTypes.Document.DOCX, resultPath);
        builder.closeFile();

        CDocBuilder.dispose();
    }
}
```

:::note

需要 JDK 8 或更高版本。

:::

将上面的代码保存为 SDK 文件夹中的 `Program.java` 文件。
运行脚本：

<Tabs>
    <TabItem value="windows" label="Windows">
    ```sh
    javac -cp "docbuilder.jar" Program.java
    java -cp "docbuilder.jar;." Program
    ```
    </TabItem>
    <TabItem value="linux" label="Linux">
    ```sh
    javac -cp "docbuilder.jar" Program.java
    java -cp "docbuilder.jar:." Program
    ```
    </TabItem>
    <TabItem value="macos" label="macOS">
    ```sh
    javac -cp "docbuilder.jar" Program.java
    java -cp "docbuilder.jar:." Program
    ```
    </TabItem>
</Tabs>

文档将在测试目录中创建。

![结果文件](/assets/images/docbuilder/java-result-file.png)

## 运行其他示例

从 [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples) 克隆包含 Document Builder 示例的存储库。创建的文件夹必须具有一般编辑权限。

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

项目文件夹包含带有 Java 示例的 java 文件夹。每个示例都有自己的文件夹，其中包含 Program.java 程序文件。
