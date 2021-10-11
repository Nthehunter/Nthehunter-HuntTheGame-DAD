package com.HTG.user.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HTG.user.entity.dao.IProductDao;
import com.HTG.user.entity.models.Product;

@Service
public class ProductServiceImpl implements IProductService {
	@Autowired
	private IProductDao productDao;

	@Override
	public List<Product> getAll() {
		return (List<Product>) productDao.findAll();
	}
	
	
}
