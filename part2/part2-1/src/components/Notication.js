/*
 * @Author: lijiaxia
 * @Date: 2023-07-03 23:45:02
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/part2-1/src/components/Notication.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 23:46:01
 */

const Notification = ({message})=>{
    if(message === null){
        return null
    }

    return(
        <div className="error">
            {message}
        </div>
    )
}

export default Notification