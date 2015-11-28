using System.Data.Entity;
using FarmerBazzar.Models;
using FarmerBazzar.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FarmerBazzar.Utility;

namespace CVAnalyzer.Repositories
{
    public class FarmerRepository
    {
        private AppContext _appContext;

        public FarmerRepository()
        {
            _appContext = new AppContext();
        }

        public int AddFarmer(Farmer farmer)
        {
            _appContext.Farmers.Add(farmer);
            _appContext.SaveChanges();
            return farmer.FarmerId;
        }

        public bool UpdateFarmer(Farmer farmer)
        {
            var oldFarmer = _appContext.Farmers.FirstOrDefault(f => f.FarmerId.Equals(farmer.FarmerId));//GetFarmer(farmer.MobileNumber);
            oldFarmer.FullName = farmer.FullName;
            oldFarmer.Address = farmer.Address;
            oldFarmer.PhotoUrl = farmer.PhotoUrl;
            oldFarmer.Password = Encryption.GetHash(farmer.Password);
            _appContext.Entry(oldFarmer).State = EntityState.Modified;
            return _appContext.SaveChanges() > 0;
        }

        public bool DeleteFarmer(Farmer farmer)
        {
            _appContext.Farmers.Remove(farmer);
            return _appContext.SaveChanges() > 0;
        }
        public bool DeleteFarmer(String mobileNumber)
        {
            var farmer = GetFarmer(mobileNumber);
            _appContext.Farmers.Remove(farmer);
            return _appContext.SaveChanges() > 0;
        }
        public Farmer GetFarmer(String mobileNumber)
        {
            return _appContext.Farmers.FirstOrDefault(f=>f.MobileNumber.Equals(mobileNumber));
        }

        public Farmer GetFarmer(int farmerId)
        {
            return _appContext.Farmers.FirstOrDefault(f => f.FarmerId.Equals(farmerId));
        }
    }
}