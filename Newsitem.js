import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,ImageUrl,newsUrl} = this.props;
    return (
      <div className = "my-3">
           <div className="card">
                <img src={!ImageUrl?"https://thumbs.dreamstime.com/b/flag-india-50606.jpg":ImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href = {newsUrl} target = "_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more..</a>
                </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
