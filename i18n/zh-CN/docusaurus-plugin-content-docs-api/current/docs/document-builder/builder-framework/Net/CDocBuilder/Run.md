import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run (运行)

运行 ONLYOFFICE 文档生成器可执行文件。如果您不想编写 .Net 应用程序，只需使用 `docbuilder.exe` 可执行文件，并将 `.docbuilder` 文件作为参数运行，所有用于创建文档文件的代码都将写在该 `.docbuilder` 文件中。对于 .Net 而言，创建 `CDocBuilder` 对象并调用 `Run` 方法，同时通过 `sPath` 参数传入可执行文件的路径。

## 语法

```cs
bool Run(String^ sPath);
```

## 参数

| 参数   | 类型     | 描述                                     |
| ------ | -------- | ---------------------------------------- |
| sPath  | String^  | ONLYOFFICE 文档生成器可执行文件的路径    |

## 示例

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        oBuilder.Run("path-to-script.docbuilder");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
