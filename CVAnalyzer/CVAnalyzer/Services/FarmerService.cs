using CVAnalyzer.Repositories;
using FarmerBazzar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CVAnalyzer.Services
{
    public class FarmerService
    {
        private FarmerRepository _farmerRepository;

        public FarmerService()
        {
            _farmerRepository = new FarmerRepository();
        }

        public Farmer GetFarmer(string mobileNumber)
        {
            return _farmerRepository.GetFarmer(mobileNumber);
        }
        public Farmer GetFarmer(int farmerId)
        {
            return _farmerRepository.GetFarmer(farmerId);
        }
    }
}