import React from 'react'
import { useEffect , useState} from 'react';
import { Card } from "antd";
import Swal from "sweetalert2";
import TextField from '@mui/material/TextField';
import { deletedById, getAlldatas } from "../../api/request";
import Style from "./index.module.css"
const Data = () => {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    getAlldatas().then((data) => {
      setDatas(data);
      console.log(data);
    });
  }, []);
  function handleSearch(e) {
    setInput(e.target.value);
  }

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletedById(id);
        setDatas(datas.filter((x) => x._id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
   <>

      <h1 className={Style.h1s}>PRODUCT OVERVIEW</h1>
      <div className={Style.datali}>
        <ul>
            <li>All Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Watches</li>
        </ul>
      </div>
        <TextField
          onChange={(e) => handleSearch(e)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{margin:"20px 0", marginLeft:"120px"}}
        />
      
   
      <section className={Style.dataImage}>
        {datas &&
          datas.filter((item) => {
              if (input === "") {
                return datas;
              } else if (
                item.names
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((d) => (
              <Card
              className={Style.cardData}
                key={d._id}
                hoverable="true"
                style={{
                  width: 270,
                  height:400,
                 
                  
             
                  
                }}
              >
                <div  className={Style.dataimg}><img style={{width:"230px", height:"260px"}} src={d.imageURL} alt="funcimage" /></div>
                <div className={Style.endsss}>
                <h2>{d.names}</h2>
                <p>${d.price}</p>
                
                </div>
                <div className="error-outlined">
                  <button
                    onClick={() => handleDelete(d._id)}
                    className={Style.delete}
                  >
                    Delete
                  </button>
                  
                </div>
              </Card>
            ))}
      </section>
   
   </>
  )
}

export default Data