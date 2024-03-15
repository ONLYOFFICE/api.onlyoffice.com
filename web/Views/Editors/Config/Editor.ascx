<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("config/") %>"></a>
    <span class="hdr">Editor config</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">The editorConfig section allows to change the parameters pertaining to the editor interface: opening mode (viewer or editor), interface language, additional buttons, etc.).</p>

<ul class="columns-4" style="list-style: none;">
    <li><a href="#actionLink">actionLink</a></li>
    <li><a href="#callbackUrl">callbackUrl</a></li>
    <li><a href="#coEditing">coEditing</a></li>
    <li><a href="#createUrl">createUrl</a></li>
    <li><a href="#lang">lang</a></li>
    <li><a href="#location">location</a></li>
    <li><a href="#mode">mode</a></li>
    <li><a href="#recent">recent</a></li>
    <li><a href="#region">region</a></li>
    <li><a href="#templates">templates</a></li>
    <li><a href="#user">user</a></li>
</ul>

<div class="header-gray">Example</div>
<p>
    The <b>example.com</b> is the name of the server where <b>document manager</b> and <b>document storage service</b> are installed.
    See the <a href="<%= Url.Action("howitworks") %>">How it works</a> section to find out more on Document Server service client-server interactions.
</p>
<div id="controlFields">
    <div id="info" class="control-panel">
        <div class="line input_line" style="margin-top: 0;">
            <label for="editorConfig_actionLink">Action Link</label>
            <input type="text" id="editorConfig_actionLink" name="editorConfig_actionLink" value="ACTION_DATA">
        </div>
        <div class="line input_line">
            <label for="editorConfig_callbackUrl">Callback Url</label>
            <input type="text" id="editorConfig_callbackUrl" name="editorConfig_callbackUrl" value="https://example.com/url-to-callback.ashx">
        </div>
        <div class="line">
            <label class="dataItemSpan">
                <input type="checkbox" id="editorConfig_coEditing" name="editorConfig_coEditing" hidden="hidden">
                <span></span>
                <label for="editorConfig_coEditing">coEditing</label>
            </label>
        </div>
        <div id="holder_editorConfig_coEditing" class="config_object_holder" hidden>
            <div class="config_nested_group">
                <div class="line input_line">
                    <label for="editorConfig_coEditing_mode">Mode</label>
                    <select class="select" id="editorConfig_coEditing_mode" name="editorConfig_coEditing_mode">
                        <option disabled>fast</option>
                        <option value="fast">fast</option>
                        <option value="strict">strict </option>
                    </select>
                </div>
                <div class="line">
                    <label class="dataItemSpan">
                        <input type="checkbox" id="editorConfig_coEditing_change" name="editorConfig_coEditing_change" hidden="hidden" checked>
                        <span></span>
                        <label for="editorConfig_coEditing_change">Change</label>
                    </label>
                </div>
            </div>
        </div>
        <div class="line input_line">
            <label for="editorConfig_createUrl">Create Url</label>
            <input type="text" id="editorConfig_createUrl" name="editorConfig_createUrl" value="https://example.com/url-to-create-document/">
        </div>
        <div class="line input_line">
            <label for="editorConfig_lang">Lang</label>
            <select class="select" id="editorConfig_lang" name="editorConfig_lang">
                <option disabled>en</option>
                <option value="az">az</option>
                <option value="be">be</option>
                <option value="bg">bg</option>
                <option value="ca">ca</option>
                <option value="cs">cs</option>
                <option value="da">da</option>
                <option value="de">de</option>
                <option value="el">el</option>
                <option value="en">en</option>
                <option value="es">es</option>
                <option value="eu">eu</option>
                <option value="fi">fi</option>
                <option value="fr">fr</option>
                <option value="gl">gl</option>
                <option value="hu">hu</option>
                <option value="hy">hy</option>
                <option value="id">id</option>
                <option value="it">it</option>
                <option value="ja">ja</option>
                <option value="ko">ko</option>
                <option value="lo">lo</option>
                <option value="lv">lv</option>
                <option value="ms">ms</option>
                <option value="nl">nl</option>
                <option value="no">no</option>
                <option value="pl">pl</option>
                <option value="pt">pt</option>
                <option value="pt-PT">pt-PT</option>
                <option value="ro">ro</option>
                <option value="ru">ru</option>
                <option value="si">si</option>
                <option value="sk">sk</option>
                <option value="sl">sl</option>
                <option value="sv">sv</option>
                <option value="tr">tr</option>
                <option value="uk">uk</option>
                <option value="vi">vi</option>
                <option value="zh">zh</option>
                <option value="zh-TW">zh-TW</option>
            </select>
        </div>
        <div class="line input_line">
            <label for="editorConfig_location">Location</label>
            <input type="text" id="editorConfig_location" name="editorConfig_location" value="">
        </div>
        <div class="line input_line">
            <label for="editorConfig_mode">Mode</label>
            <select class="select" id="editorConfig_mode" name="editorConfig_mode">
                <option disabled>edit</option>
                <option value="edit">edit</option>
                <option value="view">view </option>
            </select>
        </div>
        <div class="line">
            <label class="dataItemSpan">
                <input type="checkbox" id="editorConfig_recent" name="editorConfig_recent" hidden="hidden">
                <span></span>
                <label for="editorConfig_recent">Recent</label>
            </label>
        </div>
        <div id="holder_editorConfig_recent" class="config_object_holder" hidden>
            <div id="holder_editorConfig_recent_0" class="editorConfig_recentItem config_nested_group">
                <div class="line input_line">
                    <label for="editorConfig_recent_folder_0">Folder</label>
                    <input type="text" id="editorConfig_recent_folder_0" name="editorConfig_recent_folder_0" value="Example Folder">
                </div>
                <div class="line input_line">
                    <label for="editorConfig_recent_title_0">Title</label>
                    <input type="text" id="editorConfig_recent_title_0" name="editorConfig_recent_title_0" value="exampledocument1.docx">
                </div>
               <div class="line input_line">
                    <label for="editorConfig_recent_url_0">Url</label>
                    <input type="text" id="editorConfig_recent_url_0" name="editorConfig_recent_url_0" value="https://example.com/exampledocument1.docx">
                </div>
            </div> 
        </div>
        <div style="padding-left: 24px;">
            <button id="addButton_editorConfig_recent" class="add-button" hidden>+</button>
        </div>
        <div class="line">
            <label class="dataItemSpan">
                <input type="checkbox" id="editorConfig_templates" name="editorConfig_templates" hidden="hidden">
                <span></span>
                <label for="editorConfig_templates">Templates</label>
            </label>
        </div>
        <div id="holder_editorConfig_templates" class="config_object_holder"hidden>
            <div id="holder_editorConfig_templates_0" class="editorConfig_templatesItem config_nested_group">
                <div class="line input_line">
                    <label for="editorConfig_templates_image_0">Image</label>
                    <input type="text" id="editorConfig_templates_image_0" name="editorConfig_templates_image_0" value="https://example.com/exampletemplate1.png">
                </div>
                <div class="line input_line">
                    <label for="editorConfig_templates_title_0">Title</label>
                    <input type="text" id="editorConfig_templates_title_0" name="editorConfig_templates_title_0" value="exampledocument1.docx">
                </div>
               <div class="line input_line">
                    <label for="editorConfig_templates_url_0">Url</label>
                    <input type="text" id="editorConfig_templates_url_0" name="editorConfig_templates_url_0" value="https://example.com/url-to-create-template1">
                </div>
            </div> 
        </div>
        <div style="padding-left: 24px; margin-bottom: 18px;">
            <button id="addButton_editorConfig_templates" class="add-button" hidden>+</button>
        </div>
        <div class="line">
            <label class="dataItemSpan">
                <input type="checkbox" id="editorConfig_user" name="editorConfig_user" hidden="hidden">
                <span></span>
                <label for="editorConfig_user">User</label>
            </label>
        </div>
        <div class="config_nested_group" style="margin-bottom: 0;">
            <div id="holder_editorConfig_user" class="config_object_holder" hidden>
                <div class="line input_line">
                    <label for="editorConfig_user_group">Group</label>
                    <input type="text" id="editorConfig_user_group" name="editorConfig_user_group" value="Group1">
                </div>
                <div class="line input_line">
                    <label for="editorConfig_user_id">Id</label>
                    <input type="text" id="editorConfig_user_id" name="editorConfig_user_id" value="78e1e841">
                </div>
                <div class="line input_line">
                    <label for="editorConfig_user_image">Image</label>
                    <input type="text" id="editorConfig_user_image" name="editorConfig_user_image" value="https://api.onlyoffice.com/content/img/docbuilder/examples/blue_cloud.png">
                </div>
                <div class="line input_line">
                    <label for="editorConfig_user_name">Name</label>
                    <input type="text" id="editorConfig_user_name" name="editorConfig_user_name" value="John Smith">
                </div>
            </div>
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
            <td id="actionLink" class="copy-link">actionLink</td>
            <td>Specifies the data received from the <b>document editing service</b> using the <a href="<%= Url.Action("config/events") %>#onMakeActionLink">onMakeActionLink</a> event or the <a href="<%= Url.Action("config/events") %>#onRequestSendNotify">onRequestSendNotify</a> event in <em>data.actionLink</em> parameter, which contains the information about the action in the document that will be scrolled to.</td>
            <td>object</td>
            <td>ACTION_DATA</td>
        </tr>
        <tr class="tablerow">
            <td id="callbackUrl" class="copy-link">callbackUrl<a href="#requiredDescr" class="required">*</a></td>
            <td>Specifies absolute URL to the <b>document storage service</b> (which <a href="<%= Url.Action("callback") %>">must be implemented</a> by the software integrators who use ONLYOFFICE Document Server on their own server).</td>
            <td>string</td>
            <td>"https://example.com/url-to-callback.ashx"</td>
        </tr>
        <tr>
            <td id="coEditing" class="copy-link">coEditing</td>
            <td>
                Defines the co-editing mode (<em>Fast</em> or <em>Strict</em>) and the possibility to change it.
                The object has the following parameters:
                <ul>
                    <li>
                        <b>mode</b> - the co-editing mode (<em>fast</em> or <em>strict</em>). The default value is <b>fast</b>,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>:  "fast";
                    </li>
                    <li>
                        <b>change</b> - defines if the co-editing mode can be changed in the editor interface or not. The default value is <b>true</b>,
                        <br />
                        <b>type</b>: boolean,
                        <br />
                        <b>example</b>:  true.
                    </li>
                </ul>
                <p>This parameter is used to apply the <a href="<%= Url.Action("coedit") %>#modes">co-editing</a> and <a href="<%= Url.Action("viewing") %>">viewing</a> modes.</p>
            </td>
            <td>object</td>
            <td>{
    "mode": "fast",
    "change": true
}</td>
        </tr>
        <tr class="tablerow-note">
            <td colspan="4">
                <div class="note">Please note that in case <em>mode</em> setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the <em>editorConfig.coEditing.mode</em> parameter.</div>
            </td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/coediting-mode.png") %>" width="832px" alt="" />
            </td>
        </tr>
        <tr>
            <td id="createUrl" class="copy-link">createUrl</td>
            <td>
                Defines the absolute URL of the document where it will be created and available after creation.
                If not specified, there will be no creation button.
                Instead of this field, you can use the <a href="<%= Url.Action("config/events") %>#onRequestCreateNew">onRequestCreateNew</a> event.
            </td>
            <td>string</td>
            <td>"https://example.com/url-to-create-document/"</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/create.png") %>" alt="" />
            </td>
        </tr>
        <tr>
            <td id="lang" class="copy-link">lang</td>
            <td>
                Defines the editor interface language (if some other languages other than English are present).
                Is set using the two letter (<b>de</b>, <b>ru</b>, <b>it</b>, etc.) language codes.
                The default value is <b>"en"</b>.
            </td>
            <td>string</td>
            <td>"en"</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">Please note that to translate the editor interface into Portuguese (Portugal) or Chinese (Traditional, Taiwan)
                (these languages were added in version 7.2), you need to use the four letter language codes - <b>pt-PT</b> or <b>zh-TW</b>, respectively.
                The two letter <b>pt</b> language code sets Portuguese (Brazil) and the <b>zh</b> code specifies Chinese (People's Republic of China).</div>
            </td>
        </tr>
        <tr>
            <td id="location" class="copy-link">location</td>
            <td>
                Defines the default measurement units.
                Specify <b>us</b> or <b>ca</b> to set inches.
                The default value is <b>""</b>.
            </td>
            <td>string</td>
            <td>""</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">Please note that when <b>us</b> or <b>ca</b> values are set, the default measurement units are inches.</div>
            </td>
        </tr>
        <tr class="tablerow">
            <td id="mode" class="copy-link">mode</td>
            <td>
                Defines the editor opening mode.
                Can be either <b>view</b> to open the document for viewing, or <b>edit</b> to open the document in the editing mode allowing to apply changes to the document data.
                The default value is <b>"edit"</b>.
            </td>
            <td>string</td>
            <td>"edit"</td>
        </tr>
        <tr>
            <td id="recent" class="copy-link">recent</td>
            <td>Defines the presence or absence of the documents in the <b>Open Recent...</b> menu option where the following document parameters can be set:
                <ul>
                    <li>
                        <b>folder</b> - the folder where the document is stored (can be empty in case the document is stored in the root folder),
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "Example Files";
                    </li>
                    <li>
                        <b>title</b> - the document title that will be displayed in the <b>Open Recent...</b> menu option,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "exampledocument1.docx";
                    </li>
                    <li>
                        <b>url</b> - the absolute URL to the document where it is stored,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "https://example.com/exampledocument1.docx".
                    </li>
                </ul>
            </td>
            <td>array of object</td>
            <td>[
    {
        "folder": "Example Files",
        "title": "exampledocument1.docx",
        "url": "https://example.com/exampledocument1.docx"
    }
]</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/recent.png") %>" alt="" />
            </td>
        </tr>
        <tr class="tablerow">
            <td id="region" class="copy-link">region</td>
            <td>
                Defines the default display format for currency and date and time (in the <b>Spreadsheet Editor</b> only).
                Is set using the four letter (<b>en-US</b>, <b>fr-FR</b>, etc.) language codes.
                For the default value the <em>lang</em> parameter is taken, or, if no regional setting corresponding to the <em>lang</em> value is available, <b>en-US</b> is used.
            </td>
            <td>string</td>
            <td>"en-US"</td>
        </tr>
        <tr>
            <td id="templates" class="copy-link">templates</td>
            <td>Defines the presence or absence of the templates in the <b>Create New...</b> menu option where the following document parameters can be set:
                <ul>
                    <li>
                        <b>image</b> - the absolute URL to the image for template,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "https://example.com/exampletemplate1.png";
                    </li>
                    <li>
                        <b>title</b> - the template title that will be displayed in the <b>Create New...</b> menu option,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "exampletemplate1.docx";
                    </li>
                    <li>
                        <b>url</b> - the absolute URL to the document where it will be created and available after creation,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "https://example.com/url-to-create-template1".
                    </li>
                </ul>
            </td>
            <td>array of object</td>
            <td>[
    {
        "image": "https://example.com/exampletemplate1.png",
        "title": "exampletemplate1.docx",
        "url": "https://example.com/url-to-create-template1"
    }
]</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/templates.png") %>" alt="" />
            </td>
        </tr>
        <tr>
            <td id="user" class="copy-link">user</td>
            <td>Defines the user currently viewing or editing the document:
                <ul>
                    <li>
                        <b>firstname</b> - the first name of the user.
                        Deprecated since version 4.2, please use <em>name</em> instead,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "John";
                    </li>
                    <li>
                        <b>group</b> - the group the user belongs to,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "Group1";
                    </li>
                    <li>
                        <b>id</b> - the identification of the user.
                        The length is limited to 128 symbols.
                        <br />
                        This information is stored and used to distinguish co-authors, indicate the <a href="<%= Url.Action("callback") %>#users">author</a> of the last changes when saving and highlighting history (in the list of <a href="<%= Url.Action("callback") %>#changeshistory">changes</a>), and count users with access for a license based on the number of users.
                        <br />
                        We recommend using some unique anonymized hash.
                        Do not use sensitive data, like name or email for this field.
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "78e1e841";
                    </li>
                    <li>
                        <b>image</b> - the path to the user's avatar,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "https://example.com/url-to-user-avatar.png";
                    </li>
                    <li>
                        <b>lastname</b> - the last name of the user.
                        Deprecated since version 4.2, please use <em>name</em> instead,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "Smith";
                    </li>
                    <li>
                        <b>name</b> - the full name of the user.
                        The length is limited to 128 symbols.
                        Used since version 4.2,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>: "John Smith".
                    </li>
                </ul>
            </td>
            <td>object</td>
            <td>{
    "group": "Group1",
    "id": "78e1e841",
    "image": "https://example.com/url-to-user-avatar.png",
    "name": "John Smith"
}</td>
        </tr>
        <tr class="tablerow-note">
            <td colspan="4">
                <div class="note">Please note that the request to the user's avatar is sent without authorization because the avatar URL is inserted into the HTML of the editor frame.
                Moreover, the CORS problem may occur. In this case, use the avatar in the base64 format. For example, <em>"data:image/png,base64,*****"</em>.</div>
            </td>
        </tr>
        <tr class="tablerow-note">
            <td colspan="4">
                <div class="note">Please note that if you are subscribed to the <a href="<%= Url.Action("config/events") %>#onRequestUsers">onRequestUsers</a> event
                and send an avatar using the <a href="<%= Url.Action("methods") %>#setUsers">setUsers</a> method, the <em>user.image</em> field in the initialization config
                is not required. We especially don't recommend to specify this parameter if the avatar is sent in the base64 format and the initialization config is signed with JWT.
                In this case, the token will be too long.</div>
            </td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<span id="requiredDescr" class="required-descr"><span class="required">*</span><em> - required field</em></span>

<script>
    $('.select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 120;

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);
                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                    updateConfig();
                });
                window.addEventListener('click', function (e) {
                    if (e.target != selectList[0] && e.target != selectHead[0] && e.target != selectItem[0]) {
                        selectHead.removeClass('on');
                        selectList.slideUp(duration);
                    }
                });
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
</script>
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
                Customization = new Config.EditorConfigConfiguration.CustomizationConfig
                    {
                        Anonymous = new Config.EditorConfigConfiguration.CustomizationConfig.AnonymousConfig
                            {
                                Request = false
                            },
                        Feedback = new Config.EditorConfigConfiguration.CustomizationConfig.FeedbackConfig
                            {
                                Visible = true
                            },
                        IntegrationMode = "embed",
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
        updateConfig(this.id);
    });

    $("#editorConfig_coEditing").change(showHideConfigObject);
    $('#addButton_editorConfig_recent').click(addRecentItem);
    $("#editorConfig_recent").change(showHideConfigObject);
    $('#addButton_editorConfig_templates').click(addTemplatesItem);
    $("#editorConfig_templates").change(showHideConfigObject);
    $("#editorConfig_user").change(showHideConfigObject);

    function showHideConfigObject(e) {
        var hidden = document.getElementById(`holder_${e.target.id}`).hidden;
        document.getElementById(`holder_${e.target.id}`).hidden = !hidden;
        resizeCodeInput();
    }

    // Recent Items
    function addRecentItem() {
        var items = document.getElementsByClassName("editorConfig_recentItem");
        var i = 0;
        while (items[i] != undefined) {
            i++;
        }
        let div = document.createElement("div");
        div.innerHTML = `
        <div id="holder_editorConfig_recent_${i}" class="editorConfig_recentItem config_nested_group">
            <div class="line input_line">
                <label for="editorConfig_recent_folder_${i}">Folder</label>
                <input type="text" id="editorConfig_recent_folder_${i}" name="editorConfig_recent_folder_${i}" value="Example Folder">
            </div>
            <div class="line input_line">
                <label for="editorConfig_recent_title_${i}">Title</label>
                <input type="text" id="editorConfig_recent_title_${i}" name="editorConfig_recent_title_${i}" value="exampledocument${i+1}.docx">
            </div>
           <div class="line input_line">
                <label for="editorConfig_recent_url_${i}">Url</label>
                <input type="text" id="editorConfig_recent_url_${i}" name="editorConfig_recent_url_${i}" value="https://example.com/exampledocument${i+1}.docx">
            </div>
        </div>`;

        document.getElementById("holder_editorConfig_recent").appendChild(div);
        $("#controlFields").find("input,select").change(function () {
            updateConfig(this.id);
        });
        resizeCodeInput();
        updateConfig();
    }

    function getRecentSettings() {
        if (!getFieldValue("editorConfig_recent")) {
            return "";
        }
        var recentString = "";
        var recentElements = document.getElementsByClassName("editorConfig_recentItem");
        var i = 0;
        while (recentElements[i] != undefined) {
            var string = `
            {
                "folder": ${getFieldValue("editorConfig_recent_folder_" + i)},
                "title": ${getFieldValue("editorConfig_recent_title_" + i)},
                "url": ${getFieldValue("editorConfig_recent_url_" + i)}
            }`;
            recentString += recentString == "" ? string : "," + string;
            i++;
        }
        return recentString == "" ? "" : `,
        "recent": [${recentString}
        ]`;
    }

    // Templates Items
    function addTemplatesItem() {
        var items = document.getElementsByClassName("editorConfig_templatesItem");
        var i = 0;
        while (items[i] != undefined) {
            i++;
        }
        let div = document.createElement("div");
        div.innerHTML = `
        <div id="holder_editorConfig_templates_${i}" class="editorConfig_templatesItem config_nested_group">
            <div class="line input_line">
                <label for="editorConfig_templates_image_${i}">Image</label>
                <input type="text" id="editorConfig_templates_image_${i}" name="editorConfig_templates_image_${i}" value="https://example.com/exampletemplate${i+1}.png">
            </div>
            <div class="line input_line">
                <label for="editorConfig_templates_title_${i}">Title</label>
                <input type="text" id="editorConfig_templates_title_${i}" name="editorConfig_templates_title_${i}" value="exampledocument${i+1}.docx">
            </div>
           <div class="line input_line">
                <label for="editorConfig_templates_url_${i}">Url</label>
                <input type="text" id="editorConfig_templates_url_${i}" name="editorConfig_templates_url_${i}" value="https://example.com/url-to-create-template${i+1}">
            </div>
        </div>`;

        document.getElementById("holder_editorConfig_templates").appendChild(div);
        $("#controlFields").find("input,select").change(function () {
            updateConfig(this.id);
        });
        resizeCodeInput();
        updateConfig();
    }

    function getTemplatesSettings() {
        if (!getFieldValue("editorConfig_templates")) {
            return "";
        }
        var templatesString = "";
        var templatesElements = document.getElementsByClassName("editorConfig_templatesItem");
        var i = 0;
        while (templatesElements[i] != undefined) {
            var string = `
            {
                "image": ${getFieldValue("editorConfig_templates_image_" + i)},
                "title": ${getFieldValue("editorConfig_templates_title_" + i)},
                "url": ${getFieldValue("editorConfig_templates_url_" + i)}
            }`;
            templatesString += templatesString == "" ? string : "," + string;
            i++;
        }
        return templatesString == "" ? "" : `,
        "templates": [${templatesString}
        ]`;
    }

    function updateConfig(id) {
        var recent = "";
        var templates = "";
        if (getFieldValue("editorConfig_recent")) {
            recent = getRecentSettings();
            document.getElementById("addButton_editorConfig_recent").hidden = false;
        } else {
            document.getElementById("addButton_editorConfig_recent").hidden = true;
        }

        if (getFieldValue("editorConfig_templates")) {
            templates = getTemplatesSettings();
            document.getElementById("addButton_editorConfig_templates").hidden = false;
        } else {
            document.getElementById("addButton_editorConfig_templates").hidden = true;
        }
        
        var coEditing = !getFieldValue("editorConfig_coEditing") ? "" : `"coEditing": {
            "mode": ${getFieldValue("editorConfig_coEditing_mode")},
            "change": ${getFieldValue("editorConfig_coEditing_change")}
        },
        `;

        var user = !getFieldValue("editorConfig_user") ? "" : `,
        "user": {
            "group": ${getFieldValue("editorConfig_user_group")},
            "id": ${getFieldValue("editorConfig_user_id")},
            "image": ${getFieldValue("editorConfig_user_image")},
            "name": ${getFieldValue("editorConfig_user_name")}
        }`;

        var location = getFieldValue("editorConfig_location") == 0 ? `""` : getFieldValue("editorConfig_location");

        var editorConfig = `{
        "actionLink": ${getFieldValue("editorConfig_actionLink")},
        "callbackUrl": ${getFieldValue("editorConfig_callbackUrl")},
        ${coEditing}"createUrl": ${getFieldValue("editorConfig_createUrl")},
        "lang": ${getFieldValue("editorConfig_lang")},
        "location": ${location},
        "mode": ${getFieldValue("editorConfig_mode")}${recent}${templates}${user}
    }`;
        var config_string =
            `var docEditor = new DocsAPI.DocEditor("placeholder", {
    "editorConfig": ${editorConfig},
    ...
});
`;
        var fakeFields = ['editorConfig_actionLink', 'editorConfig_callbackUrl'];
        if (!fakeFields.includes(id)) {
            var editorConfig_object = JSON.parse(editorConfig);
            editorConfig_object.callbackUrl = config.editorConfig.callbackUrl;
            delete editorConfig_object["actionLink"];
            config.editorConfig = editorConfig_object;
            config.editorConfig.customization = {
                "integrationMode": "embed"
            };
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
            //window.docEditor = new DocsAPI.DocEditor("placeholder", config);
        }
        config_global = config;
        var pre = document.getElementById("configPre");
        pre.innerHTML = config_string;
        hljs.highlightBlock(pre);
    }

    function getFieldValue(id) {
        var element = document.getElementById(id);
        if (document.getElementById(id).parentElement.className == "select") {
            return `"${document.getElementById(id).parentElement.children[1].innerText}"`;
        } else if (element.type == "checkbox") {
            return element.checked;
        } else if (`${element.value}` == ``) {
            return `""`;
        } else if (isNaN(element.value)) {
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