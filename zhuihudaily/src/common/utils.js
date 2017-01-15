/*
* @Author: zhuxy
* @Date:   2017-01-15 14:17:44
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-15 14:22:04
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
    }
}

export default utils
