export default{
    LoginPanel(state, payload){
        state.tokens = {
            accessToken: payload.accesToken,
            refreshToken: payload.refreshToken
        }
    }
}