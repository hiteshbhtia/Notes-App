package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entity.Userentity;

@Repository
public interface Userrepository extends CrudRepository<Userentity, Integer>{
	List<Userentity> findAll();
	@Query(value = "select * from users where email =:email and password=:password",nativeQuery = true)

	Userentity findUserByemailandpassword(String email,String password);

}
