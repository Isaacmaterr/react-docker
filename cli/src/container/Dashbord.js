import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table-next'
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux'
import { usersThunck } from './../actions/UserAction'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from 'react-router-dom';
import Menu from './../componets/menu';
class Dashbord extends Component {


    linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Link class={''} to={'/edit/'+row.id}>Edit</Link>
        );
      };

      onFollowChanged(row) {
        console.log(row);
      }
      componentWillMount(){
        this.props.usersThunck();
        console.log(this.props.Users);
      }
    
    render() {
        const { Users } = this.props;
        const columns = [{
            dataField: 'id',
            text: 'Product ID'
        }, {
            dataField: 'name',
            text: 'Product Name',
            filter: textFilter()
        }, {
            dataField: 'email',
            text: 'Product Price'
        },
        {
            dataField: 'Ação',
            text: 'Ação',
            formatter:this.linkFollow
        }
    
    ];

        if (Users) {

            return (
                <>
                    <Menu></Menu>
                    <div className={['container']}>
                        <BootstrapTable keyField='id' data={Users} columns={columns} filter={filterFactory()} />
                    </div>
                </>
            );
        }
        return (<></>)
    }
}

const mapStateToProps = (store) => {
    return {
        Users: store.Users.users,
        UsersSave: store.UsersSave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usersThunck: () => dispatch(usersThunck()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashbord);