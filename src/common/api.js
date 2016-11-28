import m_contacts from '../mocks/contact';
import m_message from '../mocks/message';

export default {
    getContact () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m_contacts);
            }, 500);
        }); 
    },

    getUserInfo () {
        return wx.getUserInfo();
    },


    getMessageList () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m_message);
            }, 500);
        }); 
    }


}