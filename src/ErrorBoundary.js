import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
        }
    }

    componentDidCatch( error, erroInfo ) {
        console.log({ error, erroInfo });
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        if (this.state.error) {
            return <h3>Oops! Something went wrong...</h3>
        }
        return this.props.children;
    }
}