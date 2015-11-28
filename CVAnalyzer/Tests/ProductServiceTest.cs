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
    class ProductServiceTest
    {
        private readonly ProductService _productService = new ProductService();
        private Product _product;
        private int _id;
        [SetUp]
        public void Init()
        {
            _product = new Product()
            {
                Name = "ধান",
                Category = "শস্য",
                Subcategory = "দানাদার",
                FarmerId = 1,
                ExpiryDate = "11/12/2016",
                PhotoUrl = "",
                District = "বগুড়া",
                PriceRangeFrom = 100,
                PriceRangeTo = 110
            };
        }
        [Test]
        public void Test1AddProduct()
        {
            Assert.IsInstanceOf<int>(_id = _productService.AddProduct(_product));
        }
        [Test]
        public void Test2GetProduct()
        {
            var product = _productService.GetProductByProductId(_id);
            Assert.AreEqual(_product.Name, product.Name);
            Assert.AreEqual(_product.FarmerId, product.FarmerId);
            Assert.AreEqual(_product.Subcategory, product.Subcategory);
            Assert.AreEqual(_product.Category, product.Category);
            Assert.AreEqual(_product.PriceRangeFrom, product.PriceRangeFrom);
            Assert.AreEqual(_product.PriceRangeTo, product.PriceRangeTo);
            Assert.AreEqual(_product.PhotoUrl, product.PhotoUrl);
        }
        [Test]
        public void Test3GetAllProduct()
        {
            var products = _productService.GetAllProduct(0, 10);
            Assert.AreEqual(1, products.Count);
            products = _productService.GetAllProduct(1, 10);
            Assert.AreEqual(0, products.Count);
        }
        [Test]
        public void Test4DeleteProduct()
        {
            Assert.IsTrue(_productService.DeleteProduct(_id));
        }
    }
}
