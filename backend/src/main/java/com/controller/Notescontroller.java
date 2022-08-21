package com.controller;

import java.util.ArrayList;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.noteentity;
import com.repository.noterepository;

@CrossOrigin
@RestController
@RequestMapping("/notes/allnotes")

public class Notescontroller {
	@Autowired
	com.repository.noterepository notesrepo;
	@PostMapping
	public com.entity.noteentity createNote(@RequestBody com.entity.noteentity note) {
		
		notesrepo.save(note);
		return note;
	}
	@GetMapping
	public List<noteentity> allNotes(){
		List<noteentity> allnotes=notesrepo.findAll();
		return allnotes;
	}
	@PutMapping
	public noteentity editnote(@RequestBody noteentity note) {
		notesrepo.save(note);
		return note;
	}
	@DeleteMapping("/{id}")
	public String deletenote(@PathVariable Integer id) {
		notesrepo.deleteById(id);
		return "note deleted";
	}
	@GetMapping("/{id}")
	public Optional<noteentity> getonenote(@PathVariable int id){
		return notesrepo.findById(id);
	}
}
