# WriteData（写入数据）

将数据写入日志文件。用于 JavaScript 代码中的日志记录。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilder.WriteData` 方法。

## 语法

```cpp
void WriteData(const wchar_t* sPath, const wchar_t* sValue, const bool& bAppend);
```

## 参数

| **名称** | **数据类型**   | **描述**                                                                 |
| -------- | -------------- | ------------------------------------------------------------------------ |
| sPath    | const wchar_t* | 用于写入所有日志的文件路径。                                             |
| sValue   | const wchar_t* | 将要写入日志文件的数据。                                                 |
| bAppend  | const bool&    | 指定新数据是追加到已存在的日志文件中，还是创建一个新文件。               |

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.WriteData("result.log", "Alert!", false);
CDocBuilder::Dispose();
```