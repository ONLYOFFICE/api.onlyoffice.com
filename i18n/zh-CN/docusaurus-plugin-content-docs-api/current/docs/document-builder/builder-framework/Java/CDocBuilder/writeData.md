# writeData

将数据写入日志文件。用于JS代码中的日志记录。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.writeData` 方法。

## 语法

```java
void writeData(String path, String value, boolean append);
```

## 参数

| 参数   | 类型    | 描述                                                                 |
| ------ | ------- | -------------------------------------------------------------------- |
| path   | String  | 用于写入所有日志的文件路径。                                         |
| value  | String  | 将要写入日志文件的数据。                                             |
| append | boolean | 指定新数据是追加到已存在的日志文件中，还是创建一个新文件。           |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
builder.writeData("result.log", "Alert!", false);
CDocBuilder.dispose();
```