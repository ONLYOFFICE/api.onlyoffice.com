<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">Config</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">The config base section allows to change the platform type used, document display size (width and height) and type of the document opened.</p>

<div class="header-gray">Example</div>
<div>
    <div id="controlFields">
        <div id="info" class="control-panel">
            <div class="line input_line" style="margin-top: 0px">
                <label for="config_documentType">Document Type</label>
                <select class="select" id="config_documentType" name="config_documentType">
                    <option disabled>word</option>
                    <option value="word" selected>word</option>
                    <option value="cell">cell</option>
                    <option value="slide">slide</option>
                    <option value="pdf">pdf</option>
                </select>
            </div>
            <div class="line input_line">
                <label for="config_type">Type</label>
                <select class="select" id="config_type" name="config_type">
                    <option disabled>desktop</option>
                    <option value="desktop" selected>desktop</option>
                    <option value="mobile">mobile </option>
                </select>
            </div>
            <div class="line input_line">
                <label for="config_height">Height</label>
                <input type="text" id="config_height" name="config_height" value="550px">
            </div>
            <div class="line input_line" style="margin-bottom: 0;">
                <label for="config_width">Width</label>
                <input type="text" id="config_width" name="config_width" value="100%">
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
    <div style="min-width: 832px; min-height: 550px;" id="placeholder"></div>
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
        <tr>
            <td id="documentType" class="copy-link">documentType</td>
            <td>Defines the document type to be opened:
                <ul>
                    <li><b>word</b> - text document (<em>.doc, .docm, .docx, .docxf, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .htm, .html, .mht, .mhtml, .odt, .oform, .ott, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml</em>),</li>
                    <li><b>cell</b> - spreadsheet (<em>.csv, .et, .ett, .fods, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml</em>),</li>
                    <li><b>slide</b> - presentation (<em>.dps, .dpt, .fodp, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi</em>),</li>
                    <li><b>pdf</b> - portable document format (<em>djvu, oxps, pdf, xps</em>).</li>
                </ul>
            </td>
            <td>string</td>
            <td>"cell"</td>
        </tr>
        <tr class="tablerow tablerow-note">
            <td colspan="4">
                <div class="note">
                    <b>text</b>, <b>spreadsheet</b> and <b>presentation</b> values are deprecated since version 6.1.
                    Please use new values instead.
                </div>
            </td>
        </tr>
        <tr class="tablerow">
            <td id="height" class="copy-link">height</td>
            <td>Defines the document height (<b>100%</b> by default) in the browser window.</td>
            <td>string</td>
            <td>"100%"</td>
        </tr>
        <tr class="tablerow">
            <td id="token" class="copy-link">token</td>
            <td>Defines the encrypted signature added to the <b>Document Server</b> config in the form of a <a href="<%= Url.Action("signature/browser") %>#config">token</a>.</td>
            <td>string</td>
            <td>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"</td>
        </tr>
        <tr class="tablerow">
            <td id="type" class="copy-link">type</td>
            <td>
                Defines the platform type used to access the document.
                Can be:
                <em>optimized to access the document from a desktop or laptop computer</em> - <b>desktop</b>,
                <em>optimized to access the document from a tablet or a smartphone</em> - <b>mobile</b>,
                <em>specifically formed to be easily embedded into a web page</em> - <b>embedded</b>.
                The default value is <b>"desktop"</b>.
            </td>
            <td>string</td>
            <td>"desktop"</td>
        </tr>
        <tr class="tablerow">
            <td id="width" class="copy-link">width</td>
            <td>Defines the document width (<b>100%</b> by default) in the browser window.</td>
            <td>string</td>
            <td>"100%"</td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>


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
    var config_word = <%= Config.Serialize(
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

    var config_cell = <%= Config.Serialize(
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

    var config_slide = <%= Config.Serialize(
        new Config {
            Document = new Config.DocumentConfig
                {
                    FileType = "pptx",
                    Key = "apiwh" + Guid.NewGuid(),
                    Permissions = new Config.DocumentConfig.PermissionsConfig(),
                    Title = "Example Title",
                    Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "pptx",
                    Info = new Config.DocumentConfig.InfoConfig()
                },
            DocumentType = "slide",
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

    var config_pdf = <%= Config.Serialize(
    new Config {
        Document = new Config.DocumentConfig
            {
                FileType = "pdf",
                Key = "apiwh" + Guid.NewGuid(),
                Permissions = new Config.DocumentConfig.PermissionsConfig(),
                Title = "Example Title",
                Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "pdf",
                Info = new Config.DocumentConfig.InfoConfig()
            },
        DocumentType = "pdf",
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
        updateConfig();
    });

    function showHideConfigObject(e) {
        var hidden = document.getElementById(`holder_${e.target.id}`).hidden;
        document.getElementById(`holder_${e.target.id}`).hidden = !hidden;
        resizeCodeInput();
    }

    function updateConfig() {

        var config_str = `{
            "documentType": ${getFieldValue("config_documentType")},
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
            "type": ${getFieldValue("config_type")},
            "height": ${getFieldValue("config_height")},
            "width": ${getFieldValue("config_width")}     
        }`;
        config_string =
            `var docEditor = new DocsAPI.DocEditor("placeholder", {
    ${config_str}
    ...
});
`;
        var config_object = JSON.parse(config_str);
        var config = config_word;
        if (config_object.documentType == "cell") {
            config = config_cell;
        } else if (config_object.documentType == "slide") {
            config = config_slide;
        } else if (config_object.documentType == "pdf") {
            config = config_pdf;
        }

        config.documentType = config_object.documentType;
        config.type = config_object.type;
        config.height = config_object.height;
        config.width = config_object.width;
        if (window.docEditor) {
            window.docEditor.destroyEditor();
        }
        window.docEditor = new DocsAPI.DocEditor("placeholder", config);
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