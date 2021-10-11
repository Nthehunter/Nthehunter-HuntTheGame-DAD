package com.HTG.user.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")

public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long iduser;
	private String name;
	private String password;
	
	public User(long iduser, String name, String password) {
		super();
		this.iduser = iduser;
		this.name = name;
		this.password = password;
	}
	
	public User() {

	}
	
	public long getiduser() {
		return iduser;
	}
	public void setiduser(long iduser) {
		this.iduser = iduser;
	}
	public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}
	
	
}
