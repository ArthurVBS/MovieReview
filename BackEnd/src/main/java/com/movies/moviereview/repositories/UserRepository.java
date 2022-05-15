package com.movies.moviereview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movies.moviereview.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
