import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const [logindata, setLoginData] = useState([]);

    
    const history = useNavigate();

    const [show, setShow] = useState(false);

    const todaydate = new Date().toISOString.slice(0, 10);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birtday = () => {

        const getuser = localStorage.getItem("user_login");

        if(getuser && getuser.length){
            const user = JSON.parse(getuser)
            setLoginData(user);

            const userbirth = logindata.map((el, k)=>{
return el.date === todaydate
            });

            if(userbirth){
                setTimeout(()=>{
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }

    }

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history('/');
    }

    useEffect(() => {
        Birtday();
    }, [])
  return (
    <>
    
      {
        logindata.length === 0 ? "error" :
            <>
                <h1>detials page</h1>
                <h1>{logindata[0].name}</h1>
            <Button onClick={userlogout}>LogOut</Button>

        {
            logindata[0].date === todaydate ? 
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>:""
        }   
             
            </>
    }
    </>
  )
}

export default Details