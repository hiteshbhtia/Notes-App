package com.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.entity.Loginbean;

public class Customrepo {
	@Autowired
	JdbcTemplate stmt;
	public boolean logincheck(Loginbean bean) {

		List<Loginbean> alllist= stmt.query("select * from users where email=?",new BeanPropertyRowMapper<Loginbean>(Loginbean.class), new Object[] {"hitesh@gmail.com"});
		if(alllist.size()==0) {
			return false;
		}
		return true;
		
	}

}
