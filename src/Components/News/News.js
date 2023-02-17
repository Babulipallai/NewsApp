import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";

export default class News extends Component {
  constructor(){
    super();
    // console.log("I am a constructor from news component");
    this.state = {
      articles : []
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bbeac59654f04fdaa4f9ea1f4a20cc94";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0, 71)}
              description={element.description.slice(0, 95)}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            ></NewsItem>
          </div>
          })}
        </div>
      </div>
    );
  }
}
