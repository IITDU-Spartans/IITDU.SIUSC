using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FarmerBazzar.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public int FarmerId { get; set; }
        public string Name { get; set; }
        public string District { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public double PriceRangeFrom { get; set; }
        public double PriceRangeTo { get; set; }
        public string PhotoUrl { get; set; }
        public string ExpiryDate { get; set; }
    }
}