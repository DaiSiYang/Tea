import http from '@/utils/axios.js'
import {ElMessage} from "element-plus";


/**
 * 登入接口
 * @param username
 * @param password
 * @returns {Promise<axios.AxiosResponse<any>>}
 * @constructor
 */
export const Login = async (username , password)=>{
    try {
       return await http.post('/user/login', {
            username,
            password
        })
    }catch (err){
        console.log("用户名或密码错误",err)
        throw err;
    }
}
/**
 * 注册接口
 * @param username
 * @param password
 * @returns {Promise<axios.AxiosResponse<any>>}
 * @constructor
 */
export const Register = async (username , password)=>{
    try {
        return await http.post('/user/register', {
            username,
            password
        })
    }catch (err){

        ElMessage.error("用户名不能重复")
        throw err;
    }
}
