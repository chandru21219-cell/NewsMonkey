import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container" my-3>
                <h2>NewsMonket - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://www.aljazeera.com/wp-content/uploads/2026/05/AFP__20260510__B2F73CL__v1__HighRes__SpainHealthHantavirusIllnessTourism-1-1778491712.jpg?resize=1920%2C1440"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default News
