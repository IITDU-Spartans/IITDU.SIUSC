using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CVAnalyzer.Services;
using FarmerBazzar.Models;
using NUnit.Framework;

namespace Tests
{
    [TestFixture]
    class RatingServiceTest
    {
        private RatingService _ratingService;
        private Rating _rating;
        private Rating _rating2;
        [SetUp]
        public void Init()
        {
            _ratingService = new RatingService();
            _rating = new Rating()
            {
                FarmerId = 1,
                ProductId = 1,
                Value = 4
            };
            _rating2 = new Rating()
            {
                FarmerId = 1,
                ProductId = 1,
                Value = 3
            };
        }

        [Test]
        public void Test1AddRating()
        {
            Assert.IsTrue(_ratingService.RateProduct(_rating));
            Assert.IsFalse(_ratingService.RateProduct(_rating2));
            _rating2.FarmerId = 2;
            Assert.IsTrue(_ratingService.RateProduct(_rating2));
        }

        [Test]
        public void Test2GetRating()
        {
            Assert.NotNull(_ratingService.GetAverageRating(_rating.ProductId));
            Assert.AreEqual(3.5, _ratingService.GetAverageRating(_rating.ProductId));
        }

        [Test]
        public void Test3DeleteRating()
        {
            Assert.IsTrue(_ratingService.DeleteRating(_rating.ProductId));
        }
    }
}
