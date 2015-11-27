using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FarmerBazzar.Models
{
    public class Farmer
    {
        public int FarmerId { get; set; }
        public string MobileNumber { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string PhotoUrl { get; set; }
    }
}