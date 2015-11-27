using System.Data.Entity;
using FarmerBazzar.Models;
using FarmerBazzar.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.Repositories
{
    public class ProductRepository
    {
        private AppContext _appContext;

        public ProductRepository()
        {
            _appContext = new AppContext();
        }

        public int AddProduct(Product product)
        {
            _appContext.Products.Add(product);
            _appContext.SaveChanges();
            return product.ProductId;
        }

        public bool UpdateProduct(Product product)
        {
            _appContext.Entry(product).State = EntityState.Modified;
            return _appContext.SaveChanges() > 0;
        }

        public bool DeleteProduct(Product product)
        {
            _appContext.Products.Remove(product);
            return _appContext.SaveChanges() > 0;
        }

        public List<Product> GetAllProduct()
        {
            return _appContext.Products.ToList();
        }


    }
}