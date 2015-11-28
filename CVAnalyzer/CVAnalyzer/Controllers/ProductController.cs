using CVAnalyzer.Services;
using CVAnalyzer.ViewModels;
using FarmerBazzar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CVAnalyzer.Controllers
{
    public class ProductController : ApiController
    {
        private ProductService _productService;
        private RatingService _ratingService;

        public ProductController()
        {
            _productService = new ProductService();
            _ratingService = new RatingService();
        }

        [Route("product/add")]
        [HttpPost]
        public IHttpActionResult AddProduct(ProductViewModel productViewModel)
        {
            var product = new Product
                              {
                                  Category = productViewModel.Category,
                                  District = productViewModel.District,
                                  ExpiryDate = productViewModel.ExpiryDate,
                                  FarmerId = productViewModel.FarmerId,
                                  Name = productViewModel.Name,
                                  PhotoUrl = productViewModel.PhotoUrl,
                                  PriceRangeFrom = productViewModel.PriceRangeFrom,
                                  PriceRangeTo = productViewModel.PriceRangeTo,
                                  Subcategory = productViewModel.Subcategory
                              };
            var productId = _productService.AddProduct(product);
           // var productAddResViewModel = new ProductAddResViewModel { ProductId = productId };*/
            return Ok(GetProductResViewModel(product));
        }

        [Route("product/get")]
        [HttpPost]
        public IHttpActionResult GetProduct(ProductIdReqViewModel productIdReqViewModel)
        {

            var product = _productService.GetProductByProductId(productIdReqViewModel.ProductId);
            var productResViewModel = GetProductResViewModel(product);
            return Ok(productResViewModel);
        }


        [Route("product/getall")]
        [HttpPost]
        public IHttpActionResult GetAllProduct(ProductGetAllReqModel productGetAllReqModel)
        {
            var productResViewModels = new List<ProductResViewModel>();
            var products = _productService.GetAllProduct(productGetAllReqModel.Page, productGetAllReqModel.Size);

            foreach (var product in products)
            {
                var productResViewModel = GetProductResViewModel(product);/*new ProductResViewModel
                {
                    AverageRating = _ratingService.GetAverageRating(product.ProductId),
                    Category = product.Category,
                    District = product.District,
                    ExpiryDate = product.ExpiryDate,
                    FarmerId = product.FarmerId,
                    Name = product.Name,
                    PhotoUrl = product.PhotoUrl,
                    PriceRangeFrom = product.PriceRangeFrom,
                    PriceRangeTo = product.PriceRangeTo,
                    ProductId = product.ProductId,
                    Subcategory = product.Subcategory
                };*/
                productResViewModels.Add(productResViewModel);
            }
            return Ok(productResViewModels);
        }


        [Route("product/getAllByDistrictAndProductName")]
        [HttpPost]
        public IHttpActionResult GetAllProductsByDistrictAndProductName(DistrictAndProductNameReqViewModel districtAndProductNameViewModel)
        {
           var products =_productService.GetProductsByDistrictAndProductName(districtAndProductNameViewModel.DistrictName,
                                                                districtAndProductNameViewModel.ProductName,
                                                                districtAndProductNameViewModel.Page,
                                                                districtAndProductNameViewModel.Size);

            var productResViewModels = new List<ProductResViewModel>();
            foreach (var product in products)
            {
                productResViewModels.Add(GetProductResViewModel(product));
            }

            return Ok(productResViewModels);
        }


        private ProductResViewModel GetProductResViewModel(Product product)
        {
            var productResViewModel = new ProductResViewModel
            {
                AverageRating = _ratingService.GetAverageRating(product.ProductId),
                Category = product.Category,
                District = product.District,
                ExpiryDate = product.ExpiryDate,
                FarmerId = product.FarmerId,
                Name = product.Name,
                PhotoUrl = product.PhotoUrl,
                PriceRangeFrom = product.PriceRangeFrom,
                PriceRangeTo = product.PriceRangeTo,
                ProductId = product.ProductId,
                Subcategory = product.Subcategory
            };
            return productResViewModel;
        }

    }
}