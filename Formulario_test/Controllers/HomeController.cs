using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Formulario_test.Models;
using System.Web;
using MVCFogeo2.Models;


namespace Formulario_test.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    
    public IActionResult resultado(Usuario u)
    {
        
        var formFiles = Request.Form.Files;
        var imageFile = formFiles[0];

        using (var stream = new MemoryStream())
        {
            // Map the image to byte
            imageFile.CopyTo(stream);
            byte[] imageBytes = stream.ToArray();

            u.foto = imageBytes;
            u.fotoContentType = imageFile.ContentType;

        }

        return View(u);
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

