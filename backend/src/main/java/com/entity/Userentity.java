package com.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class Userentity {
	@GeneratedValue
	@Id
	int userid;
	
	@OneToMany(targetEntity = noteentity.class,cascade=CascadeType.ALL)
	@JoinColumn(name="unfk",referencedColumnName = "userid")
	List<noteentity> notes;

	
	public List<noteentity> getNotes() {
		return notes;
	}
	public void setNotes(List<noteentity> notes) {
		this.notes = notes;
	}

	String firstname;
	String lastname;
	String email;
	String password;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
}
