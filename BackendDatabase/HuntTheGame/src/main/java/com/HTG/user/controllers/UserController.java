package com.HTG.user.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HTG.user.entity.models.Product;
import com.HTG.user.entity.models.User;
import com.HTG.user.entity.services.IProductService;
import com.HTG.user.entity.services.IUserService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	IUserService userService;
	
	@Autowired
	IProductService productService;
	
	
	@GetMapping("/User")
		public List<User> getAllUser(){
		System.out.println("oka");
		return userService.getAll();
		}
	
	@GetMapping("/Products")
	public List<Product> getAllProducts(){
	System.out.println("oka");
	return productService.getAll();
	}
}
