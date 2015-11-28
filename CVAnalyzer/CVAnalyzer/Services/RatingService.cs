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
        private ProductRepository _productRepository;

        public RatingService()
        {
            _ratingRepository = new RatingRepository();
            _productRepository = new ProductRepository();
        }

        public bool RateProduct(Rating rating)
        {
            if (_ratingRepository.HasRated(rating.FarmerId, rating.ProductId))
                return false;
            if (_productRepository.GetProductByProductId(rating.ProductId).FarmerId.Equals(rating.FarmerId))
                return false;
            _ratingRepository.AddRating(rating);
            return true;
        }

        public double GetAverageRating(int productId)
        {
            return _ratingRepository.GetAverageRating(productId);
        }


        public bool DeleteRating(int productId)
        {
            return _ratingRepository.DeleteRating(productId);
        }
    }
}