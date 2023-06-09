import React from "react"
import "./Portfolio.css"
import Card from "./Card"
// import Portfolio_data from "./Portfolio_data"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Portfolio = (props) => {
  // console.log(props.selectedCompanies)

  const [result, setResult] = useState([])
  const [result2, setResult2] = useState([])
  const [result3, setResult3] = useState([])
  const [result4, setResult4] = useState([])
  const [result5, setResult5] = useState([])
  const [result6, setResult6] = useState([])
  const [result7, setResult7] = useState([])
  const [result8, setResult8] = useState([])
  const [result9, setResult9] = useState([])
  const [result10, setResult10] = useState([])
  const [result11, setResult11] = useState([])

  //useeffect syntax?
  const submitChannel = async () => {
    let allFalse = true;

    for (let i = 0; i < props.selectedCompanies.length; i++) {
      if (props.selectedCompanies[i][1] !== false) {
        allFalse = false;
        break;
      }
    }

    if (allFalse) {
      for (let i = 0; i < props.selectedCompanies.length; i++) {
        props.selectedCompanies[i][1] = true;
      }
    }
    // const ProductInput=document.querySelector('.channel-input');x
    console.log(props.selectedCompanies);
    const product=props.product
    if (props.selectedCompanies[0][1]) {
      
      const res = await fetch('http://localhost:3000/creators', {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setResult(data.Data1.list1)
    }
    if (props.selectedCompanies[1][1]) {

    const res2 = await fetch('http://localhost:3000/creator2', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data2 = await res2.json();
    setResult2(data2.Data2.list2)
  }
    if (props.selectedCompanies[2][1]) {

    const res3 = await fetch('http://localhost:3000/creator3', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data3 = await res3.json();
    setResult3(data3.Data3.list3)
  }
    if (props.selectedCompanies[3][1]) {

    const res4 = await fetch('http://localhost:3000/creator4', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data4 = await res4.json();
    setResult4(data4.Data4.list4)
  }
    if (props.selectedCompanies[4][1]) {
    const res5 = await fetch('http://localhost:3000/creator5', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data5 = await res5.json();
    setResult5(data5.Data5.list5)
  }
    if (props.selectedCompanies[5][1]) {
    const res6 = await fetch('http://localhost:3000/creator6', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data6 = await res6.json();
    setResult6(data6.Data6.list6)
  }
    if (props.selectedCompanies[6][1]) {
    const res7 = await fetch('http://localhost:3000/creator7', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data7 = await res7.json();
    setResult7(data7.Data7.list7)
  }
    if (props.selectedCompanies[7][1]) {
    const res8 = await fetch('http://localhost:3000/creator8', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data8 = await res8.json();
    setResult8(data8.Data8.list8)
  }
    if (props.selectedCompanies[8][1]) {
    const res9 = await fetch('http://localhost:3000/creator9', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data9 = await res9.json();
    setResult9(data9.Data9.list9)
  }
    if (props.selectedCompanies[9][1]) {
    const res10 = await fetch('http://localhost:3000/creator10', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data10 = await res10.json();
    setResult10(data10.Data10.list10)
  }
    if (props.selectedCompanies[10][1]) {
    const res11 = await fetch('http://localhost:3000/creator11', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data11 = await res11.json();
    setResult11(data11.Data11.list11)
  }
    // return data;

  }
  useEffect(() => {
    submitChannel();
  }, [])
// console.log(props.selectedCompanies)
  const navigate = useNavigate();     //Navigate hook
  const handleSearch = () => {
    const productInput = document.querySelector('.channel-input');
    const product = productInput.value;
    // console.log(product)

    // const selectedCompanies = Object.entries(props.selectedCompanies)
    //   .map(([company, isSelected]) => [company, isSelected]);
    navigate("/allproducts", {
      state: { product, companies: props.selectedCompanies },
    });
    window.location.reload()
  }
  return (
    <>
      <div className="Againsearch">

        <div className=" d-flex justify-content-center mt-5 bar">
          <div className="input-field">
            <input
              placeholder="Search"
              className="form-control channel-input"
            />
            <button className="btn btn1" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>SEE OUR SITE POPULAR PRODUCTS</h4>
            <h1>Search results for {props.product}</h1>
          </div>
          {result.length>0 && <div className="website-title">
            Dentalstall
          </div>}
          <div className='content grid'>
            {result.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result2.length>0 && <div className="website-title">
            Pinkblue
          </div>}
            <div className='content grid'>
            {result2.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result3.length>0 && <div className="website-title">
            Libraltraders
          </div>}
          <div className='content grid'>
            {result3.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result4.length>0 && <div className="website-title">
            Medikabazaar
          </div>}
          <div className='content grid'>
            {result4.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result5.length>0 && <div className="website-title">
            Daantwale
          </div>}
          <div className='content grid'>
            {result5.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result6.length>0 && <div className="website-title">
            Dentalworld
          </div>}
          <div className='content grid'>
            {result6.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result7.length>0 && <div className="website-title">
            Amplemeds
          </div>}
          <div className='content grid'>
            {result7.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result8.length>0 && <div className="website-title">
            Mydentalstock
          </div>}
          <div className='content grid'>
            {result8.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result9.length>0 && <div className="website-title">
            Greenguava
          </div>}
          <div className='content grid'>
            {result9.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result10.length>0 && <div className="website-title">
            Thedentaldealer
          </div>}
          <div className='content grid'>
            {result10.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
            </div>
          {result11.length>0 && <div className="website-title">
            Dentaltix
          </div>}
          <div className='content grid'>
            {result11.map((value, index) => {
              return <Card key={index} image={value.image} category={value.name} totalLike={value.price} title={value.name} link={value.link} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
Portfolio.propTypes = {
  product: PropTypes.string,
  selectedCompanies: PropTypes.array,
}
export default Portfolio
