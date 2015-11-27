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

        public ProductController()
        {
            _productService = new ProductService();
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
            var productAddResViewModel = new ProductAddResViewModel { ProductId = productId };
            return Ok(productAddResViewModel);
        }

        [Route("product/get")]
        [HttpPost]
        public IHttpActionResult GetProduct(ProductIdReqViewModel productIdReqViewModel)
        {
            return Ok(_productService.GetProductByProductId(productIdReqViewModel.ProductId));
        }

        [Route("product/getall")]
        [HttpPost]
        public IHttpActionResult GetAllProduct(ProductGetAllReqModel productGetAllReqModel)
        {
            return Ok(_productService.GetAllProduct(productGetAllReqModel.Page, productGetAllReqModel.Size));
        }

    }
}