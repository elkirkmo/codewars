export class G964 {

		public static to_obj = (string) => {
    	const data = {};
      let str = string.split(/\r?\n/);
      for (let i of str){
      	let st = i.split(':');
        let town:string = st[0];
        let numbers = st[1].replace(/[^\d,.]/g,'').split(',');
        data[town] = numbers;
      }
      
      return data;
    }

    public static mean = (town, strng) => {
        let data = G964.to_obj(strng);
        let mean: number = 0;
        for (let k in data) {
        	if (k === town){
          	var cityData = data[k]
          	for (let num of cityData){
            	mean +=parseFloat(num);
            }
            return mean/cityData.length;
          }
        }
        return -1;
    }
    public static variance = (town, strng) => {
        let data = G964.to_obj(strng);
        let mean: number = G964.mean(town,strng);
        let sum: number = 0;
        for (let k in data) {
        	if (k === town){
          	var cityData = data[k]
          	for (let num of cityData){
            	sum +=Math.pow(parseFloat(num)-mean,2);
            }
            return sum/cityData.length;
          }
        }
        return -1;
    }
}