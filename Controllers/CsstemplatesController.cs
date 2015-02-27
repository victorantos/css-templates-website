using CssTemplatesForFree.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CssTemplatesForFree.Controllers
{
    public class CsstemplatesController : ApiController
    {
        DBContext db = new DBContext();

         // GET api/csstemplates
        public object Get()
        {
            return Get(1);
        }

        // GET api/csstemplates
        public object Get(int? p)
        {
            if (!p.HasValue)
                p = 1;
            int pagesize = 9;
            var list = db.cssTemplates.Select(c => c).OrderBy(r => r.id).Skip((p.Value - 1) * pagesize).Take(pagesize);

            return new { list = list.ToList().Select(c => c.toCssTemplateDto()), total = db.cssTemplates.Count(), pagesize = pagesize};
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
