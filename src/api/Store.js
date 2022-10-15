import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/stores';

export const getStoresData = async () => {
    try{
     const d = await axios.get(url)
        return d.data;
    }catch(error){
        console.log(error)
    }
}

//async function funcRequest(url){
 //   let data;
 //   await fetch(url)
 //      .then((response) => {
 //        return response.json(); // data into json
 ///      })
   //    .then((dataResponse) => {
          // dataResponse.map(function(element){

                  //return<p>{element.address}</p>
               
          // })
        //data = //dataResponse.map(function(d){
        //})
         // the response Data
   //    }).
   //    catch(function(error) {
    //     console.log(error);
   //    });
   //}

//const url = 'https://logical-calf-89.hasura.app/api/rest/stores';
     
//funcRequest(url)