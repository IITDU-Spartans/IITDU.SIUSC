using CVAnalyzer.Repositories;
using FarmerBazzar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.Services
{
    public class ProductService
    {
        private ProductRepository _productRepository;

        public  ProductService()
        {
            _productRepository = new ProductRepository();
        }

        public int AddProduct(Product product)
        {
           return _productRepository.AddProduct(product);
        }
        public bool DeleteProduct(Product product)
        {
            return _productRepository.DeleteProduct(product);
        }

        public List<Product> GetAllProduct(int currentPage, int size)
        {
           return _productRepository.GetAllProduct().Skip(currentPage*size).Take(size).ToList();
        }

         public Product GetProductByProductId(int productId)
         {
             return _productRepository.GetProductByProductId(productId);
         }

    }
}