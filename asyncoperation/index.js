import React, { useEffect } from "react";



const AsyncOperation = () => {






    const myfunction = async () => {
        console.log('start')

        const myPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve('my promise resloved')
            }, 5000)
            // reject('my promise rejected')
        })
        await myPromise.then((res) => console.log(res)).catch((reject) => console.log(reject))
        console.log('end')
    }

    useEffect(() => {
        myfunction()
    }, [])

    return (
        <div>
            promise
        </div>
    )
}

export default AsyncOperation;