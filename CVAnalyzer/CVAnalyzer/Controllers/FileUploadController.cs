using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace CVAnalyzer.Controllers
{
    public class FileUploadController : ApiController
    {
        private String _basePath = System.Web.Hosting.HostingEnvironment.MapPath("~/upload//");//@"I:\upload\";
        
        [Route("file/upload")]
        public IHttpActionResult UploadFile()
        {
            var httpPostedFile = HttpContext.Current.Request.Files["file"];
            var fileName = httpPostedFile.FileName;
            httpPostedFile.SaveAs(_basePath + fileName);

            return Ok("File Uploaded");

        }
    }
}