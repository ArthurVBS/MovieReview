package com.movies.moviereview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movies.moviereview.entities.Score;
import com.movies.moviereview.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
