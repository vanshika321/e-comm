  import React, { Component } from 'react';
  class IndexPage extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
  
    componentDidMount() {
      fetch('/') // or whatever URL you want
        .then((response) => response.json())
        .then((posts) => this.setState({
          posts: posts,
        })
    }
  
    render() { 
      return (  
         <div>
        <Posts posts={this.state.posts} />
      </div>);
    }
  }
   
