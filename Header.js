import React, { Component } from 'react'

export default class Header extends Component {
    // constructor(props){
    //     super(props);

    // }
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div className="nav">
                        <div>
                            <ul>
                                <li id="logo">EDYODA</li>
                                <li id="logo-story">Stories</li>
                            </ul>
                        </div>
                        <div id="dropdown">
                            <span id="dropdown-text">Explore Categories<i className="fas fa-chevron-circle-down dropdown-icon"></i></span>
                        </div>
                        </div>
                        <div className="nav">
                            <div id="site-info">EdYoda is free learning and knowledge sharing platform for techies
                            </div>
                            <button>Go To Main Website</button>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}