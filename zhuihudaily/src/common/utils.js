/*
* @Author: zhuxy
* @Date:   2017-01-15 14:17:44
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-19 23:09:43
*/

'use strict';
import axios from 'axios';

let utils = {
    http:{
        ajax(){

        },
        get(url,params){
            if(params){
                return axios.get(url,{
                    params:params
                })
            }
            return axios.get(url)
        }
    },
    appendZero(param){
        if(param == undefined){
            return '01';
        }

        if(param < 10){
            return '0' + param;
        }
        return param;
    },
    getYYMMDD(date){
        let YY = date.getFullYear(),
            MM = this.appendZero(date.getMonth() + 1) ,
            DD = this.appendZero(date.getDate());

        return `${YY}${MM}${DD}`;
    }
}

export default utils
