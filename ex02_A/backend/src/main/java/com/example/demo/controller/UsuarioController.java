package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class UsuarioController {
    @GetMapping("/usuario")
    public String texto(){
        return "hello world 2";
    }
}
