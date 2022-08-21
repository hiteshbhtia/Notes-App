package com.controller;

import java.sql.Connection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.entity.Loginbean;
import com.entity.Userentity;
import com.repository.Customrepo;
import com.repository.Userrepository;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class Usercontroller {
	@Autowired
	Userrepository userrepo;
	@PostMapping
	public Userentity createUser(@RequestBody Userentity user) {
		userrepo.save(user);
		return user;
	}
	@PutMapping
	public Userentity updateUser(@RequestBody Userentity user) {
		userrepo.save(user);
		return user;
	}
	
	@GetMapping("/{id}")
	public Optional<Userentity> GetOneUser(@PathVariable  int  id) {
		return userrepo.findById(id);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginuser(@RequestBody Loginbean bean) {
		Userentity user=userrepo.findUserByemailandpassword(bean.getEmail(), bean.getPassword());
		if(user!=null)
		{
			return ResponseEntity.ok(user);	
		}
		else {
			return ResponseEntity.ok(bean);
		}
		
	}

	
	
	@GetMapping
	public List<Userentity> getAllUsers(){
		return userrepo.findAll();
	}
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		userrepo.deleteById(id);
		return "userdeleted";
	}
	
}
