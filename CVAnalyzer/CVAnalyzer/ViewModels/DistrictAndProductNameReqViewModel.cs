using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.ViewModels
{
    public class DistrictAndProductNameReqViewModel
    {
        public string DistrictName { get; set; }
        public string ProductName { get; set; }
        public string CategoryName { get; set; }
        public int Page { get; set; }
        public int Size { get; set; }
    }
}