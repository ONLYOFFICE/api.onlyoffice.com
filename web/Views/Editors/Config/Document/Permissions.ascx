<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("config/document") %>"></a>
    <span class="hdr">Document Permissions</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">The document permission section allows to change the permission for the document to be edited and downloaded or not.</p>

<div class="header-gray">Example</div>
<div>
    <div id="controlFields">
        <div id="permissions" class="control-panel">
            <div class="line" style="margin-top: 0px;">
                <label class="dataItemSpan" style="margin-top: 0px;">
                    <input type="checkbox" id="documentConfig_permissions_chat" name="documentConfig_permissions_chat" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_chat">Chat</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_comment" name="documentConfig_permissions_comment" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_comment">Comment</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_copy" name="documentConfig_permissions_copy" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_copy">Copy</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_commentGroups" name="documentConfig_permissions_commentGroups" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_commentGroups">Comment Groups</label>
                </label>
            </div>
            <div id="holder_documentConfig_permissions_commentGroups" class="config_object_holder">
                <div class="line input_line">
                    <label for="documentConfig_permissions_commentGroups_edit">Edit</label>
                    <input type="text" id="documentConfig_permissions_commentGroups_edit" name="documentConfig_permissions_commentGroups_edit" value='["Group2", ""]'>
                </div>
                <div class="line input_line">
                    <label for="documentConfig_permissions_commentGroups_remove">Remove</label>
                    <input type="text" id="documentConfig_permissions_commentGroups_remove" name="documentConfig_permissions_commentGroups_remove" value='[""]'>
                </div>
                <div class="line input_line">
                    <label for="documentConfig_permissions_commentGroups_view">View</label>
                    <input type="text" id="documentConfig_permissions_commentGroups_view" name="documentConfig_permissions_commentGroups_view" value='""'>
                </div>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_deleteCommentAuthorOnly" name="documentConfig_permissions_deleteCommentAuthorOnly" hidden="hidden">
                    <span></span>
                    <label for="documentConfig_permissions_deleteCommentAuthorOnly">Delete Comment Author Only</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_download" name="documentConfig_permissions_download" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_download">Download</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_edit" name="documentConfig_permissions_edit" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_edit">Edit</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_editCommentAuthorOnly" name="documentConfig_permissions_editCommentAuthorOnly" hidden="hidden">
                    <span></span>
                    <label for="documentConfig_permissions_editCommentAuthorOnly">Edit Comment Author Only</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_fillForms" name="documentConfig_permissions_fillForms" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_fillForms">Fill Forms</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_modifyContentControl" name="documentConfig_permissions_modifyContentControl" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_modifyContentControl">Modify Content Control</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_print" name="documentConfig_permissions_print" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_print">Print</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_protect" name="documentConfig_permissions_protect" hidden="hidden" checked>
                    <span></span>
                    <label for="documentConfig_permissions_protect">Protect</label>
                </label>
            </div>
            <div class="line">
                <label class="dataItemSpan">
                    <input type="checkbox" id="documentConfig_permissions_review" name="documentConfig_permissions_review" hidden="hidden">
                    <span></span>
                    <label for="documentConfig_permissions_review">Review</label>
                </label>
            </div>
            <div class="line input_line">
                <label for="documentConfig_permissions_reviewGroups">Review Groups</label>
                <input type="text" id="documentConfig_permissions_reviewGroups" name="documentConfig_permissions_reviewGroups" value='["Group1", "Group2", ""]'>
            </div>
            <div class="line input_line" style="margin-bottom: 0px;">
                <label for="documentConfig_permissions_userInfoGroups">User Info Groups</label>
                <input type="text" id="documentConfig_permissions_userInfoGroups" name="documentConfig_permissions_userInfoGroups" value='["Group1", ""]'>
            </div>
        </div>
    </div>
    <div id="configPreHolder" style="display: flex; margin-top: 18px;">
        <div>
            <div id="configHeader" class="configHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">Config.js</span>
                </div>
                <div>
                    <div class="tooltip">
                        <div class="copyConfig">
                            <img alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                            <span id="tooltiptext-hover" style="display: inline;" class="tooltiptext">When you copy, you get the HTML code for the whole example.</span>
                            <span id="tooltiptext-click" style="display: none;" class="tooltiptext">HTML copied.</span>
                        </div>
                    </div>
                </div>
            </div>
            <pre id="configPre"></pre>
        </div>  
    </div>
</div>

<div id="editorSpace">
    <div id="placeholder"></div>
</div>

<div class="header-gray">Parameters</div>
<table class="table">
    <colgroup>
        <col class="table-name" />
        <col />
        <col class="table-type" />
        <col class="table-example" />
    </colgroup>
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Example</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td id="changeHistory" class="copy-link">changeHistory</td>
            <td>
                Allows to display the <em>Restore</em> button when using the <a href="<%= Url.Action("config/events") %>#onRequestRestore">onRequestRestore</a> event.
                The default value is <b>false</b>.
                Deprecated since version 5.5, please add the <a href="<%= Url.Action("config/events") %>#onRequestRestore">onRequestRestore</a> field instead.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="chat" class="copy-link">chat</td>
            <td>
                Defines if the chat functionality is enabled in the document or not.
                In case the chat permission is set to <b>true</b>, the <b>Chat</b> menu button will be displayed.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td id="comment" class="copy-link">comment</td>
            <td>
                Defines if the document can be commented or not.
                In case the commenting permission is set to <b>"true"</b> the document <b>side bar</b> will contain the <b>Comment</b> menu option; the document commenting will only be available for the document editor if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>. The default value coincides with the value of the <a href="#edit">edit</a> parameter.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">
                    In case <em>edit</em> is set to <b>"true"</b> and <em>comment</em> is also set to <b>"true"</b>, the user will be able to edit the document and comment.
                    In case <em>edit</em> is set to <b>"true"</b> and <em>comment</em> is set to <b>"false"</b>, the user will be able to edit only, the corresponding commenting functionality will be available for viewing only, the adding and editing of comments will be unavailable.
                    In case <em>edit</em> is set to <b>"false"</b> and <em>comment</em> is set to <b>"true"</b>, the document will be available for commenting only.
                    In case <em>edit</em> is set to <b>"false"</b> and <em>review</em> is set to <b>"false"</b> and <em>comments</em> is set to <b>"true"</b> the <em>fillForms</em> value is not considered and filling the forms is not available.
                </div>
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/comment.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="commentGroups" class="copy-link">commentGroups</td>
            <td>
                Defines the <a href="<%= Url.Action("config/editor") %>#user">groups</a> whose comments the user can edit, remove and/or view.
                The object has the following parameters:
                <ul>
                    <li>
                        <b>edit</b> - the user can edit comments made by other users,
                        <br />
                        <b>type</b>: list,
                        <br />
                        <b>example</b>: ["Group2", ""];
                    </li>
                    <li>
                        <b>remove</b> - the user can remove comments made by other users,
                        <br />
                        <b>type</b>: list,
                        <br />
                        <b>example</b>: [];
                    </li>
                    <li>
                        <b>view</b> - the user can view comments made by other users,
                        <br />
                        <b>type</b>: list,
                        <br />
                        <b>example</b>: "".
                    </li>
                </ul>
                The <em>[""]</em> value means that the user can edit/remove/view comments made by someone who belongs to none of these groups (for example, if the document is reviewed in third-party editors).
                If the value is <em>[]</em>, the user cannot edit/remove/view comments made by any group.
                If the <em>edit</em>, <em>remove</em> and <em>view</em> parameters are <em>""</em> or not specified, then the user can view/edit/remove comments made by any user.
            </td>
            <td>object</td>
            <td>{
    "edit": ["Group2", ""],
    "remove": [""],
    "view": ""
}</td>
        </tr>
        <tr class="tablerow">
            <td id="copy" class="copy-link">copy</td>
            <td>
                Defines if the content can be copied to the clipboard or not.
                In case the parameter is set to <b>false</b>, pasting the content will be available within the current document editor only.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td id="deleteCommentAuthorOnly" class="copy-link">deleteCommentAuthorOnly</td>
            <td>
                Defines if the user can delete only his/her comments.
                The default value is <b>false</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td id="download" class="copy-link">download</td>
            <td>
                Defines if the document can be downloaded or only viewed or edited online.
                In case the downloading permission is set to <b>"false"</b> the <b>Download as...</b> menu option will be absent from the <b>File</b> menu.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/download.png") %>" alt="" />
            </td>
        </tr>
        <tr>
            <td id="edit" class="copy-link">edit</td>
            <td>
                Defines if the document can be edited or only viewed.
                In case the editing permission is set to <b>"true"</b> the <b>File</b> menu will contain the <b>Edit Document</b> menu option; please note that if the editing permission is set to <b>"false"</b> the document will be opened in viewer and you will <b>not</b> be able to switch it to the editor even if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/edit.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="editCommentAuthorOnly" class="copy-link">editCommentAuthorOnly</td>
            <td>
                Defines if the user can edit only his/her comments.
                The default value is <b>false</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td id="fillForms" class="copy-link">fillForms</td>
            <td>
                Defines if the forms can be filled.
                Filling in forms will only be available for the document and pdf editors if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>.
                The default value coincides with the value of the <a href="#edit">edit</a> or the <a href="#review">review</a> parameter.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">
                    In case <em>edit</em> is set to <b>"true"</b> or <em>review</em> is set to <b>"true"</b>, the <em>fillForms</em> value is not considered and the form filling is possible.
                    In case <em>edit</em> is set to <b>"false"</b> and <em>review</em> is set to <b>"false"</b> and <em>fillForms</em> is also set to <b>"true"</b>, the user can only fill forms in the document.
                    In case <em>edit</em> is set to <b>"false"</b> and <em>review</em> is set to <b>"false"</b> and <em>fillForms</em> is set to <b>"true"</b> the <em>comments</em> value is not considered and the commenting is not available.
                    The form filling only mode is currently available for <b>Document Editor</b> only.
                </div>
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/fill-forms.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="modifyContentControl" class="copy-link">modifyContentControl</td>
            <td>
                Defines if the content control settings can be changed.
                Content control modification will only be available for the document editor if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td id="modifyFilter" class="copy-link">modifyFilter</td>
            <td>
                Defines if the filter can applied globally (<b>true</b>) affecting all the other users, or locally (<b>false</b>), i.e. for the current user only.
                Filter modification will only be available for the spreadsheet editor if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">In case the document is edited by a user with the full access rights, the filters applied by such a user will be visible to all other users despite their local settings.</div>
            </td>
        </tr>
        <tr>
            <td id="print" class="copy-link">print</td>
            <td>
                Defines if the document can be printed or not.
                In case the printing permission is set to <b>"false"</b> the <b>Print</b> menu option will be absent from the <b>File</b> menu.
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/print.png") %>" alt="" />
            </td>
        </tr>
        <tr>
            <td id="protect" class="copy-link">protect</td>
            <td>
                Defines if the <b>Protection</b> tab on the toolbar and the <b>Protect</b> button in the left menu are displayed (<b>true</b>) or hidden (<b>false</b>).
                The default value is <b>true</b>.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/protect.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="rename" class="copy-link">rename</td>
            <td>
                Allows to display the <em>Rename...</em> button when using the <a href="<%= Url.Action("config/events") %>#onRequestRename">onRequestRename</a> event.
                The default value is <b>false</b>.
                Deprecated since version 6.0, please add the <a href="<%= Url.Action("config/events") %>#onRequestRename">onRequestRename</a> field instead.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td id="review" class="copy-link">review</td>
            <td>
                Defines if the document can be reviewed or not.
                In case the reviewing permission is set to <b>true</b> the document <b>status bar</b> will contain the <b>Review</b> menu option; the document review will only be available for the document editor if the <a href="<%= Url.Action("config/editor") %>#mode">mode</a> parameter is set to <b>edit</b>.
                The default value coincides with the value of the <a href="#edit">edit</a> parameter.
            </td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">
                    In case <em>edit</em> is set to <b>"true"</b> and <em>review</em> is also set to <b>"true"</b>, the user will be able to edit the document, accept/reject the changes made and switch to the review mode him/herself.
                    In case <em>edit</em> is set to <b>"true"</b> and <em>review</em> is set to <b>"false"</b>, the user will be able to edit only.
                    In case <em>edit</em> is set to <b>"false"</b> and <em>review</em> is set to <b>"true"</b>, the document will be available in review mode only.
                </div>
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/review.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="reviewGroups" class="copy-link">reviewGroups</td>
            <td>
                Defines the <a href="<%= Url.Action("config/editor") %>#user">groups</a> whose changes the user can accept/reject.
                The <em>[""]</em> value means that the user can review changes made by someone who belongs to none of these groups (for example, if the document is reviewed in third-party editors).
                If the value is <em>[]</em>, the user cannot review changes made by any group.
                If the value is <em>""</em> or not specified, then the user can review changes made by any user.
            </td>
            <td>array of string</td>
            <td></td>
        </tr>
        <tr class="tablerow">
            <td id="userInfoGroups" class="copy-link">userInfoGroups</td>
            <td>
                Defines the groups of users whose information is displayed in the editors:
                <ul>
                    <li>the usernames are displayed in the list of the editing users in the editor header,</li>
                    <li>when typing text, the user cursors and tooltips with their names are displayed,</li>
                    <li>when locking objects in the strict co-editing mode, the usernames are displayed.</li>
                </ul>
                The <em>["Group1", ""]</em> means that the information about users from Group1 and users who don't belong to any group is displayed.
                The <em>[]</em> means that no user information is displayed at all.
                The <em>undefined</em> or <em>""</em> values mean that the information about all users is displayed.
            </td>
            <td>array of strings</td>
            <td></td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>



<script id="scriptApi" type="text/javascript" src="<%= ConfigurationManager.AppSettings["editor_url"] ?? "" %>/web-apps/apps/api/documents/api.js"></script>
<script type="text/javascript">

    // Editor window
    var config = <%= Config.Serialize(
    new Config {
        Document = new Config.DocumentConfig
            {
                FileType = "docx",
                Key = "apiwh" + Guid.NewGuid(),
                Permissions = new Config.DocumentConfig.PermissionsConfig(),
                Title = "Example Title",
                Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "docx",
                Info = new Config.DocumentConfig.InfoConfig()
            },
        DocumentType = "word",
        EditorConfig = new Config.EditorConfigConfiguration
            {     
                CallbackUrl = Url.Action("callback", "editors", null, Request.Url.Scheme),
                Customization = new Config.EditorConfigConfiguration.CustomizationConfig {
                    CompactToolbar = true,
                    Feedback = new Config.EditorConfigConfiguration.CustomizationConfig.FeedbackConfig
                        {
                            Visible = true
                        },
                    HideRightMenu = true,
                    HideRulers = true,
                    IntegrationMode = "embed",
                    ToolbarNoTabs = true
                },
                User = new Config.EditorConfigConfiguration.UserConfig {
                    Name = "John Smith",
                    Id = "79e1e841"
                }
            },
        Height = "550px",
        Width = "100%"
    }) %>;
</script>

<script>
    var config_global = "";
    $(".copyConfig").click(function () {
        var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="<%= ConfigurationManager.AppSettings["editor_url"] ?? "" %>/web-apps/apps/api/documents/api.js"><\/script>
</head>
<body>
    <div id="editorSpace">
        <div id="placeholder"></div>
    </div>
    <script>
new DocsAPI.DocEditor("placeholder", ${JSON.stringify(config_global, null, '\t')});
    <\/script>
</body>
`;

        navigator.clipboard.writeText(html).then(function () {
            document.getElementById("tooltiptext-hover").style = "display: none;";
            document.getElementById("tooltiptext-click").style = "display: inline; width: 95px!important;";
        }, function (err) {
            console.error('Could not copy content: ', err);
        });
    })
    $(".tooltip").mouseleave(function () {
        document.getElementById("tooltiptext-hover").style = "display: inline;";
        document.getElementById("tooltiptext-click").style = "display: none;";
    })
</script>

<script>
    $(document).ready(function () {
        resizeCodeInput();
        updateConfig();
    });

    $("#controlFields").find("input,select").change(function () {
        updateConfig();
    });

    $("#documentConfig_permissions_commentGroups").change(showHideConfigObject);

    function showHideConfigObject(e) {
        var hidden = document.getElementById(`holder_${e.target.id}`).hidden;
        document.getElementById(`holder_${e.target.id}`).hidden = !hidden;
        resizeCodeInput();
    }

    function updateConfig() {
        var commentGroups = `
            "commentGroups": {
                "edit": ${getFieldValue("documentConfig_permissions_commentGroups_edit")},
                "remove": ${getFieldValue("documentConfig_permissions_commentGroups_remove")},
                "view": ${getFieldValue("documentConfig_permissions_commentGroups_view")}
            },`;
        if (!getFieldValue("documentConfig_permissions_commentGroups")) {
            commentGroups = "";
        }
        var permissions = `{
            "chat": ${getFieldValue("documentConfig_permissions_chat")},
            "comment": ${getFieldValue("documentConfig_permissions_comment")},
            "copy": ${getFieldValue("documentConfig_permissions_copy")},${commentGroups}
            "deleteCommentAuthorOnly": ${getFieldValue("documentConfig_permissions_deleteCommentAuthorOnly")},
            "download": ${getFieldValue("documentConfig_permissions_download")},
            "edit": ${getFieldValue("documentConfig_permissions_edit")},
            "editCommentAuthorOnly": ${getFieldValue("documentConfig_permissions_editCommentAuthorOnly")},
            "fillForms": ${getFieldValue("documentConfig_permissions_fillForms")},
            "modifyContentControl": ${getFieldValue("documentConfig_permissions_modifyContentControl")},
            "print": ${getFieldValue("documentConfig_permissions_print")},
            "protect": ${getFieldValue("documentConfig_permissions_protect")},
            "review": ${getFieldValue("documentConfig_permissions_review")},
            "reviewGroups": ${getFieldValue("documentConfig_permissions_reviewGroups")},
            "userInfoGroups": ${getFieldValue("documentConfig_permissions_userInfoGroups")}
        }`;
        var config_string =
            `var docEditor = new DocsAPI.DocEditor("placeholder", {
    "document": {
        "permissions": ${permissions}
        ,
        ...
    },
    ...
});
`;      

        var info_object = JSON.parse(permissions);
        config.document.permissions = info_object;
        if (window.docEditor) {
            window.docEditor.destroyEditor();
        }
        $.ajax({
            type: "POST",
            url: "<%= Url.Action("configcreate", null, null, Request.Url.Scheme) %>",
            data: JSON.stringify({ jsonConfig: JSON.stringify(config) }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                window.docEditor = new DocsAPI.DocEditor("placeholder", JSON.parse(data));
            }
        });
        config_global = config;
        var pre = document.getElementById("configPre");
        pre.innerHTML = config_string;
        hljs.highlightBlock(pre);
    }

    function getFieldValue(id) {
        var element = document.getElementById(id);
        if (element.type == "checkbox") {
            return element.checked;
        } else if (`${element.value}` == ``) {
            return `""`;
        } else if (isNaN(element.value)) {
            if (element.value.includes("[") || element.value.includes('""')) {
                return element.value;
            }
            return `"${element.value}"`;
        } else {
            return Number(element.value);
        }
    }

    function resizeCodeInput() {
        var paddingTop = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).paddingTop.split("px")[0]);
        var paddingBottom = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).paddingBottom.split("px")[0]);
        var borderSize = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).border.split("px")[0]);
        var controlFieldsHeight = Math.round(document.getElementById("controlFields").getBoundingClientRect().height * 100) / 100;
        var headerHeight = document.getElementById("configHeader").getBoundingClientRect().height;

        var offset = paddingTop + paddingBottom + (borderSize * 2);
        var height = controlFieldsHeight - offset - headerHeight;

        document.getElementById("configPre").style.height = `${height}px`;
    }
</script>