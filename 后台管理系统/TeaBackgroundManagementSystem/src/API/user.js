import http from '@/utils/axios.js'


/**
 * 查询用户信息
 * @param username
 * @returns {Promise<axios.AxiosResponse<any>>}
 * @constructor
 */
export const GetUserId = async (username) => {
    return await http.post(`/user/getuserinfo`, {
        username
    })
}
/**
 * 查询用户信息
 * @param username
 * @param userid
 * @param createTime
 * @param updateTime
 * @returns {Promise<any>}
 */
export const getUserIfon = async (username, userid, createTime, updateTime) => {
    try {
        const response = await http.post('/user/queryuser', {
            id: userid,
            username,
            createTime,
            updateTime
        });
        return response.data; // 这里返回的是接口返回的数据
    } catch (error) {
        if (error.response) {
            // 如果请求已发送，且服务器返回了错误响应
            console.error('Response Error status:', error.response.status);
            console.error('Response Error data:', error.response.data);
        } else if (error.request) {
            // 请求已经发出，但没有收到响应
            console.error('No response received:', error.request);
        } else {
            // 其他错误，例如请求配置错误
            console.error('Error message:', error.message);
        }
        throw error; // 抛出错误，便于外部调用捕获
    }
}
/**
 * 删除用户
 * @param id 用户 ID
 * @returns {Promise<any>}
 */
export const deleteUser = async (id) => {
    try {
        const response = await http.delete(`/user/${id}`);
        return response.data; // 返回接口数据
    } catch (error) {

        throw error;
    }
}
/**
 * 错误处理函数
 * @param error 错误对象
 */
const handleError = (error) => {
    if (error.response) {
        // 如果请求已发送，且服务器返回了错误响应
        console.error('Response Error status:', error.response.status);
        console.error('Response Error data:', error.response.data);
    } else if (error.request) {
        // 请求已经发出，但没有收到响应
        console.error('No response received:', error.request);
    } else {
        // 其他错误，例如请求配置错误
        console.error('Error message:', error.message);
    }
}
/**
 * 重置用户 ID
 * 向后端发送 PUT 请求以重置用户 ID 并刷新数据库的主键顺序。
 *
 * @returns {Promise<any>} 返回后端响应的数据
 * @throws {Error} 如果请求失败，则抛出错误
 */
export const resetId = async () => {
    try {
        const response = await http.post(`/user/resetid`);
        if (response && response.status === 200) {
            return response.data; // 返回成功的数据
        } else {
            throw new Error(`请求失败，状态码：${response.status}`);
        }
    } catch (error) {
        console.error("重置用户 ID 时发生错误:", error); // 打印错误日志
        throw error; // 继续向上抛出错误
    }
};
/**
 * 分页查询用户
 * @param page
 * @param pageSize
 * @returns {Promise<any>}
 */
export const page = async (page, pageSize) => {
    try {
        const response = await http.get(`/user/page?page=${page}&pageSize=${pageSize}`);
        return response.data; // 返回接口数据
    } catch (error) {
        handleError(error);
        throw error; // 抛出错误，便于外部调用捕获
    }
}
/**
 * 修改用户
 * @param id
 * @param username
 * @param password
 * @param email
 * @param phone
 * @param bio
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const updateUser = async (id, username, password, email, phone, bio) => {
    try {
        return await http.put(`/user/updateuser`, {
            id,
            username,
            password,
            email,
            phone,
            bio
        });

    } catch (error) {
        handleError(error);
        throw error; // 抛出错误，便于外部调用捕获
    }
}
