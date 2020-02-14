import React, { Component } from 'react';

export default class Paging extends Component {
    state = 
    { page: 1, 
      perPage: 20,
    }

    changePage(value) {
        this.setState({ page: this.state.page + value})
        const queryString = window.location.hash.slice(1);
        const pageParams = new URLSearchParams(queryString);
        pageParams.set('page', this.state.page + value);
        pageParams.set('perPage', this.state.perPage)
        const paramToSet = pageParams.toString();
        window.location.hash = paramToSet;
    }

    componentDidMount() {
        const pageParams = new URLSearchParams();
        pageParams.set('page', this.state.page);
        const paramToSet = pageParams.toString();
        window.location.hash = paramToSet;

        window.addEventListener('hashchange', () => {
            const queryString = window.location.hash.slice(1);
            const pageParams = new URLSearchParams(queryString);
            let pageToUse = this.state.page;
            const parsedPage = Number(pageParams.get('page'));
            
            if (isNaN(parsedPage)) {
              pageToUse = 1;
            } else {
              pageToUse = parsedPage;
            }       
            this.setState({ page: pageToUse });
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.changePage(-1)} disabled={this.state.page === 1}> LAST </button>
                <button onClick={() => this.changePage(1)} disabled={this.state.page === this.props.totalPage}> NEXT </button>
                <h5>Page {this.state.page}/{this.props.totalPage}</h5>
            </div>
        )
    }
}