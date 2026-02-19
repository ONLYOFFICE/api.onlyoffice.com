import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetProperty（设置属性）

将UTF8格式的参数设置到构建器类中，该参数可以传递到[CDocBuilder.ExecuteCommand](../CDocBuilder/ExecuteCommand.md)方法之外的程序中，也就是说，既可以作为运行ONLYOFFICE Document Builder可执行文件时的附加属性，也可以作为程序代码的一部分，但不会包含到文档文件脚本中。

> 请注意，对于.docbuilder文件，不会显式使用`CDocBuilder.SetProperty`方法。该参数本身会作为可执行文件的附加属性使用。请参见下面的示例。

## 语法

```py
def SetProperty(self, str name, str value);
```

## 参数

| 参数   | 类型 | 描述                                      |
| ------ | ---- | ----------------------------------------- |
| name   | str  | UTF8格式的参数名称，其值始终为`--argument` |
| value  | str  | 将在文档中使用的参数值                    |

## 支持的属性

| **名称**                  | **数据类型** | **默认值** | **描述**                                                                 |
| ------------------------- | ------------ | ---------- | ------------------------------------------------------------------------ |
| --use-doctrenderer-scheme | bool         | false      | 指定在构建文档或保存文件时从编辑器获取内容时是否使用doctrenderer模式     |
| --check-fonts             | bool         | true       | 指定是否缓存系统字体以提高工作速度                                       |
| --work-directory          | str          | ""         | 临时目录的路径                                                           |
| --cache-scripts           | bool         | true       | 指定是否缓存sdkjs脚本                                                    |
| --save-use-only-names     | bool         | false      | 指定是否使用目标路径（用于服务器工作）。例如：`/home/user/1.txt` => `/tmp/1.txt` |
| --all-fonts-path          | str          | ""         | `AllFonts.js`脚本的路径                                                  |
| --argument                | str          | ""         | 发送到所有已打开JS上下文的全局参数的JSON参数                             |
| --fonts-system            | bool         | true       | 指定是否使用系统字体                                                     |
| --fonts-dir               | str          | ""         | 附加字体目录的路径（可能有多个记录）                                     |

添加后，该参数将作为`Argument`变量可用，其参数值已设置：

``` py
Argument.name === "ONLYOFFICE" # true
```

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        builder.SetProperty("--argument", L"{\"name\":\"ONLYOFFICE\"}")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
        ```
    </TabItem>
</Tabs>

## 添加或移除字体

当添加新字体或移除旧字体时，也可以更新字体列表。为此，将使用`check-fonts`变量：

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        builder = docbuilder.CDocBuilder()
        builder.SetProperty("--check-fonts", L"true")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe "--check-fonts=true" test.docbuilder
        ```
    </TabItem>
</Tabs>
