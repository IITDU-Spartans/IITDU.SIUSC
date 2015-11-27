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
    public class AccountController : ApiController
    {
        private AccountService _accountService;
        private FarmerService _farmerService;
        public AccountController()
        {
            _accountService = new AccountService();
            _farmerService = new FarmerService();
        }

        [Route("account/signup")]
        [HttpPost]
        public IHttpActionResult Signup(RegisterReqViewModel registerReqViewModel)
        {
            if (registerReqViewModel.Password != registerReqViewModel.ConfirmPassword)
                return BadRequest("Password mismatched");

            var farmer = new Farmer
                             {
                                 Address = registerReqViewModel.Address,
                                 FullName = registerReqViewModel.FullName,
                                 MobileNumber = registerReqViewModel.MobileNumber,
                                 Password = registerReqViewModel.Password,
                                 PhotoUrl = registerReqViewModel.PhotoUrl
                             };
            if (!_accountService.Signup(farmer))
            {
                return BadRequest("User exists");
            }

            var registerResViewModel = new RegisterResViewModel
                                           {
                                               FarmerId = farmer.FarmerId,
                                               TokenValue = _accountService.Signin(farmer)
                                           };
            return Ok(registerResViewModel);
        }

        [Route("account/signin")]
        [HttpPost]
        public IHttpActionResult Signin(LoginReqViewModel loginReqViewModel)
        {
            var farmer = new Farmer
                             {
                                 MobileNumber = loginReqViewModel.MobileNumber,
                                 Password = loginReqViewModel.Password
                             };
            var tokenValue = _accountService.Signin(farmer);

            if (tokenValue == null)
            {
                return BadRequest("Wrong username or password");

            }

            var loginResViewModel = new LoginResViewModel
                                                      {
                                                          FarmerId =
                                                              _farmerService.GetFarmer(loginReqViewModel.MobileNumber).FarmerId,
                                                          TokenValue = tokenValue

                                                      };
            return Ok(loginResViewModel);
        }

        [Route("account/signout")]
        [HttpPost]
        public IHttpActionResult Signout(FarmerIdReqViewModel farmerIdReqViewModel)
        {
            var farmer = new Farmer
                             {
                                 FarmerId = farmerIdReqViewModel.FarmerId
                             };
            if (_accountService.Signout(farmer))
            {
                return Ok("Signout");
            }
            return BadRequest("Cannot signout");
        }

        [Route("account/edit")]
        [HttpPost]
        public IHttpActionResult EditAccount(RegisterUpdateReqViewModel registerUpdateReqViewModel)
        {
            var farmer = new Farmer
            {
                FarmerId = registerUpdateReqViewModel.FarmerId,
                Address = registerUpdateReqViewModel.Address,
                FullName = registerUpdateReqViewModel.FullName,
                MobileNumber = registerUpdateReqViewModel.MobileNumber,
                Password = registerUpdateReqViewModel.Password,
                PhotoUrl = registerUpdateReqViewModel.PhotoUrl
            };

            if (_accountService.UpdateAccount(farmer))
            {
                return Ok("updated");
            }
            return BadRequest("Can't update");
        }


    }
}