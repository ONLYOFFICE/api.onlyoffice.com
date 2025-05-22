---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java samples guide

## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. ONLYOFFICE Document Builder is installed. For more information visit [installing page](../get-started/installing.md).
2. The directory in which you are going to store the downloaded samples has general editing access to save files created by the Document Builder.

## Hello world sample

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

JDK 8 or newer is required.

:::

Save the code above as `Program.java` file in the SDK folder.
Run the script:

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

Document will be created in the test directory.

![Result file](/assets/images/docbuilder/java-result-file.png)

## Run other samples

Clone a repository with the Document Builder samples from [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples). The created folder must have general editing access.

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

The project folder includes the java folder with the Java samples. Each sample has its own folder with the Program.java program file.
