import instance from './http.js'


const base_url = process.env.BASE_URL

export  function getArticalList(currentPage){
	return instance.get(base_url + '/api/artical/',{params:{'page':currentPage}})
			      
}

export  function getArticalDetail(articalTitle){
	return instance.get(base_url + '/api/artical/'+ articalTitle)
			      
}