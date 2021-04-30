import React, { Component } from 'react'
import _ from 'lodash'

import { Link } from 'react-router-dom'
import Pagination from './common/pagination'
import ListGroup from './common/listGroup'
import MoviesTable from './moviesTable'
import SearchBox from './common/searchBox'

import { getMovies } from '../services/fakeMovieService.js'
import { getGenres } from '../services/fakeGenreService.js'
import { paginate } from './utils/pagination.js'

class Movies extends Component {
  state = {
    movies: [], // 电影列表
    genres: [], // 分类列表
    pageSize: 4, // 分页规格
    currentPage: 1, // 当前页
    sortColumn: { path: 'title', order: 'asc' },
    searchQuery: '', // 搜索字符串
    selectedGenre: null, // 当前分类
  }

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()]
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
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: '' })
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }

  handleSearch = (query) => {
    console.log('handle search')
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 })
  }

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state

    let filtered = allMovies
    if (searchQuery) {
      filtered = filtered.filter((m) => {
        // return m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        return m.title.toLowerCase().includes(searchQuery.toLowerCase())
      })
    } else {
      filtered =
        selectedGenre && selectedGenre._id
          ? filtered.filter((m) => m.genre._id === selectedGenre._id)
          : filtered
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize)
    return { totalCount: filtered.length, data: movies }
  }

  render() {
    const { length: count } = this.state.movies
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state

    const { totalCount, data: movies, searchQuery } = this.getPageData()

    if (count === 0) return <p>There are no movies in the database.</p>

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
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
          ></SearchBox>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          ></MoviesTable>
          <Pagination
            itemsCount={totalCount}
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
