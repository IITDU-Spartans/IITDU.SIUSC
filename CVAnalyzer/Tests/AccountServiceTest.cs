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
    class AccountServiceTest
    {
        private Farmer _farmer;
        private AccountService _accountService = new AccountService();
        [SetUp]
        public void Init()
        {
            _farmer = new Farmer()
            {
                Address = "ঢাকা",
                FullName = "রাশেদ",
                MobileNumber = "০১৬৭২৪১৩১৪৬",
                Password = "১২৩৪৫৬",
                PhotoUrl = "Url"
            };
        }
        [Test]
        public void Test1SignUp()
        {
            Assert.IsTrue(_accountService.Signup(_farmer));
        }
        [Test]
        public void Test2SignIn()
        {
            Assert.NotNull(_accountService.Signin(_farmer));
        }
        [Test]
        public void Test3SigOut()
        {
            Assert.IsTrue(_accountService.Signout(_farmer));
        }
        [Test]
        public void Test4UpdateAccount()
        {
            _farmer.PhotoUrl = "New Url";
            Assert.IsTrue(_accountService.UpdateAccount(_farmer));
        }
        [Test]
        public void Test5DeleteAccount()
        {
            _accountService.DeleteAccount(_farmer.MobileNumber);
        }
    }
}
