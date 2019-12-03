import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = () => ({
  paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      boxShadow: '3px 6px 7px -3px',
      padding: '20px',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)'
  },
})

class ModalAdd extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      username:'',
      deskripsi:''
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  simpanData = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method : 'POST',
      body : JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        username:this.state.username,
        deskripsi:this.state.deskripsi
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json() )
    .then(res => {
      this.props.close()
    })
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then(res => res.json())
        .then(res => this.setState({
          name:res.name,
          email:res.email,
          username:res.username,
        }))
  }

  render() {
    const classes = useStyles();
    console.log(this.props)
    console.log(this.state)
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.close}
      >
        <div style={classes.paper}>
          <h2 id="simple-modal-title">Add Data</h2>
          <form className={classes.form} onSubmit={this.simpanData}>
      
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="name"
              autoComplete="fullname"
              autoFocus
              onChange={this.changeHandler}
              value={this.state.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={this.changeHandler}
              value={this.state.username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.changeHandler}
              value={this.state.email}
            />
            <CKEditor
                editor={ ClassicEditor }
                data="Masukkan Deskripsi"
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    this.setState({deskripsi:data})
                } }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Simpan
            </Button>

          </form>
        </div>
      </Modal>
    );
  }
}

export default ModalAdd;