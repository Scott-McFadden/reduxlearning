import React from "react";
import { connect } from "react-redux";
import  SquawkItem  from './SquawkItem';
import { getAllSquawks} from "../redux/actions";

class  SquawkList extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAllSquawks());
    }

    render() {
        const {error, loading, allSquawks, currentSquawk } = this.props;

        if (error) {
            return <div>We encountered an error of the sort you don't want.</div>;
        }
        if (loading)
        {
            return <div>We are loading up the browser one box at a time.</div>;
        }

        return (
        <div>
            <ul className='squawkList' >
                {allSquawks && allSquawks.length ? allSquawks.map((squawk) => {

                        return <SquawkItem key={squawk._id} item={squawk}/>;
                    } )
                    : "No Announcements"
                }

            </ul>
            <p> {currentSquawk ? currentSquawk.title : "none" } </p>
     </div>

        )



    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps->', state );
    return {
        allSquawks: state.squawks.squawkItems,
        loading: state.squawks.squawkLoading,
        error: state.squawks.squawError,
        currentSquawk: state.squawks.current_Squawk
    } ;

}
export default connect(mapStateToProps)(SquawkList);
