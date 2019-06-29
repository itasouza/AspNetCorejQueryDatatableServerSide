using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVCDatatable.Data;
using MVCDatatable.Models;
using System.Linq.Dynamic;


// System.Linq.Dynamic.Core 
namespace MVCDatatable.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext database;

        public HomeController(ApplicationDbContext database)
        {
            this.database = database;
        }


        public IActionResult Index()
        {
            return View();
        }


        public IActionResult loaddata()
        {
            var dados = database.Produtos.Include(p => p.Categoria).Include(p => p.Fornecedor).Where(p => p.Id <= 35).ToList();
            return Json(new { data = dados });
        }

        [HttpPost]
        public IActionResult loaddataserver()
        {

            var draw = Request.Form["draw"].FirstOrDefault();
            var start = Request.Form["start"].FirstOrDefault();
            var length = Request.Form["length"].FirstOrDefault();

            var sortColumn = Request.Form["columns"] + Request.Form["order[0][column]"].FirstOrDefault() + "][name]".FirstOrDefault();
            var sortColumnDir = Request.Form["order[0][dir]"].FirstOrDefault();

            int pageSize = length != null ? Convert.ToInt32(length) : 0;
            int skip = start != null ? Convert.ToInt32(start) : 0;
            int totalRecords = 0;

            var v = ( database.Produtos.Include(p => p.Categoria).Include(p => p.Fornecedor).Where(p => p.Id <= 35));

            //SORT
            if (!(string.IsNullOrEmpty(sortColumn) && string.IsNullOrEmpty(sortColumnDir)))
            {
               // v = v.OrderBy(sortColumn + " " + sortColumnDir);
            }

            totalRecords = v.Count();
            var data = v.Skip(skip).Take(pageSize).ToList();
            return Json(new { draw = draw, recordsFiltered = totalRecords, recordsTotal = totalRecords, data = data });

        }


        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
