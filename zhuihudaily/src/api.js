/*
* @Author: zhuxy
* @Date:   2017-01-15 21:28:18
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-15 21:47:19
*/

'use strict';

export default {
    getUrl(key){
        let rootPath = '/api/3/';

        if(false){
            rootPath = '';
        }

        return rootPath + {
            'list':'stories/latest',
            'detail':'news'
        }[key];
    }
}