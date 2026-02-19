# WriteData（写入数据）

将数据写入日志文件。用于JS代码中的日志记录。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilder.WriteData` 方法。

## 语法

```cs
void WriteData(String^ sPath, String^ sValue, bool bAppend);
```

## 参数

| 参数名   | 类型     | 描述                                                                 |
| -------- | -------- | -------------------------------------------------------------------- |
| sPath    | String^  | 用于写入所有日志的文件路径。                                         |
| sValue   | String^  | 将要写入日志文件的数据。                                             |
| bAppend  | bool     | 指定新数据是追加到已存在的日志文件中，还是创建一个新文件。           |

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.WriteData("result.log", "Alert!", false);
CDocBuilder.Destroy();
```