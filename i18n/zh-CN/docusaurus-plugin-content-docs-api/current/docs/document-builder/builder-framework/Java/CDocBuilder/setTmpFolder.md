import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# setTmpFolder

设置程序临时保存工作所需文件的文件夹路径。文档文件成功创建后，该文件夹中的所有文件都将被删除。如果未设置临时文件夹，将使用系统默认的临时文件夹。

## 语法

```java
void setTmpFolder(String folder);
```

## 参数

| 参数   | 类型   | 描述                                   |
| ------ | ------ | -------------------------------------- |
| folder | String | 用于保存临时文件的文件夹路径。         |

## 示例

<Tabs>
    <TabItem value="java" label="Java">
        ``` java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        builder.setTmpFolder(L"DocBuilderTemp");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        builder.SetTmpFolder("DocBuilderTemp");
        ```
    </TabItem>
</Tabs>
