import React from 'react'
import {connect} from 'react-redux'
import {ChangeExp} from '../actions/ChangeExp'

class App extends React.Component {

    render () {
        return (
            <div>
                {<h1>{this.props.number}</h1>}
                <button onClick = {() => {
                    this.props.ChangeExp()
                }}> change me please
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    number : state.Experience.NbBackou7lib
})

const mapDispatchToProps =  {
    ChangeExp
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

// import React from "react";
// import {connect} from 'react-redux'
// import {ChangeExp } from '../actions/ChangeExp'

// class App extends React.Component {

    
//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     this.props.ChangeExp(100)
//                 }} >change experience to 100 </button>
//                 <h1> { this.props.experience} </h1>
//                 i am the app component
//             </div>
//         )
//     }
// }

// const mapDispatchToProps =  {
//     ChangeExp
// }

// const mapStateToProps = state =>  ({
//     experience : state.number
// }
// )
// export default connect(mapStateToProps, mapDispatchToProps)(App)

