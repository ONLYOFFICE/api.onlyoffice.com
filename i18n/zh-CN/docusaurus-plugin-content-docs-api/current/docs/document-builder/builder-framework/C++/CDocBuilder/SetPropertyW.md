import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetPropertyW

设置 Unicode 格式的参数，该参数可传递给 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 方法之外的程序，即可以作为运行 ONLYOFFICE Document Builder 可执行文件时的附加属性，也可以作为程序代码的一部分，但不包含在文档文件脚本中。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilder.SetPropertyW` 方法。而是将参数本身用作可执行文件的附加属性。见下面的示例。

## 语法

```cpp
void SetPropertyW(const wchar_t* sParam, const wchar_t* sValue);
```

## 参数

| **名称** | **数据类型**   | **描述**                              |
| -------- | -------------- | ------------------------------------- |
| sParam   | const wchar_t* | UTF8 格式的参数名称，值始终为 `--argument`。 |
| sValue   | const wchar_t* | 将在文档中使用的 UTF8 格式的参数值。  |

## 支持的属性

| **名称**                  | **数据类型**   | **默认值** | **描述**                                                                 |
| ------------------------- | -------------- | ---------- | ------------------------------------------------------------------------ |
| --use-doctrenderer-scheme | bool           | false      | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。  |
| --check-fonts             | bool           | true       | 指定是否缓存系统字体以提高工作速度。                                     |
| --work-directory          | const wchar_t* | ""         | 临时目录的路径。                                                         |
| --cache-scripts           | bool           | true       | 指定是否缓存 sdkjs 脚本。                                                |
| --save-use-only-names     | bool           | false      | 指定是否使用目标路径（用于服务器工作）。例如：`/home/user/1.txt` => `/tmp/1.txt`。 |
| --all-fonts-path          | const wchar_t* | ""         | `AllFonts.js` 脚本的路径。                                               |
| --argument                | const wchar_t* | ""         | 发送到所有已打开 JS 上下文的全局参数的 JSON 参数。                        |
| --fonts-system            | bool           | true       | 指定是否使用系统字体。                                                   |
| --fonts-dir               | const wchar_t* | ""         | 附加字体目录的路径（可能有多个记录）。                                   |

添加后，该参数将作为 `Argument` 变量可用，并设置其参数值：

```cpp
Argument.name === "ONLYOFFICE" // true
```

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.SetPropertyW("--argument", L"{\"name\":\"ONLYOFFICE\"}");
        CDocBuilder::Dispose();
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
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        oBuilder.SetPropertyW("--check-fonts", L"true");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe "--check-fonts=true" test.docbuilder
        ```
    </TabItem>
</Tabs>
