using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Account.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Account.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class V1Controller : Controller
    {
        private DBContext Context { get; set; }

        private const string Environment = "Foundation";

        public V1Controller(DBContext context)
        {
            Context = context;
        }

        [HttpGet("test")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new List<string>() { "successful test" };
        }

        [HttpGet("apptoken")]
        public string GetAppToken(string appKey)
        {
            return "1";
        }
    }
}