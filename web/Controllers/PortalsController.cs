/*
 *
 * (c) Copyright Ascensio System SIA 2024
 *
 * This program is freeware. You can redistribute it and/or modify it under the terms of the GNU 
 * General Public License (GPL) version 3 as published by the Free Software Foundation (https://www.gnu.org/copyleft/gpl.html). 
 * In accordance with Section 7(a) of the GNU GPL its Section 15 shall be amended to the effect that 
 * Ascensio System SIA expressly excludes the warranty of non-infringement of any third-party rights.
 *
 * THIS PROGRAM IS DISTRIBUTED WITHOUT ANY WARRANTY; WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE. For more details, see GNU GPL at https://www.gnu.org/copyleft/gpl.html
 *
 * You can contact Ascensio System SIA by email at sales@onlyoffice.com
 *
 * The interactive user interfaces in modified source and object code versions of ONLYOFFICE must display 
 * Appropriate Legal Notices, as required under Section 5 of the GNU GPL version 3.
 *
 * Pursuant to Section 7 § 3(b) of the GNU GPL you must retain the original ONLYOFFICE logo which contains 
 * relevant author attributions when distributing the software. If the display of the logo in its graphic 
 * form is not reasonably feasible for technical reasons, you must include the words "Powered by ONLYOFFICE" 
 * in every copy of the program you distribute. 
 * Pursuant to Section 7 § 3(e) we decline to grant you any rights under trademark law for use of our trademarks.
 *
*/


using System;
using System.Linq;
using System.Web.Mvc;
using ASC.Api.Web.Help.DocumentGenerator;
using ASC.Api.Web.Help.Helpers;
using ASC.Api.Web.Help.Models;

namespace ASC.Api.Web.Help.Controllers
{
    [Redirect]
    public class PortalsController : AsyncController
    {

        private readonly BreadCrumbsBuilder _breadCrumbsBuilder;

        public PortalsController()
        {
            _breadCrumbsBuilder = new BreadCrumbsBuilder(this);
        }

        private readonly string[] _actionMap = new[]
            {
                "WorkspaceApi",
                "WorkspaceApi/Auth",
                "WorkspaceApi/Faq",
                "WorkspaceApi/Filters",
                "WorkspaceApi/Batch",
                "ApiSystem",
                "ApiSystem/Authentication",
                "ApiSystem/Faq",
                "ApiSystem/Filters",
                "ApiSystem/Batch",
                "ApiSystem/PortalSection",
                "ApiSystem/PortalSection/PortalGet",
                "ApiSystem/PortalSection/PortalRegister",
                "ApiSystem/PortalSection/PortalRemove",
                "ApiSystem/PortalSection/PortalStatus",
                "ApiSystem/PortalSection/ValidatePortalName",
                "ApiSystem/TariffSection",
                "ApiSystem/TariffSection/TariffGet",
                "ApiSystem/TariffSection/TariffSet",
            };

        public ActionResult ApiSystem(string catchall)
        {
            ViewData["viewName"] = "apisystem";

            if (!_actionMap.Contains("apisystem/" + catchall, StringComparer.OrdinalIgnoreCase))
            {
                catchall = null;
            }
            return View("ApiSystem", (object)catchall);
        }

        public ActionResult WorkspaceApi(string catchall)
        {
            ViewData["viewName"] = "workspaceapi";

            if (!_actionMap.Contains("workspaceapi/" + catchall, StringComparer.OrdinalIgnoreCase))
            {
                catchall = null;
            }
            return View("WorkspaceApi", (object)catchall);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Navigation()
        {
            return View(CommunityServerDocumentation.GetAll());
        }

        [ValidateInput(false)]
        public ActionResult Search(string query)
        {
            return View(GCustomSearch.Search(query, "portals"));
        }

        public ActionResult Section(string section, string category)
        {
            ViewData["viewName"] = "workspaceapi";

            if (string.IsNullOrEmpty(section))
            {
                var firstPoint = CommunityServerDocumentation.GetAll().OrderBy(x => x.Name).ToList().FirstOrDefault();

                if (firstPoint == null) return View("sectionnotfound");

                return Redirect(Url.Action("section", new { section = firstPoint.Name }));
            }

            var docsSection = CommunityServerDocumentation.GetDocs(section);
            if (docsSection == null || !docsSection.Methods.Any())
                return View("sectionnotfound");

            const string controller = "portals";
            _breadCrumbsBuilder.Add(docsSection.Name, docsSection, null, controller);

            if (string.IsNullOrEmpty(category))
            {
                var sectionMethods = docsSection.Methods.Where(x => string.IsNullOrEmpty(x.Category)).ToList();
                if (sectionMethods.Any())
                {
                    return View("section", new SectionViewModel(docsSection, null, sectionMethods));
                }

                category = docsSection.Methods.OrderBy(x => x.Category).First(x => !string.IsNullOrEmpty(x.Category)).Category;
                return Redirect(Url.DocUrl(section, category, null, null, "portals"));
            }

            var categoryMethods = docsSection.Methods.Where(x => x.Category.Equals(category, StringComparison.OrdinalIgnoreCase)).ToList();
            if (categoryMethods.Any())
            {
                _breadCrumbsBuilder.Add(category, docsSection.Name, category, null, null, controller);
                return View("section", new SectionViewModel(docsSection, category, categoryMethods));
            }

            return View("sectionnotfound");
        }

        public ActionResult Method(string section, string type, string url)
        {
            ViewData["viewName"] = "workspaceapi";

            if (string.IsNullOrEmpty(section))
                return View("sectionnotfound");

            var docsSection = CommunityServerDocumentation.GetDocs(section);
            if (docsSection == null)
                return View("sectionnotfound");

            const string controller = "portals";
            _breadCrumbsBuilder.Add(docsSection.Name, docsSection, null, controller);

            if (!string.IsNullOrEmpty(type) && !string.IsNullOrEmpty(url))
            {
                var method = docsSection.Methods.SingleOrDefault(x => x.Path.Equals(url, StringComparison.OrdinalIgnoreCase) && x.HttpMethod.Equals(type, StringComparison.OrdinalIgnoreCase));
                if (method != null)
                {
                    if (!string.IsNullOrEmpty(method.Category))
                        _breadCrumbsBuilder.Add(method.Category, docsSection.Name, method.Category, null, null, controller);

                    var text = !string.IsNullOrEmpty(method.ShortName)
                                   ? method.ShortName
                                   : (!string.IsNullOrEmpty(method.Summary)
                                          ? method.Summary
                                          : method.FunctionName);

                    _breadCrumbsBuilder.Add(text, docsSection, method, controller);

                    return View("method", new MethodViewModel(docsSection, method));
                }
            }

            return View("methodnotfound");
        }
    }
}
