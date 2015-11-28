using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.ViewModels
{
    public class RatingViewModel
    {
        public int Value { get; set; }
        public int FarmerId { get; set; }
        public int ProductId { get; set; }
    }
}