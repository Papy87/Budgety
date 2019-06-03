import React, { Component } from 'react';
import fetchPeople from '../service/fetchPeople'
import { Link } from 'react-router-dom'

class Peoples extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peopleArr: [],
            listOfPeople: [],
        }
    }

    componentDidMount() {

        this.getPeople();
    }

    getPeople = () => {
        fetchPeople()
            .then((people) => {
                this.setState({
                    peopleArr: people,
                    listOfPeople: people
                }
                )
                // console.log(people);
            })
    }

    searchInput = (event) => {
        this.setState({
            peopleArr: this.state.listOfPeople.filter((el) => {
                return el.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
        })
    }

    renderPeopleList = () => {
        // if (this.state.peopleArr.name == '') {
        //     return (
        //         <>
        //             <h3>No matching</h3>
        //         </>
        //     )
        // }
        if (!this.state.peopleArr.length) {
            return (
                <>
                    <h3>Loading people...</h3>
                </>
            )
        }

        else {
            return (
                <ul className="people">
                    {this.state.peopleArr.map(el => {
                        return (
                            <li key={el.id} className="peopleItem">
                                <div className="card mb-3" >
                                    <Link to={`/singleprofile/${el.id}`}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={el.avatar} className="card-img" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="card-title">{el.name}</h4>
                                                    <span className="card-text"><b>Job: </b>{el.about.job}</span>
                                                    <p className="card-text"><b>About: </b>{el.about.bio}</p>
                                                    <p className="card-text"><small className="text-muted">Last post at: {el.lastPost}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="peoples">
                <form className="form-inline md-form form-sm active-cyan active-cyan-2 mt-2">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input onChange={this.searchInput} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                </form>
                {
                    this.renderPeopleList()
                }
            </div>

        )
    }
}


export default Peoples