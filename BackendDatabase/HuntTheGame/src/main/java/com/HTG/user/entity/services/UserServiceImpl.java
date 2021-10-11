package com.HTG.user.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HTG.user.entity.dao.IUserDao;
import com.HTG.user.entity.models.User;

@Service
public class UserServiceImpl implements IUserService{
	@Autowired
	private IUserDao userDao;
	
	@Override
	public List<User>getAll() {
		
		return (List<User>) userDao.findAll();
	}
	
	
}
