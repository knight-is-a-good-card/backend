public class UsuarioController {
    @GetMapping("/usuarios")
    public String texto() {
        return "Ola mundo";
    }
}
