using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FarmerBazzar.Models
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int ProductId { get; set; }
        public int FarmerId { get; set; }
        public int Value { get; set; }
    }
}