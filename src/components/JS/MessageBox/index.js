import Vue from 'vue';
import MessageBox from './MessageBox';
export const messageBox = function(){
    return function(ops){
        let defaultVal = {
            title : '标题',
            content : 'this is a content',
            handleCancel : null,
            handleOk : null,
            showHide:false
        };
        let MB = Vue.extend(MessageBox);
        if(ops){
            for(let i in ops){
                defaultVal[i] = ops[i]
            }
        }
        // 创建新的vuedom对象
        let vm = new MB({
            el : document.createElement('div'),
            data : {
                title : defaultVal.title,
                content : defaultVal.content,
                showHide : defaultVal.showHide
            },
            methods:{
                // 取消按钮
                handleCancel(){
                    defaultVal.handleCancel && defaultVal.handleCancel.call(this);
                    document.body.removeChild( vm.$el );
                },
                // 点击确定按钮
                handleOk(){
                    defaultVal.handleOk && defaultVal.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }  
            }
        })
        // 将新创的dom插入body内
        document.body.appendChild( vm.$el );
    }
}();