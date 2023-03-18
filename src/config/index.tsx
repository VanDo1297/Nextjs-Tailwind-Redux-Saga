const local = {
    key:"local"
}
const dev ={
    key:"dev"
}
const prod = {
    key:"prod"
}
const config = process.env.NODE_ENV === 'development' ? dev : process.env.NODE_ENV === "production" ? prod : local;

export default config;