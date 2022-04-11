import React, {Component} from "react";
import axios from 'axios'
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

export default class Cinema extends Component{
    constructor() {
        super();
        this.state= {
            cinemaList: [],
            tempList: []
        }
        //请求数据 axios第三方库，小巧，专门请求数据
        // axios.get(url).then(res=>{}).catch()

        // axios.get(' https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1836875').then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })

        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1836875',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649489036511122583060481","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list',
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                tempList: res.data.data.cinemas
            })
            console.log(this.state.cinemaList)
        })

    }
    render() {
        let inputStyle = {
            height: '50px',
            width: '100%',
            lineHeight: '50px',
            fontSize: '30px'
        };
        let name = {
            display: "inline-block",
            wordBreak: 'break-word',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: '245px',
            overflow: 'hidden'
        };
        let addr = {
            fontSize: '14px',
            marginTop: '5px',
            color: 'lightgray',
            wordBreak: 'break-word',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: '245px',
            overflow: 'hidden'
        }
        return (
            <div>
                {/*cinema组件*/}
                <input style={inputStyle}  onInput={this.handleInput}/>
                    {
                        this.state.cinemaList.map(item =>
                            <div key={item.cinemaId} style={{margin: '20px'}}>
                                {<div style={name}>{item.name}</div>}
                                {<div style={{display: "inline-block", float: "right", color: 'red'}}>{Math.round(item.lowPrice/10)/10 + '起'}</div>}
                                {<div style={addr}>{item.address}</div>}
                            </div>
                        )
                    }
            </div>
        );
    }
    handleInput=(e)=>{
        //过滤出来带有关键字的数据
        let str = e.target.value;
        let newList = this.state.tempList.filter(item =>
            item.name.toUpperCase().includes(str) || item.address.toUpperCase().includes(str)
        );
        console.log(newList)
        this.setState({
            cinemaList: newList
        })
        console.log(this.state.cinemaList)
    }
}
