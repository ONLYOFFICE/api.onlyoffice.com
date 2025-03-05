---
sidebar_position: -5
---

# WOPI REST API

[WOPI REST API](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/rest/) 指定一组操作，使客户端能够访问和更改存储在服务器上的文件。

ONLYOFFICE 文档使用以下 WOPI 操作：

- [CheckFileInfo](checkfileinfo.md) - 返回有关文件属性、访问权限和编辑器设置的信息。
- [GetFile](getfile.md) - 请求消息以检索 `HTTP://server/<...>/wopi*/files/<id>/contents` 操作的文件。
- [Lock](lock.md) - 由请求锁定的online office锁定文件编辑。
- [RefreshLock](refreshlock.md) - 通过将文件的自动到期计时器重置为 30 分钟来刷新文件的锁定。
- [Unlock](unlock.md) - 允许文件编辑。
- [PutFile](putfile.md) - 请求消息以更新 `HTTP://server/<...>/wopi*/files/<id>/contents` 操作的文件。
- [PutRelativeFile](putrelativefile.md) - 基于当前文件在主机上创建一个新文件。
- [RenameFile](renamefile.md) - 重命名文件。

## 可能的错误代码及其描述

| 错误代码                   | 描述                                                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 OK                       | 成功                                                                                                                                                                                   |
| 400 Bad Request              | **X-WOPI-Lock** 未提供或为空/指定名称非法                                                                                                                 |
| 401 Unauthorized             | 无效的访问令牌                                                                                                                                                                      |
| 404 Not Found                | 未找到资源/用户未经授权                                                                                                                                                      |
| 409 Conflict                 | 锁不匹配/被另一个接口锁定；使用此响应代码时，必须始终包含包含文件当前锁定值的 **X-WOPI-Lock** 响应标头 |
| 412 Precondition Failed      | 文件大于 **X-WOPI-MaxExpectedSize**                                                                                                                                            |
| 413 Request Entity Too Large | 文件太大；最大文件大小是特定于主机的                                                                                                                                 |
| 500 Internal Server Error    | 服务器错误                                                                                                                                                                              |
| 501 Not Implemented          | 不支持操作                                                                                                                                                                   |
