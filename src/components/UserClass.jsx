import React from "react";

class userClass extends React.Component{
      constructor(props){
          super(props);

          this.state = {
            userInfo:{
              name : "Dummy",
              location : "default",
            },
          };
      }

     async componentDidMount(){
       const data= await fetch(
        "https://api.github.com/users/akshaymarch7"
       );
       const json= await data.json();

       this.setState({
            userInfo: json,
     });
     console.log(json);
    }

    componentDidUpdate() { 
      console.log("Component Did Update");
    }
  
    componentWillUnmount() {    //when we go to some other page this is called
      console.log("Component Will Unmount");
    }
  

  render(){
    //destructuring state variables..
    const {name, location, avatar_url
    }= this.state.userInfo;

    return (
        <div className="user-card">
          <img src={avatar_url} alt="img" />
        <div>Name:{name}</div>
         <div>Location: {location}</div>
        <div>This is namaste React Series</div>
        </div> 
    )
  }
}


export default userClass;

/* ****************************************************************
 *
 * Refer to diagram in the given link(below)..
 *
 * ----- Mounting CYCLE -----
 *   1> Constructor (constructor updates the state with dummy data)
 *   2> Render (component is rendered with dummy data)
 *   3>    <HTML Dummy></HTML> -- Component has dummt data for few milliseconds
 *   4> Component Did Mount
 *         <API Call>
 *         <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *   1>    render(API data)
 *   2>   <HTML (component updated with new API data)>
 *   3> Component Did Update
 *   4> Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */