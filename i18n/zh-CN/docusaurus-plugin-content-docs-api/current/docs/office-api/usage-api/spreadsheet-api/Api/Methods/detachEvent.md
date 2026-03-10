# detachEvent

取消订阅指定事件。

## 语法

```javascript
expression.detachEvent(eventName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | 必需 | string |  | 事件名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例取消订阅「onWorksheetChange」事件。

```javascript editor-xlsx
// Detach from an event.

// How to stop event handling.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});
Api.detachEvent("onWorksheetChange");
```
