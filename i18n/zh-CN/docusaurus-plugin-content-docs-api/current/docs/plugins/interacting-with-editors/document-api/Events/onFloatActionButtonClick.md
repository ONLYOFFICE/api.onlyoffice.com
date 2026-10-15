# onFloatActionButtonClick

单击浮动操作按钮时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| id | string | 按钮 ID。 |

## 示例

处理悬浮操作按钮的点击。

```javascript
// How do I react to a click on a plugin button placed over the editor area?

// Register a floating action button and log a message when it is clicked.

window.Asc.plugin.init = function() {
    let button = new Asc.ButtonFloatAction("fab-insert");
    button.text = "Insert";
    button.hint = "Insert the generated text";

    button.attachOnClick(function() {
        console.log("The floating action button has been clicked");
    });

    Asc.Buttons.registerFloatActionButtons();
};
```
