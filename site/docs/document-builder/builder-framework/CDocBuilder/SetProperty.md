import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import APITable from '@site/src/components/APITable/APITable';

# SetProperty

Sets an argument which can be transferred to the program outside the [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) method, i.e. either as an additional property when running ONLYOFFICE Document Builder executable file or as a part of program code, but not included into the document file script.

:::note
This method is not available for **JS**. Instead, pass arguments via the [CLI flags](../../using-cli/command-line-arguments.md).
:::

## Syntax

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

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name  | Type | Description                                                                                                              |
        | ----- | ---- | ------------------------------------------------------------------------------------------------------------------------ |
        | name  | str  | The parameter name (see [Supported properties](#supported-properties)). |
        | value | str  | The parameter value which will be used in the document.                                                                  |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name   | Type        | Description                                                                                                              |
        | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
        | sParam | const char* | The parameter name (see [Supported properties](#supported-properties)). |
        | sValue | const char* | The parameter value which will be used in the document.                                                                  |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name  | Type | Description                                                                                                              |
        | ----- | ---- | ------------------------------------------------------------------------------------------------------------------------ |
        | name  | BSTR | The parameter name (see [Supported properties](#supported-properties)). |
        | value | BSTR | The parameter value which will be used in the document.                                                                  |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name  | Type   | Description                                                                                                              |
        | ----- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
        | name  | String | The parameter name (see [Supported properties](#supported-properties)). |
        | value | String | The parameter value which will be used in the document.                                                                  |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name   | Type    | Description                                                                                                              |
        | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
        | sParam | String^ | The parameter name (see [Supported properties](#supported-properties)). |
        | sValue | String^ | The parameter value which will be used in the document.                                                                  |
    </TabItem>
</Tabs>

## Supported properties

```mdx-code-block
<APITable>
```

| Name                      | Type   | Default | Description                                                                                                            |
| ------------------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| --use-doctrenderer-scheme | bool   | false   | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| --check-fonts             | bool   | true    | Specifies if the system fonts are cached for faster work.                                                              |
| --work-directory          | string | ""      | The path to the temporary directory.                                                                                   |
| --cache-scripts           | bool   | true    | Specifies if the sdkjs scripts are cached.                                                                             |
| --save-use-only-names     | bool   | false   | Specifies if the destination paths are used (for server work). For example: `/home/user/1.txt` => `/tmp/1.txt`.        |
| --all-fonts-path          | string | ""      | The path to the `AllFonts.js` script.                                                                                  |
| --argument                | string | ""      | The JSON argument which is sent to the global parameters of all the opened JS context.                                 |
| --fonts-system            | bool   | true    | Specifies if the system fonts are used.                                                                                |
| --fonts-dir               | string | ""      | The path to the additional fonts directory (may be many records).                                                      |

```mdx-code-block
</APITable>
```

Once added, the argument will be available as the `Argument` variable with its parameter values set:

```js
Argument.name === "ONLYOFFICE" // true
```

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

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
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        oBuilder->SetProperty(_bstr_t("--argument"), _bstr_t("{\"name\":\"ONLYOFFICE\"}"));
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
</Tabs>

## Adding or removing fonts

It is also possible to update the font list when you either add new fonts or remove old ones. To do this, the `check-fonts` variable is used:

### Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        import docbuilder

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
        CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
        oBuilder->SetProperty(_bstr_t("--check-fonts"), _bstr_t("true"));
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
</Tabs>
