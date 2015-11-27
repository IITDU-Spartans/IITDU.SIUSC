using CVAnalyzer.Repositories;
using FarmerBazzar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.Services
{
    public class RatingService
    {
        private RatingRepository _ratingRepository;

        public RatingService()
        {
            _ratingRepository = new RatingRepository();
        }

        public bool RateProduct(Rating rating)
        {
            if (_ratingRepository.HasRated(rating.FarmerId, rating.FarmerId))
                return false;
            _ratingRepository.AddRating(rating);
            return true;
        }

        public double GetAverageRating(int productId)
        {
            return _ratingRepository.GetAverageRating(productId);
        }


    }
}