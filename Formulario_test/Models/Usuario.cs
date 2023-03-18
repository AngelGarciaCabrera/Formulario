namespace MVCFogeo2.Models
{
    public class Usuario
    {
        public string? cedula { get; set; }
        public string? Nombre { get; set; }
        public string? apellido { get; set; }
        public int? edad { get; set; }
        public string? telefono { get; set; }
        public string? email { get; set; }
        public string? genero { get; set; }
        public string? estado { get; set; }
        public string? hobbys { get; set; }
        public byte[] ? foto { get; set; }
        
        public  string? fotoContentType { get; set; }

    }
}
