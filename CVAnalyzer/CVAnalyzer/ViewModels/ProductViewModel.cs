using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.ViewModels
{
    public class ProductViewModel
    {
        public int FarmerId { get; set; }
        public string Name { get; set; }
        public string District { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public double PriceRangeFrom { get; set; }
        public double PriceRangeTo { get; set; }
        public string PhotoUrl { get; set; }
        public string ExpiryDate { get; set; }
        public double AverageRating { get; set; }
    }
}