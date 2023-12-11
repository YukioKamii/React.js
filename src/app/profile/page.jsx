"use client"

//composant de classe
import * as React from "react";

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {userName: "Yoann"};
    }

    componentDidMount(){
        console.log("Bienvenue, la page a chargée")
    }

    componentDidUpdate(){
        console.log("Vous avez fait une modification")
    }

    componentWillUnmount(){
        console.log("la page va décharger")
    }

    render(){
        return (
            <div>
                <h1>Profil</h1>
                <p>Profil de {this.state.userName}</p>
                <button onClick={() => this.setState({userName: "Tim"})}>Changer de nom</button>
            </div>
        );
    }
}

export default Profile;