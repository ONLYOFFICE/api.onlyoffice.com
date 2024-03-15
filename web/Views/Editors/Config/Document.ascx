<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("config/") %>"></a>
    <span class="hdr">Document</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">The document section allows to change all the parameters pertaining to the document (title, url, file type, etc.).</p>

<div class="header-gray">Example</div>
<p>
    The <b>example.com</b> is the name of the server where <b>document manager</b> and <b>document storage service</b> are installed.
    See the <a href="<%= Url.Action("howitworks") %>">How it works</a> section to find out more on Document Server service client-server interactions.
</p>

<div id="controlFields">
    <div id="viewedit" class="control-panel">
        <div class="line input_line" style="margin-top: 0;">
            <label for="document_file_type">File type</label>
            <select class="select" id="document_file_type" name="document_file_type">
                <option disabled>xlsx</option>
                <option value="xlsx" selected>xlsx</option>
                <option value="csv">csv</option>
                <option value="xls">xls</option>
            </select>
        </div>
        <div class="line input_line">
            <label for="document_key">Key</label>
            <input type="text" id="document_key" name="document_key" value="Khirz6zTPdfd7">
        </div>
        <div class="line">
            <label class="dataItemSpan">
                <input type="checkbox" id="document_reference_data" name="document_reference_data" hidden="hidden" checked>
                <span></span>
                <label for="document_reference_data">Reference data</label>
            </label>
        </div>
        <div class="config_object_holder" id="holder_document_reference_data">
            <div class="config_nested_group">
                <div class="line input_line">
                    <label for="document_file_key">File key</label>
                    <input type="text" id="document_file_key" name="document_file_key" value="BCFA2CED">
                </div>
                <div class="line input_line">
                     <label for="document_instance_id">Instance Id</label>
                    <input type="text" id="document_instance_id" name="document_instance_id" value="https://example.com">
                </div>
            </div>
        </div>
        <div class="line input_line">
            <label for="document_title">Title</label>
            <input type="text" id="document_title" name="document_title" value="Example Title">
        </div>
        <div class="line input_line" style="margin-bottom: 0;">
            <label for="document_url">URL</label>
            <input type="text" id="document_url" name="document_url" value="https://example.com/url-to-example-document.xlsx">
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
            <td id="fileType" class="copy-link">fileType<span class="required">*</span></td>
            <td>
                Defines the type of the file for the source viewed or edited document.
                Must be lowercase.
                The following file types are available: <em>.csv, .djvu, .doc, .docm, .docx, .docxf, .dot, .dotm, .dotx, .epub, .fb2, .fodp, .fods, .fodt, .htm, .html, .mht, .odp, .ods, .odt, .oform, .otp, .ots, .ott, .oxps, .pdf, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .rtf, .txt, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml, .xps</em>.
            </td>
            <td>string</td>
            <td>"docx"</td>
        </tr>
        <tr>
            <td id="key" class="copy-link">key<span class="required">*</span></td>
            <td>
                Defines the unique document identifier used by the service to recognize the document.
                In case the known key is sent, the document will be taken from the cache.
                Every time the document is edited and saved, the key must be generated anew.
                The document url can be used as the <b>key</b> but without the special characters and the length is limited to 128 symbols.
            </td>
            <td>string</td>
            <td>"Khirz6zTPdfd7"</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">The key characters can be used: <b>0-9</b>, <b>a-z</b>, <b>A-Z</b>, <b>-._=</b>.
                The maximal key length is <b>128</b> characters.</div>
            </td>
        </tr>
        <tr class="tablerow">
            <td id="referenceData" class="copy-link">referenceData</td>
            <td>
                Defines an object that is generated by the integrator to uniquely identify a file in its system:
                <ul>
                    <li>
                        <b>fileKey</b> - the unique document identifier used by the service to get a link to the file.
                        It must not be changed when the document is edited and saved (i.e. it is not equal to the <a href="#key">document.key</a> parameter),
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>:  "BCFA2CED";
                    </li>
                    <li>
                        <b>instanceId</b> - the unique system identifier. If the data was copied from a file on one system, and inserted into a file on another,
                        then pasting by link will not be available and there will be no corresponding button in the context menu,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>:  "https://example.com";
                    </li>
                    <li>
                        <b>key</b> - defines the unique document identifier used by the service to take the data from the co-editing session.
                        In case the known key is sent, the document will be taken from the cache.
                        Every time the document is edited and saved, the key must be generated anew.
                        The document url can be used as the <b>key</b> but without the special characters and the length is limited to 128 symbols,
                        <br />
                        <b>type</b>: string,
                        <br />
                        <b>example</b>:  "Khirz6zTPdfd7".
                    </li>
                </ul>
            <td>object</td>
            <td>{
    "fileKey": "BCFA2CED",
    "instanceId": "https://example.com",
    "key": "Khirz6zTPdfd7"
}</td>
        </tr>
        <tr class="tablerow">
            <td id="title" class="copy-link">title<span class="required">*</span></td>
            <td>
                Defines the desired file name for the viewed or edited document which will also be used as file name when the document is downloaded.
                The length is limited to 128 symbols.
            </td>
            <td>string</td>
            <td>"Example Document Title.docx"</td>
        </tr>
        <tr class="tablerow">
            <td id="url" class="copy-link">url<span class="required">*</span></td>
            <td>
                Defines the absolute URL where the source viewed or edited document is stored.
                Be sure to add a <a href="<%= Url.Action("security") %>">token</a> when using local links.
                Otherwise, an error will occur.
            </td>
            <td>string</td>
            <td>"https://example.com/url-to-example-document.docx"</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<span class="required-descr"><span class="required">*</span><em> - required field</em></span>


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
    var config_csv = <%= Config.Serialize(
    new Config {
        Document = new Config.DocumentConfig
            {
                FileType = "csv",
                Key = "apiwh" + Guid.NewGuid(),
                Permissions = new Config.DocumentConfig.PermissionsConfig(),
                Title = "Example Title",
                Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "csv",
                Info = new Config.DocumentConfig.InfoConfig()
            },
        DocumentType = "cell",
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

    var config_xlsx = <%= Config.Serialize(
    new Config {
        Document = new Config.DocumentConfig
            {
                FileType = "xlsx",
                Key = "apiwh" + Guid.NewGuid(),
                Permissions = new Config.DocumentConfig.PermissionsConfig(),
                Title = "Example Title",
                Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "xlsx",
                Info = new Config.DocumentConfig.InfoConfig()
            },
        DocumentType = "cell",
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
    var config = config_xlsx;
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

    $("#document_reference_data").change(showHideConfigObject);

    function showHideConfigObject(e) {
        var hidden = document.getElementById(`holder_${e.target.id}`).hidden;
        document.getElementById(`holder_${e.target.id}`).hidden = !hidden;
        resizeCodeInput();
    }
    function updateConfig(id) {
        var referenceData = `
        "referenceData": {
            "fileKey": ${getFieldValue("document_file_key")},
            "instanceId": ${getFieldValue("document_instance_id")},
            "key": ${getFieldValue("document_key")}
        },`;
        if (!document.getElementById('document_reference_data').checked) {
            referenceData = "";
        }
        var document_string = `{
        "fileType": ${getFieldValue("document_file_type")},
        "key": ${getFieldValue("document_key")},${referenceData}
        "title": ${getFieldValue("document_title") },
        "url": ${getFieldValue("document_url")}
    }`;
        var config_string =
            `var docEditor = new DocsAPI.DocEditor("placeholder", {
    "document": ${document_string},
    ...
});
`;
        var fakeFields = ['document_key', 'document_reference_data', 'document_file_key', 'document_instance_id', 'document_url'];
        if (!fakeFields.includes(id)) {
            var document_object = JSON.parse(document_string);
            if (document_object.fileType == 'csv') {
                config = config_csv;
            } else {
                config = config_xlsx;
            }
            config.document.title = document_object.title;
            if (window.docEditor) {
                window.docEditor.destroyEditor();
            }
            window.docEditor = new DocsAPI.DocEditor("placeholder", config);
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