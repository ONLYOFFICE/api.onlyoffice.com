import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetVersion

返回 ONLYOFFICE Document Builder 引擎版本。

:::note
对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetVersion` 方法。此方法在 COM 中不可用。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def GetVersion(self) -> str
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        char* GetVersion();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        String getVersion();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        String^ GetVersion();
        ```
    </TabItem>
</Tabs>

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        version = builder.GetVersion()
        print(version.decode("utf-8"))
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        char* sVersion = oBuilder.GetVersion();
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        String version = builder.getVersion();
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        string sVersion = oBuilder.GetVersion();
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
