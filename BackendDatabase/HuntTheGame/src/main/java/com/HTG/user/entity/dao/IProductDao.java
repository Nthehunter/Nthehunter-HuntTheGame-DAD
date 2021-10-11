package com.HTG.user.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.HTG.user.entity.models.Product;



public interface IProductDao extends CrudRepository<Product, Long>{

}
