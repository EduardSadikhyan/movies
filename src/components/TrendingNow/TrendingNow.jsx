import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./TrendingNow.module.css";

export const TrendingNow = ({ movies, onMovieSelect }) => {
  return (
    <div className={styles.trendingNowContainer}>
      <h2>Trending Now</h2>
      <Swiper slidesPerView={8} spaceBetween={10} grabCursor={true}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.Id} onClick={() => onMovieSelect(movie)}>
            <img
              src={`/src/assets/images/${movie.CoverImage}`}
              alt={movie.Title}
              className={styles.videoImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
