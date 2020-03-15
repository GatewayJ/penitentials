import instance from './http.js'


const base_url = process.env.BASE_URL

export  function getArticalList(){
	return instance.get(base_url + '/api/artical/')
			      
}

export  function getArticalDetail(articalTitle){
	return instance.get(base_url + '/api/artical/'+ articalTitle)
			      
}