import React, {useState, useEffect} from 'react';
function List(props) {
    return (
        <div>
            {props.items.map((item, index) => (
                <div key={index} item={item} />
            ))}
        </div>
    );
}
class Form extends React.Component {
    constructor(props) {
        super(props);
       // this.state = {value: '', eligibility: ' '};
        const [eligibility, setEligibility] = useState([]);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    lookup() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: "{\n" +
                "  \"charges\": [{\n" +
                "    \"name\": \"Adultery\",\n" +
                "    \"type\": \"Attempt\",\n" +
                "    \"sentenceCompletionDate\": \"01/01/2010\"\n" +
                "  },{\n" +
                "    \"name\": \"Capital Murder\",\n" +
                "    \"type\": \"Attempt\",\n" +
                "    \"sentenceCompletionDate\": \"01/01/2020\"\n" +
                "  }\n" +
                "  ]\n" +
                "}"
        }
        // Simple GET request using fetch
        fetch('http://localhost:3001/eligibility',requestOptions)
            .then(response => response.json())

            .then(data => {
                console.log(data)
                this.setState({eligibility:data})
            });
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.lookup()
        alert('A name was submitted: ' + this.state.eligibility);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}
export default Form
