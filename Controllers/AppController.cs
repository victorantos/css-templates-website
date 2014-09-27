using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace csstemplatesforfree.com.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Register()
        {
            return PartialView();
        }
        public ActionResult SignIn()
        {
            return PartialView();
        }
        public ActionResult Home()
        {
            return PartialView();
        }
        public ActionResult CssTemplates()
        {
            return PartialView();
        }
        public ActionResult Ads()
        {
            return PartialView();
        }
        public ActionResult Contact()
        {
            return PartialView();
        }
        public ActionResult About()
        {
            return PartialView();
        }
        [Authorize]
        public ActionResult TodoManager()
        {
            return PartialView();
        }
    }
}