# WriteData（写入数据）

将数据写入日志文件。用于JS代码中的日志记录。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilder.WriteData` 方法。

## 语法

```cpp
HRESULT WriteData([in] BSTR path, [in] BSTR value, [in] VARIANT_BOOL append);
```

## 参数

| **名称（Name）** | **类型（Type）** | **描述（Description）**                                                                 |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------- |
| path             | BSTR             | 用于写入所有日志的文件路径。                                                           |
| value            | BSTR             | 将要写入日志文件的数据。                                                               |
| append           | VARIANT_BOOL     | 指定新数据是追加到已存在的日志文件中，还是创建一个新文件。                             |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->WriteData("result.log", "Alert!", false);
oBuilder->Dispose();
```