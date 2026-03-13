import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetProperty

设置可以在 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 方法之外传递给程序的参数，即作为运行 ONLYOFFICE Document Builder 可执行文件时的附加属性，或作为程序代码的一部分，但不包含在文档文件脚本中。

:::note
对于 `.docbuilder` 文件，不直接使用 `CDocBuilder.SetProperty` 方法。参数本身用作可执行文件的附加属性。请参阅下面的示例。
:::

## 语法

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def SetProperty(self, name: str, value: str)
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void SetProperty(const char* sParam, const char* sValue);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT SetProperty([in] BSTR name, [in] BSTR value);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void setProperty(String name, String value);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void SetProperty(String^ sParam, String^ sValue);
        ```
    </TabItem>
</Tabs>

## 参数

| 名称  | 类型   | 描述                                                          |
| ----- | ------ | -------------------------------------------------------------------- |
| name  | string | 参数名称，值始终为 `--argument`。                |
| value | string | 将在文档中使用的参数值。              |

## 支持的属性

| 名称                      | 类型   | 默认值 | 描述                                                                                                            |
| ------------------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| --use-doctrenderer-scheme | bool   | false   | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。 |
| --check-fonts             | bool   | true    | 指定是否缓存系统字体以加快工作速度。                                                              |
| --work-directory          | string | ""      | 临时目录的路径。                                                                                   |
| --cache-scripts           | bool   | true    | 指定是否缓存 sdkjs 脚本。                                                                             |
| --save-use-only-names     | bool   | false   | 指定是否使用目标路径（用于服务器工作）。例如：`/home/user/1.txt` => `/tmp/1.txt`。        |
| --all-fonts-path          | string | ""      | `AllFonts.js` 脚本的路径。                                                                                  |
| --argument                | string | ""      | 发送到所有打开的 JS 上下文的全局参数的 JSON 参数。                                 |
| --fonts-system            | bool   | true    | 指定是否使用系统字体。                                                                |
| --fonts-dir               | string | ""      | 附加字体目录的路径（可能有多条记录）。                                                      |

添加后，参数将作为 `Argument` 变量及其参数值可用：

```js
Argument.name === "ONLYOFFICE" // true
```

## 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        builder.SetProperty("--argument", "{\"name\":\"ONLYOFFICE\"}")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.SetProperty("--argument", "{\"name\":\"ONLYOFFICE\"}");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->SetProperty("--argument", "{\"name\":\"ONLYOFFICE\"}");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.setProperty("--argument", "{\"name\":\"ONLYOFFICE\"}");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.SetProperty("--argument", "{\"name\":\"ONLYOFFICE\"}");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```bash
        docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
        ```
    </TabItem>
</Tabs>

## 添加或移除字体

当您添加新字体或删除旧字体时，还可以更新字体列表。为此，使用 `check-fonts` 变量：

### 示例

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        builder.SetProperty("--check-fonts", "true")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.SetProperty("--check-fonts", "true");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->SetProperty("--check-fonts", "true");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.setProperty("--check-fonts", "true");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.SetProperty("--check-fonts", "true");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```bash
        docbuilder.exe "--check-fonts=true" test.docbuilder
        ```
    </TabItem>
</Tabs>
