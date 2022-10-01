import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Cricketaddictor.com"
            },
            "author": "https://www.facebook.com/anshuroy23",
            "title": "India Women vs Sri Lanka Women Live Streaming Details- When And Where To Watch Sri Lanka Women vs India Women In Your Country? India Women Tour of Sri Lanka 2022, 2nd T20I - Cricket Addictor",
            "description": "India Women vs Sri Lanka Women Live Streaming Details- When And Where To Watch Sri Lanka Women vs India Women In Your Country? India Women Tour of Sri Lanka 2022, 2nd T20I",
            "url": "https://cricketaddictor.com/cricket-news/india-women-vs-sri-lanka-women-live-streaming-details-when-and-where-to-watch-sri-lanka-women-vs-india-women-in-your-country-india-women-tour-of-sri-lanka-2022-2nd-t20i/",
            "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/06/IND-W-vs-SL-W.jpg",
            "publishedAt": "2022-06-25T06:54:16Z",
            "content": "India Women’s Cricket Team are on a trip to Sri Lanka for a three-match T20I series followed by a three-match ODI series. The series started with the first T20I on June 23 in Dambulla. All the T20I m… [+2104 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "They couldn't accept the fact that they had lost to us, some of them came to our dressing room later with - Times of India",
            "description": "Cricket News: There are multiple stories and anecdotes that we all have heard and enjoyed over the years about India's incredible triumph at the 1983 World Cup in E",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/they-couldnt-accept-the-fact-that-they-had-lost-to-us-some-of-them-came-to-our-dressing-room-later-with-champagne-bottles-mohinder-amarnath-recalls-indias-win-vs-wi-in-1983-wc-final/articleshow/92450609.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-92450781,width-1070,height-580,imgsize-51834,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2022-06-25T06:29:00Z",
            "content": ""
        }
    ]

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let newsUrl = "https://newsapi.org/v2/everything?q=Food&sortBy=publishedAt&apiKey=9f47b6d5b2d644d9bfe72908c0585c9f";
        let data = await fetch(newsUrl);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>News App Website</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 " key={element.url}>
                <NewsItem  title = {element.title} description = {element.description} imgUrl = {element.urlToImage} url={element.url}/>
            </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
