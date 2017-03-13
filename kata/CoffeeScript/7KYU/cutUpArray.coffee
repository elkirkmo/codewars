make_parts=(arr, chunk_size)->
	chunks = (arr.slice(index, index+chunk_size) for item, index in arr by chunk_size)
 return chunks