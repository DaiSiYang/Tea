import http from '@/utils/axios.js'

/**
 * 获取热门文章
 * @returns {Promise<any>}
 */
export const getHot = async () => {
    try {
        const res = await http.get('/content/getHoy')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
/**
 * 删除热门文章
 * @param id
 * @returns {Promise<any>}
 */
export const deleteHot = async (id) => {
    try {
        const res = await http.delete(`/content/${id}`
        )
        return res.data
    } catch (e) {
        console.log(e)
    }
}
/**
 * 添加热门文章
 * @returns {Promise<any>}
 */
export const addHotList = async (data) => {
    const res = await http.post('/content/addHotList', data)
    return res.data
}
/**
 * 修改热门文章
 * @param data
 * @returns {Promise<any>}
 */
export const updateHot = async (data) => {
    const res = await http.put('/content/updateHot', data)
    return res.data
}
/**
 * 获取热门文章评论
 * @param id
 * @returns {Promise<any>}
 */
export const getComments = async (id) => {
    const res = await http.get(`/content/Comments/${id}`)
    return res.data
}
/**
 * 获取商品列表
 * @returns {Promise<any>}
 */
export const getRecommand = async () => {
    const res = await http.get(`/content/getRecommand`)
    return res.data
}
/**
 * 添加商品评论
 * @param date
 * @returns {Promise<any>}
 */
export const addComments = async (date) => {
    const res = await http.post(`/content/addComments`, date)
    return res.data
}
/**
 * 修改商品
 * @param date
 * @returns {Promise<any>}
 */
export const updateRecommand = async (date) => {
    const res = await http.put(`/content/updateRecommand`, date)
    return res.data
}
/**
 * 添加商品
 * @param id
 * @returns {Promise<any>}
 */
export const addRecommand = async (date) => {
    const res = await http.post(`/content/addRecommand`, date)
    return res.data
}
/**
 * 删除商品
 * @param id
 * @returns {Promise<any>}
 */
export const delRecommand = async (id) => {
    const res = await http.delete(`/content/delRecommand/${id}`)
    return res.data
}
