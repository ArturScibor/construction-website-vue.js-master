export default{
    loadGalleries(state, payload){
        state.gallery = []
        for(const item of payload){
            state.gallery.push(item)
        }
    },
    loadSingleGallery(state, payload){
        state.singleGallery = []
        for(const item of payload){
            state.singleGallery.push(item)
        }
    }
}