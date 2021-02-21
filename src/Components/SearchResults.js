import React from 'react';
import Explore from './Explore';

function SearchResults(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  var arr = query.split(', ');
  const results = [];
  
  console.log(props.allPosts);

  const find = () => {
    // instead: giving arr to database, database returns matches, then we can put it in results
    
    for(let k = 0; k < arr.length; k++) { 
      for(let i = 0; i < props.allPosts.length; i++) {
        for(let j = 0; j < props.allPosts[i].tags.length; j++) {
          if(arr[k].toUpperCase() === props.allPosts[i].tags[j].toUpperCase()) {
            if(results.find(el => el.title === props.allPosts[i].title)) {
              break;
            }
            results.push(props.allPosts[i]);
          }
        }
      }
    }
    return results;
  }
  return (
    <div>
      <Explore inpArr={find()}/>
    </div>
  )
}

export default SearchResults;