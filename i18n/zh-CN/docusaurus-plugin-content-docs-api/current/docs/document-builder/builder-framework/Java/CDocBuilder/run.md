import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# run (运行)

运行 ONLYOFFICE Document Builder 可执行文件。如果您不想编写 Java 应用程序，只需使用 `docbuilder.exe` 可执行文件，并将 `.docbuilder` 文件作为参数运行，该文件中会编写所有用于创建文档文件的代码。对于 Java 而言，创建 `CDocBuilder` 对象并调用 `run` 方法，同时传入 `path` 参数中可执行文件的路径。

## 语法

```java
boolean run(String path);
```

## 参数

| 参数   | 类型   | 描述                                   |
| ------ | ------ | -------------------------------------- |
| path   | String | ONLYOFFICE Document Builder 可执行文件的路径 |

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.run("path-to-script.docbuilder");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
