using System.Data.Entity;
using FarmerBazzar.Models;
using FarmerBazzar.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.Repositories
{
    public class RatingRepository
    {
        private AppContext _appContext;
        private ProductRepository _productRepository;

        public RatingRepository()
        {
            _appContext = new AppContext();
            _productRepository = new ProductRepository();
        }

        public int AddRating(Rating rating)
        {
            _appContext.Ratings.Add(rating);
            _appContext.SaveChanges();
            return rating.RatingId;
        }

        public bool UpdateRating(Rating rating)
        {
            _appContext.Entry(rating).State=EntityState.Modified;
            return _appContext.SaveChanges() > 0;
        }

        public bool DeleteRating(Rating rating)
        {
            _appContext.Ratings.Remove(rating);
            return _appContext.SaveChanges() > 0;
        }

        public bool HasRated(int farmerId, int productId)
        {
           return _appContext.Ratings.Count(r => r.FarmerId.Equals(farmerId) && r.ProductId.Equals(productId)) > 0;
        }

        public double GetAverageRating(int productId)
        {
            if (_appContext.Ratings.Count(r => r.ProductId.Equals(productId)) == 0)
                return 0.0;

            return _appContext.Ratings.Where(r => r.ProductId.Equals(productId)).Average(r => r.Value);
        }

    }
}