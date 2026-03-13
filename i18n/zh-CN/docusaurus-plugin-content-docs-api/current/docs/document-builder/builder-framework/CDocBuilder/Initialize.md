import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Initialize

将 ONLYOFFICE Document Builder 初始化为库，以便应用程序能够使用它。此方法仅设置 Document Builder 主要资源（icu 文件等）的目录。如果不调用此方法，Document Builder 将从当前进程目录查找资源。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.Initialize` 方法。
:::

## 语法

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

## 参数

*不用于 COM*

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称      | 类型 | 默认值 | 描述                                      |
        | --------- | ---- | ------- | ------------------------------------------------ |
        | directory | str  | None    | Document Builder 主要资源的路径。 |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称       | 类型           | 默认值 | 描述                                      |
        | ---------- | -------------- | ------- | ------------------------------------------------ |
        | sDirectory | const wchar_t* | 0       | Document Builder 主要资源的路径。 |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称      | 类型   | 默认值 | 描述                                      |
        | --------- | ------ | ------- | ------------------------------------------------ |
        | directory | String | ""      | Document Builder 主要资源的路径。 |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称       | 类型    | 默认值 | 描述                                      |
        | ---------- | ------- | ------- | ------------------------------------------------ |
        | sDirectory | String^ | null    | Document Builder 主要资源的路径。 |
    </TabItem>
</Tabs>

## 示例

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
