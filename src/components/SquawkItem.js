import React from "react";
import { connect } from "react-redux";
import { selectSquawk} from "../redux/actions";


class SquawkItem extends React.Component  {


    render(){
       return (
            <li onClick={ () => {

                this.props.dispatch(selectSquawk(this.props.item));
            } } >{this.props.item.title} </li>
        );
    }
}

export default connect(
    null
    )(SquawkItem);
