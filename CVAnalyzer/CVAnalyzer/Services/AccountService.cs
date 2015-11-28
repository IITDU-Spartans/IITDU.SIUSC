using CVAnalyzer.Authentication.service;
using CVAnalyzer.Repositories;
using FarmerBazzar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FarmerBazzar.Repositories;
using FarmerBazzar.Utility;

namespace CVAnalyzer.Services
{
    public class AccountService
    {
        private FarmerRepository _farmerRepository;
        private AuthService _authService;
        public AccountService()
        {
            _farmerRepository = new FarmerRepository();
            _authService = new AuthService(new AppContext());
        }

        public bool Signup(Farmer farmer)
        {
            if (_farmerRepository.GetFarmer(farmer.MobileNumber) != null)
            {
                return false;
            }
            farmer.Password = Encryption.GetHash(farmer.Password);
            _farmerRepository.AddFarmer(farmer);
            return true;
        }

        public String Signin(Farmer farmerSigninInfo)
        {
            var farmer = _farmerRepository.GetFarmer(farmerSigninInfo.MobileNumber);
            if (farmer.Equals(null))
                return null;
            if (!farmer.Password.Equals(Encryption.GetHash(farmerSigninInfo.Password)))
                return null;

            return _authService.CreateAuthToken(farmer.FarmerId);
        }

        public bool Signout(Farmer farmer)
        {
            _authService.DeleteToken(farmer.FarmerId);
            return true;
        }

        public bool UpdateAccount(Farmer farmer)
        {
            return _farmerRepository.UpdateFarmer(farmer);
        }

        public bool DeleteAccount(string mobileNumber)
        {
            return _farmerRepository.DeleteFarmer(mobileNumber);
        }

    }
}