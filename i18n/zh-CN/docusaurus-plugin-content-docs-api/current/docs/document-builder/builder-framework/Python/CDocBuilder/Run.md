import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run (运行)

执行仅包含ONLYOFFICE文档生成器命令的文件。

## 语法

```py
def Run(self, str path);
```

## 参数

| 参数   | 类型 | 描述                                         |
| ------ | ---- | -------------------------------------------- |
| path   | str  | ONLYOFFICE文档生成器可执行文件的路径。       |

## 示例

<Tabs>
    <TabItem value="python" label="Python">
        ``` py
        import docbuilder

        builder = docbuilder.CDocBuilder()
        builder.Run("path-to-script.docbuilder")
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        docbuilder.exe mydocument.docbuilder
        ```
    </TabItem>
</Tabs>
