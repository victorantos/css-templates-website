using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CssTemplatesForFree.Models
{
    public class CsstemplateDto
    {
        public int id { get; set; }
        public string name { get; set; }
        public string previewUrl { get; set; }
        public string imageFile { get; set; }

        public cssTemplate ToEntity()
        {
            return new cssTemplate
            {
                id = this.id,
                name = this.name,
                previewUrl = this.previewUrl,
                imageFile = this.imageFile
            };
        }
    }
}