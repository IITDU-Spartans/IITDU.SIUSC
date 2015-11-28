using CVAnalyzer.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CVAnalyzer.ViewModels;
using FarmerBazzar.Models;

namespace CVAnalyzer.Controllers
{
    public class RatingController : ApiController
    {
        private RatingService _ratingService;

        public RatingController()
        {
            _ratingService = new RatingService();
        }

        [Route("rating/add")]
        [HttpPost]
        public IHttpActionResult RateProduct(RatingViewModel ratingViewModel)
        {
            var rating = new Rating
                             {
                                 FarmerId = ratingViewModel.FarmerId,
                                 ProductId = ratingViewModel.ProductId,
                                 Value = ratingViewModel.Value
                             };
            if(_ratingService.RateProduct(rating))
            {
                return Ok(ratingViewModel);
            }
            return BadRequest("Can't Rate");
        }


    }
}