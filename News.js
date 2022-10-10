import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {


  constructor(){
    super();
    this.state = {
      articles: [],
      page: 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a6c2410c911b4813a4329288a6475bd4&page=${this.state.page}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
    })
}

  async componentDidMount(){
    this.updateNews();
}

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
}

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  render() {
    return (
      <div className = "container my-3">
            <h1 className ="text-center"> TOP HEADLINES</h1>
            <div className = "row">
            {this.state.articles.map((element)=>{
                return <div className = "col-md-4" key = {element.url}>
                  <Newsitem title ={element.title} description = {element.description} ImageUrl = {element.urlToImage} newsUrl = {element.url}/>
                </div>
            })}
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
                  Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        </div>
    )
  }
}

export default News
