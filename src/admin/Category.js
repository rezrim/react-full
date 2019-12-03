import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './components/Title';

import ModalAdd from './components/ModalAdd'

const useStyles = () => ({
    buttonWrap: {
        display:'flex', 
        justifyContent:'space-around'
    },
})

class Category extends Component {
    
    constructor(props){
        super(props)
        this.state={
            users:[],
            open:false,
            edit:false,
            name:'',
            email:'',
            username:'',
            id:''
        }
    }

    preventDefault = (event) => {
        event.preventDefault();
    }

    handleModal = () => {
        this.setState({open:!this.state.open})
    }

    editModal = (id) => {
        
        this.setState({
            open:!this.state.open,
            edit:!this.state.edit,
            id
        })
        this.props.history.push(`?id=${id}`)

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( res => {
            this.setState({users:res})
        })
    }

    render() {
        const classes = useStyles();
        const {users, name, email, username} = this.state

        return (
            <React.Fragment>
                <Title>Data Users</Title>
                <Button variant="contained" color="primary" onClick={this.handleModal}>
                    Tambah Data
                </Button>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((val,i) => (
                            <TableRow key={i}>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.email}</TableCell>
                                <TableCell style={classes.buttonWrap}>
                                    <Button variant="contained" color="primary" onClick={()=>this.editModal(val.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {this.state.open &&
                    <ModalAdd open={this.state.open} close={this.handleModal} edit={this.state.edit} id={this.state.id}/>
                }
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(Category);