import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetProperty（设置属性）

为构建器类设置一个参数，该参数可以传递到 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 方法之外的程序中，即可以作为运行 ONLYOFFICE Document Builder 可执行文件时的附加属性，也可以作为程序代码的一部分，但不会包含在文档文件脚本中。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilder.SetProperty` 方法。该参数本身会作为可执行文件的附加属性使用。见下面的示例。

## 语法

```cpp
HRESULT SetProperty([in] BSTR key, [in] BSTR value);
```

## 参数

| **名称** | **类型** | **描述** |
| -------- | -------- | -------- |
| key      | BSTR     | 参数名称，其值始终为 `--argument`。 |
| value    | BSTR     | 将在文档中使用的参数值。 |

## 支持的属性

| **名称** | **数据类型** | **默认值** | **描述** |
| ------------------------- | ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| --use-doctrenderer-scheme | VARIANT_BOOL  | false       | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。 |
| --check-fonts             | VARIANT_BOOL  | true        | 指定是否缓存系统字体以提高工作速度。 |
| --work-directory          | BSTR          | ""          | 临时目录的路径。 |
| --cache-scripts           | VARIANT_BOOL  | true        | 指定是否缓存 sdkjs 脚本。 |
| --save-use-only-names     | VARIANT_BOOL  | false       | 指定是否使用目标路径（用于服务器工作）。例如：`/home/user/1.txt` => `/tmp/1.txt`。 |
| --all-fonts-path          | BSTR          | ""          | `AllFonts.js` 脚本的路径。 |
| --argument                | BSTR          | ""          | 发送到所有已打开的 JS 上下文的全局参数的 JSON 参数。 |
| --fonts-system            | VARIANT_BOOL  | true        | 指定是否使用系统字体。 |
| --fonts-dir               | BSTR          | ""          | 附加字体目录的路径（可能有多个记录）。 |

添加后，该参数将作为 `Argument` 变量可用，其参数值已设置：

``` cpp
Argument.name === "ONLYOFFICE" // true
```

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->SetProperty("--argument", L"{\"name\":\"ONLYOFFICE\"}");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
        ```
    </TabItem>
</Tabs>

## 添加或删除字体

当添加新字体或删除旧字体时，也可以更新字体列表。为此，将使用 `check-fonts` 变量：

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        oBuilder->Initialize();
        oBuilder->SetProperty("--check-fonts", L"true");
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe "--check-fonts=true" test.docbuilder
        ```
    </TabItem>
</Tabs>
