package com.HTG.user.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.HTG.user.entity.models.User;


public interface IUserDao extends CrudRepository<User, Long>{

}
