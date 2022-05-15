package com.movies.moviereview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movies.moviereview.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
