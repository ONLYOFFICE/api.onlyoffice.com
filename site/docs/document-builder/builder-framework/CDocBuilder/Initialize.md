import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Initialize

Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it. This method just sets the directory to the main Document Builder resources (icu files, etc). If this method is not called, the Document Builder will find resources from the current process directory.

:::note
For the `.docbuilder` file the `CDocBuilder.Initialize` method is not used.
:::

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        @classmethod
        def Initialize(cls, directory: str = None)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        static void Initialize(const wchar_t* sDirectory = 0);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Initialize();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        static void initialize(String directory);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        static void Initialize(String^ sDirectory);
        ```
    </TabItem>
</Tabs>

## Parameters

*Not used in COM*

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name      | Type | Default | Description                                      |
        | --------- | ---- | ------- | ------------------------------------------------ |
        | directory | str  | None    | The path to the main Document Builder resources. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name       | Type           | Default | Description                                      |
        | ---------- | -------------- | ------- | ------------------------------------------------ |
        | sDirectory | const wchar_t* | 0       | The path to the main Document Builder resources. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name      | Type   | Default | Description                                      |
        | --------- | ------ | ------- | ------------------------------------------------ |
        | directory | String | ""      | The path to the main Document Builder resources. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name       | Type    | Default | Description                                      |
        | ---------- | ------- | ------- | ------------------------------------------------ |
        | sDirectory | String^ | null    | The path to the main Document Builder resources. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        docbuilder.CDocBuilder.Initialize("../documentBuilder")
        builder = docbuilder.CDocBuilder()
        docbuilder.CDocBuilder.Dispose()
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
