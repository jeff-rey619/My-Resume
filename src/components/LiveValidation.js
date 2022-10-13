import { useState,useEffect } from "react";
import { Form, Button, Input , message ,Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "./URL";
import axios, { Axios } from "axios";

const Livevalidation = () => {
    
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");
    const [errmessage, setErrMessage] = useState("");
    const [modalmessage, setModalMessage] = useState("");
    const [posts, setPosts] = useState([]);
    const [resStatus, setResStatus] = useState("");   //  wether true or false
    const [resData, setResData] = useState("");   //  to check the values
    const [inputicon, setInputicon] = useState("success");
    const [isModalVisible, setIsModalVisible] = useState(false);
    
  


  const dataArr=["jeff" , "sarath" ]

  //------------- modal fuctions ---------
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const ModalType =()=>{
   if(errmessage==="400"){
    console.log("modal type error is 400 ");
    setModalMessage("400 error   user id Already Exists")
    showModal()

   }
   else if (errmessage==="500"){
    console.log("modal type error is 500 ")
    setModalMessage("500 error  user id Already Exists")
    showModal()
   }
   else{
     console.log("modal type error")
  }

  }

 //------------- modal fuctions ---------


  const triggerChange = (e) => {
    
     setId(id);
     setName(name);

    // if (posts.id.includes(name)) {
    //  console.log("success")
    // }
    // else{
    //  console.log("not")
    // }
handleget();
   };
   
  useEffect(() => {

//    from emp master
triggerChange();



    // const loadPost = async () => {

    //     // Till the data is fetch using API 
    //     // the Loading page will show.
    //     // setLoading(true);

    //     // Await make wait until that 
    //     // promise settles and return its result
    //     const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts/");

    //     // After fetching data stored it in posts state.
    //     setPosts(response.data);

    //     console.log(posts)

    //     // Closed the loading page
    //     // setLoading(false);
    // }

    // // Call the function
    // loadPost();



    // axios
    // .post('http://127.0.0.1:6000/users', 'your-data', 'your-headers')
    // .then((data) => console.log(data))


    
//   let handleSubmit = async (e,id,name) => {
//      e.preventDefault();
//      setId(e.target.value);

//     try {
//       let res = await fetch("http://127.0.0.1:6000/users", {
        
//         method: "POST",
//         body: JSON.stringify({
//             userId:id,
//             username:name

          
//         }), 
//       });
//       let resJson = await res.json();
//       console.log(resJson)
//       if (resJson=="True") {
        
       
//         alert("user already exists")
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   handleSubmit();

// const postData =(res) => {
//     res.preventDefault();
//     axios.post('http://127.0.0.1:6000/users', {
       
//     }).then(res=> console.log(res)) .catch(err => console.log(err))
//   }


checkData();

}, []);

  
// -----------------function to get and check  1---------------------------

const checkData =(userId) =>{
    console.log("user id on type event/ ",userId, ) ;  
    axios.post(`${baseUrl}/users/checkUserId`,{
        userId,
    },
    //{timeout: 10000},
    {
        Headers : "application/json"
    })
      .then(response =>  {
        console.log(response.data);
        if (response.data === true) {
            setInputicon("error")
        }
        else{
          setInputicon("success")
        }
        setResData(response.data)
      })
      
      .catch((err) => {
        
        console.log('errorrr 1', err);
     
     

        
    });

      
}
// -----------------function to get and check  1---------------------------


// ----------------function to post   2-------------------------------
const handleget = () => {
        
   
    axios.post("http://127.0.0.1:8000/users",
    {
        userId : id,
        userName : name
    })
        .then(response => {
            console.log(response.data);
            var responseStatus = response;
            setResStatus(responseStatus);
            if (responseStatus === 'true') {
               
                    message.error('This user already exists');
                  
              
            };
        }) 
        .catch((err) => {
            // console.log()
            console.log('errorrr  2',err.response.data.message);
            
            if(err.response.data.statusCode === 400){
              // console.log("jeff netwr  2")
              setErrMessage("400");
              ModalType()

              //  setIsModalVisible(true);
 
            }
            else if(err.response.data.statusCode === 500)
            {
              setErrMessage("500");
              ModalType()
            }
            
        });
    

}

// ----------------function to post   2-------------------------------

 
    
  return (
    <div>
    <div className='form'>

    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} content={"hjellooo"}>
       {modalmessage}
       
      </Modal>

      <Form 
      labelCol={{ span : 8}}
      wrapperCol={{ span : 24}}
      autoComplete='off'
      >
       <h1>Login</h1> 
       <Form.Item 
        name="user_id" 
        value={id}
        onChange={(field) => {
            setId(field.target.value);
            console.log(field.target.value);
            checkData(field.target.value);
            }
        }
        validateStatus={inputicon}

       
        hasFeedback
        >
            
          <Input 
            placeholder="ID " required/>
        </Form.Item>
        <Form.Item 
        name="username" 
        value={name}
        onChange={(e) => {setName(e.target.value);
           
        }}
        //validateStatus={responseStatus=== 'True'? "error" : "success"}
        // onChange={}
      

      
        hasFeedback
       
        >
            
          <Input 
            placeholder="Username" required/>
        </Form.Item>
       
        <Button
        onClick={() => {
            triggerChange()
      }} 
        type="primary" block htmlType='submit' className="login-form-button" >

         

            Log in
        </Button>

       
        <div className='signUp'>
        
         
          </div>
          
      </Form>
      </div>
      </div>
  )
}

export default Livevalidation