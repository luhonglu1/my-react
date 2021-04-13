import React, { Component } from 'react'
import Pagination from './common/pagination'
import ListGroup from './common/listGroup'
import MoviesTable from './moviesTable'
import { getMovies } from '../services/fakeMovieService.js'
import { getGenres } from '../services/fakeGenreService.js'
import { paginate } from './utils/pagination.js'

class Movies extends Component {
  state = {
    movies: [], // 电影列表
    genres: [], // 分类列表
    pageSize: 4, // 分页规格
    currentPage: 1, // 当前页
    // selectedGenre: {}, // 当前分类
  }

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = (movie) => {
    console.log(movie)
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({
      movies,
    })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  render() {
    const { length: count } = this.state.movies
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state

    if (count === 0) return <p>There are no movies in the database.</p>

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies

    const movies = paginate(filtered, currentPage, pageSize)

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          ></ListGroup>
        </div>

        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          ></MoviesTable>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    )
  }
}

export default Movies
