# 填充表单

包含表单属性的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| tags | object | 表单标签，指定具有该标签的每种表单类型的内容。 |
| tags.checkBox | string | 复选框表单值（**true** 为选中，**false** 为未选中）。 |
| tags.comboBox | string | 组合框表单值（组合框列表中的某一项）。 |
| tags.picture | string | 图片表单值（图片链接）。 |
| tags.text | string | 文本字段值（文本内容）。 |
## 类型

Object（对象）



## 示例

```javascript
var initSettings = {
    "copyoutenabled" : false,
    "hideContentControlTrack" : false,
    "watermark_on_draw" : JSON.stringify({
        "transparent" : 0.3,
        "type" : "rect",
        "width" : 100,
        "height" : 100,
        "rotate" : -45,
        "margins" : [ 10, 10, 10, 10 ],
        "fill" : [255, 0, 0],
        "stroke-width" : 1,
        "stroke" : [0, 0, 255],
        "align" : 1,

        "paragraphs" : [ {
            "align" : 2,
            "fill" : [255, 0, 0],
            "linespacing" : 1,

            "runs" : [
                        {
                            "text" : "Do not steal, %user_name%!",
                            "fill" : [0, 0, 0],
                            "font-family" : "Arial",
                            "font-size" : 40,
                            "bold" : true,
                            "italic" : false,
                            "strikeout" : false,
                            "underline" : false
                        },
                        {
                            "text" : "<%br%>"
                        }
                    ]
            }
        ]
    }),
    "disableAutostartMacros" : true,
    "fillForms" : JSON.stringify({
        "tags" : {
            "111" : {
                "text" : "Text in form with tag 111",
                "checkBox" : "true",
                "picture" : "https://upload.wikimedia.org/wikipedia/commons/9/91/ONLYOFFICE_logo.png",
                "comboBox" : "item1"
            },
            "222" : {
                "text" : "Text in form with tag 222",
                "checkBox" : "false",
                "comboBox" : "item2"
            },
            "333" : {
                "text" : "OnlyOffice"
            }
        }
    })
};
window.Asc.plugin.executeMethod("SetProperties", [initSettings]);
```
