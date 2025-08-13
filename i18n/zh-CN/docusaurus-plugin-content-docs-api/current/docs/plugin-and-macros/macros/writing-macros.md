---
sidebar_position: -5
---

# 编写宏

现在您已经了解了宏的工作原理，可以试着编写您自己的宏。假如有一个表格，需要对表格的奇数行和偶数行进行着色（将奇数行设为绿色，偶数行设为红色），且该表格包含 200 行，列的范围为 **A** 到 **S**，如果手动完成这一任务将非常耗时。因此，使用宏将是很好的解决方案。

1. 打开 ONLYOFFICE 编辑器并创建一个新的电子表格。
2. 打开**视图**选项卡并选择**宏**。宏窗口将弹出，并出现一个基础的函数包装器，可以在其中编写所需代码：

<!-- 此代码与宏相关。 -->

<!-- eslint-skip -->

   ``` ts
   (function () {
     // ... your code goes here ...
   })()
   ```

3. 让我们参考 [Office API 文档](../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md)完成这一任务：

   - 首先，使用 [GetActiveSheet](../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md) 方法获取当前工作表:

     ``` ts
     let worksheet = Api.GetActiveSheet();
     ```

   - 然后创建一个从第一行遍历到最后一行的循环：

     ``` ts
     for (let i = 1; i < 200; i += 2) {
       // TODO: Implement functionality here
     }
     ```

   - 定义两个变量：一个用于奇数行，另一个用于偶数行：

     ``` ts
     let rowOdd = i;
     let rowEven = i + 1;
     ```

   - 现在可以访问奇数行和偶数行了，接下来就让我们为每行设置颜色。可以使用 [CreateColorFromRGB](../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md) 方法设置所需颜色。使用 [GetRange](../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md) 方法获取对应行的单元格区域，为奇数行设置颜色：

     ``` ts
     worksheet.GetRange(`A${rowOdd}:S${rowOdd}`).SetFillColor(Api.CreateColorFromRGB(138, 181, 155));
     ```

     偶数行除了设置的颜色不同之外操作完全相同：

     ``` ts
     worksheet.GetRange(`A${rowEven}:S${rowEven}`).SetFillColor(Api.CreateColorFromRGB(216, 227, 220));
     ```

现在我们将其整合成完整的脚本代码：

<!-- This code is related to macros. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let worksheet = Api.GetActiveSheet();
    for (let i = 1; i < 200; i += 2) {
        let rowOdd = i, rowEven = i + 1;
        worksheet.GetRange("A" + rowOdd + ":S" + rowOdd).SetFillColor(Api.CreateColorFromRGB(138, 181, 155));
        worksheet.GetRange("A" + rowEven + ":S" + rowEven).SetFillColor(Api.CreateColorFromRGB(216, 227, 220));
    }
})();
```

将上述代码粘贴到宏窗口中并点击![Play icon](/assets/images/plugins/play.svg)图标。 第 1 到第 200 行将会在不到一秒的时间内被交替着色。

![Alternate raws](/assets/images/plugins/alternate-raws.png)

## 订阅事件

要订阅指定事件并在事件触发时调用回调函数，请使用 [attachEvent](../../office-api/usage-api/text-document-api/Api/Methods/attachEvent.md) 方法。

例如，要在文档中点击超链接时订阅事件，可以使用以下代码：

``` ts
Api.attachEvent("asc_onHyperlinkClick", () => {
  console.log("HYPERLINK!!!");
})
```

当你点击文档中任意超链接时，**asc_onHyperlinkClick** 事件将被触发，并在控制台中显示 "HYPERLINK!!!" 消息。

![Click hyperlink](/assets/images/plugins/click-hyperlink.png)

## 分配宏

在电子表格编辑器中，可以将宏分配给图形对象：

1. 右键点击图形对象。
2. 点击**分配宏**。
3. 在弹出的窗口中选择一个宏，或者在相应区域输入宏名称。
4. 点击**确定**按钮。

![Assign macro](/assets/images/plugins/assign-macro.png)

要运行宏，只需点击该图形对象，即可执行对应脚本。
