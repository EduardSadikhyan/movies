import { MainMenu } from "./components/MainMenu/MainMenu";
import { useTrendingNow } from "./hooks/useTrendingMovies";
import { TrendingNow } from "./components/TrendingNow/TrendingNow";
import { FeaturedVideo } from "./components/FeaturedVideo/FeaturedVideo";

import styles from "./App.module.css";

const App = () => {
  const { sortedMovies, selectedMovie, handleMovieSelect } = useTrendingNow();

  return (
    <div className={styles.layout}>
      <MainMenu />
      <div className={styles.mainContent}>
        <FeaturedVideo videoData={selectedMovie} />
        <TrendingNow movies={sortedMovies} onMovieSelect={handleMovieSelect} />
      </div>
    </div>
  );
};

export default App;
