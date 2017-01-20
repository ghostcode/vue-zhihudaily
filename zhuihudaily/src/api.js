/*
* @Author: zhuxy
* @Date:   2017-01-15 21:28:18
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-01-19 22:54:01
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
            'detail':'news',
            'theme':'themes',
            'themelist':'theme',
            'before':'news/before'
        }[key];
    }
}
