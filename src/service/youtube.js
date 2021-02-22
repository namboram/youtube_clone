import axios from 'axios';

class Youtube {
    constructor(key){
        this.youtube = axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params: {key : key},
        });
    }
}

async mostPopular (){

}

async search(query){

}

export default Youtube;