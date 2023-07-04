/*
 * @Author: lijiaxia
 * @Date: 2023-07-03 23:45:02
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/phonebook/src/components/Notication.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-04 00:09:16
 */

const Notification = ({messageType,message})=>{
    if(message === null){
        return null
    }

    return(
        <div  className={messageType === 'success' ? 'notication_success' : 'notication__error'}>
            {message}
        </div>
    )
}

export default Notification