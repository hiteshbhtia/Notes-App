package com.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entity.noteentity;
@Repository
public interface noterepository extends CrudRepository<com.entity.noteentity,Integer> {
	List<com.entity.noteentity> findAll();
	
}
