
// call api here

const getToken = () => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(()=>{
            resolve("This is my token");
        },300)
    });
}

export {getToken}