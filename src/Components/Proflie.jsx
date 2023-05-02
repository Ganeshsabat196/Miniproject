import React, { useEffect } from 'react'
import Header from '../Base/Header'
import axios from 'axios';
import { useState } from 'react';

export default function Proflie() {
    const [set1,setset]=useState([]);
    const [set2,setset2]=useState([]);
    const [set3,setset3]=useState([]);
    const url= "http://localhost:5000/data";
    useEffect(()=>{
    (async()=>{
        // let data = "60 sec game"
        const response =await axios.get("http://localhost:5000/data");
        const response2 =await axios.get("http://localhost:5000/data2");
        const response3 =await axios.get("http://localhost:5000/data3");
        setset(response.data)
        setset2(response2.data)
        setset3(response3.data)
    })();
    },[])
    

    return (
        <>
            <Header />
            <div className="container bootstrap snippets bootdey">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-3">
                            <img
                                alt=""
                                style={{ width: 600 }}
                                title=""
                                className="img-circle img-thumbnail isTooltip"
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                data-original-title="Usuario"
                            />
                            <ul title="Ratings" className="list-inline ratings text-center">
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-star" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-star" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-star" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-star" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-star" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <strong>60s Game</strong>
                            <br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <thead>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Speed
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Acurracy
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Time taken
                                            </strong>
                                        </td>
                                        {/* <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Status
                                            </strong>
                                        </td> */}
                                    </thead>
                                    <tbody>
                                        
                                        {/* {console.log(set1)} */}
                                            {
                                                set1.length!=0?
                                                set1.map((e)=>{
                                                    // console.log("here",e);
                                                    return<>
                                                    <tr>
                                                    <td className="text-primary">{e.wpm}wpm</td>
                                                <td className="text-primary">{e.accuracy}%</td>
                                                <td className="text-primary">{e.time} sec</td></tr></>
                                                })
                                            :<>Empty</>
                                            }
                                            
                                       

                                    
                                    </tbody>
                                </table>
                            </div>
                            <strong>3 min Game</strong>
                            <br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <thead>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Speed
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Acurracy
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Time taken
                                            </strong>
                                        </td>
                                        {/* <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Status
                                            </strong>
                                        </td> */}
                                    </thead>
                                    <tbody>
                                    {
                                                set2.length!=0?
                                                set2.map((e)=>{
                                                    console.log("here",e);
                                                    return<>
                                                    <tr>
                                                    <td className="text-primary">{e.wpm}wpm</td>
                                                <td className="text-primary">{e.accuracy}%</td>
                                                <td className="text-primary">{e.time} sec</td></tr></>
                                                })
                                                :<>Empty</>
                                            }
                                       
                                    
                                    </tbody>
                                </table>
                            </div>
                            <strong>5 min Game</strong>
                            <br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <thead>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Speed
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Acurracy
                                            </strong>
                                        </td>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Time taken
                                            </strong>
                                        </td>
                                        {/* <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary" />
                                                Status
                                            </strong>
                                        </td> */}
                                    </thead>
                                    <tbody>
                                    {
                                                set3.length!=0?
                                                set3.map((e)=>{
                                                    console.log("here",e);
                                                    return<>
                                                    <tr>
                                                <td className="text-primary">{e.wpm}wpm</td>
                                                <td className="text-primary">{e.accuracy}%</td>
                                                <td className="text-primary">{e.time} sec</td></tr></>
                                                })
                                                :<>Empty</>
                                            }
                                       
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
       
      
    )
}
