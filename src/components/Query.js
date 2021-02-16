import React from 'react'

class Query extends React.Component {
    state = {location: ''};

    onChange = event => {
        this.setState({location: event.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.location);
    }
    render() {
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Enter a query</label>
                    <input type="text" value={this.state.location} onChange={this.onChange}
                    />
                </div>
            </form>
            
        </div>
    )
    }
}

export default Query
