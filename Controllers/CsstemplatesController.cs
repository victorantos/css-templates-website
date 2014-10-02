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
        public IEnumerable<object> Get()
        {
            return (from c in db.cssTemplates select  c)
                .ToList().Select(c =>  c.toCssTemplateDto());
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
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
